import React from "react";

const Terms = () => {
  return (
    <div className="flex justify-center items-center flex-wrap p-10 pt-10 md:pt-52 gap-4 font-bold bg-black text-white">
      <div className="cursor-pointer hover:text-purple-500 duration-300">
        Home
      </div>
      <div className="cursor-pointer hover:text-purple-500 duration-300">
        Our Services
      </div>
      <div className="cursor-pointer hover:text-purple-500 duration-300">
        About Us
      </div>
      <div className="cursor-pointer hover:text-purple-500 duration-300">
        Projects
      </div>
      <div className="cursor-pointer hover:text-purple-500 duration-300">
        Teams
      </div>
    </div>
  );
};

export default Terms;
