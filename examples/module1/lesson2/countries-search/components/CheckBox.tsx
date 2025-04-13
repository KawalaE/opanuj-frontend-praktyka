interface checkboxProps {
  sortByPopulation: boolean;
  setBySortByPopulation: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBoxComponent = ({
  sortByPopulation,
  setBySortByPopulation,
}: checkboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        checked={sortByPopulation}
        onChange={() => setBySortByPopulation(!sortByPopulation)}
      />
      <label htmlFor="scales" className="ml-2">
        Sort by population
      </label>
    </div>
  );
};

export default CheckBoxComponent;
