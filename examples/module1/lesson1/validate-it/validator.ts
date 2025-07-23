import { isEven, isInRange, isInteger } from './validators';

type ValidationMethods = ValidationEntity[];

interface ValidationEntity {
  method: (input: HTMLInputElement) => boolean;
  errorMsg: string;
}

const VALIDATION_METHODS: ValidationMethods = [
  {
    method: isInteger,
    errorMsg: 'Invalid - empty or non integer',
  },
  {
    method: isInRange,
    errorMsg: 'Invalid number',
  },
  {
    method: isEven,
    errorMsg: 'Invalid number',
  },
];

export default function validate(input: HTMLInputElement) {
  const result = VALIDATION_METHODS.find(
    (validationEntity) => validationEntity.method(input) !== true
  )?.errorMsg;
  return result ? result : 'Valid';
}
