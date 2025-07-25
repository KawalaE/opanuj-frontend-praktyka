interface SearchByNameProps {
  name: string;
  setName: (name: string) => void;
}

function SearchByName({ name, setName }: SearchByNameProps) {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}

export default SearchByName;
