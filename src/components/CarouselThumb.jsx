import { imgBase } from "../utils/requests";
import Header from "./Header";
import Moment from "react-moment";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";

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
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${
      imgBase + backdrop_path
    })`,
  };

  const dateToFormat = release_date || first_air_date;

  return (
    <div style={style} className="w-full bg-cover bg-center">
      <Header />
      <div className="container py-14">
        <div className="px-4 space-y-3 mb-10">
          <Moment date={dateToFormat} fromNow className="text-sm" />
          <div className="text-4xl font-bold">{title || name}</div>
          <div className="flex space-x-4">
            <span className="flex items-center text-sm">
              <AiFillStar className="mr-2" />
              {vote_average}
            </span>
            <span className="flex items-center text-sm">
              <FaThumbsUp className="mr-2" />
              {vote_count}
            </span>
          </div>
          <div className="tracking-wider">{overview}</div>
        </div>
        <div className="mx-auto">
          <img
            src={`${imgBase + poster_path}`}
            className="rounded-lg w-3/4 mx-auto"
            alt="movie poster"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselThumb;
