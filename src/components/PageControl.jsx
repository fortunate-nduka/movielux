import { useContext } from "react";
import DataContext from "../context/DataContext";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const PageControl = () => {
  const { page, setPage} = useContext(DataContext);

  const handleNext = (prevState) => {
    setPage((prevState) => prevState + 1);
  };
  const handlePrev = (prevState) => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex items-center justify-center mb-14">
      <button
        onClick={handlePrev}
        className="px-4 py-3 bg-red-600 rounded-full text-xs md:text-sm tracking-widest flex items-center justify-center gap-2"
      >
        <BsArrowLeft />
        Prev
      </button>
      <div className="mx-5 text-sm">{`Page ${page}`}</div>
      <button
        onClick={handleNext}
        className="px-4 py-3 bg-red-600 rounded-full text-xs md:text-sm tracking-widest flex items-center justify-center gap-2"
      >
        Next
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageControl;
