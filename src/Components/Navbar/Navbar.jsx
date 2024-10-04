import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Image/songshu-coingift.svg";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";

const navlink = [
  {
    link: "home",
    display: "Home",
  },
  {
    link: "user/profile/me",
    display: "Games",
  },
  {
    link: "user/profile/me",
    display: "Videos",
  },
  {
    link: "user/profile/me",
    display: "Quizzes",
  },
];

const Navbar = () => {
  const { user, role, token } = useContext(authContext);
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 md:font-[cursive]">
      <div className="bg-[#ff8d32] md:h-[4vh] h-[3vh] flex items-center justify-center md:px-[80px] px-[20px]">
        <marquee behavior="" direction="left" className="text-[#fff]">
          এখানে একাউন্ট খুলে ভিডিও ,কুইজ ও গেম খেলে আপনারা টাকা ইনকাম করতে
          পারবে। এখানে অনেক ধরণের গেম আছে। আপনি একজন প্রতিভাবান ব্যক্তি হলে
          কুইজের মাধ্যমে টাকা ইনকাম করতে পারবে একদম ফ্রিতে
        </marquee>
      </div>
      <div className="bg-purple-900 md:px-[80px] px-[20px] md:h-[10vh] h-[8vh] flex items-center justify-between">
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
        <div className="md:flex md:items-center md:gap-[30px]">
          <ul className="md:flex md:items-center md:gap-[30px] hidden">
            {navlink?.map((item, index) => (
              <li key={index} className="text-[18px]">
                <NavLink
                  className={"text-[#ffffff] hover:text-[#ff8d32]"}
                  to={item?.link}
                >
                  {item?.display}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            {token && user ? (
              <Link to={`${role === "user" ? "/user/profile/me" : "/admin"}`}>
                <img
                  className="h-[40px] w-[40px] rounded-full border-[1px] border-[#ff8d32]"
                  src={user.photo}
                  alt=""
                />
              </Link>
            ) : (
              <Link
                className="md:px-[30px] px-[20px] py-[7px] bg-[#ff8d32] rounded-md font-bold text-[#ffffff] hover:bg-[#ff7300] duration-500"
                to={"/signup"}
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
