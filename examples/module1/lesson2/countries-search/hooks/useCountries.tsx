import { useEffect, useState } from 'react';
import type { Country } from '../components/CountriesList';
import { sortCountries, type SortKey } from './sortFuntions';

export const useCountries = ({
  filterBy,
  sortBy,
  inputValue,
}: {
  filterBy: string;
  sortBy: SortKey;
  inputValue: string;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      setCountries([]);
    }
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const strategy = filterBy === 'language' ? 'lang' : filterBy;
        const url = `https://restcountries.com/v3.1/${strategy}/${inputValue}`;
        const response = await fetch(url);

        if (response.status === 404) {
          setCountries([]);
          setLoading(false);
          return;
        }

        const data = await response.json();
        let sortedData = sortCountries(data, sortBy);
        setCountries(sortedData);
      } catch (error) {
        setError(true);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [filterBy, inputValue, sortBy]);

  return { countries, loading, error };
};
