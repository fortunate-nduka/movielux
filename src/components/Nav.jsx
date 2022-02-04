import { genres, API_URL } from "../utils/requests";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { setMovies, setLoading } = useContext(DataContext);
  const [genre, setGenre] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const moviesRes = await axios(`${API_URL} + ${genre}`);
      setMovies(moviesRes.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  return (
    <nav className="relative my-1 mb-3 sm:mb-0 sm:my-5">
      <div className="flex px-5 space-x-7 overflow-x-scroll text-sm sm:pl-10 sm:pr-20 whitespace-nowrap sm:space-x-12 scrollbar-hide">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            to="/"
            className="border md:border-2 border-red-600 shadow-lg px-5 py-3 rounded-full cursor-pointer selection:bg-red-600 selection:text-white"
            onClick={() => setGenre(genre.id)}
          >
            {genre.name}
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-black" />
    </nav>
  );
};

export default Nav;
