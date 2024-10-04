import React from "react";
import image from "../../assets/Image/songshu-coingift.svg";
import { Link } from "react-router-dom";
import Add from "../../Pages/Add";

const NotPage = () => {
  return (
    <>
      <Add />
      <div className="md:px-[80px] px-[20px] md:h-[86vh] h-[50vh] flex items-center justify-center flex-col text-center bg-[#ffd4b1] md:font-[cursive]">
        <img className="h-[140px] w-[140px]" src={image} alt="" />
        <div>
          <h4 className="md:text-[35px] text-[25px] font-bold text-[#444444]">
            404 Not Found
          </h4>
        </div>
        <div className="pt-[10px] flex items-center justify-center">
          <Link
            className="md:py-[10px] py-[8px] md:px-[40px] px-[30px] bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
            to={"home"}
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotPage;
