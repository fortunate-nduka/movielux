import { Fragment } from "react";
import { Movies, Carousel, Nav } from "./index";
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
