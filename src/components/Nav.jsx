import { genres, API_URL } from "../utils/requests";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { setMovies } = useContext(DataContext);
  const [genre, setGenre] = useState("");

  const fetchMovies = async () => {
    try {
      const moviesRes = await axios(`${API_URL} + ${genre}`);
      setMovies(moviesRes.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  return (
    <nav className="relative my-5">
      <div className="flex px-5 space-x-7 overflow-x-scroll text-sm sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="border-2 border-red-600 shadow-lg px-5 py-3 rounded-full cursor-pointer selection:bg-red-600 selection:text-white"
            onClick={() => setGenre(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black" />
    </nav>
  );
};

export default Nav;
