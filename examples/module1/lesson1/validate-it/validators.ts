export function isInteger(input: HTMLInputElement): boolean {
  return input.value !== '' && Number.isInteger(Number(input.value));
}

export function isInRange(
  input: HTMLInputElement,
  min = 0,
  max = 100
): boolean {
  if (!isInteger(input)) return false;
  return Number(input.value) > min && Number(input.value) < max;
}

export function isEven(input: HTMLInputElement): boolean {
  if (!isInteger(input)) return false;
  return Number(input.value) % 2 === 0;
}
