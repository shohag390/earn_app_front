import React from "react";
import video01 from "../../assets/Videos/quizzes1.png";
import video02 from "../../assets/Videos/quizzes2.png";
import video03 from "../../assets/Videos/quizzes3.png";
import video04 from "../../assets/Videos/quizzes4.png";
import video05 from "../../assets/Videos/quizzes5.png";
import video06 from "../../assets/Videos/quizzes6.png";
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

const Quizzes = () => {
  return (
    <div>
      <h4 className="text-[#ffffff] text-[18px] font-bold pb-[10px]">
        Quizzes
      </h4>
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

export default Quizzes;
