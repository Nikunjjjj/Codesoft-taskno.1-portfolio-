import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home "
      className="   h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-yellow-100">
            I'm Frontend developer.
          </h1>
          <p className="text-gray-400 py-4">
            A highly motivated and dedicated person looking <br /> for a
            challenging position to utilize my software skills <br /> for the
            growth of the organization.
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to bg-blue-900 hover:scale-110 duration-150  ">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className=" w-2/3 h-auto mx-auto rounded-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
