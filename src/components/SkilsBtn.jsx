import React from 'react'
import Button from './Button'
import { FaGitAlt,FaReact } from "react-icons/fa6";
import { RiJavaLine,  RiJavascriptFill } from "react-icons/ri";
import { FaHtml5,  FaNode  } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss   } from "react-icons/si";



const SkilsBtn = () => {
  return (
    <>
      <div className="skilContainer">
        <div className="skills  grid grid-cols-5 gap-1 w-[40rem] ">
          <Button flag={false}  name={"Java"} icon={<RiJavaLine className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"JavaScript"} icon={<RiJavascriptFill className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"HTML 5"} icon={ <FaHtml5 className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"CSS 3"} icon={<IoLogoCss3 className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"Tailwind"} icon={<SiTailwindcss className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"React.js"} icon={<FaReact className='h-[2rem] w-[2rem]' />}/>
          <Button flag={false}  name={"Node.js"} icon={<FaNode className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"Express"} icon={<SiExpress className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"Mongo DB"} icon={<SiMongodb className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"My Sql"} icon={<SiMysql className='h-[2rem] w-[2rem]'/>}/>
          <Button flag={false}  name={"Git"} icon={<FaGitAlt className='h-[2rem] w-[2rem]' />}/>

        </div>
      </div>
    </>
  )
}

export default SkilsBtn
