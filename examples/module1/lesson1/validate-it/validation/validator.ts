import {
  MESSAGE_EMPTY_NON_INT,
  MESSAGE_INVALID_INPUT,
  MESSAGE_VALID_INPUT,
} from './messages';
import { isValidInteger, type NumericValidationMethod } from './methods';

export function validate(input: string, validators: NumericValidationMethod[]) {
  if (!isValidInteger(input)) {
    return MESSAGE_EMPTY_NON_INT;
  }

  const isValidRangeInteger = validators.every((validateFn) => {
    return validateFn(Number(input));
  });

  if (!isValidRangeInteger) {
    return MESSAGE_INVALID_INPUT;
  }

  return MESSAGE_VALID_INPUT;
}
