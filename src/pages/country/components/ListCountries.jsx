import React from "react";
import ElementListCountry from "./ElementListCountry";

const ListCountries = ({ list }) => {
  return (
    <div className="grid grid-flow-col grid-helper gap-x-4">
      <p>Border Countries: </p>
      <ul className="flex gap-3 flex-wrap">
        {list ? (
          list.map((country, index) => (
            <ElementListCountry country={country} key={index} />
          ))
        ) : (
          <p>No countries</p>
        )}
      </ul>
    </div>
  );
};

export default ListCountries;
