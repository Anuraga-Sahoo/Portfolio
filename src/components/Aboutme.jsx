import React from "react";

const Aboutme = () => {
  return (
    <>
      <div>
        <div className="card h-[80vh] w-[96vw] flex justify-around mt-[5rem]">
          <div className="bg-black h-[80vh] w-[50rem] flex justify-center items-center rounded-tl-[4rem] rounded-br-[4rem]">
            <div className="border-[2px] border-solid border-white h-[20rem] w-[40rem] mt-[3rem] mb-5 text-white flex justify-around items-center flex-col p-8 rounded-tr-[4rem] rounded-bl-[4rem]">
              <h2 className="m-0 font-bold text-10 text-3xl">About Me</h2>
              <p>
                I am a Master's in Computer Applications graduate with a strong
                foundation in web development and software engineering.
                Proficient in a range of technologies including React.js,
                Node.js, express.js, MongoDB, and Tailwind CSS, I have developed
                number of projects some of which are mentioned below .With a
                blend of technical skills and soft skills i am seeking a
                challenging role in the tech industry to contribute my expertise
                and grow professionally.
              </p>
            </div>
          </div>
          <div className="border-[2px] border-solid border-black h-[20rem] w-[40rem] mt-[12rem] mb-5 text-black flex justify-around items-center flex-col p-8 rounded-tl-[4rem] rounded-br-[4rem]">
            <h2 className="m-0 font-bold text-10 text-3xl"><pre>Work Experience</pre></h2>
            
            <p>
            During my internship at Greet Lab Pvt. Ltd. in Bangalore, I honed my skills as a MERN Stack Web Developer by creating dynamic APIs for user registration and crafting highly interactive user interfaces with React, with a primary focus on frontend development.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
