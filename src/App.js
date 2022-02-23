import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import { Home, Search, MovieDetail,PersonDetail } from "./components/index";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
