import type { CharacterEssential } from '../types/Character';

function CharacterCard({ id, name, image }: CharacterEssential) {
  return (
    <li key={id} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}

export default CharacterCard;
