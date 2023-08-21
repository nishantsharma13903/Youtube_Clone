import React, { useRef, useState } from "react";
import yt_logo from "../Images/yt_logo.png";
import acc_img from "../Images/acc3.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar(Props) {
  const inpRef = useRef("");
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const getInputFieldData = (e) => {
    e.preventDefault();
    navigate("/search");
    Props.getInp(inpRef.current.value);
  };

  const showInputbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex">
        {/* Logo */}
        <div className="md:w-[20%] w-[50%] h-[65px] flex  items-center">
          <span className="text-white text-2xl mx-4 cursor-pointer">
            &#9776;
          </span>
          <img src={yt_logo} alt="" className="h-[50px]" />
        </div>
        {/* Search Bar */}
        <div className=" md:w-[60%] md:h-[65px] md:flex md:justify-center md:items-center hidden">
          <div className="relative rounded-full overflow-hidden">
            <form action="">
              <input
                ref={inpRef}
                type="text"
                className="w-[550px] h-[40px] rounded-full outline-none pl-4 border-2 border-[#222222] bg-transparent text-white text-sm placeholder:text-white placeholder:tracking-wide"
                placeholder="Search"
              />
              <button
                className="absolute top-0 right-0 text-white bg-[#222222] w-16 h-[40px]"
                onClick={getInputFieldData}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="relative top-[2px] text-white ml-10 h-[40px] w-[40px] bg-[#222222] rounded-full flex justify-center items-center">
            <i className="fa fa-microphone text-xl"></i>
          </div>
        </div>
        {/* Third Side */}
        <div className="md:w-[20%] w-[50%] flex justify-end items-center">
          <div
            className="text-white md:mx-3 ml-3 md:hidden cursor-pointer"
            onClick={showInputbar}
          >
            {showNav ? (
              <i className="fa fa-close text-xl relative top-1"></i>
            ) : (
              <i className="fa fa-search text-xl relative top-1"></i>
            )}
          </div>
          <div className="text-white md:mx-3 ml-3 relative top-1">
            <i className="fa fa-camera text-xl"></i>
          </div>
          <div className="text-white md:mx-3 ml-3 relative top-1">
            <i className="fa fa-bell-o text-xl"></i>
          </div>
          <div className="rounded-full md:mx-4 ml-3 mr-3 relative top-1">
            <img
              src={acc_img}
              alt=""
              className="rounded-full h-[30px] w-[30px]"
            />
          </div>
        </div>
      </div>

      {showNav && (
        <div className="w-full flex justify-center mt-2 md:hidden">
          <div className="relative rounded-full overflow-hidden w-[90%]">
            <form action="">
              <input
                ref={inpRef}
                type="text"
                className="w-[90%] h-[40px] rounded-full outline-none pl-4 border-2 border-[#222222] bg-transparent text-white text-sm placeholder:text-white placeholder:tracking-wide"
                placeholder="Search"
              />
              <button
                className="absolute top-0 right-0 text-white bg-[#222222] w-16 h-[40px]"
                onClick={getInputFieldData}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
