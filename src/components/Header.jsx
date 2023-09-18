import Toggle from "./Toogle";

const Header = () => {
  return (
    <header className="bg-slate-700 py-6 shadow-lg">
      <div className="container flex justify-between items-center mx-auto px-2">
        <h1 className="text-white dark:text-slate-700 text-2xl font-bold">
          Where in the world?
        </h1>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
