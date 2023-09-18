const Select = () => {
  return (
    <select className="w-60 rounded px-4 h-12 outline-none  bg-slate-700 text-white">
      <option value="" disabled hidden>
        Filter by Region
      </option>
      <option value="1" className="">
        Africa
      </option>
      <option value="2" className="">
        America
      </option>
      <option value="3" className="">
        Asia
      </option>
      <option value="4" className="">
        Europe
      </option>
      <option value="5" className="">
        Oceania
      </option>
    </select>
  );
};

export default Select;
