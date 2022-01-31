import { Fragment } from "react";
import Movies from "./Movies";
import Carousel from "./Carousel";
import Nav from "./Nav";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <Nav />
      <Movies />
    </Fragment>
  );
};

export default Home;
