import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacters } from '../hooks/useCharacters';
import type { Character } from '../types/Character';
import { sortedData } from '../utilities/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');
  const { characters, loading, error } = useCharacters(name, gender);
  let sortedCharacters: Character[] = [];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error while fetching!</p>;
  }
  if (characters && sortOption) {
    sortedCharacters = sortedData(sortOption, characters);
    console.log('sorted', sortedCharacters);
  }

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortOption ? sortedCharacters : characters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
