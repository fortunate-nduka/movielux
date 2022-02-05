import { Fragment, useContext } from "react";
import Moment from "react-moment";
import DataContext from "../context/DataContext";
import { imgBase } from "../utils/requests";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PageControl from "./PageControl";
import Loader from "./Loader";
import { movieUrl } from "../utils/requests";
import { useEffect } from "react";
import axios from "axios";
import no_image from "../assets/no_image.jpg";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, setMovies, loading, setLoading, page, genre } =
    useContext(DataContext);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const moviesRes = await axios(`${movieUrl} + ${genre}&page=${page}`);
      setMovies(moviesRes.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, page]);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-16 px-5 my-16">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="flex flex-col justify-start"
          >
            {movie.poster_path ? (
              <img
                src={imgBase + movie.poster_path}
                alt={movie.title}
                className="w-[17rem] sm:w-[15rem] rounded-lg"
              />
            ) : (
              <img
                src={no_image}
                className="w-[17rem] sm:w-[15rem] rounded-lg"
                alt="No Img"
              />
            )}
            <div className="relative">
              <div
                style={{ width: 50, height: 50 }}
                className="absolute right-3 -translate-y-7 ml-3"
              >
                <CircularProgressbar
                  value={movie.vote_average}
                  maxValue={10}
                  text={`${movie.vote_average * 10}%`}
                  strokeWidth={7}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#000000",
                    textColor: "#fff",
                    pathColor: "#ff3030",
                    trailColor: "transparent",
                    textSize: "25px",
                  })}
                />
              </div>
              <div className="text-base font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider mt-5 mb-[2px] px-1">
                {movie.title}
              </div>
              <Moment
                date={movie.release_date}
                fromNow
                className="px-1 text-[11px] md:text-xs text-gray-400"
              />
            </div>
          </Link>
        ))}
      </div>
      <PageControl />
    </Fragment>
  );
};

export default Movies;
