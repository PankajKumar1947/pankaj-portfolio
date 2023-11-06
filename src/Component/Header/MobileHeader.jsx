import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MobileHeader = () => {
  return (
    <>
        <div className='dark:text-white grid grid-cols-3 w-full justify-between gap-5  mt-8 border-b-2 border-blue-500 rounded-lg pb-5 '>
            <NavLink 
            to={"/"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}
            >
            <i className="fa-solid fa-house"></i>
            Home
            </NavLink>
            <NavLink 
            to={"/about"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}>
            <i className="fa-solid fa-user"></i>
            About
            </NavLink>
            <NavLink 
            to={"skill"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}>
            <i className="fa-solid fa-file-lines"></i>
            Skills
            </NavLink>
            <NavLink 
            to={"education"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}>
            <i className="fa-solid fa-graduation-cap"></i>
            Education
            </NavLink>
            <NavLink 
            to={"project"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}>
            <i className="fa-solid fa-image"></i>
            Projects
            </NavLink>
            <NavLink 
            to={"contact"}
            className={({isActive})=> `${isActive ? "text-cyan-500 ":"dark:text-white text-black"} flex flex-col items-center`}>
            <i className="fa-regular fa-paper-plane"></i>
            Contact Me
            </NavLink>
        </div>
    </>
  )
}

export default MobileHeader