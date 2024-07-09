import Image from "next/image";
import React from "react";

const Ourteam = () => {
  const ourteam = [
    { name: "Aftab Ansari", work: "Ux/Ui", image: "/IMG_20230828_073042.jpg" },
    {
      name: "Abdullah Ansari",
      work: "web developer",
      image: "/WhatsApp Image 2024-07-06 at 17.03.30_05a04b2f.jpg",
    },
    {
      name: "Faizan Ansari",
      work: "Frontend developer",
      image: "/WhatsApp Image 2024-07-06 at 17.05.54_baba6a62.jpg",
    },
    {
      name: "Hadi Ansari",
      work: "content writer",
      image: "/IMG20230824160637.jpg",
    },
  ];
  return (
    <div className="text-white flex gap-5 flex-wrap justify-center px-3 ">
      {ourteam.map((item,i) => (
        <div key={i} className="bg-[#05242d] overflow-hidden rounded-2xl border-2 border-[#05242d] hover:border-[#5ca1a5] duration-300 ">
          <div className="h-40 w-40 rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full rounded-2xl object-bottom object-cover transition ease-in-out hover:scale-125 duration-500"
              src={item.image}
              height={"100"}
              width={"100"}
              alt={item.name}
            ></Image>
          </div>
          <div className="pb-5">
            <div className="py-3 text-center">{item.name}</div>
            <div className="text-center">{item.work}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ourteam;
