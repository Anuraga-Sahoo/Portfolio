import React from 'react'

const Project = () => {
  return (
    <>
      <div className="project bg-black text-white flex flex-col">
        <div className="heading p-5">
          <h2 className='text-3xl font-bold'>My Projects</h2>
          <p>i built a lotes of Projects. which is the part of my Learning</p>
        </div>
        <div className="content bg-red-500 px-11">
             <div className="innerBox bg-black h-full w-[50%] flex flex-col">
              <button className='transition ease-in-out delay-150 hover:bg-zinc-800 duration-300 w-fit rounded-md p-2 '>E Learning</button>
              <button>E commerse</button>
              <button>Weather App</button>
             </div>
        </div>
      </div>                                            
    </>
  )
}

export default Project
