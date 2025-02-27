use pyo3::prelude::*;
use pyo3::types::{PyDict, PySet};

use crate::build_tools::{is_strict, SchemaDict};
use crate::errors::{as_internal, context, err_val_error, ErrorKind};
use crate::input::{GenericSequence, Input};

use super::any::AnyValidator;
use super::list::sequence_build_function;
use super::{build_validator, BuildContext, BuildValidator, CombinedValidator, Extra, ValResult, Validator};

#[derive(Debug, Clone)]
pub struct SetValidator {
    strict: bool,
    item_validator: Box<CombinedValidator>,
    min_items: Option<usize>,
    max_items: Option<usize>,
}

impl BuildValidator for SetValidator {
    const EXPECTED_TYPE: &'static str = "set";
    sequence_build_function!();
}

impl Validator for SetValidator {
    fn validate<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
    ) -> ValResult<'data, PyObject> {
        let set = match self.strict {
            true => input.strict_set()?,
            false => input.lax_set()?,
        };
        self._validation_logic(py, input, set, extra, slots)
    }

    fn validate_strict<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
    ) -> ValResult<'data, PyObject> {
        self._validation_logic(py, input, input.strict_set()?, extra, slots)
    }

    fn get_name(&self, py: Python) -> String {
        format!("{}-{}", Self::EXPECTED_TYPE, self.item_validator.get_name(py))
    }
}

impl SetValidator {
    fn _validation_logic<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        list: GenericSequence<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
    ) -> ValResult<'data, PyObject> {
        let length = list.generic_len();
        if let Some(min_length) = self.min_items {
            if length < min_length {
                return err_val_error!(
                    input_value = input.as_error_value(),
                    kind = ErrorKind::TooShort,
                    context = context!("type" => "Set", "min_length" => min_length)
                );
            }
        }
        if let Some(max_length) = self.max_items {
            if length > max_length {
                return err_val_error!(
                    input_value = input.as_error_value(),
                    kind = ErrorKind::TooLong,
                    context = context!("type" => "Set", "max_length" => max_length)
                );
            }
        }

        let output = list.validate_to_vec(py, length, &self.item_validator, extra, slots)?;
        Ok(PySet::new(py, &output).map_err(as_internal)?.into_py(py))
    }
}
