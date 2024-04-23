import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
    return (
        <section id="projects">
            <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
                PROJECTS
            </h1>
            <p className="block tracking-[0.5em] text-center text-transparent font-light pb-5">
               <span className="bg-clip-text bg-gradient-to-r from-green-700 to-orange-300">EXPLORE NOW</span>
            </p>
            <ul className="container mx-auto">
                <div className="mt-7 justify-center items-start grid grid-cols-2 sm:px-5 px-0">
                   <li>
                       <Link
                           href="https://ucoyun.com/"
                           rel="noopener noreferrer"
                           target="_blank"
                           className="z-[1]"
                       >
                           <div className="flex-row flex mb-5">
                               {/*                            <div className="bg-white/20 rounded-md flex justify-center object-center px-5 max-w-[130px] hover:bg-white/25">
                                <Image
                                    src="/ucoyun.png"
                                    height={70}
                                    width={200}
                                    alt="Ucoyun Project"
                                />
                            </div>*/}
                               <div>
                                   <p className="text-white font-semibold text-xl">Ucoyun</p>
                                   <p className="text-gray-500 text-[10px]">
                                       A Game Price Comparator App designed to offer an efficient solution for comparing game prices.
                                   </p>
                               </div>
                           </div>
                       </Link>
                   </li>
                   <li>
                       <Link
                           href="https://github.com/remzikilnc/cr-thesis/"
                           rel="noopener noreferrer"
                           target="_blank"
                           className="z-[1]"
                       >
                           <div className="flex-row flex mb-5">
                               {/* <div className="bg-white/20 rounded-md flex justify-center object-center px-5 max-w-[130px] hover:bg-white/25">
                                <Image
                                    src="/crproject.png"
                                    height={150}
                                    width={200}
                                    alt="HireSide"
                                />
                            </div>*/}
                               <div>
                                   <p className="text-white font-semibold text-xl">CRT</p>
                                   <p className="text-gray-500 text-[10px]">
                                       The e-commerce project. Also features that AI-based filtering capabilities like including user name and user comment filtering.
                                   </p>
                               </div>
                           </div>
                       </Link>
                   </li>
                </div>
            </ul>
        </section>
    );
};

export default Projects;
