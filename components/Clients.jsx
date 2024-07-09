import React from "react";

const Clients = () => {
  const clients = [
    {
      name: "Sarim Ansari",
      comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea",
    },
    {
      name: "Talha Ansari",
      comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea",
    },
  ];
  return (
    <div className="text-white bg-black flex gap-10 py-5 px-5 pb-10 max-sm:flex-wrap max-md:flex-wrap ">
      {clients.map(({ item, i }) => (
        <div
          key={i}
          className="text-center flex flex-col gap-10 py-10 px-10 border-2 hover:border-[#9fe9ef] border-[#0b373a] rounded-2xl bg-[#04191e] hover:bg-[#04090a] duration-300"
        >
          <div>{item.name}</div>
          <div>{item.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
