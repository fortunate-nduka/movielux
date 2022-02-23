import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg md:text-xl font-bold uppercase tracking-widest"
        >
          <img src={logo} alt="logo" className="w-8 md:w-10" />
        </Link>
        <Link to="/search" className="cursor-pointer">
          <BiSearch fontSize={23} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
