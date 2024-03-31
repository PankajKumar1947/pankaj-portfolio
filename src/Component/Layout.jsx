import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import { ThemeProvider } from '../context/theme'

const Layout = () => {
  const [themeMode,setThemeMode]=useState("dark");
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  //actual change in theme
  useEffect(()=>{
    const html=document.querySelector('html');
    html.classList.remove("light","dark");
    html.classList.add(themeMode);
  },[themeMode]);

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className='dark:bg-[rgb(18,19,24)] bg-gray-200 font-poppins '>
        <Header/>
          <div className='mx-3 md:mx-10 overflow-x-hidden '>
              <Outlet/>
            </div>
            <Footer/>
        </div>
        
      </ThemeProvider>
        
        
    </>
  )
}

export default Layout