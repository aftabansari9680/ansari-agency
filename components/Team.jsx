import React from "react";
import Ourteam from "./Ourteam";

const Team = () => {
  return (
    <div className=" flex flex-col  items-center  justify-center gap-10 py-4 md:py-10 px-4 md:px-20 bg-[#0b1b1b]">
      <h1 className="flex justify-center">
        <span className=" font-bold text-6xl bg-gradient-to-b from-purple-950  to-teal-800 text-transparent bg-clip-text ">
          Our Teams
        </span>
      </h1>
      <div className="text-white font-bold text-center">
        Meet our diverse team of creative minds, developers, and strategists –
        the driving force behind every project's success.
      </div>

      <Ourteam />
    </div>
  );
};

export default Team;
