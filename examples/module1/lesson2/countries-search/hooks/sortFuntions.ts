import type { Country } from '../components/CountriesList';

const sortAlphabetically = (data: Country[]): Country[] => {
  return data.sort((a: Country, b: Country) => {
    return a.name.common.localeCompare(b.name.common, undefined, {
      sensitivity: 'base',
    });
  });
};

const sortByPopulation = (data: Country[]): Country[] => {
  return data.sort((a: Country, b: Country) => b.population - a.population);
};

export type SortKey = 'alphabetical' | 'population' | 'default';

const sortStrategies: Record<SortKey, (data: Country[]) => Country[]> = {
  alphabetical: sortAlphabetically,
  population: sortByPopulation,
  default: (data) => data,
};

export const sortCountries = (data: Country[], sortBy: SortKey): Country[] => {
  const sortFn = sortStrategies[sortBy];
  return sortFn(data);
};
