const SearchFormComponent = () => {
  return (
    <div className="flex flex-row gap-5 mt-10">
      <input type="text" placeholder="Search by country's name..." />
      <input type="text" placeholder="Search by country's currency..." />
    </div>
  );
};

export default SearchFormComponent;
