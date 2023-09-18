import { useContext } from "react";
import { useState } from "react";
import { FilterContext } from "../../../context/UseFilter";
import { useEffect } from "react";

const Select = () => {
  const { changeRegion } = useContext(FilterContext);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    changeRegion(selected);
  }, [selected]);

  return (
    <select
      className="shadow-lg w-60 rounded px-4 h-12 outline-none bg-white  dark:bg-slate-700 dark:text-white text-slate-800"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">All Region</option>
      <option value="Africa" className="">
        Africa
      </option>
      <option value="Americas" className="">
        America
      </option>
      <option value="Asia" className="">
        Asia
      </option>
      <option value="Europe" className="">
        Europe
      </option>
      <option value="Oceania" className="">
        Oceania
      </option>
    </select>
  );
};

export default Select;
