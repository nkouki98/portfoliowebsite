import { motion } from 'framer-motion';
import React from 'react';

const Welcome = () => {

  const handleDownload = () => {
    const pdfURL = '/ResumeFarhan.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'SyedFarhanAhmed.pdf';
    link.click();
  };


  return (
    <header id="1" className="h-screen flex flex-col justify-center items-center relative bg-zinc-900 mx-6 my-3 inset-8 rounded-2xl shadow-xl overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex flex-col lg:flex-row items-start p-3 sm:p-8 md:p-10 lg:p-14 xl:p-28 w-full max-w-screen-2xl px-3 mb-16 rounded-xl">
          <div className="flex-1 text-left text-zinc-300 mb-4">
            <h1 className="w-full font-sans -tracking-wide text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
              <div className='text-zinc-300 mt-2 mb-2 font-extrabold tracking-tighter text-5xl p-4'>Hi, I'm Farhan</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
                Aspiring Full Stack Developer and Design Enthusiast.
              </div>
              <div className="mx-3">
              <button  className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 text-lg rounded-lg shadow-md shadow-yellow-200 text-zinc-900 font-sans tracking-tighter duration-200 ease-in-out transform hover:border-2 hover:border-purple-200 hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:scale-95">
                Download CV
              </button>
            </div>

          
            </h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.5-7L9 6.5M15 20l5.5-7L15 6.5"></path>
            </svg>
          </div>
        </div>
        <div className="scroll-down-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#works">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white bg-transparent/10 hover:bg-transparent/100 bg-neutral-500 shadow-lg rounded-full p-2 -mt-24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Welcome;
