import { useContext } from "react";
import DataContext from "../context/DataContext";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const PageControl = () => {
  const { page, setPage } = useContext(DataContext);

  const handleNext = (prevState) => {
    setPage((prevState) => prevState + 1);
  };
  const handlePrev = (prevState) => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex items-center justify-center mt-20 md:mt-24 mb-14">
      <Link to="nav-container" spy={true}>
        {page <= 1 ? (
          <button className="bg-gray-900 px-4 py-3 rounded-full text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 text-gray-500">
            <BsArrowLeft />
            Prev
          </button>
        ) : (
          <button
            onClick={handlePrev}
            className="px-4 py-3 bg-red-600 rounded-full text-xs md:text-sm tracking-widest flex items-center justify-center gap-2"
          >
            <BsArrowLeft />
            Prev
          </button>
        )}
      </Link>
      <div className="mx-5 text-sm">{`Page ${page}`}</div>
      <Link to="nav-container" spy={true}>
        <button
          onClick={handleNext}
          className="px-4 py-3 bg-red-600 rounded-full text-xs md:text-sm tracking-widest flex items-center justify-center gap-2"
        >
          Next
          <BsArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default PageControl;
