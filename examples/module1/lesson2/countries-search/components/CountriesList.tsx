import CountryCard from './CountryCard';

export interface Country {
  name: CountryName;
  population: number;
  flags: FlagName;
}

export interface CountryName {
  common: string;
}

export interface FlagName {
  png: string;
}

interface CountriesListProps {
  countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => {
  if (countries.length > 0) {
    return (
      <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <li
            key={country.population + Math.random()}
            className="flex flex-col items-center"
          >
            <CountryCard
              population={country.population}
              name={country.name}
              flags={country.flags}
            />
          </li>
        ))}
      </ol>
    );
  }
  return <span>No countries found</span>;
};

export default CountriesList;
