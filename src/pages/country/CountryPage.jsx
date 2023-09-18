import { useParams } from "react-router-dom";
import { UseCountryContext } from "../../context/useContries";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./components/Button";
import Country from "./components/Country";
import { useLocation } from "react-router-dom";

const CountryPage = () => {
  const { name } = useParams();

  const { countries, loading, error } = useContext(UseCountryContext);

  const [country, setCountry] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      const countryFiend = countries.find((country) => country.name === name);
      setCountry(countryFiend);
    }
  }, [countries, location]);

  return (
    <section className="container mx-auto px-2 py-10 space-y-10">
      <Button />
      {loading && <p>Loading...</p>}

      {!loading && error && <p>Error</p>}

      {!loading && !error && Object.keys(country).length > 0 && (
        <Country
          name={country.name}
          flag={country.flag}
          population={country.population}
          nativeName={country.nativeName}
          region={country.region}
          subRegion={country.subregion}
          yflag={country.flag}
          capital={country.capital}
          topLevelDomain={country.topLevelDomain[0]}
          currencies={country.currencies ? country.currencies[0].name : "null"}
          languages={country.languages}
          borderCountries={country.borders}
        />
      )}

      {Object.keys(country).length === 0 && <p>Country not found</p>}
    </section>
  );
};

export default CountryPage;
