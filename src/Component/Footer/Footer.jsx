import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='  dark:text-white flex flex-col justify-center items-center bottom-0 pb-5 dark:bg-gray-800 bg-gray-300 mt-10'>
            <h1 className='text-center text-3xl font-extrabold mt-5'>Pankaj</h1>
            <ul className='flex flex-wrap gap-1.5 md:gap-3 lg:gap-4 mt-3'>
                <li><Link to={"/"} className='hover:underline underline-offset-2 hover:text-blue-400'>Home</Link></li>
                <li><Link to={"/about"} className='hover:underline underline-offset-2 hover:text-blue-400'>About</Link></li>
                <li><Link to={"/education"} className='hover:underline underline-offset-2 hover:text-blue-400'>Educaton</Link></li>
                <li><Link to={"/project"} className='hover:underline underline-offset-2 hover:text-blue-400'>Projects</Link></li>
                <li><Link to={"/blog"} className='hover:underline underline-offset-2 hover:text-blue-400'>Blog</Link></li>
                <li><Link to={"/contact"} className='hover:underline underline-offset-2 hover:text-blue-400'>Contact</Link></li>
            </ul>
            <div className="mt-8 flex gap-2 text-xl">
                <i className="fa-brands fa-facebook fa-lg text-[#005eff] cursor-pointer" ></i>
                <i className="fa-brands fa-linkedin fa-lg text-[#075ae9] cursor-pointer" ></i>
                <i className="fa-solid fa-envelope fa-lg text-[#187728] cursor-pointer" ></i>
                <i className="fa-brands fa-square-x-twitter fa-lg text-[#000000] cursor-pointer" ></i>
                <i className="fa-brands fa-instagram fa-lg text-[#e00083] cursor-pointer"  ></i>
                <i className="fa-brands fa-youtube fa-lg text-[#ff0000] cursor-pointer" ></i>
              </div>

              <div className='w-full bg-gray-500 h-[1px] mt-6'></div>

              <p className='mt-2'>Copyright  2023 : All right reserved</p>
              
        </div>
        <p className='flex justify-center items-center gap-1 p-2 dark:bg-gray-900 dark:text-cyan-400 bg-gray-400 w-full'>Designed with <span className='text-red-700 text-xl '> &#9829; </span> by Pankaj </p>
    </>
  )
}

export default Footer