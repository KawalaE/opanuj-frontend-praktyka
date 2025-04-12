import { useState } from 'react';
import CountriesList from '../components/CountriesList';
import InputComponent from '../components/Input';
import { useCountries } from '../hooks/useCountries';

const CountriesSearchContainer = () => {
  const [countryName, setCountryName] = useState('');
  const { countries } = useCountries({ countryName: countryName });

  return (
    <main className="container mx-auto py-4 bg-color-black">
      <div className="flex flex-row gap-5 mt-10 mb-10">
        <InputComponent
          placeholder="Search by country's name..."
          value={countryName}
          setValue={setCountryName}
        />
        {/* <InputComponent placeholder="Search by country's currency..." /> */}
      </div>
      <CountriesList countries={countries} />
    </main>
  );
};

export default CountriesSearchContainer;
