import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { movieDetailUrl } from "../utils/requests";
import axios from "axios";
import Header from "./Header";
import { imgBase } from "../utils/requests";
// import { AiOutlineEye } from "react-icons/ai";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import millify from "millify";
import Loader from "./Loader";

const MovieDetails = () => {
  const { movieDetail, setMovieDetail, setLoading, loading } =
    useContext(DataContext);
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetailUrl}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      );
      console.log(movieDetailRes.data);
      setTimeout(() => {
        setMovieDetail(movieDetailRes.data);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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

  const time_convert = (num) => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + "hours : " + minutes + "minutes";
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div className=" container px-4">
        <img
          src={imgBase + movieDetail.backdrop_path}
          alt=""
          className="mt-4 mb-4 shadow-lg"
        />
        <div className="flex items-center gap-6 mb-8">
          <div style={{ width: 50, height: 50 }} className="">
            <CircularProgressbar
              value={movieDetail.vote_average}
              maxValue={10}
              text={`${movieDetail.vote_average / 1}`}
              strokeWidth={7}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#000000",
                textColor: "#fff",
                pathColor: "#ff3030",
                trailColor: "transparent",
                textSize: "30px",
              })}
            />
          </div>
          {movieDetail.adult === true && <span>pg</span>}
          <span>{time_convert(movieDetail.runtime)}</span>
          <Moment date={dateToFormat} fromNow />
        </div>
        <div className="">
          {movieDetail.tagline && (
            <div className="flex items-end gap-4 mb-9">
              <span className="font-bold text-sm">Tagline: </span>
              <span className="text-gray-400">{movieDetail.tagline}</span>
            </div>
          )}
          {movieDetail.original_language && (
            <div className="flex items-end gap-4 mb-9">
              <span className="font-bold text-sm">Language: </span>
              <span className="text-gray-400">{lang}</span>
            </div>
          )}
          {movieDetail.genres && (
            <div className="flex items-end gap-4 mb-9">
              <span className="font-bold text-sm">Genres: </span>
              {movieDetail.genres.map((genre) => (
                <span className="text-gray-400">{genre.name},</span>
              ))}
            </div>
          )}
          {movieDetail.budget !==  0 && (
            <div className="flex items-end gap-4 mb-9">
              <span className="font-bold text-sm">Budget: </span>
              <span className="text-gray-400">
                {millify(movieDetail.budget)} Dollars
              </span>
            </div>
          )}
          {movieDetail.production_companies && (
            <div className="flex flex-col gap-4 mb-7">
              <span className="font-bold text-sm">Production Companies: </span>
              <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                {movieDetail.production_companies.map((pc) => (
                  <span className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400">
                    {pc.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
