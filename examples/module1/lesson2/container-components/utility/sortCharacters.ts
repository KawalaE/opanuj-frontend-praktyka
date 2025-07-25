import type { Character } from '../types/Character';

export default function sortCharacters(
  characters: Character[],
  option: string
) {
  if (!characters.length) return [];
  return [...characters].sort((a, b) => {
    if (option === 'name') {
      return a.name.localeCompare(b.name);
    } else if (option === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
}
