import React from 'react'

const Card = (props) => {

  return (
    <>
        <div className='dark:text-white w-full md:w-[40%] lg:w-[30%] p-3 dark:bg-gray-900 bg-white rounded-xl  shadow-lg shadow-gray-700 hover:scale-105 duration-500  cursor-pointer group' 
        data-aos="fade-down" >
            <div className='group-hover:opacity-50'>
                <div>
                    <img src={props.image} alt="" />
                </div>
                <h3 className='text-2xl opacity-80'>{props.name}</h3>
                <p className='text-sm opacity-50'>{props.desc}</p>
                <p className='text-sm italic underline'>Tech Stack Used: </p>
                <div className='flex gap-1'>
                <img width="35" height="35" src="https://img.icons8.com/color/35/html-5--v1.png" alt="html-5--v1"/>
                <img width="35" height="35" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
                </div>
            </div>
            

            <div className='hidden group-hover:block '>
                <div className='text-center flex  gap-2 absolute top-[50%] left-[25%] '>
                    <a href="" className='flex text-sm items-center gap-0.5 bg-yellow-500 text-center text-black py-1 px-2 rounded-md hover:bg-green-900'><img  src="https://img.icons8.com/material/24/visible--v1.png" alt="visible--v1"/>View</a>
                    <a href="" className='flex text-sm items-center gap-0.5 bg-yellow-500 text-center text-black py-1 px-2 rounded-md hover:bg-green-900'><img width="23" height="23" src="https://img.icons8.com/pastel-glyph/64/source-code--v3.png" alt="source-code--v3"/>Code</a>
                    
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Card