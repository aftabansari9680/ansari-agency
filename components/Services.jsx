import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore utnisi aspernatur alias",
    },
    {
      title: "Product Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore utnisi aspernatur alias",
    },
    {
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore utnisi aspernatur alias",
    },
    {
      title: "Graphic Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore utnisi aspernatur alias",
    },
  ];
  return (
    <div className="text-white bg-black flex  gap-5 p-5 py-4 flex-wrap justify-center">
      {services.map((item) => (
        <div className=" w-60 border-2 hover:border-[#9fe9ef] border-[#0b373a] duration-300  px-4 py-4 rounded-2xl flex flex-col gap-5 bg-[#0c4042]">
          <div className="">{item.title}</div>
          {item.desc}
        </div>
      ))}
    </div>
  );
};

export default Services;
