import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { imgBase } from "../utils/requests";
import not_available from "../assets/unavailable.png";
import { AiFillStar } from "react-icons/ai";

const DetailCol2 = () => {
  const { recommended, similar } = useContext(DataContext);
  const recommendedSlice = recommended.slice(0, 8);
  const similarSlice = similar.slice(0, 8);

  return (
    <div className="lg:w-[30%] lg:mt-0 mt-32 px-4">
      {recommended.length > 6 ? (
        <>
          <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2 mb-10">
            Recommended
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-5 gap-y-10 md:gap-y-7 grid-">
            {recommendedSlice.map((recommend) => (
              <Link to={`/movie/${recommend.id}`} key={recommend.id}>
                {recommend.backdrop_path ? (
                  <img
                    src={imgBase + recommend.backdrop_path}
                    alt=""
                    className="w-full shadow-lg rounded-md"
                  />
                ) : (
                  <img
                    src={not_available}
                    alt=""
                    className="w-full shadow-lg rounded-md"
                  />
                )}
                <div className="px-1">
                  <div className="text-base font-poppins font-bold truncate ... tracking-wider mb-[2px] mt-2 w-auto">
                    {recommend.title}
                  </div>
                  <div className="flex items-center justify-between">
                    <Moment
                      date={recommend.release_date}
                      fromNow
                      className="px-1 text-[11px] md:text-xs text-gray-400"
                    />
                    <span className="flex items-center text-gray-400 text-[12px] md:text-[13px] font-bold">
                      <AiFillStar className="mr-1 text-[#ffff00]" />
                      {Math.round(recommend.vote_average * 10) / 10}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2 mb-10">
            Similar Movies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-5 gap-y-10 md:gap-y-7 grid-">
            {similarSlice.map((similar) => (
              <Link to={`/movie/${similar.id}`} key={similar.id}>
                <div className="flex flex-col cursor-pointer relative">
                  {similar.backdrop_path ? (
                    <img
                      src={imgBase + similar.backdrop_path}
                      alt=""
                      className="w-full shadow-lg rounded-md"
                    />
                  ) : (
                    <img
                      src={not_available}
                      alt=""
                      className="w-full shadow-lg"
                    />
                  )}
                  <div className="px-1">
                    <div className="text-base font-poppins font-bold truncate ... tracking-wider mb-[2px] mt-2 w-auto">
                      {similar.title}
                    </div>
                    <div className="flex items-center justify-between">
                      <Moment
                        date={similar.release_date}
                        fromNow
                        className="px-1 text-[11px] md:text-xs text-gray-400"
                      />
                      <span className="flex items-center text-gray-400 text-[12px] md:text-[13px] font-bold">
                        <AiFillStar className="mr-1 text-[#ffff00]" />
                        {Math.round(similar.vote_average * 10) / 10}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default DetailCol2;
