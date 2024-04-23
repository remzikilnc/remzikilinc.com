"use client";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-white/10 fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#" className="h-auto w-auto flex flex-row items-center text-white text-xl">
          remzikilinc<span className="text-[#d6ff00]">.</span>
        </a>
        <div className="flex flex-row gap-5">
          <a href="mailto:remzikilincc@gmail.com" className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black rounded-xl hover:backdrop-blur-xl  text-white py-2 px-5">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
