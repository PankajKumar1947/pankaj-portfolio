import React from 'react'
import { Link } from 'react-router-dom'
import leetcode from '../Assests/Leetcode.png';

const Footer = () => {
  return (
    <>
        <div className='dark:text-white flex flex-col justify-center items-center bottom-0 mt-10 max-w-[1080px] mx-auto'>
        <div className='w-[70%] bg-gray-500 h-[1px] mt-6'></div>
            <h1 className='text-center text-3xl font-extrabold mt-5'>Pankaj</h1>
            <ul className='flex flex-wrap gap-1.5 md:gap-3 lg:gap-4 mt-3 text-sm'>
                <li><Link to={"/"} className='hover:underline underline-offset-2 hover:text-blue-400'>Home</Link></li>
                <li><Link to={"/about"} className='hover:underline underline-offset-2 hover:text-blue-400'>About</Link></li>
                <li><Link to={"/education"} className='hover:underline underline-offset-2 hover:text-blue-400'>Educaton</Link></li>
                <li><Link to={"/project"} className='hover:underline underline-offset-2 hover:text-blue-400'>Projects</Link></li>
                <li><Link to={"/blog"} className='hover:underline underline-offset-2 hover:text-blue-400'>Blog</Link></li>
                <li><Link to={"/contact"} className='hover:underline underline-offset-2 hover:text-blue-400'>Contact</Link></li>
            </ul>
            <div className="mt-8 flex gap-2 text-xl items-center">
            <Link to={"https://leetcode.com/PankajKrY/"} className=' rounded-full'>
                  <img src={leetcode} alt="" />
                </Link>
                <Link to={""}>
                  <i className="fa-brands fa-facebook fa-xl text-[#005eff] cursor-pointer " ></i>
                </Link>
                <Link to={"https://www.linkedin.com/in/pankaj-kumar-5bbb44268/"}>
                <i className="fa-brands fa-linkedin fa-xl text-[#075ae9] cursor-pointer" ></i>
                </Link>
                <Link to={"https://github.com/PankajKumar1947"}>
                  <i className="fa-brands fa-github fa-xl  cursor-pointer" ></i>
                </Link>
                <Link to={""}>
                <i className="fa-brands fa-square-x-twitter fa-xl text-[#000000] cursor-pointer" ></i>
                </Link>
                <Link to={""}>
                <i className="fa-solid fa-envelope fa-xl text-[#187728] cursor-pointer" ></i>
                </Link>
                <Link to={""}>
                <i className="fa-brands fa-youtube fa-xl text-[#ff0000] cursor-pointer" ></i>
                </Link>
              </div>

              <p className='mt-2'>Copyright  2023 : All right reserved</p> 
              <p className='flex justify-center items-center gap-1 p-2 dark:bg-gray-900 dark:text-cyan-400 bg-gray-400 w-full mt-4'>Designed with ❤️ by Pankaj </p>
        </div>
        
    </>
  )
}

export default Footer