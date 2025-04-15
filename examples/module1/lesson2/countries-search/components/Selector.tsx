const SelectorComponent = ({
  options,
  defaultOption,
  setOption,
  label,
}: any) => {
  const id = label.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      {' '}
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        defaultValue={defaultOption}
        onChange={(e) => setOption(e.target.value)}
      >
        {options.map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectorComponent;
