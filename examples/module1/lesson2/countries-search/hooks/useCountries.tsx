import { useEffect, useState } from 'react';
import type { Country } from '../components/CountriesList';

interface countriesSearch {
  country: Country;
}

export const useCountries = ({ countryName }: { countryName: string }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      if (countryName !== '') {
        console.log(countryName);
        const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,population,id`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        setCountries(data);
      }
    };

    fetchCountries();
  }, [countryName]);

  return { countries };
};
