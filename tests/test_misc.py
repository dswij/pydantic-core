import pytest

from pydantic_core._pydantic_core import SchemaError, SchemaValidator, ValidationError, __version__


@pytest.mark.parametrize('obj', [ValidationError, SchemaValidator, SchemaError])
def test_module(obj):
    assert obj.__module__ == 'pydantic_core._pydantic_core'


def test_version():
    assert isinstance(__version__, str)
    assert '.' in __version__


def test_schema_error():
    err = SchemaError('test')
    assert isinstance(err, Exception)
    assert str(err) == 'test'
    assert repr(err) == 'SchemaError("test")'


def test_validation_error():
    v = SchemaValidator('int')
    with pytest.raises(ValidationError) as exc_info:
        v.validate_python(1.5)

    assert exc_info.value.title == 'int'
    assert exc_info.value.error_count() == 1


def test_validation_error_multiple():
    class MyModel:
        # this is not required, but it avoids `__fields_set__` being included in `__dict__`
        __slots__ = '__dict__', '__fields_set__'
        field_a: str
        field_b: int

    v = SchemaValidator(
        {
            'type': 'model-class',
            'class_type': MyModel,
            'model': {
                'type': 'model',
                'fields': {'x': {'schema': {'type': 'float'}}, 'y': {'schema': {'type': 'int'}}},
            },
        }
    )
    with pytest.raises(ValidationError) as exc_info:
        v.validate_python({'x': 'x' * 60, 'y': 'y'})

    assert exc_info.value.title == 'MyModel'
    assert exc_info.value.error_count() == 2
    assert exc_info.value.errors() == [
        {
            'kind': 'float_parsing',
            'loc': ['x'],
            'message': 'Value must be a valid number, unable to parse string as an number',
            'input_value': 'x' * 60,
        },
        {
            'kind': 'int_parsing',
            'loc': ['y'],
            'message': 'Value must be a valid integer, unable to parse string as an integer',
            'input_value': 'y',
        },
    ]
    assert repr(exc_info.value) == (
        '2 validation errors for MyModel\n'
        'x\n'
        "  Value must be a valid number, unable to parse string as an number [kind=float_parsing, input_value='xxxxxxx"
        "xxxxxxxxxxxxxxxxx...xxxxxxxxxxxxxxxxxxxxxxx', input_type=str]\n"
        'y\n'
        "  Value must be a valid integer, unable to parse string as an integer [kind=int_parsing, input_value='y', "
        'input_type=str]'
    )
