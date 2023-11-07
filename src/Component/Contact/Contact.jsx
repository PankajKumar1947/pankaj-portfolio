import React from 'react'
import ContactCard from './ContactCard'


const Contact = () => {
  return (
    <>
      <div className='dark:text-white max-w-[1080px] overflow-x-hidden  mx-auto  mt-16 overflow-y-hidden'>
        <h1 className='text-center text-4xl font-semibold' >Contact</h1>
        <p className='text-center opacity-50 mt-2'>Let's discuss your Queries !</p>
        <div className='flex gap-5 p-2 flex-wrap mt-6' data-aos="zoom-out">
            {/* left */}
            <div className='flex flex-col gap-3'>
                
                <ContactCard name="Phone Number" value="8101865933" href="tel:+918101865933" icon="fa-solid fa-phone"/>
                <ContactCard name="Email Address" value="pankaj.ky3007@gmail.com" href="mailto:pankaj.ky3007@gmailcom" icon="fa-solid fa-envelope" />
                <ContactCard name="Address" value="Asansol, West Bengal" href="https://maps.app.goo.gl/LjXYu15FdMgo91aB7" icon="fa-solid fa-location-dot"/>
            </div>

            {/* right */}
            <div className='flex  flex-wrap p-3 lg:p-5 dark:bg-gray-800 bg-white flex-1 gap-4 rounded-xl ' >
              <div className='relative w-full lg:w-[48%]  '>
                <i className="fa-solid fa-user  absolute left-3 top-5 transform -translate-y-1/2"></i>
                <input type="text" placeholder='Name...'  className='bg-transparent border-2 border-gray-600  rounded-md  pl-9 py-2 w-full  '/>
              </div>
              <div className='relative w-full lg:w-[48%]  '>
                <i className="fa-solid fa-envelope  absolute left-3 top-5 transform -translate-y-1/2"></i>
                <input type="text" placeholder='Email...'  className='bg-transparent border-2 border-gray-600  rounded-md  pl-9 py-2 w-full  '/>
              </div>
              <div className='relative w-full h-[30%] lg:h-[50%]'>
                <i className="fa-brands fa-rocketchat  absolute left-3 top-5 transform -translate-y-1/2"></i>
                <textarea placeholder='Message...' className='w-[100%] bg-transparent border-2 border-gray-600 rounded-md py-1 h-full  pl-9 '/>
              </div>
              
                {/* <textarea type="form" placeholder='Message...' className='w-[100%] bg-transparent border-2 border-gray-600  rounded-md  px-2 h-[30%] lg:h-[50%]' /> */}
                <button className='bg-cyan-500 hover:bg-cyan-600 px-3  py-2 rounded-md '>Let's Talk</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact