import React from "react";
import video01 from "../assets/Videos/game1.webp";
import video02 from "../assets/Videos/game2.webp";
import video03 from "../assets/Videos/game3.webp";
import video04 from "../assets/Videos/game4.webp";
import video05 from "../assets/Videos/game5.webp";
import video06 from "../assets/Videos/game6.webp";
import video07 from "../assets/Videos/game7.webp";
import video08 from "../assets/Videos/game8.webp";
import Add from "../Pages/Add";

const video = [
  {
    videoUrl: video01,
  },
  {
    videoUrl: video02,
  },
  {
    videoUrl: video03,
  },
  {
    videoUrl: video04,
  },
  {
    videoUrl: video05,
  },
  {
    videoUrl: video06,
  },
  {
    videoUrl: video07,
  },
  {
    videoUrl: video08,
  },
];

const Game = () => {
  return (
    <div>
      <h4 className="text-[#ffffff] text-[18px] font-bold pb-[10px]">Games</h4>
      <Add />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-[20px]">
        {video?.map((item, index) => (
          <div
            key={index}
            className="border-[2px] bg-[#fffcfa] border-[#ff8d32] rounded-md"
          >
            <a
              href="https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a"
              target="_blank"
            >
              <img className="w-full rounded-md" src={item?.videoUrl} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
