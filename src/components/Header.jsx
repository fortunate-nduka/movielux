import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,.5)] h-20 px-5 flex items-center">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold uppercase">
          Movielux
        </Link>
        <BiSearch fontSize={23} />
      </div>
    </header>
  );
};

export default Header;
