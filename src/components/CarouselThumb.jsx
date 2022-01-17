import { imgBase } from "../utils/urls";
import Header from "./Header";
import Moment from "react-moment";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
// import { ImVideoCamera } from "react-icons/im";

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
})=> {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${
      imgBase + backdrop_path
    })`,
  };

  const dateToFormat = release_date || first_air_date;
  return (
    <div
      style={style}
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen h-auto"
    >
      <Header />
      <div className="container pt-24 pb-20 relative flex justify-center items-center">
        <div className="absolute right-3 top-5">
          <button className="border border-white rounded-full p-2 mr-3">
            <BsArrowLeft fontSize={15} />
          </button>
          <button className="border border-white rounded-full p-2">
            <BsArrowRight fontSize={15} />
          </button>
        </div>
        <div className="px-4 mb-10">
          <Moment date={dateToFormat} fromNow className="text-gray-300" />
          <div className="text-3xl font-bold mt-4">{title || name}</div>
          <div className="flex space-x-4 my-5">
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
            {overview.length > 250
              ? `${overview.substring(0, 250)}...`
              : overview}
          </div>
          <button className="mt-10 tracking-wider px-7 py-4 bg-[red] rounded-full font-semibold flex items-center md:mr-6 cursor-pointer">
            More Information <BsArrowRight className="ml-2 text-sm" />
          </button>
          {/* <div className="mt-10 flex flex-col md:flex-row w-max">
            <button className="tracking-wider px-7 py-4 bg-[red] rounded-full font-semibold flex items-center md:mr-6 mb-6">
              Watch Trailer <ImVideoCamera className="ml-2 text-sm" />
            </button>
            <button className="px-7 py-4 bg-[white] text-black rounded-full flex items-center font-semibold">
              More Information <BsArrowRight className="ml-2 text-sm" />
            </button>
          </div> */}
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
