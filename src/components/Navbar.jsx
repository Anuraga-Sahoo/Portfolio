import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  // To change Navlist text on click
  const fontChange = ( {isActive}) => {
    return isActive ? "text-black font-bold underline underline-offset-8 ease-in duration-100" : "text-black font-normal"
  }

  return (
    <>
    {/* <nav className='sticky'> */}
      <div className="navcontainer  h-[4.5rem] flex justify-around shadow-lg bg-white shadow-gray-100 sticky top-0">
        <div className="navlogo flex gap-2 items-center justify-center w-[18rem] text-black text-xl ">
          <Link><img src="/myimage.jpeg" 
          alt="myImage" 
          className='h-12 rounded-full'  /></Link>
          <h2 className='font-bold font-mono text-3xl'><Link>Anuraga Sahoo</Link></h2>
          
        </div>
        <div className="navelements w-[40rem] flex">
          <ul className='flex gap-12 justify-center text-lg items-center w-full  '>
            <li> <NavLink to='/about' className={fontChange}>About me</NavLink> </li>
            <li><NavLink to='/skills' className={fontChange} >Skills</NavLink></li>
            <li><NavLink to='/projects' className={fontChange}>Projects</NavLink></li>
            <li><NavLink to='/contact' className={fontChange}>Contact me</NavLink></li>
          </ul>
        </div>
        <div className="navdownloadbtn  w-[10rem] flex justify-center items-center">
          <button className='bg-black text-white rounded-md w-[9rem] h-10  text-lg font-medium hover:underline'>
             <a href="/resume.pdf" download="Anurag's Resume" className='flex justify-center items-center gap-2'><HiDownload /> Resume</a> 
            </button>
        </div>
      </div>
      {/* </nav> */}
    </>
  )
}

export default Navbar
