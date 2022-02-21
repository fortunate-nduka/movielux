import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import { Home, Search, MovieDetail } from "./components/index";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
