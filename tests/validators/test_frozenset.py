import re

import pytest

from pydantic_core import SchemaValidator, ValidationError

from ..conftest import Err


@pytest.mark.parametrize(
    'input_value,expected',
    [([], frozenset()), ([1, 2, 3], {1, 2, 3}), ([1, 2, '3'], {1, 2, 3}), ([1, 2, 3, 2, 3], {1, 2, 3})],
)
def test_frozenset_ints_both(py_or_json, input_value, expected):
    v = py_or_json({'type': 'frozenset', 'items': {'type': 'int'}})
    output = v.validate_test(input_value)
    assert output == expected
    assert isinstance(output, frozenset)


@pytest.mark.parametrize(
    'input_value,expected',
    [
        ([1, 2.5, '3'], {1, 2.5, '3'}),
        ('foo', Err('Value must be a valid frozenset')),
        (1, Err('Value must be a valid frozenset')),
        (1.0, Err('Value must be a valid frozenset')),
        (False, Err('Value must be a valid frozenset')),
    ],
)
def test_frozenset_no_validators_both(py_or_json, input_value, expected):
    v = py_or_json({'type': 'frozenset'})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_test(input_value)
    else:
        output = v.validate_test(input_value)
        assert output == expected
        assert isinstance(output, frozenset)


@pytest.mark.parametrize(
    'input_value,expected',
    [
        ({1, 2, 3}, {1, 2, 3}),
        (frozenset(), frozenset()),
        ([1, 2, 3, 2, 3], {1, 2, 3}),
        ([], frozenset()),
        ((1, 2, 3, 2, 3), {1, 2, 3}),
        ((), frozenset()),
        (frozenset([1, 2, 3, 2, 3]), {1, 2, 3}),
        ({'abc'}, Err('0\n  Value must be a valid integer')),
        ({1, 2, 'wrong'}, Err('Value must be a valid integer')),
        ({1: 2}, Err('1 validation error for frozenset-int\n  Value must be a valid frozenset')),
        ('abc', Err('Value must be a valid frozenset')),
        # Technically correct, but does anyone actually need this? I think needs a new type in pyo3
        pytest.param({1: 10, 2: 20, 3: 30}.keys(), {1, 2, 3}, marks=pytest.mark.xfail(raises=ValidationError)),
    ],
)
def test_frozenset_ints_python(input_value, expected):
    v = SchemaValidator({'type': 'frozenset', 'items': {'type': 'int'}})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        output = v.validate_python(input_value)
        assert output == expected
        assert isinstance(output, frozenset)


@pytest.mark.parametrize('input_value,expected', [([1, 2.5, '3'], {1, 2.5, '3'}), ([(1, 2), (3, 4)], {(1, 2), (3, 4)})])
def test_frozenset_no_validators_python(input_value, expected):
    v = SchemaValidator({'type': 'frozenset'})
    output = v.validate_python(input_value)
    assert output == expected
    assert isinstance(output, frozenset)


def test_frozenset_multiple_errors():
    v = SchemaValidator({'type': 'frozenset', 'items': {'type': 'int'}})
    with pytest.raises(ValidationError) as exc_info:
        v.validate_python(['a', (1, 2), []])
    assert exc_info.value.errors() == [
        {
            'kind': 'int_parsing',
            'loc': [0],
            'message': 'Value must be a valid integer, unable to parse string as an integer',
            'input_value': 'a',
        },
        {'kind': 'int_type', 'loc': [1], 'message': 'Value must be a valid integer', 'input_value': (1, 2)},
        {'kind': 'int_type', 'loc': [2], 'message': 'Value must be a valid integer', 'input_value': []},
    ]


@pytest.mark.parametrize(
    'kwargs,input_value,expected',
    [
        ({'strict': True}, frozenset(), frozenset()),
        ({'strict': True}, frozenset([1, 2, 3]), {1, 2, 3}),
        ({'strict': True}, {1, 2, 3}, Err('Value must be a valid frozenset')),
        ({'strict': True}, [1, 2, 3, 2, 3], Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'strict': True}, [], Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'strict': True}, (), Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'strict': True}, (1, 2, 3), Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'strict': True}, {1, 2, 3}, Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'strict': True}, 'abc', Err('Value must be a valid frozenset [kind=frozen_set_type,')),
        ({'min_items': 3}, {1, 2, 3}, {1, 2, 3}),
        ({'min_items': 3}, {1, 2}, Err('FrozenSet must have at least 3 items [kind=too_short,')),
        ({'max_items': 3}, {1, 2, 3}, {1, 2, 3}),
        ({'max_items': 3}, {1, 2, 3, 4}, Err('FrozenSet must have at most 3 items [kind=too_long,')),
    ],
)
def test_frozenset_kwargs_python(kwargs, input_value, expected):
    v = SchemaValidator({'type': 'frozenset', **kwargs})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        output = v.validate_python(input_value)
        assert output == expected
        assert isinstance(output, frozenset)


@pytest.mark.parametrize('input_value,expected', [({1, 2, 3}, {1, 2, 3}), ([1, 2, 3], [1, 2, 3])])
def test_union_frozenset_list(input_value, expected):
    v = SchemaValidator({'type': 'union', 'choices': [{'type': 'frozenset'}, {'type': 'list'}]})
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)):
            v.validate_python(input_value)
    else:
        v.validate_python(input_value)


@pytest.mark.parametrize(
    'input_value,expected',
    [
        ({1, 2, 3}, {1, 2, 3}),
        ({'a', 'b', 'c'}, {'a', 'b', 'c'}),
        (
            [1, 'a'],
            Err(
                '2 validation errors for union',
                errors=[
                    {
                        'kind': 'int_type',
                        'loc': ['frozenset-strict-int', 1],
                        'message': 'Value must be a valid integer',
                        'input_value': 'a',
                    },
                    # second because validation on the string choice comes second
                    {
                        'kind': 'str_type',
                        'loc': ['frozenset-strict-str', 0],
                        'message': 'Value must be a valid string',
                        'input_value': 1,
                    },
                ],
            ),
        ),
    ],
)
def test_union_frozenset_int_frozenset_str(input_value, expected):
    v = SchemaValidator(
        {
            'type': 'union',
            'choices': [
                {'type': 'frozenset', 'items': {'type': 'int', 'strict': True}},
                {'type': 'frozenset', 'items': {'type': 'str', 'strict': True}},
            ],
        }
    )
    if isinstance(expected, Err):
        with pytest.raises(ValidationError, match=re.escape(expected.message)) as exc_info:
            v.validate_python(input_value)
        if expected.errors is not None:
            assert exc_info.value.errors() == expected.errors
    else:
        output = v.validate_python(input_value)
        assert output == expected
        assert isinstance(output, frozenset)


def test_frozenset_as_dict_keys(py_or_json):
    v = py_or_json({'type': 'dict', 'keys': {'type': 'frozenset'}, 'value': 'int'})
    with pytest.raises(ValidationError, match=re.escape('Value must be a valid frozenset')):
        v.validate_test({'foo': 'bar'})


def test_repr():
    v = SchemaValidator({'type': 'frozenset', 'strict': True, 'min_items': 42})
    assert repr(v) == (
        'SchemaValidator(name="frozenset-any", validator=FrozenSet(\n'
        '    FrozenSetValidator {\n'
        '        strict: true,\n'
        '        item_validator: Any(\n'
        '            AnyValidator,\n'
        '        ),\n'
        '        min_items: Some(\n'
        '            42,\n'
        '        ),\n'
        '        max_items: None,\n'
        '    },\n'
        '))'
    )
