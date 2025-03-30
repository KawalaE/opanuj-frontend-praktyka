import Input from './Input';
import Selector from './Selector';

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
  setGender,
  setSortOption,
}: SearchFormProps) {
  const sortByOptions = [
    { value: 'name', title: 'Name' },
    { value: 'created', title: 'Created Date' },
  ];

  const genderOptions = [
    { value: 'female', title: 'Female' },
    { value: 'male', title: 'Male' },
    { value: 'genderless', title: 'Genderless' },
    { value: 'unknown', title: 'Unknown' },
  ];

  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input label="Name" data={name} setData={setName} />
      <Selector
        label="Gender"
        data="gender"
        setData={setGender}
        defaultSelect="Any Gender"
        options={genderOptions}
      />
      <Selector
        label="Sort by"
        data="sortOption"
        setData={setSortOption}
        defaultSelect="Initial"
        options={sortByOptions}
      />
    </form>
  );
}

export default SearchForm;
