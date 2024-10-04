import { useContext, useState } from "react";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { HiOutlineLogout } from "react-icons/hi";
import useGetProfile from "../../hooks/useFetchData";
import { MdDelete, MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { SiQuizlet } from "react-icons/si";
import VideosUplod from "../VideosUplod/VideosUplod";
import Quizzes from "../Quizzes/Quizzes";
import Game from "../../Game/Game";
import { FaLiraSign } from "react-icons/fa";
import Money from "../Money/Money";
import Add from "../../Pages/Add";

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/user/profile/me`);

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };

  const [tab, setTab] = useState("videos");
  return (
    <>
      <Add />
      <div className="md:px-[80px] px-[20px] md:py-[30px] py-[25px] flex justify-between items-start gap-[30px] md:font-[cursive]">
        <div className="md:w-[25%] md:flex md:flex-col md:justify-center md:items-center hidden md:gap-[20px]">
          <div className="box_style_two p-[25px] w-full flex flex-col justify-center items-center gap-[10px] rounded-[20px] bg-purple-900">
            <img
              className="h-[230px] w-full rounded-[10px]"
              src={data?.photo}
              alt=""
            />
            <div>
              <h4 className="text-center text-[18px] md:leading-[15px] font-bold uppercase text-[#ffffff]">
                {data?.name}
              </h4>
              <p className="text-center text-[16px] md:leading-[25px] font-bold text-[#ffffff]">
                {data?.email}
              </p>
            </div>
          </div>
          <div className="box_style_two p-[25px] w-full flex flex-col justify-center items-center gap-[10px] rounded-[20px] bg-purple-900">
            <button
              onClick={handleLogout}
              className="flex items-center gap-[4px] uppercase font-bold bg-[#ff8d32] w-full justify-center py-[10px] rounded-md text-[#ffffff] hover:bg-[#ff7300] duration-500"
            >
              <HiOutlineLogout className="text-[18px]" /> <span>Logout</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-[4px] uppercase font-bold bg-[#ff8d32] w-full justify-center py-[10px] rounded-md text-[#ffffff] hover:bg-[#ff7300] duration-500"
            >
              <MdDelete className="text-[18px]" /> <span>Delete</span>
            </button>
          </div>
        </div>
        <div className="md:w-[75%] w-full flex flex-col gap-[20px]">
          <div className="w-full bg-purple-900 flex items-center justify-between text-[#ffffff] rounded-[10px] p-[20px] box_style_two gap-[20px]">
            <button
              onClick={() => setTab("videos")}
              className={`${
                tab === "videos" ? "bg-[#ff8d32]" : ""
              } h-[45px] w-full input_style flex items-center justify-center rounded-md`}
            >
              <MdOutlineSlowMotionVideo className="text-[20px]" />
            </button>
            <button
              onClick={() => setTab("game")}
              className={`${
                tab === "game" ? "bg-[#ff8d32]" : ""
              } h-[45px] w-full input_style flex items-center justify-center rounded-md`}
            >
              <IoGameController className="text-[20px]" />
            </button>
            <button
              onClick={() => setTab("quizzes")}
              className={`${
                tab === "quizzes" ? "bg-[#ff8d32]" : ""
              } h-[45px] w-full input_style flex items-center justify-center rounded-md`}
            >
              <SiQuizlet className="text-[20px]" />
            </button>
            <button
              onClick={() => setTab("money")}
              className={`${
                tab === "money" ? "bg-[#ff8d32]" : ""
              } h-[45px] w-full input_style flex items-center justify-center rounded-md`}
            >
              <FaLiraSign className="text-[20px]" />
            </button>
            <button
              onClick={handleLogout}
              className="h-[45px] w-full input_style flex items-center justify-center rounded-md md:hidden"
            >
              <HiOutlineLogout className="text-[20px]" />
            </button>
            <button className="h-[45px] w-full input_style flex items-center justify-center rounded-md md:hidden">
              <MdDelete className="text-[20px]" />
            </button>
          </div>
          <div className="h-full bg-purple-900 rounded-[20px] input_style p-[20px]">
            {tab === "videos" && <VideosUplod />}
            {tab === "game" && <Game />}
            {tab === "quizzes" && <Quizzes />}
            {tab === "money" && <Money data={data} />}
          </div>
        </div>
      </div>
      <Add />
    </>
  );
};

export default Dashboard;
