import Search from "./Search";
import Select from "./Select";

const Header = () => {
  return (
    <div className="py-14 flex flex-wrap gap-5 justify-between">
      <Search />
      <Select />
    </div>
  );
};

export default Header;
