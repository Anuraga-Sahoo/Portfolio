import React, { useRef } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaCloud } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Project = () => {
  const buttonRef1 = useRef()
  const buttonRef2 = useRef()
  const buttonRef3 = useRef()
  const elearning = useRef()
  const ecommerce = useRef()
  const weatherapp = useRef()
  
  let flag = true
  // buttonRef1.current.style.backgroundColor = '#333332';
 
  

  let handleClick1 = () =>{
  buttonRef1.current.style.backgroundColor = '#333332';
  buttonRef2.current.style.backgroundColor = 'black';
  buttonRef3.current.style.backgroundColor = 'black';
  flag= false
  elearning.current.style.display ='block'
  ecommerce.current.style.display ='none'
  weatherapp.current.style.display ='none'


  }

  let handleClick2 = () =>{
    buttonRef1.current.style.backgroundColor = 'black';
    buttonRef2.current.style.backgroundColor = '#333332';
    buttonRef3.current.style.backgroundColor = 'black';
  flag= false
  ecommerce.current.style.display ='block'
  elearning.current.style.display ='none'
  weatherapp.current.style.display ='none'


    

}

let handleClick3 = () =>{
  buttonRef3.current.style.backgroundColor = '#333332';
  buttonRef2.current.style.backgroundColor = 'black';
  buttonRef1.current.style.backgroundColor = 'black ';
  flag= false
  weatherapp.current.style.display ='block'
   ecommerce.current.style.display ='none'
  elearning.current.style.display ='none'

}
  
  return (
    <>
      <div className="project bg-black text-white flex flex-col px-[15rem]  ">
        <div className="heading p-5 m-10">
          <h2 className="text-3xl font-bold mb-3">My Projects</h2>
          <p className="mb-3">
            i built a lotes of Projects. which is the part of my Learning
          </p>
        </div>
        <div className="content px-11 flex">
          <div className="innerBox bg-black h-[12rem] w-[10rem] flex flex-col justify-center items-center">
            <button
              ref={buttonRef1}
              onClick={handleClick1}
              className={`${
                flag
                  ? "bg-zinc-800 transition ease-in-out delay-150 hover:bg-zinc-800 duration-300  rounded-md p-2 m-2 flex items-center w-[8rem]"
                  : "flex items-center bg-black transition ease-in-out delay-150 hover:bg-zinc-800 duration-300  rounded-md p-2 m-2 w-[8rem]"
              }`}
            >
              <FaBookBookmark className="mx-1 text-violet-600" /> E Learning
            </button>
            <button
              ref={buttonRef2}
              onClick={handleClick2}
              className={`flex  items-center transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-[8rem] rounded-md p-2 m-2 `}
            >
              <FaShoppingCart className="mx-1 text-violet-600" />E commerse
            </button>
            <button
              ref={buttonRef3}
              onClick={handleClick3}
              className={`transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-[8.5rem] rounded-md p-2 m-2 flex items-center gap-1`}
            >
              <FaCloud className="h-[1rem] text-violet-600" />
              Weather App
            </button>
            <button
              className={`transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-[8.5rem] rounded-md p-2 m-2 flex justify-center items-center gap-1`}
            >
              <NavLink
                to="/projects"
                className="flex  flex-row items-center gap-2 text-violet-600 font-bold"
              >
                <FaChevronDown />
                More
              </NavLink>
            </button>
          </div>
          <div className={`infocontainer h-[25rem] w-[85%] px-10`}>
            <div ref={elearning} className="info  block">
              <h1 className="text-2xl text-violet-600 font-bold my-5 mb-5">
                @ E Learning App
              </h1>
              <div className="flex gap-2 flex-col">
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  Currently Working on this Project
                </p>
                <p className="inline-flex items-center">
                  {" "}
                  <TiTick className="text-green-700 mr-3 " />
                  Starting Date 1 sep 2024
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  Github Link :{" "}
                </p>
                <p className="inline-flex items-center ">
                  <TiTick className="text-green-700  mr-3" />
                  Description :
                </p>
                <p className='pl-5'>
                  <ul>
                    <li>Developed a MERN-stack E Learning website.</li>
                    <li>Technologies used : HTML,CSS, javaScript, Node.js, Express, MongoDB.</li>
                    <li>Implemented responsive front-end with Tailwind CSS.</li>
                    <li>Built and integrated RESTful APIs with Express and Node.js.</li>
                    <li>Utilized MongoDB for database management.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div ref={ecommerce} className="info hidden">
              <h1 className="text-2xl text-violet-600 font-bold my-5 mb-5">
                @ E Commerce App
              </h1>
              <div className="flex gap-2 flex-col">
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  Completed
                </p>
                <p className="inline-flex items-center">
                  
                  <TiTick className="text-green-700 mr-3 " />
                   25-Mar-2024 to 20-April-2024
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  GitHub Link :
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700  mr-3" />
                  Description :
                </p>
                <p className='pl-5'>
                  <ul>
                    <li>Developed a MERN-stack eCommerce website.</li>
                    <li>Technologies used: React, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB.</li>
                    <li>Implemented responsive front-end with Tailwind CSS.</li>
                    <li>Managed state with Redux Toolkit.</li>
                    <li>Built and integrated RESTful APIs with Express and Node.js.</li>
                    <li>Utilized MongoDB for database management.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div ref={weatherapp} className="info hidden  h-full w-full">
              <h1 className="text-2xl text-violet-600 font-bold my-5 mb-5">
                @Weather App
              </h1>
              <div className="flex gap-2 flex-col">
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  Completed
                </p>
                <p className="inline-flex items-center">
                  
                  <TiTick className="text-green-700 mr-3 " />
                  Start Date 15 jun 2024 - 20 jun 2024
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  Code Link :
                  <Link
                    to="https://github.com/Anuraga-Sahoo/WeatherApp"
                    target="blank"
                    className="text-red-500 ml-2"
                  >
                    Click me
                  </Link>
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700 mr-3 " />
                  WebSite Link :
                  <Link
                    to="https://weather-ten-blue.vercel.app/"
                    target="blank"
                    className="text-red-500 ml-2"
                  >
                    Click me to Visit
                  </Link>
                </p>
                <p className="inline-flex items-center">
                  <TiTick className="text-green-700  mr-3 h-[3rem]" />
                  Description :
                </p>
                <p className='pl-5'>Real-time weather data retrieval. Location-based weather forecasting.
Responsive design with CSS.
User-friendly interface displaying current conditions and forecasts.
Integration with third-party weather API for accurate data
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // error use ref error
}

export default Project
