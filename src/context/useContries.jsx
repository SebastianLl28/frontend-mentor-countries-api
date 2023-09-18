import { useEffect, useState, createContext } from "react";

export const UseCountryContext = createContext();

const UseContries = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("src/data/data.json");
        const jsonData = await response.json();
        setCountries(jsonData);
        setLoading(false);
        setError(false);

        console.log(jsonData.find((element) => element.name === "Antarctica"));
        console.log(jsonData.find((element) => element.name === "Peru"));
      } catch (error) {
        setError(true);
        setLoading(false);
        setData(null);
      }
    }
    fetchData();
  }, []);

  return (
    <UseCountryContext.Provider value={{ countries, loading, error }}>
      {children}
    </UseCountryContext.Provider>
  );
};

export default UseContries;
