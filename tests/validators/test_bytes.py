from pydantic_core import SchemaValidator

def test_bytes_constrained():
    v = SchemaValidator({'type': 'bytes', 'max_length': 5})
    assert v.validate_python(b'test') == b'test'

#     with pytest.raises(ValidationError, match='String must have at most 5 characters'):
#         v.validate_python('test long')
