import React from 'react'

const SkillCard = (props) => {
  return (
    <>
        <div className='max-w-[100px] max-h-[100px] dark:text-white flex flex-col items-center bg-gradient-to-t dark:from-indigo-800 ... p-4 rounded-xl cursor-pointer shadow-md shadow-blue-500 hover:scale-[1.05] duration-200 hover:shadow-blue-300 bg-gray-400 hover:bg-gray-600 '
        data-aos="flip-down">
            <img src={props.logo} alt="" className='h-[80%]' />
            <h1 className='font-semibold uppercase ' >{props.name}</h1>
        </div>
    </>
  )
}

export default SkillCard