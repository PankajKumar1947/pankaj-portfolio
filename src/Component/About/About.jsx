import React from 'react'
import { Link } from 'react-router-dom';
import profilewhite from '../Assests/dp_white.png'
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <>
        <div id='about' 
        className=' max-w-[1080px] mx-auto dark:text-white flex lg:flex-nowrap items-center gap-8 md:flex-nowrap mt-20 flex-wrap font-abc '>
            {/* left */}
            <div className='lg:max-h-[80vh] flex-1  hidden lg:block md:block select-none' 
            data-aos="fade-right">
                
                <img src={profilewhite} alt="" className='lg:h-[85%]   dark:bg-black bg-gray-400 rounded-2xl ' />
            </div>
            {/* right */}
            <div className='lg:w-[60%] md:w-[55%] ' data-aos="fade-left">
                <h2 className='text-3xl font-semibold underline underline-offset-8'>About <span className='text-[#86198f]'>Me</span></h2>
                <ul className="leading-6 mt-4 dark:text-gray-300 list-disc pl-4 md:pl-0">
                  <li>I am Pankaj Kumar, a B.Tech student in Computer Science and Engineering at Asansol Engineering College.</li>
                  <li>Skilled in full-stack development, with expertise in Node.js, Express.js, and MongoDB for backend services, and proficient in frontend technologies including React.js, Nextjs, JavaScript, HTML, CSS, and Tailwind CSS.</li>
                  <li>Accomplished in solving over 600 data structures and algorithms problems on LeetCode using C++.</li>
                </ul>


              <div className="mt-6 flex gap-3 justify-center text-xl ">
                <Link to={"https://leetcode.com/PankajKrY/"} className=' rounded-full text-3xl text-orange-400'>
                  <SiLeetcode/>
                </Link>
                <Link to={""}>
                  <i className="fa-brands fa-facebook fa-xl text-[#005eff] cursor-pointer" ></i>
                </Link>
                <Link to={"https://www.linkedin.com/in/pankaj-kumar-5bbb44268/"}>
                <i className="fa-brands fa-linkedin fa-xl text-[#075ae9] cursor-pointer" ></i>
                </Link>
                <Link to={"https://github.com/PankajKumar1947"}>
                  <i className="fa-brands fa-github fa-xl  cursor-pointer" ></i>
                </Link>
                <Link to={""}>
                <i className="fa-solid fa-envelope fa-xl text-[#187728] cursor-pointer" ></i>
                </Link>
                <Link to={""}>
                <i className="fa-brands fa-youtube fa-xl text-[#ff0000] cursor-pointer" ></i>
                </Link>
              </div>

              <div className='w-full bg-gray-500 h-[1px] mt-6'></div>
                
              <h1 className='text-2xl mt-2'>Personal Info</h1>
              <div className='mt-2 grid grid-cols-2 text-sm'>
                    <h2 className='dark:text-gray-400 text-gray-700'>Name : <span className=' dark:text-gray-300 text-gray-950'>Pankaj Kumar</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Age : <span className=' dark:text-gray-300 text-gray-950'>20 Years</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Nationality : <span className=' dark:text-gray-300 text-gray-950'>Indian</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Address : <span className=' dark:text-gray-300 text-gray-950'>Asansol,West Bengal</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Email:  
                      <a href="mailto:pankaj.ky3007@gmail.com" className='dark:text-gray-300 text-gray-950 underline'> Click to email</a>
                    </h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Contact: 
                        <a href="tel:8101865933" className='dark:text-gray-300 text-gray-950 underline'>Click to call</a>
                    </h2>
             </div>
            </div>
        </div>
    </>
  )
}

export default About