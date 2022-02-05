import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
