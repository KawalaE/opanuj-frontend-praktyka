import { NUMBER_VALIDATORS } from './validation/methods';
import { validate } from './validation/validator';

function main() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const result = document.querySelector('#result')!;

  const validateBtn = document.getElementById('validation-btn');
  const clearBtn = document.getElementById('cleanup-btn');

  validateBtn?.addEventListener('click', () => {
    console.log('Invoke validation method');
    const validationMessage = validate(input?.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  clearBtn?.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
