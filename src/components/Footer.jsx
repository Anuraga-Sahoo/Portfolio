import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className='bg-black mt-10 text-white h-full w-full flex justify-around' >
        <div className="contactinfo flex flex-col justify-center items-center h-fit w-fit p-3 m-5 ml-10 gap-3">
        <h2 className='text-xl text-violet-700 font-bold '>Page Info</h2>

          <ul className=" flex flex-row  gap-5">
            <li className='inline-flex items-center'><SiGmail className='mr-3'/> : anuragasahoo5@gmail.com</li>
            <li className='inline-flex items-center'><FaPhone className='mr-3'/> : +91 9853273137</li>
            <li className='inline-flex items-center'><FaLinkedinIn className='mr-3'/> : <Link to='https://www.linkedin.com/in/anuraga-sahoo-0486b02ba/' target='blank' className='ml-1'>anuraga-sahoo</Link></li>
            <li className='inline-flex items-center'><IoLogoYoutube className='mr-3'/> : <Link to='https://www.youtube.com/@GetWindow' target='blank' className='ml-1'>GetWindow</Link></li>
          </ul>
        </div>
        <div className="pageinfo p-3 m-5 flex flex-col justify-center items-center gap-3">
          <h2 className='text-xl text-violet-700 font-bold'>Page Info</h2>
          <ul className='flex flex-row gap-3'>

            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Projects</Link></li>

          </ul>
        </div>
      </footer>
        <div className='h-fit w-full flex items-center justify-center bg-zinc-900 text-white'><h3>&copy; Anuraga Sahoo</h3></div>
    </>
  )
}

export default Footer
