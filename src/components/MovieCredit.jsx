import { Fragment, useContext, useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Slider from "react-slick";
import DataContext from "../context/DataContext";
import { imgBase } from "../utils/requests";
import no_image from "../assets/no_image.jpg";
import { AiFillStar } from "react-icons/ai";

const MovieCredit = () => {
  const { cast, crew } = useContext(DataContext);
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
    infinite: false,
    slidesToShow: 3,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          centerMode: true,
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
          slideToScroll: 3,
        },
      },
    ],
  };

  return (
    <Fragment>
      {cast.length > 1 && (
        <div className="mt-24">
          <div className="flex items-center justify-between mb-10 px-4">
            <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2">
              Casts
            </div>
            <div className="space-x-2">
              <button className="border-2 border-white rounded-full p-2 shadow-lg">
                <BsArrowLeft fontSize={13} onClick={castPrev} />
              </button>
              <button className="border-2 border-white rounded-full p-2 shadow-lg">
                <BsArrowRight fontSize={13} onClick={castNext} />
              </button>
            </div>
          </div>
          <Slider ref={castSliderRef} {...settings}>
            {cast.map((c) => (
              <div className="px-2">
                {c.profile_path ? (
                  <img
                    src={imgBase + c.profile_path}
                    alt=""
                    className="w-[16rem] shadow-lg rounded-md"
                  />
                ) : (
                  <img
                    src={no_image}
                    alt=""
                    className="w-[16rem] shadow-lg rounded-md"
                  />
                )}
                <div className="space-y-1 mt-2 pl-1 text-[12px] md:text-xs">
                  <div className="font-bold">
                    Name:{" "}
                    <span className="text-gray-400 font-normal">
                      {c.name || c.original_name}
                    </span>
                  </div>
                  <div className="font-bold">
                    Character:{" "}
                    <span className="text-gray-400 font-normal">
                      {c.character}
                    </span>
                  </div>
                  {c.gender ? (
                    <div className="font-bold flex">
                      Gender:{" "}
                      <span className="text-gray-400 font-normal pl-1 pr-8">
                        {c.gender === 1
                          ? "Female"
                          : c.gender === 2
                          ? "Male"
                          : ""}
                      </span>
                      <span className="flex items-start text-gray-400 text-[12px] md:text-xs font-bold">
                        <AiFillStar className="mr-1 text-[#ffff00]" />
                        {Math.round(c.popularity)}
                      </span>
                    </div>
                  ) : (
                    <div className="font-bold">
                      <span className="flex items-start text-gray-400 text-[12px] md:text-xs font-bold">
                        <AiFillStar className="mr-1 text-[#ffff00]" />
                        {Math.round(c.popularity)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {crew.length > 1 && (
        <div className="mt-24">
          <div className="flex items-center justify-between mb-10 px-4">
            <div className="font-poppins uppercase text-2xl md:text-3xl font-bold border-l-8 border-l-red-600 pl-2">
              Crew
            </div>
            <div className="space-x-2">
              <button className="border-2 border-white rounded-full p-2 shadow-lg">
                <BsArrowLeft fontSize={13} onClick={crewPrev} />
              </button>
              <button className="border-2 border-white rounded-full p-2 shadow-lg">
                <BsArrowRight fontSize={13} onClick={crewNext} />
              </button>
            </div>
          </div>
          <Slider ref={crewSliderRef} {...settings}>
            {crew.map((c) => (
              <div className="px-2">
                {c.profile_path ? (
                  <img
                    src={imgBase + c.profile_path}
                    alt=""
                    className="w-[16rem] shadow-lg rounded-md"
                  />
                ) : (
                  <img
                    src={no_image}
                    alt=""
                    className="w-[16rem] shadow-lg rounded-md"
                  />
                )}
                <div className="space-y-1 mt-2 pl-1 text-[12px] md:text-xs">
                  <div className="font-bold">
                    Name:{" "}
                    <span className="text-gray-400 font-normal">
                      {c.name || c.original_name}
                    </span>
                  </div>
                  <div className="font-bold">
                    Department:{" "}
                    <span className="text-gray-400 font-normal">
                      {c.known_for_department}
                    </span>
                  </div>
                  {c.gender ? (
                    <div className="font-bold">
                      Gender:{" "}
                      <span className="text-gray-400 font-normal pl-1 pr-8">
                        {c.gender === 1
                          ? "Female"
                          : c.gender === 2
                          ? "Male"
                          : ""}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </Fragment>
  );
};

export default MovieCredit;
