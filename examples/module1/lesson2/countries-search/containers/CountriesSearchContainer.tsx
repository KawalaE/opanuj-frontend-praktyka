import { useState } from 'react';
import CheckBoxComponent from '../components/CheckBox';
import CountriesList from '../components/CountriesList';
import InputComponent from '../components/Input';
import PaginationComponent from '../components/Pagination';
import SelectorComponent from '../components/Selector';
import TitleComponent from '../components/Title';
import { useCountries } from '../hooks/useCountries';

export type Strategies = 'name' | 'currency' | 'language' | 'capital';

const CountriesSearchContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentStrategy, setCurrentStartegy] = useState('name');
  const [sortByPopulation, setBySortByPopulation] = useState(false);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const pageSize = 10;

  const selectionStartegies: Record<Strategies, string> = {
    name: 'name',
    currency: 'currency',
    language: 'lang',
    capital: 'capital',
  };

  const { countries, loading } = useCountries({
    currentStrategy,
    inputValue,
    sortByPopulation,
  });

  return (
    <main className="container mx-auto py-4 bg-color-black">
      <TitleComponent name="Countries search" />
      <div className="flex flex-row gap-5 mt-10 mb-10 justify-center items-center">
        <InputComponent
          placeholder="Search by country's "
          value={inputValue}
          setValue={setInputValue}
        />
        <SelectorComponent
          strategies={selectionStartegies}
          currentStrategy={currentStrategy}
          setStaretgy={setCurrentStartegy}
        />
        <CheckBoxComponent
          sortByPopulation={sortByPopulation}
          setBySortByPopulation={setBySortByPopulation}
        />
      </div>
      {loading == false ? (
        <CountriesList
          countries={countries.slice(
            paginationIndex * pageSize,
            pageSize + paginationIndex * pageSize
          )}
        />
      ) : (
        'loading...'
      )}
      {countries.length ? (
        <PaginationComponent
          paginationIndex={paginationIndex}
          setPaginationIndex={setPaginationIndex}
          pages={Number((countries.length / pageSize).toFixed(0))}
        />
      ) : null}
    </main>
  );
};

export default CountriesSearchContainer;
