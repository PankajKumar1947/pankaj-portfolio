import React from 'react'

const Card = ({data}) => {
    const defLink="https://github.com/PankajKumar1947";
    const defRepo="https://github.com/PankajKumar1947";
  return (
    <>
        <div className='dark:text-white w-full md:w-[40%] lg:w-[30%] p-3 dark:bg-gray-950 bg-white rounded-xl  shadow-lg shadow-gray-700 hover:scale-105 duration-500  cursor-pointer group' 
        data-aos="fade-down" >
            <div className='group-hover:opacity-50'>
                <div>
                    <img src={data.img} alt="" />
                </div>
                <h3 className='text-2xl opacity-80'>{data.title}</h3>
                <p className='text-sm opacity-50'>{data.desc}</p>
                <p className='text-sm italic underline mt-1'>Tech Stack Used: </p>
                <div className='flex gap-2 items-center mt-1'>
                    {data.tech.map((eachTech) => (
                        <img key={eachTech}  src={eachTech} alt={`Tech ${eachTech}`} className='w-[40px] h-[30px]' />
                    ))}
                    
                </div>
            </div>
            

            <div className='hidden group-hover:block'>
                <div className='text-center flex  gap-2 absolute top-[50%] left-[25%] '>
                    <a href={data.liveLink || defLink} className='flex text-sm items-center gap-0.5 bg-yellow-500 text-center text-black py-1 px-2 rounded-md hover:bg-green-900'><img  src="https://img.icons8.com/material/24/visible--v1.png" alt="visible--v1"/>View</a>
                    <a href={data.repoLink  || defRepo} className='flex text-sm items-center gap-0.5 bg-yellow-500 text-center text-black py-1 px-2 rounded-md hover:bg-green-900'><img width="23" height="23" src="https://img.icons8.com/pastel-glyph/64/source-code--v3.png" alt="source-code--v3"/>Code</a>
                    
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Card