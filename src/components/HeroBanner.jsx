import React from 'react'
import './style.css'
import Button from './Button'
import { TbBrandGithubFilled } from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import SkilsBtn from './SkilsBtn';


const HeroBanner = () => {


  return (
    <>
    <div className="herocontainer p-10 flex justify-center items-center flex-col mt-7 mb-0 h-[35rem]">
      <div className="hero w-[70rem] h-[28rem] flex justify-around items-center border-dotted border-2 border-black rounded-xl">
        <div className="information w-[30rem] ">
          <div className="mainInfo ">
                <h1 className='leading-8 text-4xl mt-4'>Hello i am <span className='font-bold'>Anuraga Sahoo</span></h1>
                <h1 className='leading-8  text-4xl mt-4'> <span className='font-bold'>MERN Stack</span><span className='Outline text-white font-bold m-1'>Developer</span></h1>
                <h1 className='leading-8 text-4xl mt-4'> <span>Based in</span> <span className='font-bold' >India.</span></h1>
          </div>
          <div className="para">
            <p className='leading-2 mt-4'>I am a Master's in Computer Applications graduate with a strong foundation in web development and software engineering. Proficient in a range of technologies including React.js, Node.js, express.js, MongoDB, and Tailwind CSS.

</p>
          </div>

        </div>
        <div className="image">
          <img src="/heroImage.jpg"
           alt="Hero image"
           className='h-[25rem]'
            />
        </div>
      </div>
      <div className="btnlinks relative bottom-7 right-[20rem] w-fit bg-white">
        <div className="btns flex">

        <Button flag={true} icon={<TbBrandGithubFilled/>} link = {"https://github.com/Anuraga-Sahoo"} />
        <Button flag={true} icon={<ImLinkedin2 />} link={"https://www.linkedin.com/in/anuraga-sahoo-0486b02ba/"}/>
        <Button flag={true} icon={<SiGmail />} link={"https://mail.google.com"}/>
        <Button flag={true} icon={<IoLogoYoutube />} link={"https://www.youtube.com/@GetWindow"}/>
        </div>

      </div>
      </div>
      
    </>
  )
}

export default HeroBanner
