import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { baseUrl, movieDetailUrl } from "../utils/requests";
import axios from "axios";
import { DetailCol1, DetailCol2, Header, Loader } from "./index";

const MovieDetail = () => {
  const {
    setMovieDetail,
    setLoading,
    loading,
    setRecommended,
    setSimilar,
    setCast,
    setCrew,
  } = useContext(DataContext);

  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endUrl = `api_key=${API_KEY}`;

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${movieDetailUrl}/${id}?${endUrl}&append_to_response=videos`
      );
      const recommended = await axios(
        `${baseUrl}/movie/${id}/recommendations?${endUrl}&language=en-US&page=1`
      );
      const similar = await axios(
        `${baseUrl}/movie/${id}/similar?${endUrl}&sort_by=popularity.desc&language=en-US&page=1`
      );
      const movieCredit = await axios(
        `${baseUrl}/movie/${id}/credits?${endUrl}`
      );
      setRecommended(recommended.data.results);
      setSimilar(similar.data.results);
      console.log(similar.data.results);
      setCrew(movieCredit.data.crew);
      setCast(movieCredit.data.cast);
      setMovieDetail(movieDetailRes.data);
      console.log(movieDetailRes.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
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
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between pt-5">
        <DetailCol1 />
        <DetailCol2 />
      </div>
    </div>
  );
};

export default MovieDetail;
