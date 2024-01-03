import React from 'react'
import SkillCard from './SkillCard'
import bs from './logo/bootstrap.png'
import tailwind from './logo/tailwind.png'
import c from './logo/c.png'
import cpp from './logo/cpp.png'
import python from './logo/python.png'
import html from './logo/html.png'
import css from './logo/css.png'
import js from './logo/js.png'
import react from './logo/react.png'
import npm from './logo/npm.png'
import mysql from './logo/mysql.jpg'
import git from './logo/git.png'
import github from './logo/github.png'
import nodejs from './logo/nodejs.png'
import dsa from './logo/dsa.jpg'


const Skill = () => {
  return (
    <>
      <div
      id='skill'
       className='dark:text-white max-w-[900px] mx-auto lg:px-10 overflow-hidden' >
        <h1 className='text-center text-4xl font-semibold underline underline-offset-4 mt-20'>Skills</h1>
        <h2 className='text-center  text-2xl opacity-70 mt-2'>My <span className='text-[#ee39ff] '>Technical Skills</span></h2>
        <div className='flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-4 mt-5 border-2 rounded-md dark:border-gray-600 py-6 lg:px-6 dark:bg-transparent bg-gray-100 shadow-2xl'
        data-aos="zoom-out">
          <SkillCard logo={c} name={"c"} />
          <SkillCard logo={cpp} name={"c++"} />
          <SkillCard logo={dsa} name={"Dsa"}/>
          <SkillCard logo={python} name={"Python"} />
          <SkillCard logo={html} name={"html"} />
          <SkillCard logo={css} name={"CSS"} />
          <SkillCard logo={bs} name={"Bootstrap"}/>
          <SkillCard logo={tailwind} name={"Tailwind"}/>
          <SkillCard logo={js} name={"Javascript"} />
          <SkillCard logo={git} name={"git vcs"}/>
          <SkillCard logo={github} name={"github"}/>
          <SkillCard logo={react} name={"React"} />
          <SkillCard logo={npm} name={"NPM"} />
          <SkillCard logo={mysql} name={"MySql"}/>
          <SkillCard logo={nodejs} name={"nodejs"}/>
      </div>
      
        
        
      </div>
      
    </>
  )
}

export default Skill