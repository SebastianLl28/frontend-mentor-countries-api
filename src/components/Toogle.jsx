import { useEffect, useState } from "react";

const Toogle = () => {
  const [isActive, setIsActive] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches && "dark"
  );

  useEffect(() => {
    document.querySelector("html").classList = isActive;
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(isActive === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="dark:text-white text-slate-700 flex gap-2 items-center cursor-pointer outline-none"
      onClick={handleToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isActive === "dark" ? "none" : "#fff"}
        viewBox="-0.5 -0.5 14 14"
        height="20"
        width="20"
        className="-rotate-[34deg]"
      >
        <g id="waning-cresent-moon--night-new-moon-crescent-weather-time-waning">
          <path
            id="Vector"
            stroke={isActive === "dark" ? "#fff" : "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.428571428571429 6.5c0.004373571428571429 -1.1257721428571428 0.3010521428571429 -2.2311157142857145 0.8609992857142857 -3.2077685714285717S9.653521428571429 1.5011007142857145 10.622857142857143 0.9285714285714286C9.904050000000002 0.6309782142857143 9.135053571428571 0.47339407142857143 8.357142857142858 0.4642857142857143c-1.6007735714285716 0 -3.135980714285714 0.6359042857142857 -4.2678907142857145 1.7678235714285715C2.9573328571428577 3.364019285714286 2.3214285714285716 4.899226428571429 2.3214285714285716 6.5s0.6359042857142857 3.135971428571429 1.7678235714285715 4.2679C5.2211621428571435 11.899828571428573 6.756369285714286 12.535714285714286 8.357142857142858 12.535714285714286c0.7872985714285714 -0.005571428571428572 1.5661285714285715 -0.16324285714285716 2.293571428571429 -0.4642857142857143 -0.9745357142857144 -0.5690285714285714 -1.7840735714285716 -1.3819928571428572 -2.3490442857142857 -2.358942857142857C7.736699285714286 8.735619285714288 7.435805 7.628474285714286 7.428571428571429 6.5v0Z"
            strokeWidth="1"
          ></path>
        </g>
      </svg>
      <p className="font-semibold">Dark Mode</p>
    </button>
  );
};

export default Toogle;
