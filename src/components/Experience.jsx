import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import sql from "../assets/sql.png";
import cpp from "../assets/cplusplus.png";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto flec flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md shadow-orange-500 hover:scale-105 duration-300 py-2 rounded-full">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-blue-500">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-yellow-500">
            <img src={javascript} alt="" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-blue-400">
            <img src={react} alt="" className="w-20 mx-auto" />
            <p className="mt-4">React</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-blue-300">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Tailwind</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-blue-600">
            <img src={cpp} alt="" className="w-20 mx-auto" />
            <p className="mt-4">C++</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-purple-400">
            <img src={redux} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Redux</p>
          </div>

          <div className="shadow-md  hover:scale-105 duration-300 py-2 rounded-full shadow-blue-500">
            <img src={sql} alt="" className="w-20 mx-auto" />
            <p className="mt-4">SQL</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-300 py-2 rounded-full shadow-gray-300">
            <img src={github} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Github</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
