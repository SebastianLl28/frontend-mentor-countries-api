import Toggle from "./Toogle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-700 py-6 shadow-lg">
      <div className="container flex justify-between items-center mx-auto px-2">
        <h1 className="dark:text-white text-slate-800 text-2xl font-bold">
          Where in the world?
        </h1>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
