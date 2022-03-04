import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { baseUrl, endUrl } from "../utils/requests";
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

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movieDetailRes = await axios(
        `${baseUrl}/movie/${id}?${endUrl}&append_to_response=videos`
      );
      const recommended = await axios(
        `${baseUrl}/movie/${id}/recommendations?${endUrl}&page=1`
      );
      const similar = await axios(
        `${baseUrl}/movie/${id}/similar?${endUrl}&page=1`
      );
      const movieCredit = await axios(
        `${baseUrl}/movie/${id}/credits?${endUrl}`
      );
      setMovieDetail(movieDetailRes.data);
      setRecommended(recommended.data.results);
      setSimilar(similar.data.results);
      setCrew(movieCredit.data.crew);
      setCast(movieCredit.data.cast);
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
    <div className="min-h-screen">
      <Header />
      <div className="relative container mx-auto flex flex-col lg:flex-row lg:justify-between pt-5 pb-14">
        <DetailCol1 />
        <DetailCol2 />
      </div>
    </div>
  );
};

export default MovieDetail;
