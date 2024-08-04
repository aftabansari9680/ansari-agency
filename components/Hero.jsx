import React from "react";

const Hero = () => {
  return (
    <div className="pt-10 " id="#home">
      <div className="flex flex-col items-center py-20 bg-black gap-10">
        <div className=" text-white text-center md:text-center">
          Creative Agency
        </div>
        <h1>
          <span className="text-5xl md:text-6xl text-center flex justify-center font-bold bg-gradient-to-t from-black to-purple-500 text-transparent bg-clip-text ">
            Digital Agency
          </span>
        </h1>
        <div className="text-4xl md:text-7xl max-sm:text-wrap max-md:text-wrap text-center text-white font-bold">
          Featuring Robust Design
        </div>
        <div className=" bg-[#444748] text-center px-4 mx-4 md:px-12 py-4 md:py-20 md:mx-28 rounded-3xl text-white border-2 border-[#333232] hover:border-purple-600 duration-300">
          Welcome to our digital agency, where powerful design meets innovative
          strategy. Our team excels in crafting compelling, functional digital
          experiences that captivate and convert. Specializing in web design,
          UX/UI, and interactive media, we ensure your project is not just
          visually stunning but also strategically effective. Explore how our
          robust designs can transform your online presence and drive success.
          Lets create something impactful together.
        </div>

        <div className="flex gap-5 justify-center ">
          <button className="text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black  rounded-xl px-4 py-2 hover:from-black hover:to-black transition ease-in-out duration-300 hover:text-purple-500">
            Contact Us
          </button>
          <button className="text-white border-2 border-purple-500 hover:border-purple-200 bg-purple-700 hover:text-black duration-300 rounded-xl px-4 py-2 ">
            Our Services
          </button>
        </div>
      </div>

      <div className="p-10 flex flex-col  bg-black gap-10">
        <div className="text-white flex gap-10 justify-center ">
          <div className="flex flex-col gap-5 ">
            <div className=" text-3xl md:text-6xl font-bold  ">20+</div>
            <div className=" text-xs text-center">Years of Experiences</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-3xl md:text-6xl font-bold">4.5K+</div>
            <div className="text-xs text-center">Project Completed</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-3xl md:text-6xl font-bold">10.5K+</div>
            <div className="text-xs text-center">Trusted Clients</div>
          </div>
        </div>
        {/* <div className="flex flex-col text-white gap-7" id="OurServices">
          <div className="text-5xl font-bold  text-center bg-gradient-to-b from-purple-400  to-black text-transparent bg-clip-text ">
            OurServices
          </div>
          <div className="text-xl font-bold text-center ">
            We specialize in strategic digital creativity
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
