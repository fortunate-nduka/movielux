import { useContext } from "react";
import DataContext from "../context/DataContext";

const Movies = () => {
  const { movies } = useContext(DataContext);
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default Movies;
