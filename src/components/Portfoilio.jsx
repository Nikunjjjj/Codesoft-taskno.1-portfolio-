import React from "react";
import brandpage from "../assets/portfolio/BrandPage.png";
import summize from "../assets/portfolio/Summize.png";

const Portfoilio = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        </div>
        <div className="grid md:grid-cols-2  sm:grid-cols-2 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-blue-300 rounded-lg hover:scale-105 duration-500">
            <img src={brandpage} alt="" />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 duration-200 "></button>
            </div>
          </div>
          <div className="shadow-md shadow-blue-300 rounded-lg hover:scale-105 duration-500">
            <img src={summize} alt="" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 "></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoilio;
