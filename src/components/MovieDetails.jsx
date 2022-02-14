import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { Link, useParams } from "react-router-dom";
import { baseUrl, movieDetailUrl } from "../utils/requests";
import axios from "axios";
import Header from "./Header";
import { imgBase } from "../utils/requests";
// import { AiOutlineEye } from "react-icons/ai";
import Moment from "react-moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import millify from "millify";
import Loader from "./Loader";
import not_available from "../assets/Not_Available.png";
import no_image from "../assets/no_image.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const MovieDetails = () => {
  const {
    movieDetail,
    setMovieDetail,
    setLoading,
    loading,
    recommended,
    setRecommended,
    cast,
    setCast,
    // crew,
    setCrew,
  } = useContext(DataContext);
  const recommendedSlice = recommended.slice(0, 8);
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

  let lang = "";
  switch (movieDetail.original_language) {
    case "en":
      lang = "English";
      break;
    case "ko":
      lang = "Korean";
      break;
    case "ja":
      lang = "Japanese";
      break;
    case "la":
      lang = "Latin";
      break;
    case "nl":
      lang = "Dutch";
      break;
    case "es":
      lang = "Spanish";
      break;
    case "de":
      lang = "Deutsch";
      break;
    case "pl":
      lang = "Polish";
      break;
    case "fr":
      lang = "French";
      break;
    default:
      lang = movieDetail.original_language;
      break;
  }

  const dateToFormat = movieDetail.release_date || movieDetail.first_air_date;

  const time_convert = (num) => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + "hours : " + minutes + "minutes";
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div className="px-6 flex flex-col lg:flex-row gap-x-8">
        <div className="lg:basis-[74%]">
          <div className="">
            <div className="md:flex items-start gap-8">
              {movieDetail.poster_path ? (
                <img
                  src={imgBase + movieDetail.poster_path}
                  alt=""
                  className="mt-4 md:mt-8 mb-5 w-[17rem] md:w-[15rem] rounded-lg shadow-lg"
                />
              ) : (
                <img
                  src={no_image}
                  alt=""
                  className="mt-4 md:mt-8 mb-5 w-[17rem] md:w-[15rem] rounded-lg shadow-lg"
                />
              )}
              <div className="">
                <div className="font-black text-3xl mt-7 mb-6">
                  {movieDetail.title || movieDetail.name}
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div style={{ width: 50, height: 50 }} className="">
                    <CircularProgressbar
                      value={movieDetail.vote_average}
                      maxValue={10}
                      text={`${movieDetail.vote_average / 1}`}
                      strokeWidth={7}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#000000",
                        textColor: "#fff",
                        pathColor: "#ff3030",
                        trailColor: "transparent",
                        textSize: "30px",
                      })}
                    />
                  </div>
                  <span>{time_convert(movieDetail.runtime)}</span>
                  <Moment date={dateToFormat} fromNow />
                </div>
                <div className="">
                  {movieDetail.tagline && (
                    <div className="flex items-end gap-4 mb-10">
                      <span className="font-bold text-sm">Tagline: </span>
                      <span className="text-gray-400 italic">
                        {movieDetail.tagline}
                      </span>
                    </div>
                  )}
                  <div className="flex items-end gap-4 mb-10">
                    <span className="font-bold text-sm">
                      Parental Guidance:{" "}
                    </span>
                    {movieDetail.adult === true ? (
                      <span className="text-gray-400 font-bold">YES</span>
                    ) : (
                      <span className="text-gray-400 font-bold">NO</span>
                    )}
                  </div>
                  {movieDetail.original_language && (
                    <div className="flex items-end gap-4 mb-10">
                      <span className="font-bold text-sm">Language: </span>
                      <span className="text-gray-400">{lang}</span>
                    </div>
                  )}
                  {movieDetail.genres && (
                    <div className="flex flex-col gap-4 mb-10">
                      <span className="font-bold text-sm">Genres: </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                        {movieDetail.genres.map((genre) => (
                          <span className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400">
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* {movieDetail.budget !== 0 && (
            <div className="flex items-end gap-4 mb-9">
              <span className="font-bold text-sm">Budget: </span>
              <span className="text-gray-400">
                {millify(movieDetail.budget)} Dollars
              </span>
            </div>
          )} */}
                  {movieDetail.production_companies && (
                    <div className="flex flex-col gap-4 mb-10">
                      <span className="font-bold text-sm">
                        Production Companies:{" "}
                      </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-3 items-end">
                        {movieDetail.production_companies.map((pc) => (
                          <span className="border md:border-2 border-red-900 shadow-lg px-5 py-3 rounded-full text-gray-400">
                            {pc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {movieDetail.overview && (
              <div className="flex flex-col gap-1 mb-9 xl:w-[80%]">
                <span className="font-bold text-lg block">Synopsis: </span>
                <span className="text-gray-400 text-sm leading-6">
                  {movieDetail.overview}
                </span>
              </div>
            )}
            <div className="mt-14 lg:mt-10 ">
              <div className="flex items-center justify-between mb-5">
                <div className="font-Heavy uppercase text-xl sm:text-lg font-bold border-l-8 border-l-red-600 pl-2">
                  Casts
                </div>
                <div className="">
                  <button className="border border-white rounded-full p-2 mr-3 shadow-lg">
                    <BsArrowLeft fontSize={15} />
                  </button>
                  <button className="border border-white rounded-full p-2 shadow-lg">
                    <BsArrowRight fontSize={15} />
                  </button>
                </div>
              </div>
              <Slider {...settings}>
                {cast.map((c) => (
                  <div style={{ margin: 40 }}>
                    <img
                      src={imgBase + c.profile_path}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="lg:basis-[26%]">
          <div className="font-Heavy uppercase text-xl sm:text-lg font-bold border-l-8 border-l-red-600 pl-2 mt-14 lg:mt-10 mb-5">
            Recommended
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-x-5 gap-y-10">
            {recommendedSlice.map((recommend) => (
              <Link to={`/movie/${recommend.id}`}>
                <div className="flex flex-col cursor-pointer">
                  {recommend.backdrop_path ? (
                    <img
                      src={imgBase + recommend.backdrop_path}
                      alt=""
                      className="w-full shadow-lg"
                    />
                  ) : (
                    <img
                      src={not_available}
                      alt=""
                      className="w-full shadow-lg"
                    />
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="">
                      <div
                        className="text-sm font-bold
                  "
                      >
                        {recommend.title}
                      </div>
                      <Moment
                        date={recommend.release_date}
                        fromNow
                        className="mt-2 text-[11px] text-gray-400"
                      />
                    </div>
                    <div style={{ width: 42, height: 42 }} className="">
                      <CircularProgressbar
                        value={recommend.vote_average}
                        maxValue={10}
                        text={`${Math.round(recommend.vote_average * 10) / 10}`}
                        strokeWidth={9}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#000000",
                          textColor: "#fff",
                          pathColor: "#ffff00",
                          trailColor: "transparent",
                          textSize: "30px",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
