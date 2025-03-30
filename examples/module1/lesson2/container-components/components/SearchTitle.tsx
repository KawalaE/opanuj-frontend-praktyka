interface Title {
  title: string;
}

function SearchTitle({ title }: Title) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
