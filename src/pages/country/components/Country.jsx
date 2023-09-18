import React from "react";
import ListCountries from "./ListCountries";

{
  /* <CountryPage name={country.name} nativeName={country.nativeName} region={country.region} subRegion={country.subregion} topLevelDomain={country.topLevelDomain[0]} currencies={country.currencies[0].name} languages={country.languages} borderCountries={country.borders} flag={country.flag} /> */
}
const Country = ({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  flag,
}) => {
  // console.log(languages)
  return (
    <section className="dark:text-white text-slate-700 grid grid-cols-2 gap-x-36">
      <picture>
        <img
          src={flag}
          alt={`flag to ${name}`}
          className="w-full min-h-full object-cover"
        />
      </picture>
      <div className="[&>ul>li>span]:font-semibold space-y-8">
        <p className="text-2xl font-bold my-8">{name}</p>
        <ul className="grid grid-rows-5 grid-flow-col gap-y-2">
          <li>
            <span>Native Name: </span> {nativeName}
          </li>
          <li>
            <span>Population: </span> {population}
          </li>
          <li>
            <span>Region: </span> {region}
          </li>
          <li>
            <span>Sub Region: </span> {subRegion}
          </li>
          <li>
            <span>Capital: </span> {capital}
          </li>
          <li>
            <span>Top Level Domain: </span> {topLevelDomain}
          </li>
          <li>
            <span>Currencies: </span> {currencies}
          </li>
          <li>
            <span>Languages: </span>{" "}
            {languages.map((element) => element.name).join(", ")}
          </li>
        </ul>
        <ListCountries list={borderCountries} />
      </div>
    </section>
  );
};

export default Country;
