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
import { AiFillStar } from "react-icons/ai";

const Search = () => {
  const {
    searchterm,
    setSearchterm,
    setLoading,
    searchedMovies,
    setSearchedMovies,
  } = useContext(DataContext);
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,9)),url(${movieBg})`,
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
    <div style={style} className="bg-contain bg-center w-full min-h-screen">
      <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg relative z-20">
        <div className="container mx-auto flex items-center justify-end">
          <Link to="/" className="cursor-pointer">
            <FaRegTimesCircle className="text-3xl" />
          </Link>
        </div>
      </header>
      <div className="px-6">
        <form className="w-full sm:w-[90%] lg:w-[80%] mx-auto pt-6 flex items-center relative">
          <BsSearch className="text-base absolute left-3 z-10 text-black" />
          <input
            type="text"
            name="searchterm"
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
            placeholder="Search Movie..."
            className="w-full h-12 bg-gray-400 placeholder:text-black text-black font-poppins placeholder:font-poppins tracking-wider text-sm shadow-2xl outline-none pl-12 rounded"
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
              <div className="text-[17px] font-poppins font-semibold w-[17rem] sm:w-[15rem] truncate ... tracking-wider mt-2 mb-2 px-1">
                {sm.title}
              </div>
              <div className="flex items-center justify-between">
                <Moment
                  date={sm.release_date}
                  fromNow
                  className="px-1 text-[11px] md:text-xs text-white"
                />
                <span className="flex items-start text-white text-[12px] md:text-xs font-bold">
                  <AiFillStar className="mr-1 text-[yellow]" />
                  {sm.vote_average}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
