import React from "react";
import video01 from "../../assets/Videos/video01.png";
import video02 from "../../assets/Videos/video02.png";
import video03 from "../../assets/Videos/video03.png";
import video04 from "../../assets/Videos/video04.png";
import video05 from "../../assets/Videos/video05.png";
import video06 from "../../assets/Videos/video06.png";
import Add from "../../Pages/Add";

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
];

const VideosUplod = () => {
  return (
    <div>
      <h4 className="text-[#ffffff] text-[18px] font-bold pb-[10px]">Videos</h4>
      <Add />
      <div className="grid md:grid-cols-3 gap-[20px]">
        {video?.map((item, index) => (
          <div key={index} className="border-[2px] border-[#ff8d32] rounded-md">
            <a
              href="https://www.cpmrevenuegate.com/ajddijchy?key=2d4f2c63b85e755b17cff2674fb2018a"
              target="_blank"
            >
              <img className="rounded-md" src={item?.videoUrl} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosUplod;
