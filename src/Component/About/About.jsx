import React from 'react'
import profilewhite from '../Assests/profileWhite.png'

const About = () => {
  return (
    <>
        <div className=' max-w-[1080px] mx-auto dark:text-white flex lg:flex-nowrap md:flex-nowrap mt-20 flex-wrap font-abc '>
            {/* left */}
            <div className='lg:max-h-[80vh]  hidden lg:block md:block select-none' 
            data-aos="fade-right">
                
                <img src={profilewhite} alt="" className='lg:h-[85%] h-[80%]  dark:bg-black bg-gray-400 rounded-2xl ' />
            </div>
            {/* right */}
            <div className='lg:w-[65%] md:w-[55%] ' data-aos="fade-left">
                <h2 className='text-3xl font-semibold underline underline-offset-8'>About <span className='text-[#86198f]'>Me</span></h2>
                <ul className='leading-6 mt-4 dark:text-gray-300 list-disc pl-4 md:pl-0'>
                    <li >Second-Year CSE Undergraduate Student At Asansol Engineering College.</li>
                    <li>Along With A Wonderful Team, I Lead Various Projects, Hackathons And Communities. I am A Self-Taught Developer With a Passion for Web Developmetn And Problem Solving in Data Structure and Algorithm.</li>
                    <li>I Have A Strong Background In Software Devlopment And Have Worked On a Wide Variety Of Projects.</li>
                </ul>

              <div className="mt-6 flex gap-3 justify-center text-xl">
                <i className="fa-brands fa-facebook fa-lg text-[#005eff] cursor-pointer" ></i>
                <i className="fa-brands fa-linkedin fa-lg hover:text-[#075ae9] cursor-pointer" ></i>
                <i className="fa-solid fa-envelope fa-lg hover:text-[#187728] cursor-pointer" ></i>
                <i className="fa-brands fa-square-x-twitter fa-lg hover:text-[#000000] cursor-pointer" ></i>
                <i className="fa-brands fa-instagram fa-lg hover:text-[#e00083] cursor-pointer"  ></i>
                <i className="fa-brands fa-youtube fa-lg hover:text-[#ff0000] cursor-pointer" ></i>
              </div>

              <div className='w-full bg-gray-500 h-[1px] mt-6'></div>
                
              <h1 className='text-2xl mt-2'>Personal Info</h1>
              <div className='mt-2 grid grid-cols-2'>
                    <h2 className='dark:text-gray-400 text-gray-700'>Name : <span className=' dark:text-gray-300 text-gray-950'>Pankaj Kumar</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Age : <span className=' dark:text-gray-300 text-gray-950'>20 Years</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Nationality : <span className=' dark:text-gray-300 text-gray-950'>Indian</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Address : <span className=' dark:text-gray-300 text-gray-950'>Asansol,West Bengal</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Email : <span className=' dark:text-gray-300 text-gray-950'>pankaj.ky3007@gmail.com</span></h2>
                    <h2 className='dark:text-gray-400 text-gray-700'>Contact : <span className=' dark:text-gray-300 text-gray-950'>8101865933</span></h2>
             </div>

             <div className='w-full bg-gray-500 h-[1px] mt-2'></div>
             <div className='flex gap-5 mt-5'>
                <button className='bg-indigo-600 hover:bg-blue-600 text-white border-2 border-transparent px-4  py-1 rounded-md '>Let's Talk</button>
                <button className='border-2 px-4  py-1 rounded-md text-blue-500 font-semibold border-blue-600 hover:border-green-600 hover:text-green-500'>More About Me </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default About