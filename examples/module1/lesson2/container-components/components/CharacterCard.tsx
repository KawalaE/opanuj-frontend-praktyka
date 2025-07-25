import type { Character } from '../types/Character';

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
export default CharacterCard;
