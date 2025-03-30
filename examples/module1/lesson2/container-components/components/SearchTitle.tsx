function SearchTitle({ name = 'Rick and Morty' }: { name?: string }) {
  return <h1 className="text-2xl">{name}</h1>;
}

export default SearchTitle;
