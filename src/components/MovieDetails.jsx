import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import { movieDetailUrl } from "../utils/requests";
import axios from "axios";
// import Header from "./Header";
// import { imgBase } from "../utils/requests";
// import { AiOutlineEye } from "react-icons/ai";
// import Moment from "react-moment";
// import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const MovieDetails = () => {
  const { setMovieDetail, setLoading } = useContext(DataContext);
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovieDetail = async () => {
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
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // let lang = "";
  // switch (movieDetail.original_language) {
  //   case "en":
  //     lang = "English";
  //     break;
  //   case "ko":
  //     lang = "Korean";
  //     break;
  //   case "ja":
  //     lang = "Japanese";
  //     break;
  //   case "la":
  //     lang = "Latin";
  //     break;
  //   case "nl":
  //     lang = "Dutch";
  //     break;
  //   default:
  //     lang = movieDetail.original_language;
  //     break;
  // }
  // const dateToFormat = movieDetail.release_date || movieDetail.first_air_date;

  return (
    <div className="">

    </div>
      );
};

export default MovieDetails;
