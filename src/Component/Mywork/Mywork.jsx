import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import uapl from '../Assests/work/uapl.png'
import joyjunction from '../Assests/work/joyjunction.png'

const experiences = [
  {
    title: 'Frontend Developer at United Art Logistics Pvt Ltd (UAPL)',
    duration: 'May 2024 - Present',
    img: uapl,
    link:"https://uapl.ai/",
    description: [
      ' Built and maintained web interfaces using ReactJS, Tailwind CSS, and Redux Toolkit based on Figma designs, ensuring responsiveness and optimization.',
      'Integrated frontend with backend via Swagger files, collaborating with backend developers to enhance API functionality and data flow.',
      'Improved development processes through code reviews and effective team communication.',
    ],
  },
  {
    title: 'Joy Junction - Gamingzone Dhanbad',
    duration: 'April 2024 - May 2024',
    img: joyjunction,
    link:"https://www.joyjunctiongamezone.com/",
    description: [
      'Developed a modern, fully functional, and responsive website using ReactJS, Tailwind CSS, React-router-dom, and Redux Toolkit.',
      'Translated UI designs from Figma into a functional and visually appealing interface.',
      'Integrated dynamic routing with React-router-dom, enhancing user experience with smooth and intuitive navigation.'
    ],
  },

];

const Mywork = () => {
  return (
    <section 
    id='project'
    className="max-w-[1080px] mx-auto py-10">
      <div className="container mx-auto sm:px-4">
        <h1 className='text-center dark:text-white text-4xl mt-8 font-semibold underline underline-offset-8'>My <span className='text-[#86198f] '>Works</span></h1>
        <p className='dark:text-white text-black text-center my-2'> Overview of My Completed Work for Clients</p>
        <div className="space-y-4 mt-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md flex justify-between gap-5"
            >
              <div className='flex-1'>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 inline-flex items-center">
                {exp.title} <a href={exp.link} target='_blank' className='ml-2'><FaExternalLinkAlt className=" text-blue-600" /></a> 
              </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.duration}
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='w-[40%] hidden sm:block border-2 rounded-lg overflow-hidden'>
                <img src={exp.img} alt="" className='w-[100%] h-full' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mywork