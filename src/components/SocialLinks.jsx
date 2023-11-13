import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  return (
    <div className=" hiddden lg-flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] ng-gray-500 hover:rounded-r-lg duration-500 hover:ml-[-10px]">
          <a
            href="
            https://www.linkedin.com/in/nikunj-bakre-29ba03264
     "
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] ng-gray-500 hover:rounded-r-lg duration-500 hover:ml-[-10px]">
          <a
            href="https://github.com/Nikunjjjj"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] ng-gray-500 hover:rounded-r-lg duration-500 hover:ml-[-10px]">
          <a
            href="https://mail.google.com/nikunjx999gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              G-Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
