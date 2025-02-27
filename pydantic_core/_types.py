from __future__ import annotations

import sys
from datetime import date, datetime, time
from typing import Any, Callable, Dict, List, Sequence, Union

if sys.version_info < (3, 11):
    from typing_extensions import NotRequired, Required
else:
    from typing import NotRequired

if sys.version_info < (3, 8):
    from typing_extensions import Literal, TypedDict
else:
    from typing import Literal, TypedDict


class AnySchema(TypedDict):
    type: Literal['any']


class BoolSchema(TypedDict):
    type: Literal['bool']
    strict: NotRequired[bool]


class ConfigSchema(TypedDict, total=False):
    strict: bool
    extra: Literal['allow', 'forbid', 'ignore']
    model_full: bool  # default: True
    allow_population_by_field_name: bool


class DictSchema(TypedDict, total=False):
    type: Required[Literal['dict']]
    keys: Schema  # default: AnySchema
    values: Schema  # default: AnySchema
    min_items: int
    max_items: int


class FloatSchema(TypedDict, total=False):
    type: Required[Literal['float']]
    multiple_of: float
    le: float
    ge: float
    lt: float
    gt: float
    strict: bool
    default: float


# TODO: function could be typed based on mode
class FunctionSchema(TypedDict):
    type: Literal['function']
    mode: Literal['before', 'after', 'plain', 'wrap']
    function: Callable[..., Any]
    schema: NotRequired[Schema]


class IntSchema(TypedDict, total=False):
    type: Required[Literal['int']]
    multiple_of: int
    le: int
    ge: int
    lt: int
    gt: int
    strict: bool


class ListSchema(TypedDict, total=False):
    type: Required[Literal['list']]
    items: Schema  # default: AnySchema
    min_items: int
    max_items: int


class LiteralSchema(TypedDict):
    type: Literal['literal']
    expected: Sequence[Any]


class ModelClassSchema(TypedDict):
    type: Literal['model-class']
    class_type: type
    model: ModelSchema


class ModelField(TypedDict, total=False):
    schema: Required[Schema]
    required: bool
    default: Any
    alias: str
    aliases: List[List[Union[str, int]]]


class ModelSchema(TypedDict):
    type: Literal['model']
    fields: Dict[str, ModelField]
    name: NotRequired[str]
    extra_validator: NotRequired[Schema]
    config: NotRequired[ConfigSchema]


class NoneSchema(TypedDict):
    type: Literal['none']


class NullableSchema(TypedDict):
    type: Literal['nullable']
    schema: Schema
    strict: NotRequired[bool]


class RecursiveReferenceSchema(TypedDict):
    type: Literal['recursive-ref']
    name: str


class RecursiveContainerSchema(TypedDict):
    type: Literal['recursive-container']
    name: str
    schema: Schema


class SetSchema(TypedDict, total=False):
    type: Required[Literal['set']]
    items: Schema
    min_items: int
    max_items: int
    strict: int


class FrozenSetSchema(TypedDict, total=False):
    type: Required[Literal['frozenset']]
    items: Schema
    min_items: int
    max_items: int
    strict: int


class StringSchema(TypedDict, total=False):
    type: Required[Literal['str']]
    pattern: str
    max_length: int
    min_length: int
    strip_whitespace: bool
    to_lower: bool
    to_upper: bool
    strict: bool


class UnionSchema(TypedDict):
    type: Literal['union']
    choices: List[Schema]
    strict: NotRequired[bool]
    default: NotRequired[Any]


class BytesSchema(TypedDict, total=False):
    type: Required[Literal['bytes']]
    max_length: int
    min_length: int
    strict: bool


class DateSchema(TypedDict, total=False):
    type: Required[Literal['date']]
    strict: bool
    le: date
    ge: date
    lt: date
    gt: date
    default: date


class TimeSchema(TypedDict, total=False):
    type: Required[Literal['time']]
    strict: bool
    le: time
    ge: time
    lt: time
    gt: time
    default: time


class DatetimeSchema(TypedDict, total=False):
    type: Required[Literal['datetime']]
    strict: bool
    le: datetime
    ge: datetime
    lt: datetime
    gt: datetime
    default: datetime


class TupleFixLenSchema(TypedDict, total=False):
    type: Required[Literal['tuple-fix-len']]
    items: List[Schema]
    strict: bool


class TupleVarLenSchema(TypedDict, total=False):
    type: Required[Literal['tuple-var-len']]
    items: Required[Schema]
    min_items: int
    max_items: int
    strict: bool


# pydantic allows types to be defined via a simple string instead of dict with just `type`, e.g.
# 'int' is equivalent to {'type': 'int'}
BareType = Literal[
    'any',
    'bool',
    'bytes',
    'dict',
    'float',
    'function',
    'int',
    'list',
    'model',
    'model-class',
    'none',
    'nullable',
    'recursive-container',
    'recursive-reference',
    'set',
    'str',
    # tuple-fix-len cannot be created without more typing information
    'tuple-var-len',
    'union',
]

Schema = Union[
    BareType,
    AnySchema,
    BoolSchema,
    BytesSchema,
    DictSchema,
    FloatSchema,
    FunctionSchema,
    IntSchema,
    ListSchema,
    LiteralSchema,
    ModelSchema,
    ModelClassSchema,
    NoneSchema,
    NullableSchema,
    RecursiveContainerSchema,
    RecursiveReferenceSchema,
    SetSchema,
    FrozenSetSchema,
    StringSchema,
    TupleFixLenSchema,
    TupleVarLenSchema,
    UnionSchema,
    DateSchema,
    TimeSchema,
    DatetimeSchema,
]
