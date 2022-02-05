import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { movieDetailUrl } from "../utils/requests";
import axios from "axios";

const MovieDetails = () => {
  const { movieDetail, setMovieDetail, setLoading } = useContext(DataContext);
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetailUrl}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      );
      setMovieDetail(movieDetailRes.data);
      console.log(movieDetailRes.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setMovieDetail]);

  return (
    <div>
      <h1>{movieDetail.title}</h1>
    </div>
  );
};

export default MovieDetails;
