import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
