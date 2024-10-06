import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout.jsx'
import About from './Component/About/About.jsx'
import Education from './Component/Education/Education.jsx'
import Skill from './Component/Skills/Skill.jsx'
import Project from './Component/Project/Project.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Error from './Component/Error/Error.jsx'
import Home from './Component/Home/Home'
import { Analytics } from '@vercel/analytics/react'



const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path:"education",
        element:<Education/>
      },
      {
        path:"skill",
        element:<Skill/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<Error/>
        
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
