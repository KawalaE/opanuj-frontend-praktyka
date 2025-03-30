import type { CharacterEssential } from '../types/Character';

function CharacterCard({ name, image }: CharacterEssential) {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </>
  );
}

export default CharacterCard;
