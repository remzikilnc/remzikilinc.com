import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-32 z-[20]">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex">
          <Image
            priority
            src="/me.jpg"
            className="rounded-full"
            height={300}
            width={300}
            alt="Remzi Kılınç"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto hover:animate-none transition delay-700 duration-300 ease-in-out">
          Remzi Kılınç
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px] flex gap-1">
            <span>I do</span>
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-700 to-orange-200">
              Code
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-gray-300 text-center">
            <span className="font-semibold">Fullstack Developer,</span> Computer Engineer
          </p>
        </div>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Computer Engineer with a focus on web development,
          dedicated to crafting elegant, creative and user-friendly web applications.
        </p>
        <div className="text-md flex justify-center">
          <a href="mailto:remzikilincc@gmail.com" className="z-[1] padding-20 hover:bg-white rounded-3xl text-white transition-colors shadow-lg shadow-green-400/20 duration-300 font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
