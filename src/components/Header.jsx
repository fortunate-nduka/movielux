import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-7" />
        </Link>
        <Link to="/search" className="cursor-pointer">
          <BiSearch className="text-2xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
