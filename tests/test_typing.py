from datetime import date, datetime, time

from pydantic_core import Schema, SchemaError, SchemaValidator


class Foo:
    bar: str


def foo(bar: str) -> None:
    ...


def test_schema_typing() -> None:
    # this gets run by pyright, but we also check that it executes
    _: Schema = {
        'type': 'union',
        'choices': [
            'int',
            {'type': 'int', 'ge': 1},
            {'type': 'float', 'lt': 1.0},
            {'type': 'str', 'pattern': r'http:\/\/.*'},
            {'type': 'bool', 'strict': False},
            {'type': 'literal', 'expected': [1, '1']},
            {'type': 'any'},
            {'type': 'none'},
            {'type': 'bytes'},
            {'type': 'list', 'items': {'type': 'str'}, 'min_items': 3},
            {'type': 'set', 'items': {'type': 'str'}, 'max_items': 3},
            {'type': 'tuple-var-len', 'items': {'type': 'str'}, 'max_items': 3},
            {'type': 'tuple-fix-len', 'items': [{'type': 'str'}, {'type': 'int'}]},
            {'type': 'frozenset', 'items': {'type': 'str'}, 'max_items': 3},
            {'type': 'dict', 'keys': {'type': 'str'}, 'values': {'type': 'any'}},
            {
                'type': 'model-class',
                'class_type': Foo,
                'model': {'type': 'model', 'fields': {'bar': {'schema': {'type': 'str'}}}},
            },
            {
                'type': 'model',
                'fields': {
                    'a': {'schema': {'type': 'str'}},
                    'b': {'schema': {'type': 'str'}, 'alias': 'foobar'},
                    'c': {'schema': {'type': 'str'}, 'aliases': [['foobar', 0, 'bar'], ['foo']]},
                    'd': {'schema': {'type': 'str'}, 'default': 'spam'},
                },
            },
            {'type': 'function', 'mode': 'wrap', 'function': foo},
            {
                'type': 'recursive-container',
                'name': 'Branch',
                'schema': {
                    'type': 'model',
                    'fields': {
                        'name': {'schema': {'type': 'str'}},
                        'sub_branch': {
                            'schema': {
                                'type': 'union',
                                'choices': [{'type': 'none'}, {'type': 'recursive-ref', 'name': 'Branch'}],
                            },
                            'default': None,
                        },
                    },
                },
            },
            {'type': 'date', 'le': date.today()},
            {'type': 'time', 'lt': time(12, 13, 14)},
            {'type': 'datetime', 'ge': datetime.now()},
        ],
    }


def test_schema_typing_error() -> None:
    _: Schema = {'type': 'wrong'}  # type: ignore


def test_schema_validator() -> None:
    SchemaValidator('int')


def test_schema_validator_wrong() -> None:
    # use this instead of pytest.raises since pyright complains about input when pytest isn't installed
    try:
        SchemaValidator('bad')  # type: ignore
    except SchemaError:
        pass
    else:
        raise AssertionError('SchemaValidator did not raise SchemaError')
