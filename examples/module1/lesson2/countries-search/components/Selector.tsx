const SelectorComponent = ({
  strategies,
  currentStrategy,
  setStaretgy,
}: any) => {
  return (
    <select
      name="strategies"
      id="strategies"
      defaultValue={currentStrategy}
      onChange={(e) => setStaretgy(e.target.value)}
    >
      <option value={strategies.name}>name</option>
      <option value={strategies.currency}>currency</option>
      <option value={strategies.language}>language</option>
      <option value={strategies.capital}>capital</option>
    </select>
  );
};

export default SelectorComponent;
