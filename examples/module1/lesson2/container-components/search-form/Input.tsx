import type { InputData } from './types/Selector';

function Input({ label, data, setData }: InputData) {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </label>
  );
}

export default Input;
