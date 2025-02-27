import re
from datetime import date, datetime, time
from decimal import Decimal

import pytest

from pydantic_core import SchemaError, SchemaValidator, ValidationError

from ..conftest import Err


@pytest.mark.parametrize(
    'input_value,expected',
    [
        pytest.param(time(12, 13, 14), time(12, 13, 14), id='time'),
        pytest.param(time(12, 13, 14, 123), time(12, 13, 14, 123), id='time-micro'),
        pytest.param('12:13:14', time(12, 13, 14), id='str'),
        pytest.param(b'12:13:14', time(12, 13, 14), id='bytes'),
        pytest.param((1,), Err('Value must be a valid time [kind=time_type'), id='tuple'),
        pytest.param(date(2022, 6, 8), Err('Value must be a valid time [kind=time_type'), id='date'),
        pytest.param(datetime(2022, 6, 8), Err('Value must be a valid time [kind=time_type'), id='datetime'),
        pytest.param(123, time(0, 2, 3), id='int'),
        pytest.param(Decimal('123'), time(0, 2, 3), id='decimal'),
        pytest.param(Decimal('123.123456'), time(0, 2, 3, 123456), id='decimal-6dig'),
        pytest.param(Decimal('123.1234562'), time(0, 2, 3, 123456), id='decimal-7dig-up'),
        pytest.param(Decimal('123.1234568'), time(0, 2, 3, 123457), id='decimal-7dig-down'),
    ],
)
def test_time(input_value, expected):
    v = SchemaValidator({'type': 'time'})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        output = v.validate_python(input_value)
        assert output == expected


@pytest.mark.parametrize(
    'input_value,expected',
    [
        pytest.param('12:13:14', time(12, 13, 14), id='str'),
        pytest.param('12:13:14.123', time(12, 13, 14, 123_000), id='str-micro'),
        pytest.param('12:13:14.123456', time(12, 13, 14, 123_456), id='str-micro-6dig'),
        pytest.param('12:13:14.123456', time(12, 13, 14, 123_456), id='str-micro-6dig'),
        pytest.param(
            '12:13:14.1234561',
            Err(
                'Value must be in a valid time format, '
                'second fraction value is more than 6 digits long [kind=time_parsing'
            ),
            id='str-micro-7dig',
        ),
        pytest.param(123, time(0, 2, 3), id='int'),
        pytest.param(123.4, time(0, 2, 3, 400_000), id='float'),
        pytest.param(123.0, time(0, 2, 3), id='float.0'),
        pytest.param(0, time(0), id='int-zero'),
        pytest.param(
            86400,
            Err('Value must be in a valid time format, numeric times may not exceed 86,399 seconds [kind=time_parsing'),
            id='too-high',
        ),
        pytest.param(-1, Err('Value must be in a valid time format, time in seconds must be positive'), id='negative'),
        pytest.param(2**32, Err('numeric times may not exceed 86,399 seconds'), id='too-high-2**32'),
        pytest.param(2**64, Err('numeric times may not exceed 86,399 seconds'), id='too-high-2**64'),
        pytest.param(2**100, Err('numeric times may not exceed 86,399 seconds'), id='too-high-2**100'),
        pytest.param(True, Err('Value must be a valid time [kind=time_type'), id='bool'),
    ],
)
def test_time_json(py_or_json, input_value, expected):
    v = py_or_json({'type': 'time'})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_test(input_value)
    else:
        output = v.validate_test(input_value)
        assert output == expected


@pytest.mark.parametrize(
    'input_value,expected',
    [
        (time(12, 13, 14, 15), time(12, 13, 14, 15)),
        ('12:13:14', Err('Value must be a valid time [kind=time_type')),
        (b'12:13:14', Err('Value must be a valid time [kind=time_type')),
        (1654646400, Err('Value must be a valid time [kind=time_type')),
        (True, Err('Value must be a valid time [kind=time_type')),
        (date(2022, 6, 8), Err('Value must be a valid time [kind=time_type')),
        (datetime(2022, 6, 8), Err('Value must be a valid time [kind=time_type')),
    ],
)
def test_time_strict(input_value, expected):
    v = SchemaValidator({'type': 'time', 'strict': True})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        output = v.validate_python(input_value)
        assert output == expected


@pytest.mark.parametrize(
    'input_value,expected',
    [
        ('"12:13:14"', time(12, 13, 14)),
        ('"foobar"', Err('Value must be in a valid time format, invalid character in hour [kind=time_parsing,')),
        ('123', Err('Value must be a valid time [kind=time_type')),
    ],
)
def test_time_strict_json(input_value, expected):
    v = SchemaValidator({'type': 'time', 'strict': True})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_json(input_value)
    else:
        output = v.validate_json(input_value)
        assert output == expected


@pytest.mark.parametrize(
    'kwargs,input_value,expected',
    [
        ({}, '12:13:14', time(12, 13, 14)),
        ({'le': time(1)}, '00:12', time(0, 12)),
        ({'le': time(1)}, '01:00', time(1, 0)),
        ({'le': time(1)}, '01:01', Err('Value must be less than or equal to 01:00:00')),
        ({'le': time(1)}, time(1), time(1, 0)),
        ({'le': time(1)}, time(1, 1), Err('Value must be less than or equal to 01:00:00')),
        ({'lt': time(1)}, '00:59', time(0, 59)),
        ({'lt': time(1)}, '01:00', Err('Value must be less than 01:00:00')),
        ({'ge': time(1)}, '01:00', time(1)),
        ({'ge': time(1)}, '00:59', Err('Value must be greater than or equal to 01:00:00')),
        ({'gt': time(12, 13, 14, 123_456)}, '12:13:14.123457', time(12, 13, 14, 123_457)),
        ({'gt': time(12, 13, 14, 123_456)}, '12:13:14.123456', Err('Value must be greater than 12:13:14.123456')),
    ],
)
def test_time_kwargs(kwargs, input_value, expected):
    v = SchemaValidator({'type': 'time', **kwargs})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        output = v.validate_python(input_value)
        assert output == expected


def test_invalid_constraint():
    with pytest.raises(SchemaError, match="'str' object cannot be converted to 'PyTime'"):
        SchemaValidator({'type': 'time', 'gt': '12:13:14'})


def test_dict_py():
    v = SchemaValidator({'type': 'dict', 'keys': 'time', 'values': 'int'})
    assert v.validate_python({time(12, 1, 1): 2, time(12, 1, 2): 4}) == {time(12, 1, 1): 2, time(12, 1, 2): 4}


def test_dict(py_or_json):
    v = py_or_json({'type': 'dict', 'keys': 'time', 'values': 'int'})
    assert v.validate_test({'12:01:01': 2, '12:01:02': 4}) == {time(12, 1, 1): 2, time(12, 1, 2): 4}


def test_union():
    v = SchemaValidator({'type': 'union', 'choices': ['str', 'time']})
    assert v.validate_python('12:01:02') == '12:01:02'
    assert v.validate_python(time(12, 1, 2)) == time(12, 1, 2)

    v = SchemaValidator({'type': 'union', 'choices': ['time', 'str']})
    assert v.validate_python('12:01:02') == '12:01:02'
    assert v.validate_python(time(12, 1, 2)) == time(12, 1, 2)
