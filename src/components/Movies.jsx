import { useContext } from "react";
import DataContext from "../context/DataContext";

const Movies = () => {
  const { movies } = useContext(DataContext);
  return (
    <div>
      {movies.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  );
};

export default Movies;
