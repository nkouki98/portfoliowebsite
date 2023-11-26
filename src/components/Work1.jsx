import React from 'react'
import * as Bootstrap from "react-icons/bs"
import { motion } from "framer-motion";
const Work1 = () => {

  const redirectUrl = 'https://581-projects.webflow.io';
  const handleClick = () => {
    window.location.href = redirectUrl;
  };
  return (
   
   <>
 <div id="" className="bg-black mx-5 rounded-xl shadow-xl p-16 w-screen mt-2">
      {/* First Row */}
      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
         
          <img src="project1.png" alt="Your Image" className="w-full border border-neutral-500 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          
          <h2 className="text-3xl font-normal font-sans text-gray-500">Next city</h2>
          <p className="mt-4 text-lg text-left text-gray-400 px-2">An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.</p>
          <p className='text-left text-zinc-400 px-2'>React, tailwind CSS, RestFul APIs</p>
          <a href="https://github.com/nkouki98/weatherreact" className="flex justify-center items-center border border-indigo-500 shadow-md rounded-md p-3 w-2/12 text-gray-100 font-thin font-sans tracking-wider mx-auto my-8 hover:scale-110">View</a>

        </div>
      </div>
      {/* Second Row */}
      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src="project4.png" alt="Your Image" className="w-full border border-neutral-500 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Text (Title and Description) on the right */}
          <h2 className="text-3xl font-normal  font-sans text-gray-500">ReviewScore+</h2>
          <p className="mt-4 text-lg text-left text-gray-400">An app that leverages user reivews and NLP libary to score comments and build a confidence measure for youtube channels that review tech products.</p>
          
          <p className='text-left text-zinc-400'>Java, Spring boot, Python text processing</p>
          <a href="https://github.com/nkouki98/ReviewScoreplus" className="flex justify-center items-center border border-indigo-500 font-thin shadow-md rounded-md p-3 w-2/12 text-gray-100 font-sans tracking-wider mx-auto my-8 hover:scale-110">View</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          {/* Image on the left covering the entire width */}
          <img src="project6.png" alt="Your Image" className="w-full border border-neutral-500 h-auto rounded-lg shadow-lg" />
         
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Text (Title and Description) on the right */}
          <h2 className="text-3xl font-normal  font-sans text-gray-400">Human-Computer Interaction Design Projects</h2>
          <p className="mt-4 text-lg text-left text-gray-300"> A series of projects to explore in more detail the process of ideation and converting it to a practical application.</p>
          <button onClick={handleClick} className=' justify-start items-start  border border-indigo-500 shadow-sm rounded-md p-3 w-2/7 text-gray-100 font-sans font-thin tracking-wider mx-auto my-8 hover:scale-110'>View Projects</button>
        </div>
      </div>
    </div>


</>        
      


  );
};

export default Work1;
