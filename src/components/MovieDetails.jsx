import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { baseUrl, movieDetailUrl } from "../utils/requests";
import axios from "axios";
import Header from "./Header";
import Loader from "./Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailCol1 from "./DetailCol1";
import DetailCol2 from "./DetailCol2";

const MovieDetails = () => {
  const {
    setMovieDetail,
    setLoading,
    loading,
    setRecommended,
    setCast,
    // crew,
    setCrew,
  } = useContext(DataContext);

  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endUrl = `api_key=${API_KEY}&language=en-US`;

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetailUrl}/${id}?${endUrl}&append_to_response=videos`
      );
      const recommended = await axios(
        `${baseUrl}/movie/${id}/recommendations?${endUrl}&language=en-US&page=1`
      );
      const movieCredit = await axios(
        `${baseUrl}/movie/${id}/credits?${endUrl}`
      );
      const movieCreditRes = movieCredit.data;
      setRecommended(recommended.data.results);
      setCast(movieCreditRes.cast);
      console.log(movieCreditRes.cast);
      setCrew(movieCreditRes.crew);
      setTimeout(() => {
        setMovieDetail(movieDetailRes.data);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:justify-between">
        <DetailCol1 />
        <DetailCol2 />
      </div>
    </div>
  );
};

export default MovieDetails;
