import React from 'react'

const ContactCard = (props) => {
  return (
    <>
        <a href={props.href}
        className='dark:bg-gray-800 bg-white flex gap-2 items-center p-3 lg:py-4  rounded-xl cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700'>
            <i className={`${props.icon} dark:bg-blue-500 bg-gray-300 rounded-full p-3`} ></i>

            <div>
                <h2>{props.name}</h2>
                <h2 className='text-sm opacity-70'>{props.value}</h2>
            </div> 
        </a>
    </>
  )
}

export default ContactCard