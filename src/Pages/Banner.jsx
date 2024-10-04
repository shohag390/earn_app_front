import { useContext } from "react";
import image from "../assets/Image/songshu-coingift.svg";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Banner = () => {
  const { user, role, token } = useContext(authContext);
  return (
    <div className="md:flex md:items-center md:justify-between md:h-[86vh] md:px-[80px] px-[20px] bg-[#ffd4b1] md:py-0 py-[30px] md:font-[cursive]">
      <div className="md:w-[50%]">
        <h1 className="md:text-[35px] text-[25px] capitalize font-bold md:w-[86%] md:leading-[40px] text-[#444444]">
          Earn Rewards And Get Money from coinpayu
        </h1>
        <p className="md:w-[80%] md:pt-[10px] pt-[6px] text-[#615f5f] text-[18px]">
          Here you can earn money by playing videos, quizzes and games by
          opening an account.
        </p>
        <div className="md:pt-[20px] pt-[15px]">
          <Link
            to={token ? "/user/profile/me" : "/login"}
            className="py-[10px] px-[30px] bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
          >
            Get Start
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] md:pt-0 pt-[30px]">
        <img className="md:h-[400px] w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
