import React from 'react'
import EducationCard from './EducationCard'
import aec from '../Assests/aec.jpg'
import blindo from '../Assests/blindo.jpg'

const Education = () => {
  return (
    <>
      <div className='dark:text-white  max-w-[1080px] mx-auto mt-20 mb-5'>
        <h2 className='text-4xl font-semibold mt-2 text-center'><i className="fa-solid fa-graduation-cap"></i> My <span className='text-[#86198f] '>Education</span></h2>
        <p className='text-xl font-serif tracking-wider mt-2 text-center'>Education is not the learning of Facts, <br /> but The Training of The Mind to Think</p>
        <div className='flex flex-wrap justify-center gap-4'>
            <EducationCard image={aec} degree={"Batchler of Technology In Computer Science"} college={"Asansol Engineering College (AEC)"} year={"2022-2026 | Persuing"} link={"http://www.aecwb.edu.in/"}/>
            <EducationCard image={blindo} degree={"High School | Science "} college={"B L Indo Anglian Public School(A.bad)"} year={"2019-2021 | Completed"} link={"http://bliaps.com/"} />
        </div>
        
      </div>
    </>
  )
}

export default Education