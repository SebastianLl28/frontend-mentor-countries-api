import CardCountry from "./CardCountry";
import { useContext } from "react";
import { UseCountryContext } from "../../../context/useContries";

const Body = () => {
  const { countries, loading, error } = useContext(UseCountryContext);

  return (
    <section className="container mx-auto px-2">
      {loading && <p>Loading...</p>}

      {!loading && error && <p>Error</p>}

      {!loading && !error && (
        <div className="grid grid-cols-4 gap-16">
          {countries.map((item, index) => (
            <CardCountry country={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Body;
