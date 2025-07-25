import { CharacterCard } from '../../prop-drilling-finish/components/CharacterCard';
import type { Character } from '../types/Character';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ol>
  );
}

export default CharacterList;
