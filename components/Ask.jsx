import React from "react";

const Ask = () => {
  const Ask = [
    { media: "Email", link: "mrAnsari@gmail.com" },
    { media: "WhatsApp", link: "Aftab Ansari" },
    { media: "Massage", link: "+91-9680810593" },
  ];
  return (
    <div className=" w-full flex flex-col gap-9">
      {Ask.map(( item, index ) => (
        <div
          key={index}
          className="bg-slate-800 text-white flex flex-col items-center gap-5  py-6 rounded-2xl border-2 hover:border-[#2e8e9d] duration-300 border-[#373737]"
        >
          <div>{item.media}</div>
          <div className=" cursor-pointer">{item.link}</div>
          <div className="flex justify-center">
            <button className=" text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black hover:bg-gradient-to-tl hover:from-black hover:to-black transition ease-in-out duration-500 rounded-xl px-4 py-2 hover:text-purple-500">
              Talk Here
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ask;
