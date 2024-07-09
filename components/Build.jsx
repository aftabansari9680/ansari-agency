import React from "react";
import Project from "./Project";

const Build = () => {
  return (
    <div className="text-white flex flex-col gap-7 bg-[#020c0c] py-16 px-10">
      <h1 className="flex justify-center">
        <span className="text-center text-6xl font-bold bg-gradient-to-b from-purple-950  to-teal-800 text-transparent bg-clip-text ">
          Project Built
        </span>
      </h1>
      <div className="font-bold text-xl text-center">
        By Our Team Of Engneers
      </div>
      <div className="flex gap-16 justify-center font-semibold">
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          All
        </div>
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          Webs
        </div>
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          Apps
        </div>
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          Ux/Ui
        </div>
      </div>

      <Project />
    </div>
  );
};

export default Build;
