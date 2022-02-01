import { imgBase } from "../utils/urls";
import Header from "./Header";
import Moment from "react-moment";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
// import lang from "../utils/lang";

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
          <button className="border border-white rounded-full p-2 mr-3">
            <BsArrowLeft fontSize={15} />
          </button>
          <button className="border border-white rounded-full p-2">
            <BsArrowRight fontSize={15} />
          </button>
        </div>
        <div className="px-4 mb-10 lg:basis-3/5">
          <Moment date={dateToFormat} fromNow className="text-gray-300" />
          <div className="text-3xl md:text-4xl font-bold mt-4 md:mt-5">
            {title || name}
          </div>
          <div className="flex space-x-4 md:space-x-6 my-5 md:my-7">
            <span className="flex items-center text-gray-300 font-bold">
              <AiFillStar className="mr-2 text-[yellow] text-sm md:text-lg" />
              {vote_average}
            </span>
            <span className="flex items-center text-gray-300 font-bold">
              <FaThumbsUp className="mr-2 text-[red] text-sm md:text-lg" />
              {vote_count}
            </span>
            <span className="text-gray-300">
              Language: <span className="capitalize text-[yellow]">{lang}</span>
            </span>
          </div>
          <div className="text-xs md:text-sm lg:text-base leading-6 md:mt-4">
            {overview.length > 250
              ? `${overview.substring(0, 200)}...`
              : overview}
          </div>
          <button className="mt-10 tracking-wider px-7 py-4 bg-[red] rounded-full font-semibold flex items-center md:mr-6 cursor-pointer">
            More Information <BsArrowRight className="ml-2 text-sm" />
          </button>
        </div>
        <div className="hidden lg:block lg:w-1/4">
          <img
            src={`${imgBase + poster_path}`}
            className="rounded-lg mx-auto w-full shadow-lg"
            alt="movie poster"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselThumb;
