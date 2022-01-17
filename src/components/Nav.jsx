import requests from "../utils/requests";
import {useNavigate} from 'react-router-dom'


const Nav = () => {
   const  Navigate = useNavigate()
  return (
    <nav className="relative my-10 py-4">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-sm sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => Navigate.push(`/?genre=${key}`)}
            className="duration-100 transform cursor-pointer lasttransition hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black" />
    </nav>
  );
};

export default Nav;
