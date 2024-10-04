import React, { useState } from "react";
import { toast } from "react-toastify";
import Add from "../../Pages/Add";

const Money = ({ data }) => {
  const [copy, setCopy] = useState("http://coinpayu29.netlify.app/signup");

  const handelCopyText = () => {
    navigator.clipboard.writeText(copy);
    toast("Copy Link Success");
  };
  const handelWithdrow = () => {
    toast("আপনার অ্যাকাউন্ট থেকে টাকা তুলতে হলে ১৫০ টাকা থাকতে হবে");
  };

  return (
    <div>
      <h4 className="text-[#ffffff] text-[18px] font-bold pb-[10px]">
        Your Info
      </h4>
      <Add />
      <div className="w-full h-full md:hidden input_style p-[20px] rounded-md">
        <img className="h-[250px] w-full rounded-md" src={data?.photo} alt="" />
        <div>
          <h4 className="text-center text-[20px] uppercase font-bold text-[#ffffff] pt-[8px]">
            {data?.name}
          </h4>
          <p className="text-center text-[20px] font-bold text-[#ffffff]">
            Your Blance: ৳<span>{data?.blance}</span>
          </p>
          <button
            onClick={handelWithdrow}
            className="py-[10px] mt-[20px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
          >
            Withdraw
          </button>
          <button
            onClick={handelCopyText}
            className="py-[10px] mt-[20px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
          >
            Refar Link Copy
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between md">
        <div className="w-full input_style p-[20px]">
          <div className="flex justify-between gap-[40px]">
            <div className="w-[50%]">
              <img
                className="h-[170px] w-[170px] rounded-md"
                src={data?.photo}
                alt=""
              />
              <div className="py-[8px] pb-[20px]">
                <div className="flex justify-between w-full">
                  <h4 className="text-[18px] text-[#ffffff] w-[20%]">Name</h4>
                  <h4 className="text-[18px] text-[#ffffff] w-[80%]">
                    {data?.name}
                  </h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4 className="text-[18px] text-[#ffffff] w-[20%]">Email</h4>
                  <h4 className="text-[18px] text-[#ffffff] w-[80%]">
                    {data?.email}
                  </h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4 className="text-[18px] text-[#ffffff] w-[20%]">Phone</h4>
                  <h4 className="text-[18px] text-[#ffffff] w-[80%]">
                    {data?.phone}
                  </h4>
                </div>
              </div>
              <a
                href="#"
                className="py-[8px] px-[30px] bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
              >
                About You
              </a>
            </div>
            <div className="w-[50%]">
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Create Account
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  ৳ {data?.blance}
                </h4>
              </div>
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Quizze Blance
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">৳ 0</h4>
              </div>
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Video Blance
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">৳ 0</h4>
              </div>
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Game Blance
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">৳ 0</h4>
              </div>
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Refar Blance
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">৳ 0</h4>
              </div>
              <div className="h-[2px] w-full bg-[#ffffff] my-[5px]"></div>
              <div className="flex justify-between w-full">
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">
                  Total Blance
                </h4>
                <p className="text-[18px] text-[#ffffff] w-[20%]">:</p>
                <h4 className="text-[18px] text-[#ffffff] w-[40%]">৳ 50</h4>
              </div>
              <div className="py-[3px] rounded-md mt-[10px] px-[20px] bg-[#ff8e3254]">
                <p className="text-center text-[14px] capitalize text-[#ffffff]">
                  Withdraw if total blance 150 BDT
                </p>
              </div>
              <div className="flex gap-[15px] flex-col pt-[15px]">
                <button
                  onClick={handelWithdrow}
                  className="py-[8px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
                >
                  Withdraw
                </button>
                <button
                  onClick={handelCopyText}
                  className="py-[8px] w-full bg-[#ff8d32] text-[#ffffff] font-bold rounded-md hover:bg-[#ff7300] duration-500"
                >
                  Refar Link Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
