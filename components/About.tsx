import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-green-700 to-orange-300">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a passionate computer engineer who studied at Cukurova University, I thrive on the intricate dance
          between logic and creativity. My expertise centers around React, NextJS and PHP where I seamlessly
          blend technology with innovation.
          <br />
          <br />
          I greatly enjoy learning and applying new knowledge navigate the ever-evolving landscape of software development.
          My journey involves translating concepts into code and constantly pushing the boundaries of what&#39;s possible
        </p>
      </div>
    </section>
  );
};

export default About;
