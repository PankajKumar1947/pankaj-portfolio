import React from 'react'

const EducationCard = (props) => {
  return (
    <>
      <a href={props.link}
        className='dark:bg-gray-900 bg-white flex w-full md:w-[50%] lg:w-[45%] p-2 rounded-xl mt-10  cursor-pointer border-2  shadow-2xl dark:border-gray-500 dark:hover:shadow-gray-500 hover:shadow-black'
        data-aos="zoom-in-down">
        <div className='w-[48%]'>
          <img src={props.image} alt="" className='w-[90%] rounded-l-xl h-full' />
        </div>
        <div className='flex flex-col justify-between py-3'>
          <h1 className='font-bold text-xl '>{props.degree}</h1>
          <p className='dark:text-blue-300 text-blue-700 '>{props.college} </p>
          <p className='text-green-600 text-lg lg:text-xl md:text-xl font-semibold'>{props.year}</p>
        </div>
      </a>
    </>
  )
}

export default EducationCard