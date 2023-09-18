import { useNavigate } from "react-router-dom";

const CardCountry = ({
  country: {
    name,
    flags: { png },
    population,
    region,
    capital,
  },
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <div
      className="bg-slate-700 rounded overflow-hidden text-white h-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img src={`${png}`} alt="" className="w-full object-cover h-40" />
      <div className=" p-5 space-y-1">
        <p className="text-xl font-bold pb-4">{name}</p>
        <p>
          <span className="font-semibold">Population: </span>
          {population}
        </p>
        <p>
          <span className="font-semibold">Región: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CardCountry;
// {
// paginaciòn
// name,
// region
// }
