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
 <div id="" className="bg-black mx-8 rounded-xl shadow-xl p-24 w-screen mt-2">
      {/* First Row */}
      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
         
          <img src="project1.png" alt="Your Image" className="w-full border border-neutral-700 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          
          <h2 className="text-3xl font-normal font-sans text-gray-500">Next city</h2>
          <p className="mt-4 text-lg text-left text-gray-300 px-8 mb-2 font-thin tracking-tight ">An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.</p>
          <p className='text-left text-zinc-400 px-8 mb-5 tracking-tight font-thin font-mono'>React, Tailwind CSS, Rapid API</p>
          
          <button  onClick={(e) => {
            e.preventDefault();
            window.location.href='https://github.com/nkouki98/weatherreact';
            }} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white font-thin tracking-wider dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            VIEW
            </span>
          </button>

        </div>
      </div>
      {/* Second Row */}
      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src="project4.png" alt="Your Image" className="w-full border border-neutral-700 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Text (Title and Description) on the right */}
          <h2 className="text-3xl font-normal  font-sans text-gray-500">ReviewScore+</h2>
          <p className="mt-4 text-lg text-left text-gray-300 font-sans px-8 font-thin mb-1">An app that leverages user reivews and NLP libary to score comments and build a confidence measure for youtube channels that review tech products.</p>
          
          <p className='text-left text-zinc-400 font-mono font-thin px-8 mb-5'>Java, Spring boot, Python text processing</p>
          
          <button  onClick={(e) => {
            e.preventDefault();
            window.location.href='https://github.com/nkouki98/ReviewScoreplus';
            }} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white font-thin tracking-wider dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            VIEW
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto my-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          
          <img src="project6.png" alt="Your Image" className="w-full border border-neutral-700 h-auto rounded-lg shadow-lg" />
         
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          
          <h2 className="text-3xl font-normal  font-sans text-gray-400">Human-Computer Interaction Design Projects</h2>
          <p className="mt-4 text-lg text-left text-gray-300 px-8 font-thin font-sans mb-5"> A series of projects to explore in more detail the process of ideation and converting it to a practical application.</p>
          <button  onClick={(e) => {
            e.preventDefault();
            window.location.href='https://581-projects.webflow.io';
            }} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white font-thin tracking-wide dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            VIEW
            </span>
          </button>
      
        </div>
      </div>
    </div>


</>        
      


  );
};

export default Work1;

