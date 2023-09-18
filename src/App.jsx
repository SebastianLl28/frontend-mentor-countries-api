import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryPage, HomePage } from "./pages";
import Header from "./components/Header";
import UseContries from "./context/useContries";
import UseFilter from "./context/UseFilter";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-800">
      <UseContries>
        <UseFilter>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:name" element={<CountryPage />} />
            </Routes>
          </BrowserRouter>
        </UseFilter>
      </UseContries>
    </main>
  );
};

export default App;
