import React from "react";
import { createContext, useState } from "react";

export const FilterContext = createContext();

const UseFilter = ({ children }) => {
  const [filter, setFilter] = useState({ search: "", region: "" });

  const changeSearch = (search) => {
    setFilter({ ...filter, search });
  };

  const changeRegion = (region) => {
    setFilter({ ...filter, region });
  };

  return (
    <FilterContext.Provider value={{ filter, changeSearch, changeRegion }}>
      {children}
    </FilterContext.Provider>
  );
};

export default UseFilter;
