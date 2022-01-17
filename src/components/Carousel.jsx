import { useState, useEffect} from "react";
import axios from "axios";
import { trendingUrl } from "../utils/requests";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselThumb from "./CarouselThumb";

const Carousel = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendsRes = await axios(trendingUrl);
        setTrends(trendsRes.data.results);
        console.log(trendsRes.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovies();
  }, []);
  const carouselRef = useRef();

  return (
    <Slider
      adaptiveHeight={true}
      fade={true}
      arrows={false}
      autoplay={true}
      autoplaySpeed={4000}
    >
      {trends.map((trend) => (
        <CarouselThumb key={trend.id} {...trend}/>
      ))}
    </Slider>
  );
};

export default Carousel;
