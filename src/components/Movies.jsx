import { Fragment, useEffect, useContext } from "react";
import Moment from "react-moment";
import DataContext from "../context/DataContext";
import { imgBase, movieUrl } from "../utils/requests";
import { AiFillStar } from "react-icons/ai";
import { PageControl, Loader } from "./index";
import axios from "axios";
import no_image from "../assets/no_image.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
      genreName = "movies";
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
                alt=""
                className="w-[17rem] sm:w-[15rem] rounded-lg"
              />
            ) : (
              <img
                src={no_image}
                className="w-[17rem] sm:w-[15rem] rounded-lg"
                alt="No Img"
              />
            )}
            <div className="text-[17px] font-poppins font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider mt-3 mb-2 px-1">
              {movie.title}
            </div>
            <div className="flex items-center justify-between">
              <Moment
                date={movie.release_date}
                fromNow
                className="px-1 text-[11px] md:text-xs text-gray-400"
              />
              <span className="flex items-start text-gray-400 text-[12px] md:text-xs font-bold">
                <AiFillStar className="mr-1 text-[#ffff00]" />
                {movie.vote_average}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <PageControl />
      <Footer />
    </Fragment>
  );
};

export default Movies;
