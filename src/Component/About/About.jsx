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
                <ul className='leading-6 mt-4 dark:text-gray-300 list-disc pl-4 md:pl-0'>
                    <li >I am Pankaj Kumar, a second-year Computer Science and Engineering student at Asansol Engineering College.</li>
                    <li>Proficient in full-stack development, working with Node.js, Express.js, and MongoDB for backend services. Experienced in frontend development with Reactjs, javascript,html,css and tailwind.</li>
                    <li>I have solved over 450 data structures and algorithms problems on LeetCode using C++.</li>
                    <li>Passionate about exploring machine learning algorithms, cybersecurity, and mobile app development.Eager to continue learning, growing as a developer, and contributing to impactful projects in the field of computer science.</li>
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
                    <h2 className='dark:text-gray-400 text-gray-700'>Email : <span className=' dark:text-gray-300 text-gray-950'>pankaj.ky3007@gmail.com</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Contact : <span className=' dark:text-gray-300 text-gray-950'>8101865933</span></h2>
             </div>

             <div className='w-full bg-gray-500 h-[1px] mt-2'></div>
             <div className='flex gap-5 mt-5'>
                <a 
                href='mailto:pankaj.ky3007@gmail.com'
                className='bg-indigo-600 hover:bg-blue-600 text-white border-2 border-transparent px-4  py-1 rounded-md '>Let's Talk</a>
                <button className='border-2 px-4  py-1 rounded-md text-blue-500 font-semibold border-blue-600 hover:border-green-600 hover:text-green-500'>More About Me </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default About