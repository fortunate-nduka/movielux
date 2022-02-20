import { Fragment, useContext, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import Slider from "react-slick";
import DataContext from "../context/DataContext";
import { imgBase } from "../utils/requests";

export const MovieCredits = () => {
  const { cast, crew } = useContext(DataContext);
  const [rating, setRating] = useState(100);
  const castSliderRef = useRef(null);
  const crewSliderRef = useRef(null);

  const castPrev = () => {
    castSliderRef.current.slickPrev();
  };
  const castNext = () => {
    castSliderRef.current.slickNext();
  };
  const crewPrev = () => {
    crewSliderRef.current.slickPrev();
  };
  const crewNext = () => {
    crewSliderRef.current.slickNext();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    // fade: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slideToScroll: 2,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="mt-24">
        <div className="flex items-center justify-between mb-10">
          <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2">
            Casts
          </div>
          <div className="space-x-2">
            <button className="border-2 border-white rounded-full p-1 shadow-lg">
              <BsArrowLeft fontSize={13} onClick={castPrev} />
            </button>
            <button className="border-2 border-white rounded-full p-1 shadow-lg">
              <BsArrowRight fontSize={13} onClick={castNext} />
            </button>
          </div>
        </div>
        <Slider ref={castSliderRef} {...settings}>
          {cast.map((c) => (
            <div className="px-2">
              <img
                src={imgBase + c.profile_path}
                alt=""
                className="w-[15rem]"
              />
              <div className="space-y-1 mt-2 pl-1 text-xs">
                <div className="">
                  Name:{" "}
                  <span className="text-gray-400 italic">
                    {c.name || c.original_name}{" "}
                    {c.gender === 1
                      ? "- Female"
                      : c.gender === 2
                      ? "- Male"
                      : ""}
                  </span>
                </div>
                <div className="">
                  Character:{" "}
                  <span className="text-gray-400 italic">{c.character}</span>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <Rating
                    className="react-simple-star-rating"
                    style={{"display":"flex"}}
                    size={15}
                    iconsCount={2}
                    readonly={true}
                    ratingValue={rating}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-24">
        <div className="flex items-center justify-between mb-10">
          <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2">
            Crew
          </div>
          <div className="space-x-2">
            <button className="border-2 border-white rounded-full p-1 shadow-lg">
              <BsArrowLeft fontSize={13} onClick={crewPrev} />
            </button>
            <button className="border-2 border-white rounded-full p-1 shadow-lg">
              <BsArrowRight fontSize={13} onClick={crewNext} />
            </button>
          </div>
        </div>
        <Slider ref={crewSliderRef} {...settings}>
          {crew.map((c) => (
            <div className="px-2">
              <img
                src={imgBase + c.profile_path}
                alt=""
                className="w-[15rem]"
              />
              <div className="space-y-1 mt-2 pl-1 text-xs">
                <div className="">
                  Name:{" "}
                  <span className="text-gray-400 italic">
                    {c.name || c.original_name}{" "}
                    {c.gender === 1
                      ? "- Female"
                      : c.gender === 2
                      ? "- Male"
                      : ""}
                  </span>
                </div>
                <div className="">
                  Department:{" "}
                  <span className="text-gray-400 italic">
                    {c.known_for_department}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};
