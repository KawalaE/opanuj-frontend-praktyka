import validate from './validator';

const input = document.getElementById('input') as HTMLInputElement;
const validateBtn = document.getElementById(
  'validation-btn'
) as HTMLButtonElement;
const clearBtn = document.getElementById('cleanup-btn') as HTMLButtonElement;
const result = document.getElementById('result')!;

validateBtn.addEventListener(
  'click',
  () => (result.innerHTML = validate(input))
);

clearBtn.addEventListener('click', () => {
  input.value = '';
  result.innerHTML = '';
});
