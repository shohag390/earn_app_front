import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/songshu-coingift.svg";
import { MdKeyboardDoubleArrowRight, MdMarkEmailUnread } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";

const footerlink01 = [
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Home",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "About",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Game",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Videos",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Quizzes",
  },
];
const footerlink02 = [
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Guides",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Research",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Experts",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "User",
  },
  {
    link: "https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a",
    display: "Agencies",
  },
];

const Footer = () => {
  return (
    <footer className="md:px-[80px] px-[20px] bg-purple-900 md:font-[cursive]">
      <div className="md:py-[30px] py-[20px] border-b-[2px] grid md:grid-cols-4 grid-cols-2 md:gap-[30px] gap-[20px]">
        <div className="col-span-2 md:col-span-1">
          <div>
            <Link className="flex items-center gap-[2px]" to={"/"}>
              <img
                className="md:h-[65px] h-[60px] md:w-[65px] w-[60px] rounded-full"
                src={logo}
                alt=""
              />
              <h4 className="md:text-[30px] text-[23px] font-bold text-[#ff8d32]">
                CoinPayu
              </h4>
            </Link>
          </div>
          <p className="text-[#ffffff] text-[18px]">
            Here you can earn money by playing videos, quizzes and games by
            opening an account.
          </p>
        </div>
        <div>
          <h4 className="text-[#ffffff] text-[20px] font-bold pb-[15px]">
            Quick Links
          </h4>
          <ul>
            {footerlink01?.map((item, index) => (
              <li key={index} className="flex items-center gap-2 pb-[5px]">
                <MdKeyboardDoubleArrowRight className="text-[#ff8d32]" />
                <Link
                  className="text-[#ffffff] text-[18px] hover:text-[#ff8d32] duration-500"
                  to={item?.link}
                >
                  {item?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#ffffff] text-[20px] font-bold pb-[15px]">
            Features
          </h4>
          <ul>
            {footerlink02?.map((item, index) => (
              <li key={index} className="flex items-center gap-2 pb-[5px]">
                <MdKeyboardDoubleArrowRight className="text-[#ff8d32]" />
                <Link
                  className="text-[#ffffff] text-[18px] hover:text-[#ff8d32] duration-500"
                  to={item?.link}
                >
                  {item?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-[#ffffff] text-[20px] font-bold pb-[15px]">
            Contact Info
          </h4>
          <ul>
            <li className="flex items-center gap-[10px] text-[#ffffff] pb-[5px]">
              <MdMarkEmailUnread className="text-[18px]" />
              <span className="text-[18px]">coinpayu@gamil.com</span>
            </li>
            <li className="flex items-center gap-[10px] text-[#ffffff] pb-[5px]">
              <FaEarthAsia className="text-[18px]" />
              <span className="text-[18px]">coinpayu.netlify.app</span>
            </li>
            <li className="flex items-center gap-[10px] text-[#ffffff] pb-[5px]">
              <IoIosHelpCircle className="text-[18px]" />
              <span className="text-[18px]">coinpayu_help.netlify.app</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-[10px] text-[18px] leading-[20px] text-[#ffffff]">
        <p>Copyright &copy; CoinPayu 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
