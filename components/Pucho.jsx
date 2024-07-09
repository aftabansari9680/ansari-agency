import React from "react";
import Ask from "./Ask";

const Pucho = () => {
  return (
    <div className="bg-black flex max-sm:flex-col lg:flex-row max-md:flex-row gap-5 p-5">
      <form className="w-full p-10 rounded-2xl border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] text-white flex flex-col gap-4 bg-slate-800 ">
        <h1>
          <span className="bg-gradient-to-b from-purple-950  to-teal-500 text-transparent bg-clip-text text-5xl font-bold ">
            Join forces with us!
          </span>
        </h1>
        <div>
          We craft beautifully simple designs and code with love. It&apos;s as simple
          as that!
        </div>
        <div className="flex gap-4 ">
          <input
            className="p-2 w-full border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] px-4 bg-[#02090a] rounded-xl"
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
          />
          <input
            className="p-2 w-full border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] px-4 bg-[#02090a] rounded-xl"
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <input
            className="p-2 w-full border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] px-4 bg-[#02090a] rounded-xl invert-calander-icon  "
            type="date"
            id="fname"
            name="fname"
            placeholder="DD/MM/YYYY"
          />
          <input
            className=" p-2 w-full border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] px-4 bg-[#02090a] rounded-xl"
            type="text"
            id="lname"
            name="lname"
            placeholder="Address"
          />
        </div>
        <div>
          <textarea
            className="p-2 border-2 hover:border-[#2e8e9d] duration-300 border-[#373737] px-4 bg-[#02090a] rounded-xl h-60 w-[100%]"
            type="text"
            id="lname"
            name="lname"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className=" text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black hover:bg-gradient-to-tl hover:from-black hover:to-black transition ease-in-out duration-500 rounded-xl px-4 py-2 hover:text-purple-500">
            Send Here
          </button>
        </div>
      </form>

      <Ask />
    </div>
  );
};

export default Pucho;
