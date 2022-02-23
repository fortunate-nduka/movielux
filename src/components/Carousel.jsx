import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { trendingUrl } from "../utils/requests";
import Slider from "react-slick";
import CarouselThumb from "./CarouselThumb";


const Carousel = () => {
  const [trends, setTrends] = useState([]);
  const sliderRef = useRef(null);

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
      adaptiveHeight={false}
      fade={false}
      arrows={false}
      autoplay={true}
      autoplaySpeed={5000}
      speed={500}
      draggable={false}
      swipe={false}
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
