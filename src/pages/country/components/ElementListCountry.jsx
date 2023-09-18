import { useEffect, useContext, useState } from "react";
import { UseCountryContext } from "../../../context/useContries";
import { useNavigate } from "react-router-dom";

const ElementListCountry = ({ country }) => {
  const [name, setName] = useState(null);

  const { countries } = useContext(UseCountryContext);

  useEffect(() => {
    const findCountry = countries.find(
      (element) => element.alpha3Code === country
    );
    setName(findCountry.name);
  }, [country]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <li
      className="text-white px-6 py-1 shadow-lg bg-slate-700 rounded-sm cursor-pointer"
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default ElementListCountry;
