import GenderSelector from './GenderSelector';
import SearchByName from './SearchByName';
import SortBySelector from './SortBySelector';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchByName name={name} setName={setName} />
      <GenderSelector gender={gender} setGender={setGender} />
      <SortBySelector sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
