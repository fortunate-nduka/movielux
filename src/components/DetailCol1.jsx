import { useContext, useRef } from "react";
import DataContext from "../context/DataContext";
import Moment from "react-moment";
import { MovieCredit } from "./index";
import ReactPlayer from "react-player/youtube";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

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
    case "it":
      lang = "Italian";
      break;
    case "tr":
      lang = "Turkish";
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
    <div className="lg:w-[60%] lg:mt-5">
      <div className="relative px-4">
        {movieDetail.videos && (
          <>
            <Slider
              ref={sliderRef}
              fade={false}
              arrows={false}
              autoplay={false}
              draggable={false}
              swipe={false}
            >
              {movieDetail.videos.results.map(
                (video) =>
                  movieDetail.videos.results.type = "Trailer" && (
                    <ReactPlayer
                      key={video.id}
                      url={`https://www.youtube.com/watch?v=${video.key}`}
                      width="100%"
                      controls={true}
                      light={true}
                    />
                  )
              )}
            </Slider>
            {movieDetail.videos.results.length > 1 && (
              <div className="absolute right-3 bottom-1 mt-10  translate-y-8  md:translate-y-10 space-x-2">
                <button className="border-2 border-white rounded-full p-1 shadow-lg">
                  <BsArrowLeft fontSize={13} onClick={handlePrev} />
                </button>
                <button className="border-2 border-white rounded-full p-1 shadow-lg">
                  <BsArrowRight fontSize={13} onClick={handleNext} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-10 md:mt-20 px-4">
        <div className="font-poppins font-black text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-13">
          {movieDetail.title || movieDetail.name}
        </div>
        <div className="flex items-center justify-between sm:justify-start sm:gap-x-8 mb-10 md:mb-13">
          <span className="flex items-start text-gray-400 font-bold">
            <AiFillStar className="mr-1 text-[#ffff00]" />
            {movieDetail.vote_average}
          </span>
          <span>{time_convert(movieDetail.runtime)}</span>
          <Moment date={dateToFormat} fromNow />
        </div>
        <div className="">
          {movieDetail.tagline && (
            <div className="flex items-start gap-4 mb-10 md:mb-13">
              <span className="font-bold">Tagline: </span>
              <span className="text-gray-400 italic">
                {movieDetail.tagline}
              </span>
            </div>
          )}
          <div className="flex items-end gap-4 mb-10 md:mb-13">
            <span className="font-bold">Adult: </span>
            {movieDetail.adult === true ? (
              <span className="text-gray-400">YES</span>
            ) : (
              <span className="text-gray-400">NO</span>
            )}
          </div>
          {movieDetail.original_language && (
            <div className="flex items-end gap-4 mb-10 md:mb-13">
              <span className="font-bold">Language: </span>
              <span className="text-gray-400">{lang}</span>
            </div>
          )}
          {movieDetail.genres && (
            <div className="flex flex-col gap-4 mb-10 md:mb-13">
              <span className="font-bold">Genres: </span>
              <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                {movieDetail.genres.map((genre) => (
                  <span
                    key={genre.name}
                    className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {movieDetail.production_companies && (
            <div className="flex flex-col gap-4 mb-10 md:mb-13">
              <span className="font-bold">Production Companies: </span>
              <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                {movieDetail.production_companies.map((pc) => (
                  <span
                    key={pc.id}
                    className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400"
                  >
                    {pc.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {movieDetail.overview && (
        <div className="flex flex-col gap-1 mb-9 w-full px-4">
          <span className="font-bold block">Description: </span>
          <span className="text-gray-400 leading-7 text-[13px] sm:text-sm">
            {movieDetail.overview}
          </span>
        </div>
      )}
      <MovieCredit />
    </div>
  );
};

export default DetailCol1;
