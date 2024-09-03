import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SkilsBtn from '../components/SkilsBtn'
import Aboutme from '../components/Aboutme'
import Project from '../components/Project'

const Home = () => {
  return (
    <>
     <div className="hero">
      <HeroBanner/>
      </div> 
      <div className="skillsContainer  p-5 flex justify-center flex-col items-center">

      <h2 className='mb-5 text-3xl'>My <span className='font-bold'>Skills</span></h2>
        <div className="heading border-[2px] border-solid border-y-black h-1 w-[10rem] mt-0 mb-5"></div>
      <div className="skills">
      <SkilsBtn/>
      </div>
      <div className="About">
        <Aboutme/>
      </div>
      </div>
      <Project/>
    </>
  )
}

export default Home
