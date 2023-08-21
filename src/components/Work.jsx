import React from 'react'
import * as Bootstrap from "react-icons/bs"
import { motion } from "framer-motion";
const Work = () => {
  const redirectToURL = () => {
    url = 'https://weatherreact-five.vercel.app/'; 
    window.open(url, '_blank');
  };
  return (
   
<div id='3' className='min-h-screen w-screen'>
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -150},
            visible: { opacity: 1, x: 0, y:20},
          }}
        >   
          
  

  <h1 className=" font-semibold md:text-7xl text-xl font-sans text-zinc-500 -tracking-widest md:p-5 text-center md:text-left">
    Recent work
  </h1>
  </motion.div>

  <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -150},
            visible: { opacity: 1, x: 10, y:20},
          }}
        >   
          
  


 
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 p-5">
    
      <div className="relative ">
      <img src="project2.png"  className=" h-48 w-full object-cover shadow-xl rounded-lg "/>
      <a href='https://github.com/nkouki98/Go-RestfulAPI' target="_blank" className="shadow-2xl absolute bottom-4 left-2 text-xl p-2 text-white hover:scale-125"><Bootstrap.BsArrowUpRightSquareFill/></a>
      
    </div>
    <div className="relative">
      <img src="project1.png" className="h-48 w-full object-cover shadow-xl rounded-lg "/>
      <a href='https://weatherreact-five.vercel.app/' target="_blank" className="absolute shadow-2xl bottom-4 left-2 text-xl p-2 text-white hover:scale-125"><Bootstrap.BsArrowUpRightSquareFill/></a>
      
    </div>
    <div className="relative">
      
      <img src="project3.png"  className=" h-48 w-full object-cover shadow-xl rounded-lg border  "/>
      <a href='https://github.com/nkouki98/ReviewScoreplus' target="_blank" className="shadow-2xl absolute bottom-4 left-2 text-xl p-2 text-white hover:scale-125"><Bootstrap.BsArrowUpRightSquareFill/></a>
     
					
				</div>

        <div className="relative">
      
      <img src="project4.png"  className="h-48 w-full object-cover shadow-xl rounded-lg border  "/>
      <a href='https://github.com/nkouki98/portfoliowebsite' target="_blank" className="shadow-2xl absolute bottom-4 left-2 text-xl p-2 text-white hover:scale-125"><Bootstrap.BsArrowUpRightSquareFill/></a>
     
					
				</div>
        </div>
        </motion.div>
</div>


  );
};

export default Work;

