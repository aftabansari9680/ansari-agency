import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Food App",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "Mobile ecommerce webside",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "Ride sharing app",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "WhatsApp Clon",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "Task Management",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "Nasheed And Mobile App",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
    {
      title: "Workout App",
      desc: " adipisicing elit. Iusto dolores possimus cum eveniet adaspernatur ut, vitae cupiditate totam quia",
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-5 flex-wrap justify-center ">
        {projects.map(({ item, i }) => (
          <div
            key={i}
            className="bg-[#0b373a] w-80 border-2 hover:border-[#9fe9ef] border-[#0b373a] duration-300 rounded-2xl flex flex-col gap-4 p-6 py-10"
          >
            <div className="">{item.title}</div>
            <div>{item.desc}</div>
            <div>
              <button className="text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black hover:from-black hover:to-black transition ease-in-out duration-300 rounded-xl px-4 py-2 hover:text-purple-500">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
