import type { Country } from './CountriesList';

const CountryCard = ({ name, population, flags }: Country) => {
  return (
    <>
      <p id="country-name">{name?.common}</p>
      <img src={flags.png} alt={`${name?.common} flag.`} />
      <p id="country-population">{`Population: ${population}`}</p>
    </>
  );
};

export default CountryCard;
