import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = () => {
    
const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='text-5xl ml-2 text-blue-200'>
                Nikunj
            </h1>
        </div>

        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>Home </li> 
            
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>About </li>

            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>Portfolio</li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>Experience</li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>Contact</li>

        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={22}/> : <FaBars size={22}/>}
        </div>


        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500 '>
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li> 
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>About </li>
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Portfolio</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Experience</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Contact</li>
        </ul>
        )}

        
    </div>
  )
}

export default Navbar