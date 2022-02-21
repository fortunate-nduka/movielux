import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import movieBg from "../assets/movies-bg.jpg";
import no_image from "../assets/no_image.jpg";
import axios from "axios";
import { imgBase, searchUrl } from "../utils/requests";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Search = () => {
  const {
    searchterm,
    setSearchterm,
    setLoading,
    searchedMovies,
    setSearchedMovies,
  } = useContext(DataContext);
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,1)),url(${movieBg})`,
  };

  const fetchSearch = async () => {
    try {
      setLoading(true);
      const searchRes = await axios(searchUrl + searchterm);
      setSearchedMovies(searchRes.data.results);
      console.log(searchRes.data.results);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchterm]);

  return (
    <div
      style={style}
      className="bg-cover bg-center bg-no-repeat px-6 w-full min-h-screen"
    >
      <Link to="/" className="absolute right-3 top-4 md:right-5 md:top-5">
        <FaRegTimesCircle className="text-3xl cursor-pointer" />
      </Link>
      <form className="w-full sm:w-[90%] lg:w-[80%] mx-auto pt-20 flex items-center relative">
        <BsSearch className="text-xl absolute left-3 z-10 text-black" />
        <input
          type="text"
          name="searchterm"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          placeholder="Search Movie..."
          className="w-full h-14 bg-white placeholder:text-black text-black font-poppins placeholder:font-poppins tracking-wider text-base shadow-2xl outline-none pl-12 rounded"
        />
      </form>

      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-16 px-5 mt-10">
        {searchedMovies.map((sm) => (
          <Link
            to={`/movie/${sm.id}`}
            key={sm.id}
            className="flex flex-col justify-start"
          >
            {sm.poster_path ? (
              <img
                src={imgBase + sm.poster_path}
                alt={sm.title}
                className="w-[17rem] sm:w-[15rem] rounded-lg"
              />
            ) : (
              <img
                src={no_image}
                className="w-[17rem] sm:w-[15rem] rounded-lg"
                alt="No Img"
              />
            )}
            <div className="relative">
              <div
                style={{ width: 46, height: 46 }}
                className="absolute right-3 -translate-y-7 ml-3 font-poppins font-semibold"
              >
                <CircularProgressbar
                  value={sm.vote_average}
                  maxValue={10}
                  text={`${sm.vote_average / 1}`}
                  strokeWidth={7}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#000000",
                    textColor: "#fff",
                    pathColor: "#ff3030",
                    trailColor: "transparent",
                    textSize: "27px",
                  })}
                />
              </div>
              <div className="text-[18px] font-poppins font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider mt-5 mb-[2px] px-1">
                {sm.title}
              </div>
              <Moment
                date={sm.release_date}
                fromNow
                className="px-1 text-[11px] md:text-xs text-gray-400"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
