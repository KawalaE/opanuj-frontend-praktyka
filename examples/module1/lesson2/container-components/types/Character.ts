export interface CharacterEssential {
  id: number;
  name: string;
  image: string;
}

export interface Character extends CharacterEssential {
  gender: string;
  created: string;
}
