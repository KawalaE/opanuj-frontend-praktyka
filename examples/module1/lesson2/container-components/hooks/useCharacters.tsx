import { useEffect, useState } from 'react';
import type { Character } from '../types/Character';

type CharactersFilter = {
  name?: string;
  gender?: string;
};

function useCharacters({ name, gender }: CharactersFilter) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
        );
        const data = await response.json();
        setCharacters(data.results || []);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(`Error fetching data: ${error}`);
      }
    };
    fetchCharacters();
  }, [name, gender]);

  return { characters, loading, error };
}

export default useCharacters;
