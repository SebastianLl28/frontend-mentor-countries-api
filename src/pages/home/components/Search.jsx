import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FilterContext } from "../../../context/UseFilter";

const Search = () => {
  const { filter, changeSearch } = useContext(FilterContext);

  const [search, setSearch] = useState(filter.search);

  useEffect(() => {
    changeSearch(search);
  }, [search]);

  return (
    <div className=" bg-slate-700 shadow-lg h-12 w-[38rem] rounded overflow-hidden relative flex gap-5">
      <div className="w-12 flex items-center justify-end">
        <img src="/search.svg" alt="icon search" className="w-5" />
      </div>
      <input
        type="text"
        className="h-full flex-grow bg-inherit outline-none text-white  placeholder:text-white text-sm"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
