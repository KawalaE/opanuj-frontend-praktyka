import { useEffect, useState } from 'react';
import type { Character } from '../types/Character';

export const useCharacters = (name: string, gender: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const url = `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`;
        const response = await fetch(url);
        const data: unknown = await response.json();
        if (
          typeof data === 'object' &&
          data !== null &&
          'results' in data &&
          Array.isArray(data.results)
        ) {
          setCharacters(data.results);
        } else {
          console.error('Invalid response format.');
        }
      } catch (error) {
        setError(`Error druing fetching data ${error}!`);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, gender]);

  return { characters, loading, error };
};
