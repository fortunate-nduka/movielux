import { imgBase } from "../utils/requests";
import Header from "./Header";
import Moment from "react-moment";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import millify from "millify";

const CarouselThumb = ({
  title,
  name,
  backdrop_path,
  release_date,
  poster_path,
  vote_average,
  vote_count,
  first_air_date,
  overview,
  original_language,
  handleNext,
  handlePrev,
}) => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),url(${
      imgBase + backdrop_path
    })`,
  };

  const dateToFormat = release_date || first_air_date;

  let lang = "";
  switch (original_language) {
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
      lang = original_language;
      break;
  }

  return (
    <div
      style={style}
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen md:h-full"
    >
      <Header />
      <div className="container pt-24 pb-20 md:mx-auto md:px-5 relative flex justify-center lg:justify-between items-center">
        <div className="absolute right-3 top-5">
          <button className="border border-white rounded-full p-2 mr-3 shadow-lg">
            <BsArrowLeft fontSize={15} onClick={handlePrev} />
          </button>
          <button className="border border-white rounded-full p-2 shadow-lg">
            <BsArrowRight fontSize={15} onClick={handleNext} />
          </button>
        </div>
        <div className="px-4 mb-10 lg:basis-3/5">
          <Moment date={dateToFormat} fromNow className="text-gray-300" />
          <div className="text-3xl md:text-4xl font-bold mt-4 md:mt-5 w-full">
            {title || name}
          </div>
          <div className="flex items-center my-5 md:my-6 lg:my-7">
            <span className="flex items-center text-gray-300">
              <AiFillStar className="mr-1 text-[yellow] text-sm md:text-lg" />
              {vote_average}
            </span>
            <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-4 md:mx-7"></div>
            <span className="flex items-center text-gray-300">
              <FaThumbsUp className="mr-1 text-[#ff3030] text-sm md:text-lg" />
              {millify(vote_count)}
            </span>
            <div className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-4 md:mx-7"></div>
            <span className="capitalize text-[yellow]">{lang}</span>
          </div>
          <div className="text-xs md:text-sm leading-5 md:leading-7 md:mt-4 mb-10">
            {overview.length > 250
              ? `${overview.substring(0, 200)}...`
              : overview}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-y-7 md:gap-y-0 md:gap-x-10 w-fit">
            <button className="tracking-wider px-7 py-4 bg-[red] rounded-full font-semibold flex items-center cursor-pointer w-fit shadow-lg">
              More Information <BsArrowRight className="ml-2 text-sm" />
            </button>
            <div className="tracking-wider px-7 py-4 border border-white rounded-full font-semibold flex items-center justify-center ">
              Watch Trailer <AiOutlineEye className="ml-2 text-lg" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/4">
          <img
            src={`${imgBase + poster_path}`}
            className="rounded-lg mx-auto shadow-lg w-11/12"
            alt="movie poster"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselThumb;
