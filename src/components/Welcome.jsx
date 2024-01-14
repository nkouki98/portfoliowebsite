
import { motion } from "framer-motion";
const Welcome = () => {
  
  
  
    return (

     
  

    
        <header id='1' className="h-screen flex flex-col justify-center items-center relative bg-neutral-200">
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
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-start p-3 sm:p-8 md:p-10 lg:p-14 xl:p-28 w-full max-w-screen-2xl px-3 mb-16 rounded-xl">
            <h1 className="w-full font-sans tracking-tighter text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left text-zinc-300 mb-4 font-bold">Final year Computer science student and an aspiring Software engineer. 
            <span className="text-zinc-800"> I am 
            interested in Data, Software and UI/UX.</span></h1>

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
