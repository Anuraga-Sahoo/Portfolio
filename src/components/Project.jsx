import React, { useRef } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";

const Project = () => {
  const buttonRef1 = useRef()
  const buttonRef2 = useRef()
  const buttonRef3 = useRef()
  
  let flag = true
  // buttonRef1.current.style.backgroundColor = '#333332';
 
  

  let handleClick1 = () =>{
  buttonRef1.current.style.backgroundColor = '#333332';
  buttonRef2.current.style.backgroundColor = 'black';
  buttonRef3.current.style.backgroundColor = 'black';
  flag= false
  }

  let handleClick2 = () =>{
    buttonRef1.current.style.backgroundColor = 'black';
    buttonRef2.current.style.backgroundColor = '#333332';
    buttonRef3.current.style.backgroundColor = 'black';
  flag= false


}

let handleClick3 = () =>{
  buttonRef3.current.style.backgroundColor = '#333332';
  buttonRef2.current.style.backgroundColor = 'black';
  buttonRef1.current.style.backgroundColor = 'black ';
  flag= false


}
  
  return (
    <>
      <div className="project bg-black text-white flex flex-col px-[15rem]">
        <div className="heading p-5 ">
          <h2 className='text-3xl font-bold'>My Projects</h2>
          <p>i built a lotes of Projects. which is the part of my Learning</p>
        </div>
        <div className="content px-11 flex">
             <div className="innerBox bg-black h-[12rem] w-[10rem] flex flex-col justify-center items-center">
              <button ref={ buttonRef1 } onClick={handleClick1} className={`${flag ? 'bg-zinc-800 transition ease-in-out delay-150 hover:bg-zinc-800 duration-300  rounded-md p-2 m-2 flex items-center w-[8rem]': 'flex items-center bg-black transition ease-in-out delay-150 hover:bg-zinc-800 duration-300  rounded-md p-2 m-2 w-[8rem]'}`}><FaBookBookmark className='mx-1' /> E Learning</button>
              <button ref={buttonRef2 } onClick={handleClick2} className={ `flex  items-center transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-[8rem] rounded-md p-2 m-2 `}><FaShoppingCart className='mx-1' />
              E commerse</button>
              <button ref={buttonRef3} onClick={handleClick3} className={ `transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-[8rem] rounded-md p-2 m-2 flex items-center`}><TiWeatherCloudy className='mx-1'/> Weather App</button>
             </div>
             <div className={`infocontainer h-[20rem] bg-blue-400 w-[85%]`}>

             </div>
        </div>
      </div>                                            
    </>
  )
  // error use ref error
}

export default Project
