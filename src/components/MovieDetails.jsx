import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { movieDetails } from "../utils/requests";
import axios from "axios";

const MovieDetails = () => {
  const { movieDetail, setMovieDetail, setLoading } = useContext(DataContext);
  const { id } = useParams;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetails}/${id}?api_key=${API_KEY}&language=en=US`
      );
      setMovieDetail(movieDetailRes.data.results);
      console.log(movieDetail.data.rasults);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      {movieDetail.map((detail) => (
        <h1>{detail.title}</h1>
      ))}
    </div>
  );
};

export default MovieDetails;
