import { useContext, useRef } from "react";
import DataContext from "../context/DataContext";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactPlayer from "react-player";
import { MovieCredits } from "./MovieCredits";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const DetailCol1 = () => {
  const { movieDetail } = useContext(DataContext);
  const sliderRef = useRef(null);

  const dateToFormat = movieDetail.release_date || movieDetail.first_air_date;

  const time_convert = (num) => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + " hours : " + minutes + " minutes";
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
    case "es":
      lang = "Spanish";
      break;
    case "de":
      lang = "Deutsch";
      break;
    case "pl":
      lang = "Polish";
      break;
    case "fr":
      lang = "French";
      break;
    default:
      lang = movieDetail.original_language;
      break;
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="lg:w-[60%]">
      <div className="relative">
        {movieDetail.videos && (
          <Slider
            ref={sliderRef}
            fade={true}
            arrows={false}
            autoplay={false}
            draggable={false}
          >
            {movieDetail.videos.results.slice(0, 3).map((video) => (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                controls={true}
              />
            ))}
          </Slider>
        )}
        <div className="absolute right-3 bottom-1 mt-10  translate-y-8  md:translate-y-10 space-x-2">
          <button className="border-2 border-white rounded-full p-1 shadow-lg">
            <BsArrowLeft fontSize={13} onClick={handlePrev} />
          </button>
          <button className="border-2 border-white rounded-full p-1 shadow-lg">
            <BsArrowRight fontSize={13} onClick={handleNext} />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="font-poppins font-black text-2xl md:text-3xl mb-6">
          {movieDetail.title || movieDetail.name}
        </div>
        <div className="flex items-center justify-between sm:justify-start sm:gap-x-8 mb-8">
          <div style={{ width: 50, height: 50 }} className="">
            <CircularProgressbar
              value={movieDetail.vote_average}
              maxValue={10}
              text={`${movieDetail.vote_average / 1}`}
              strokeWidth={10}
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
          <span>{time_convert(movieDetail.runtime)}</span>
          <Moment date={dateToFormat} fromNow />
        </div>
        <div className="">
          {movieDetail.tagline && (
            <div className="flex items-end gap-4 mb-10">
              <span className="font-bold">Tagline: </span>
              <span className="text-gray-400 italic">
                {movieDetail.tagline}
              </span>
            </div>
          )}
          <div className="flex items-end gap-4 mb-10">
            <span className="font-bold">Parental Guidance: </span>
            {movieDetail.adult === true ? (
              <span className="font-bold">YES</span>
            ) : (
              <span className="font-bold">NO</span>
            )}
          </div>
          {movieDetail.original_language && (
            <div className="flex items-end gap-4 mb-10">
              <span className="font-bold">Language: </span>
              <span className="text-gray-400">{lang}</span>
            </div>
          )}
          {movieDetail.genres && (
            <div className="flex flex-col gap-4 mb-10">
              <span className="font-bold">Genres: </span>
              <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                {movieDetail.genres.map((genre) => (
                  <span className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {movieDetail.production_companies && (
            <div className="flex flex-col gap-4 mb-10">
              <span className="font-bold">Production Companies: </span>
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

      {movieDetail.overview && (
        <div className="flex flex-col gap-1 mb-9 w-full">
          <span className="font-bold block">Description: </span>
          <span className="text-gray-400 leading-6">
            {movieDetail.overview}
          </span>
        </div>
      )}
      <MovieCredits />
    </div>
  );
};

export default DetailCol1;