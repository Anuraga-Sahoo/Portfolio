import React from 'react'
import { Link } from 'react-router-dom'


const Button = ({icon,socialLink, link, flag, name}) => {
  
  // const handleBtn = () => {
  
  //   return location.replace(link)
  // }


  return (
    <>
    
      <button
      // onClick={handleBtn}
       className={`${flag ? "h-10 w-10" : "h-[6rem] w-[6rem]" } m-2 border-solid border-2 border-black rounded-md flex justify-center items-center flex-col hover:bg-black hover:text-white`} >
        <Link to={`${link}`} target='_blank'>{icon}{name}</Link>

        </button>

    </>
  )
}

export default Button
