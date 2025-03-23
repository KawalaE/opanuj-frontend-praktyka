export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven: NumericValidationMethod = (value: number) => {
  return value % 2 === 0;
};

const isLessThan = (boundary: number): NumericValidationMethod => {
  return (input: number) => input < boundary;
};

const isGreaterThan = (boundary: number): NumericValidationMethod => {
  return (input: number) => input > boundary;
};

export const isValidInteger: StringValidationMethod = (value: string) => {
  return value.trim() !== '' && Number.isInteger(Number(value));
};

export const NUMBER_VALIDATORS: NumericValidationMethod[] = [
  isEven,
  isLessThan(100),
  isGreaterThan(0),
];
