import { useState } from 'react';
import CountriesList from '../components/CountriesList';
import InputComponent from '../components/Input';
import SelectorComponent from '../components/Selector';
import TitleComponent from '../components/Title';
import { useCountries } from '../hooks/useCountries';

export type Strategies = 'name' | 'currency' | 'language' | 'capital';

const CountriesSearchContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentStrategy, setCurrentStartegy] = useState('name');

  const selectionStartegies: Record<Strategies, string> = {
    name: 'name',
    currency: 'currency',
    language: 'lang',
    capital: 'capital',
  };

  const { countries, loading } = useCountries({
    currentStrategy,
    inputValue,
  });

  return (
    <main className="container mx-auto py-4 bg-color-black">
      <TitleComponent name="Countries search" />
      <div className="flex flex-row gap-5 mt-10 mb-10 justify-center">
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
      </div>
      {loading == false ? (
        <CountriesList countries={countries} />
      ) : (
        'loading...'
      )}
    </main>
  );
};

export default CountriesSearchContainer;
