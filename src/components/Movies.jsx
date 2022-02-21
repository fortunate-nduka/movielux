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

  let genreName = "";
  switch (genre) {
    case 28:
      genreName = "action";
      break;
    case 12:
      genreName = "adventure";
      break;
    case 16:
      genreName = "animation";
      break;
    case 35:
      genreName = "comedy";
      break;
    case 80:
      genreName = "crime";
      break;
    case 99:
      genreName = "documentary";
      break;
    case 18:
      genreName = "drama";
      break;
    case 10751:
      genreName = "family";
      break;
    case 14:
      genreName = "fantasy";
      break;
    case 36:
      genreName = "history";
      break;
    case 27:
      genreName = "horror";
      break;
    case 10402:
      genreName = "music";
      break;
    case 9648:
      genreName = "mystery";
      break;
    case 10749:
      genreName = "romance";
      break;
    case 878:
      genreName = "science fiction";
      break;
    case 10770:
      genreName = "tv movie";
      break;
    case 53:
      genreName = "thriller";
      break;
    case 10752:
      genreName = "war";
      break;
    case 37:
      genreName = "western";
      break;
    default:
      genreName = 'movies';
      break;
  }

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <div className="font-poppins uppercase text-xl sm:text-2xl font-bold border-l-8 border-l-red-600 pl-4 mt-10 mb-12">
        {genreName}
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-16 px-5">
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
                style={{ width: 46, height: 46 }}
                className="absolute right-3 -translate-y-7 ml-3 font-poppins font-semibold"
              >
                <CircularProgressbar
                  value={movie.vote_average}
                  maxValue={10}
                  text={`${movie.vote_average / 1}`}
                  strokeWidth={7}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#000000",
                    textColor: "#fff",
                    pathColor: "#ff3030",
                    trailColor: "transparent",
                    textSize: "27px",
                  })}
                />
              </div>
              <div className="text-[18px] font-poppins font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider mt-5 mb-[2px] px-1">
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
