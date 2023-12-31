import { useContext, useState, useEffect } from "react";
import CardCountry from "./CardCountry";
import { UseCountryContext } from "../../../context/useContries";
import { FilterContext } from "../../../context/UseFilter";

const Body = () => {
  const { countries, loading, error } = useContext(UseCountryContext);

  const { filter } = useContext(FilterContext);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(countries);
  }, [countries]);

  useEffect(() => {
    // filter countries by search and region
    if (filter.search === "" && filter.region === "") {
      setList(countries);
      return;
    }
    const filteredCountries = countries
      .filter(
        (country) =>
          filter.search === "" ||
          country.name.toLowerCase().includes(filter.search.toLowerCase())
      )
      .filter(
        (country) => filter.region === "" || country.region === filter.region
      );
    setList(filteredCountries);
  }, [filter]);

  return (
    <section className="container mx-auto">
      {loading && <p>Loading...</p>}

      {!loading && error && <p>Error</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16">
          {list.map((item, index) => (
            <CardCountry country={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Body;
