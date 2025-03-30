import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { useCharacters } from '../hooks/useCharacters';
import Input from '../search-form/Input';
import Selector from '../search-form/Selector';
import type { Character } from '../types/Character';
import { sortedData } from '../utilities/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');
  const { characters, loading, error } = useCharacters(name, gender);
  let sortedCharacters: Character[] = [];

  const sortByOptions = [
    { value: 'name', title: 'Name' },
    { value: 'created', title: 'Created Date' },
  ];

  const genderOptions = [
    { value: 'female', title: 'Female' },
    { value: 'male', title: 'Male' },
    { value: 'genderless', title: 'Genderless' },
    { value: 'unknown', title: 'Unknown' },
  ];
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
      <SearchTitle />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <Input label="Name" data={name} setData={setName} />
        <Selector
          label="Gender"
          data={gender}
          setData={setGender}
          defaultSelect="Any Gender"
          options={genderOptions}
        />
        <Selector
          label="Sort by"
          data={sortOption}
          setData={setSortOption}
          defaultSelect="Initial"
          options={sortByOptions}
        />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortOption ? sortedCharacters : characters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
