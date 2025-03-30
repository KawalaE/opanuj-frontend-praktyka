import type { SelectorData } from './types/Selector';

function Selector({
  label,
  data,
  setData,
  defaultSelect,
  options,
}: SelectorData) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">{defaultSelect}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </label>
  );
}
export default Selector;
