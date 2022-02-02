import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const PageControl = () => {
  return (
    <div className="flex items-center justify-center mb-10">
      <button className="px-5 py-3 bg-red-600 rounded-full text-sm tracking-widest flex items-center justify-center gap-2">
        <BsArrowLeft />
        Prev
      </button>
      <div className="mx-5 text-sm">Page 1</div>
      <button className="px-5 py-3 bg-red-600 rounded-full text-sm tracking-widest flex items-center justify-center gap-2">
        Next
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageControl;
