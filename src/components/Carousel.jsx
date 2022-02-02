import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { trendingUrl } from "../utils/requests";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselThumb from "./CarouselThumb";

const Carousel = () => {
  const [trends, setTrends] = useState([]);
  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendsRes = await axios(trendingUrl);
      setTrends(trendsRes.data.results);
    };
    fetchMovies();
  }, []);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Slider
      ref={sliderRef}
      adaptiveHeight={true}
      fade={true}
      arrows={false}
      autoplay={true}
      autoplaySpeed={6000}
    >
      {trends.map((trend) => (
        <CarouselThumb
          key={trend.id}
          {...trend}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
