const result = document.getElementById('result') as HTMLInputElement;
const input = document.getElementById('input') as HTMLInputElement;

function validate(min: number, max: number) {
  if (Validator.isValid(input.value, min, max)) {
    result.textContent = 'Valid';
    return;
  }
  result.textContent = 'Invalid';
}

function clearFields() {
  input.value = '';
  result.textContent = '';
}

class Validator {
  static isNumber(input: any) {
    const number = Number(input);
    if (!isNaN(number) && Number.isInteger(number)) {
      return number;
    }
    return false;
  }

  static isBetween(input: any, min: number, max: number) {
    const number = this.isNumber(input);
    if (number) {
      return number > min && number < max;
    }
    return number;
  }

  static isEven(input: any) {
    const number = this.isNumber(input);
    if (number) {
      return number % 2 === 0;
    }
    return number;
  }

  static isValid(input: any, min: number, max: number) {
    return this.isBetween(input, min, max) && this.isEven(input);
  }
}
