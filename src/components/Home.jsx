import { Fragment } from "react";
import Movies from "./Movies";
import Carousel from "./Carousel";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <Nav />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </Fragment>
  );
};

export default Home;
