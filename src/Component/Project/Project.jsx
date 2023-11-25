import React from 'react'
import Card from './Card'
import projectData from '../Data/Project'

const Project = () => {
  return (
    <>
        <div className='max-w-[1080px] mx-auto mt-20'>
            <h1 className='text-center dark:text-white text-4xl mt-8 font-semibold underline underline-offset-8'>My <span className='text-[#86198f] '>Projects</span></h1>
            <p className='text-center dark:text-gray-300 text-gray-700 mt-4 text-md mb-5 '>Some of my Projects made during learning and Currently Working</p>

            {/* card added */}
            <div className='flex flex-wrap gap-10 lg:gap-4 justify-center items-center px-3'>
              {
                projectData.map((item)=>{
                  return <Card data={item}/>
                })
              }
            </div>
            
        </div>
        
    </>
  )
}

export default Project