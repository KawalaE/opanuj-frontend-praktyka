import { useState } from 'react';
import CountriesList from '../components/CountriesList';
import InputComponent from '../components/Input';
import PaginationComponent from '../components/Pagination';
import SelectorComponent from '../components/Selector';
import TitleComponent from '../components/Title';
import type { SortKey } from '../hooks/sortFuntions';
import { useCountries } from '../hooks/useCountries';

export type Strategies = 'name' | 'currency' | 'language' | 'capital';

const CountriesSearchContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [filterBy, setFilterBy] = useState('name');
  const [sortBy, setSortBy] = useState<SortKey>('default');

  const [paginationIndex, setPaginationIndex] = useState(1);
  const phaceholderName = filterBy === 'lang' ? 'language' : filterBy;
  const pageSize = 10;

  const selectionStartegies: string[] = [
    'name',
    'language',
    'capital',
    'currency',
  ];

  const sortByStrategies = ['default', 'alphabetical', 'population'];

  const { countries, loading, error } = useCountries({
    filterBy,
    sortBy,
    inputValue,
  });

  const paginatedCountries = countries.slice(
    (paginationIndex - 1) * pageSize,
    (paginationIndex - 1) * pageSize + pageSize
  );

  return (
    <main className="container mx-auto py-4 bg-color-black">
      <TitleComponent name="Countries search" />
      <div className="flex flex-row gap-5 mt-10 mb-10 justify-center items-center">
        <InputComponent
          placeholder={`Search by country's ${phaceholderName}...`}
          value={inputValue}
          setValue={setInputValue}
        />
        <SelectorComponent
          options={selectionStartegies}
          defaultOption={filterBy}
          setOption={setFilterBy}
          label={'Filter By:'}
        />
        <SelectorComponent
          options={sortByStrategies}
          defaultOption={sortBy}
          setOption={setSortBy}
          label={'Sort By:'}
        />
      </div>

      {/* Messages */}
      {loading && <span className="text-gray-400">Loading...</span>}

      {error && !loading && (
        <span className="text-red-500">
          Failed to fetch data. Please try again.
        </span>
      )}

      {!loading && !error && countries.length === 0 && (
        <span className="text-yellow-300">No countries found.</span>
      )}

      {!loading && !error && countries.length > 0 && (
        <CountriesList countries={paginatedCountries} />
      )}
      <PaginationComponent
        paginationIndex={paginationIndex}
        setPaginationIndex={setPaginationIndex}
        pages={
          countries.length > pageSize
            ? Math.ceil(countries.length / pageSize)
            : 1
        }
      />
    </main>
  );
};

export default CountriesSearchContainer;
