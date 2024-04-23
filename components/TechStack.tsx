import React from "react";

const TechStack: React.FC<{}> = () => {
    return (
        <section id="techstack">
            <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
                Tech Stack
            </h1>
            <p className="tracking-[0.3em] text-center text-transparent font-light pb-2">
                <span className="bg-clip-text bg-gradient-to-r from-green-700 to-orange-300">Technologies I work with</span>
            </p>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <ul className="flex flex-wrap justify-center items-center ">
                    <li
                        className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        PHP
                    </li>
                    <li
                        className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Laravel
                    </li>
                    <li
                        className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Javascript
                    </li>
                    <li
                        className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Next.js
                    </li>
                    <li
                        className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        React.js
                    </li>
                    <li
                        className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        RESTApi
                    </li>
                    <li
                        className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        CI/CD
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TechStack;
