import { useContext } from "react";
import DataContext from "../context/DataContext";
import { imgBase } from "../utils/requests";

const Movies = () => {
  const { movies } = useContext(DataContext);
  console.log(movies);
  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      {movies.map((movie) => (
        <div className="flex flex-col justify-start">
          <img
            src={imgBase + movie.poster_path}
            alt={movie.title}
            className="w-[20rem] sm:w-[15rem] rounded-lg"
          />
          hello
        </div>
      ))}
    </div>
  );
};

export default Movies;
