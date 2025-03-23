import Calculate from './calculator';
import { DIVISION_BY_ZERO_ERROR } from './messages';

type Operations = 'subtract' | 'multiply' | 'add' | 'divide';

export default function calculate(a: string, b: string, method: Operations) {
  const aNum = Number(a.trim());
  const bNum = Number(b.trim());

  if (method === 'divide' && bNum === 0) {
    return DIVISION_BY_ZERO_ERROR;
  }
  return Calculate[method](aNum, bNum);
}
