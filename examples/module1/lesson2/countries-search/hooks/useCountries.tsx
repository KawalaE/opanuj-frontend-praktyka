import { useEffect, useState } from 'react';
import type { Country } from '../components/CountriesList';

export const useCountries = ({
  currentStrategy,
  inputValue,
}: {
  currentStrategy: string;
  inputValue: string;
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
        const sortedData = data.sort((a: Country, b: Country) => {
          return a.name.common.localeCompare(b.name.common);
        });
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
  }, [currentStrategy, inputValue]);

  return { countries, loading };
};
