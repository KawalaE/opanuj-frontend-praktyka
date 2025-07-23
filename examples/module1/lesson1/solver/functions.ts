interface MathOperation {
  sign: '-' | '+' | '/' | '*';
  method: (a: number, b: number) => number | string;
}

export function add(a: number, b: number) {
  return a + b;
}
export function subtract(a: number, b: number) {
  return a - b;
}
export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}

export const operations: MathOperation[] = [
  {
    sign: '-',
    method: subtract,
  },
  {
    sign: '+',
    method: add,
  },
  {
    sign: '*',
    method: multiply,
  },
  {
    sign: '/',
    method: divide,
  },
];
