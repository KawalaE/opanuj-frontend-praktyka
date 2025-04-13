import { useEffect, useState } from 'react';
import type { Country } from '../components/CountriesList';

function sortAlphabeticallyHandler(data: Country[]): Country[] {
  return data.sort((a: Country, b: Country) => {
    return a.name.common.localeCompare(b.name.common, undefined, {
      sensitivity: 'base',
    });
  });
}

function sortByPopulationHandler(data: Country[]): Country[] {
  return data.sort((a: Country, b: Country) => b.population - a.population);
}

export const useCountries = ({
  currentStrategy,
  inputValue,
  sortByPopulation,
}: {
  currentStrategy: string;
  inputValue: string;
  sortByPopulation: boolean;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!inputValue) {
      setCountries([]);
    }
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const url = `https://restcountries.com/v3.1/${currentStrategy}/${inputValue}`;
        const response = await fetch(url);
        const data = await response.json();
        let sortedData = sortAlphabeticallyHandler(data);

        if (sortByPopulation) {
          sortedData = sortByPopulationHandler(sortedData);
        }

        console.log(sortedData);
        setLoading(false);
        setCountries(sortedData);
      } catch (error) {
        console.warn('Failed to fetch countries:', error);
        setLoading(false);
        setCountries([]);
      }
    };

    fetchCountries();
  }, [currentStrategy, inputValue, sortByPopulation]);

  return { countries, loading };
};
