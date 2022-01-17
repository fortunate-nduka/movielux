import { imgBase } from "../utils/requests";
import Header from "./Header";
import Moment from "react-moment";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";

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
}) => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${
      imgBase + backdrop_path
    })`,
  };

  const dateToFormat = release_date || first_air_date;

  return (
    <div
      style={style}
      className="w-full bg-cover bg-center bg-no-repeat h-auto"
    >
      <Header />
      <div className="container py-14">
        <div className="px-4 mb-10">
          <Moment date={dateToFormat} fromNow className="text-gray-300" />
          <div className="text-4xl font-bold mt-4">{title || name}</div>
          <div className="flex space-x-4 my-6">
            <span className="flex items-center text-gray-300">
              <AiFillStar className="mr-2 text-[yellow]" />
              {vote_average}
            </span>
            <span className="flex items-center text-gray-300">
              <FaThumbsUp className="mr-2 text-[red]" />
              {vote_count}
            </span>
          </div>
          <div className="text-sm leading-6">
            {overview.length > 300
              ? `${overview.substring(0, 300)}...`
              : overview}
          </div>
          <div className="mt-10 flex font-inter flex-col md:flex-row w-max">
            <button className="tracking-wider px-7 py-4 bg-[red] rounded-full font-semibold flex items-center md:mr-6 mb-6">
              Watch Trailer <ImVideoCamera className="ml-2 text-sm" />
            </button>
            <button className="px-7 py-4 bg-[white] text-black rounded-full flex items-center font-semibold">
              More Information <BsArrowRight className="ml-2 text-sm" />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={`${imgBase + poster_path}`}
            className="rounded-lg mx-auto"
            alt="movie poster"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselThumb;
