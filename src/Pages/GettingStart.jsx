import { useContext } from "react";
import image01 from "../assets/Image/login.svg";
import image02 from "../assets/Image/earn.svg";
import image03 from "../assets/Image/cashout.svg";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const getting = [
  {
    image: image01,
    heading: "Login",
    paragraph: "Sign up a free account CoinPayu and earn coin",
  },
  {
    image: image02,
    heading: "Earn",
    paragraph: "Earn coins by browsing, videos, Gaming & Quizzes",
  },
  {
    image: image03,
    heading: "Cashout",
    paragraph: "Exchange collected coins for cash or a variety",
  },
];

const GettingStart = () => {
  const { user, role, token } = useContext(authContext);
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[25px] bg-[#fffcfa] md:font-[cursive]">
      <div className="text-center md:px-[400px] md:pb-[30px] pb-[25px]">
        <h4 className="md:text-[33px] text-[25px] capitalize font-bold md:leading-[40px] text-[#444444]">
          Getting Started is Easy
        </h4>
        <p className="pt-[6px] text-[#615f5f] text-[18px]">
          Here you can earn money by playing videos, quizzes and games by
          opening an account.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-[30px]">
        {getting?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center rounded-md box_style p-[40px] cursor-pointer bg-[#fffcfa]"
          >
            <img className="h-[150px]" src={item?.image} alt="" />
            <div>
              <h4 className="text-[20px] font-bold text-[#444444]">
                {item?.heading}
              </h4>
              <p className="pt-[3px] leading-[25px] text-[#615f5f] text-[18px]">
                {item?.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center md:pt-[30px] pt-[20px]">
        <Link
          className="py-[10px] px-[30px] bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
          to={token ? "/user/profile/me" : "/login"}
        >
          Get Start
        </Link>
      </div>
    </div>
  );
};

export default GettingStart;
