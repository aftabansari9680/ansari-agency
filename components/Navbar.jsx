import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center p-4 fixed w-full ">
      <h1>
        <span className=" font-bold  bg-gradient-to-b from-purple-400  to-black text-transparent bg-clip-text text-3xl ">
          Ansari
        </span>
      </h1>
      <div className=" hidden md:flex gap-10 font-bold text-white ">
        <Link href={"#home"} className="cursor-pointer hover:text-purple-500 duration-300">
          Home
        </Link>
        <Link href={"#OurServices"} className="cursor-pointer hover:text-purple-500 duration-300">
          Our Services
        </Link>
        <Link href={"#AboutUs"} className="cursor-pointer hover:text-purple-500 duration-300">
          About Us
        </Link>
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          Projects
        </div>
        <div className="cursor-pointer hover:text-purple-500 duration-300">
          Teams
        </div>
      </div>
      <button className="text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black hover:from-black hover:to-black transition ease-in-out duration-300 rounded-xl px-4 py-2 hover:text-purple-500">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
