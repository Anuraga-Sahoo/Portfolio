import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>,
      <Route path='' element = {<Home/>}/>,
      <Route path='/about' element = {<About/>}/>
      <Route path='/skills' element = {<Skills/>}/>
      <Route path='/projects' element = {<Project/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router = {router}/>
    
  </React.StrictMode>,
)
