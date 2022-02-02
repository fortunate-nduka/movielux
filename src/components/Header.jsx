import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg md:text-xl font-bold uppercase tracking-widest">
          <h1 class="font-liberty">
            <span class="letter letter-ani"></span>
            <span class="letter">O</span>
            <span class="letter letter-3">V</span>
            <span class="letter letter-4">I</span>
            <span class="letter letter-4">E</span>
            <span class="letter letter-ani">L</span>
            <span class="letter letter-4">U</span>
            <span class="letter letter-4">X</span>
          </h1>
        </Link>
        <BiSearch fontSize={23} />
      </div>
    </header>
  );
};

export default Header;
