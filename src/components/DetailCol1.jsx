import { useContext } from "react";
import DataContext from "../context/DataContext";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DetailCol1 = () => {
  const {
    movieDetail,
    // setLoading,
    // setCast,
    // crew,
    // setCrew,
  } = useContext(DataContext);

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

  return (
    <div className="lg:basis-[60%]">
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/_RjeC6Q8pG8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
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
              <span className="font-bold text-[red]">YES</span>
            ) : (
              <span className="font-bold text-[#ffff00]">NO</span>
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
        <div className="flex flex-col gap-1 mb-9 xl:w-[80%]">
          <span className="font-bold block">Description: </span>
          <span className="text-gray-400 leading-6">
            {movieDetail.overview}
          </span>
        </div>
      )}
      <div className="mt-16 lg:mt-10">
        <div className="flex items-center justify-between mb-5">
          <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2">
            Casts
          </div>
          <div className="">
            <button className="border border-white rounded-full p-2 mr-3 shadow-lg">
              <BsArrowLeft fontSize={15} />
            </button>
            <button className="border border-white rounded-full p-2 shadow-lg">
              <BsArrowRight fontSize={15} />
            </button>
          </div>
        </div>
        {/* <Slider {...settings}>
                {cast.map((c) => (
                  <div>
                    <img
                      src={imgBase + c.profile_path}
                      alt=""
                      className="w-[15rem]"
                    />
                  </div>
                ))}
              </Slider> */}
      </div>
    </div>
  );
};

export default DetailCol1;
