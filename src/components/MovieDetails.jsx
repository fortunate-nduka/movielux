import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { movieDetailUrl } from "../utils/requests";
import axios from "axios";
import Header from "./Header";
import { imgBase } from "../utils/requests";
import { AiOutlineEye } from "react-icons/ai";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const MovieDetails = () => {
  const { movieDetail, setMovieDetail, setLoading } = useContext(DataContext);
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetailUrl}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      );
      setMovieDetail(movieDetailRes.data);
      console.log(movieDetailRes.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setMovieDetail]);

  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)),url(${
      imgBase + movieDetail.backdrop_path
    })`,
  };

  let lang = "";
  switch (movieDetail.original_language) {
    case "en":
      lang = "English";
      break;
    case "ko":
      lang = "Korean";
      break;
    case "ja":
      lang = "Japanese";
      break;
    case "la":
      lang = "Latin";
      break;
    case "nl":
      lang = "Dutch";
      break;
    default:
      lang = movieDetail.original_language;
      break;
  }

  const dateToFormat = movieDetail.release_date || movieDetail.first_air_date;
console.log(movieDetail.genres);
  return (
    <div>
      <div
        style={style}
        className="w-full bg-cover bg-center bg-no-repeat h-min"
      >
        <Header />
        <div className="container pt-24 pb-20 md:mx-auto md:px-5 relative flex justify-center lg:justify-between items-center">
          <div className="px-4 mb-10 lg:basis-3/5">
            <div className="flex items-center mb-5 md:mb-1">
              <span style={{ width: 50, height: 50 }}>
                <CircularProgressbar
                  value={movieDetail.vote_average}
                  maxValue={10}
                  text={`${movieDetail.vote_average * 10}%`}
                  strokeWidth={7}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#000000",
                    textColor: "#fff",
                    pathColor: "#ffff00",
                    trailColor: "transparent",
                    textSize: "25px",
                  })}
                />
              </span>
              <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-3 md:mx-4"></div>
              <span className="capitalize text-[#ff3030]">{lang}</span>
              <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-4 md:mx-4"></div>
              <Moment date={dateToFormat} fromNow className="text-gray-300" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mt-4 md:mt-5 w-full">
              {movieDetail.title || movieDetail.name}
            </div>
            <div className="flex">
              {/* {movieDetail.genres.map((genre) => (
                <h1 className="border md:border-2 border-red-600 shadow-lg px-5 py-3 rounded-full">
                  {genre.name}
                </h1>
              ))} */}
            </div>
            <div className="text-xs md:text-sm leading-5 md:leading-7 md:mt-4 mb-10">
              {movieDetail.overview}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-y-7 md:gap-y-0 md:gap-x-5 w-fit">
              <button className="tracking-wider px-7 py-4 border border-white rounded-full font-semibold flex items-center justify-center ">
                Watch Trailer <AiOutlineEye className="ml-2 text-lg" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/4">
            <img
              src={`${imgBase + movieDetail.poster_path}`}
              className="rounded-lg mx-auto shadow-lg w-11/12"
              alt="movie poster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
