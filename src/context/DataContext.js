import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(28);
  const [movieDetail, setMovieDetail] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        movieDetail,
        setMovieDetail,
        recommended,
        setRecommended,
        loading,
        setLoading,
        page,
        setPage,
        genre,
        setGenre,
        cast,
        setCast,
        crew,
        setCrew,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
