import axios from "axios";
import { useContext, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import no_image from "../assets/no_image.jpg";
import DataContext from "../context/DataContext";
import { baseUrl, endUrl, imgBase } from "../utils/requests";

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
    <div className="pt-16 px-5">
      <div className="space-y-7 mt-2 pl-1 px-2 text-[13px] md:text-sm">
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
            <span className="text-white font-normal text-[13px] leading-6 lg:w-[90%]">
              {biography}
            </span>
          </div>
        )}
      </div>
      <div className="lg:hidden animate-pulse">
        {profile_path ? (
          <img
            src={imgBase + profile_path}
            alt=""
            className="w-[18rem] md:w-[20rem] mx-auto rounded-md shadow-2xl mt-16"
          />
        ) : (
          <img
            src={no_image}
            className="w-[18rem] md:w-[20rem] mx-auto rounded-md shadow-2xl mt-16"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

const PersonDetail = () => {
  const { setLoading, person, setPerson } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchPersonDetail = async () => {
    try {
      setLoading(true);
      const personDetailRes = await axios(`${baseUrl}/person/${id}?${endUrl}`);
      setPerson(personDetailRes.data);
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
    <div className="pb-14">
      <header className="bg-[rgba(0,0,0,.6)] py-6 px-5 flex items-center shadow-lg relative z-20">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-7" />
          </Link>
          <div
            onClick={() => navigate(-1) && setPerson("")}
            className="cursor-pointer"
          >
            <FaRegTimesCircle className="text-2xl" />
          </div>
        </div>
      </header>
      <div className="px-0 sm:px-4 mx-auto md:w-[90%] lg:w-[95%] xl:w-[80%] 2xl:w-[70%] min-h-[75vh]">
        <PersonDetailContainer {...person} />
      </div>
    </div>
  );
};

export default PersonDetail;
