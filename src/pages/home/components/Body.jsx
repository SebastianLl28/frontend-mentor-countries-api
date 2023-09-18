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
    if (filter.search === "") {
      setList(countries);
    } else {
      const filterList = countries.filter((country) =>
        country.name.toLowerCase().includes(filter.search.toLowerCase())
      );
      setList(filterList);
    }
  }, [filter]);

  return (
    <section className="container mx-auto px-2">
      {loading && <p>Loading...</p>}

      {!loading && error && <p>Error</p>}

      {!loading && !error && (
        <div className="grid grid-cols-4 gap-16">
          {list.map((item, index) => (
            <CardCountry country={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Body;
