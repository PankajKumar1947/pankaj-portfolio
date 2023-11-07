import React from 'react'
import Card from './Card'
import razorpay from '../Assests/razorpay.png'
import pw from '../Assests/physicswallah.png'
import discord from '../Assests/discord.png'

const Project = () => {
  return (
    <>
        <div className='max-w-[1080px] mx-auto mt-20'>
            <h1 className='text-center dark:text-white text-4xl mt-8 font-semibold underline underline-offset-8'>My <span className='text-[#86198f] '>Projects</span></h1>
            <p className='text-center dark:text-gray-300 text-gray-700 mt-4 text-md mb-5 '>Some of my Projects made during learning and Currently Working</p>

            {/* card added */}
            <div className='flex flex-wrap gap-10 lg:gap-4 justify-center items-center px-3'>
                <Card name="Razorpay Clone" linkView={"https://github.com/PankajKumar1947"} repoLink={"https://github.com/PankajKumar1947"} image={razorpay} desc="Designed clone of landing page of Razarpay using tailwind"/>
                <Card name="PhysicsWallah Clone" linkView={"https://pankajkumar1947.github.io/pw-landingPage-clone/"} repoLink={"https://github.com/PankajKumar1947/pw-landingPage-clone"} image={pw} desc="Designed clone of landing page of PhysicsWallah using tailwind"/>
                <Card name="Discord Landingpage Clone" linkView={"https://pankajkumar1947.github.io/Discord-landing-Page/"} repoLink={"https://github.com/PankajKumar1947/Discord-landing-Page"} image={discord} desc="Designed clone of landing page of Discord using tailwind"/>
            </div>
            
        </div>
        
    </>
  )
}

export default Project