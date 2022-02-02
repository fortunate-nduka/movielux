import { useContext } from "react";
import Moment from "react-moment";
import DataContext from "../context/DataContext";
import { imgBase } from "../utils/requests";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Movies = () => {
  const { movies } = useContext(DataContext);
  console.log(movies);

  return (
    <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-14 px-5 mt-24">
      {movies.map((movie) => (
        <div className="flex flex-col justify-start">
          <img
            src={imgBase + movie.poster_path}
            alt={movie.title}
            className="w-[17rem] sm:w-[15rem] rounded-lg"
          />
          <div
            style={{ width: 50, height: 50 }}
            className="-translate-y-7 ml-3"
          >
            <CircularProgressbar
              value={movie.vote_average}
              maxValue={10}
              text={`${movie.vote_average * 10}%`}
              strokeWidth={7}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#ff3030",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textSize: "25px",
              })}
            />
          </div>
          <div className="text-base font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider -mt-5 mb-2 px-1">
            {movie.title}
          </div>
          <Moment
            date={movie.release_date}
            fromNow
            className="text-xs text-gray-400"
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
