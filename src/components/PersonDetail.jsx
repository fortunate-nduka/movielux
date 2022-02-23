import axios from "axios";
import { useContext, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import bgImg from "../assets/actors-bg.jpg";
import DataContext from "../context/DataContext";
import { baseUrl, endUrl } from "../utils/requests";

const PersonDetailContainer = ({
  profile_path,
  name,
  known_for_department,
  gender,
  birthday,
  deathday,
  place_of_birth,
  popularity,
  biography,
}) => {
  return (
    <div className="h-auto mx-3 sm:mx-6 bg-[rgba(0,0,0,0.6)] p-5 px-3 sm:px-4 mt-12 lg:flex lg:items-center justify-between lg:gap-x-8 lg:px-10 py-10 rounded-lg shadow-2xl">
      <div className="space-y-7 mt-2 pl-1">
        {name && (
          <div className="font-bold text-gray-400 ">
            Name: <span className="font-normal text-white">{name}</span>
          </div>
        )}
        {known_for_department && (
          <div className="font-bold text-gray-400">
            Known For:{" "}
            <span className="text-white font-normal">
              {known_for_department}
            </span>
          </div>
        )}
        {gender && (
          <div className="font-bold text-gray-400">
            Gender:{" "}
            <span className="text-white font-normal pl-1 pr-8">
              {gender === 1 ? "Female" : gender === 2 ? "Male" : ""}
            </span>
          </div>
        )}
        {birthday && (
          <div className="font-bold text-gray-400">
            Birthday: <span className="text-white font-normal">{birthday}</span>
          </div>
        )}
        {deathday && (
          <div className="font-bold text-gray-400">
            Deathday: <span className="text-white font-normal">{deathday}</span>
          </div>
        )}
        {place_of_birth && (
          <div className="font-bold text-gray-400">
            Place of Birth:{" "}
            <span className="text-white font-normal">{place_of_birth}</span>
          </div>
        )}
        {biography && (
          <div className="font-bold flex flex-col gap-y-2 text-gray-400">
            Biography:{" "}
            <span className="text-white font-normal text-[12px] leading-6">
              {biography}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const PersonDetail = () => {
  const { setLoading, person, setPerson } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(${bgImg})`,
  };
  const fetchPersonDetail = async () => {
    try {
      setLoading(true);
      const personDetailRes = await axios(`${baseUrl}/person/${id}?${endUrl}`);
      setPerson(personDetailRes.data);
      console.log(personDetailRes.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div
      style={style}
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen pb-12"
    >
      <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg relative z-20">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 md:w-10" />
          </Link>
          <div onClick={() => navigate(-1)} className="cursor-pointer">
            <FaRegTimesCircle className="text-3xl" />
          </div>
        </div>
      </header>
      <div className="px-0 sm:px-4 mx-auto md:w-[90%] lg:w-[95%] xl:w-[80%] 2xl:w-[70%]">
        <PersonDetailContainer {...person} />
      </div>
    </div>
  );
};

export default PersonDetail;
