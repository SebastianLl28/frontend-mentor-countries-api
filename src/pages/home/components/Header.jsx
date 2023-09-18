import Search from "./Search";
import Select from "./Select";

const Header = () => {
  return (
    <div className="py-14 flex justify-between">
      <Search />
      <Select />
    </div>
  );
};

export default Header;
