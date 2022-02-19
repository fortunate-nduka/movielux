import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Moment from "react-moment";
import { imgBase } from "../utils/requests";
import not_available from "../assets/Not_Available.png";

const DetailCol2 = () => {
  const { recommended } = useContext(DataContext);
  const recommendedSlice = recommended.slice(0, 8);

  return (
    <div className="lg:basis-[25%] mt-16">
      <div className="font-Heavy uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2 mt-14 lg:mt-10 mb-5">
        Recommended
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-x-5 gap-y-10 md:gap-y-7 grid-">
        {recommendedSlice.map((recommend) => (
          <Link to={`/movie/${recommend.id}`}>
            <div className="flex flex-col cursor-pointer">
              {recommend.backdrop_path ? (
                <img
                  src={imgBase + recommend.backdrop_path}
                  alt=""
                  className="w-full shadow-lg"
                />
              ) : (
                <img src={not_available} alt="" className="w-full shadow-lg" />
              )}
              <div className="mt-3 flex items-center justify-between">
                <div className="">
                  <div
                    className="text-sm font-bold
                  "
                  >
                    {recommend.title}
                  </div>
                  <Moment
                    date={recommend.release_date}
                    fromNow
                    className="mt-2 text-[11px] text-gray-400"
                  />
                </div>
                <div
                  style={{ width: 45, height: 45 }}
                  className="-translate-y-10 mr-2"
                >
                  <CircularProgressbar
                    value={recommend.vote_average}
                    maxValue={10}
                    text={`${Math.round(recommend.vote_average * 10) / 10}`}
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DetailCol2;
