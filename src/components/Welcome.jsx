import * as BoxIcons from "react-icons/bi"
import ParticleContainer from "./ParticleContainer";
import { motion } from "framer-motion";
const Welcome = () => {
  
    // Function to handle the download button click
    const handleDownload = () => {
      // Get the URL of the PDF file from the public folder
      const pdfURL ='/SyedFarhanAhmed.pdf';
  
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfURL;
  
      // Set the download attribute to specify the filename
      link.download = 'SyedAhmedResume.pdf';
  
      // Programmatically trigger the click event on the link
      link.click();
    };
  
    return (

     
  

    
        <header id='1' className="bg-white min-h-screen flex flex-col justify-center items-center relative">
           <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
      >   
        
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl items-start p-3 sm:p-8 md:p-10 lg:p-14 xl:p-28 w-full max-w-screen-2xl px-3 mb-16">
                <h1 className="w-full font-sans font-extralight text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-left text-zinc-200 mb-4">Final year Computer science student and an aspiring Software engineer.</h1>
                <p className="w-full text-2xl sm:text-xl md:text-lg lg:text-3xl font-sans text-left tracking-normal text-zinc-100 font-thin">Hi, I am Farhan. I am completing my Bachelor of Science in Computer science at the University of Calgary. I enjoy full-stack development with a focus around design and a sense of ownership.</p>
            </div>
            <div className="scroll-down-arrow absolute top-1/2 md:right-6 right-2 transform -translate-y-1/2">
                <a href="#works">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white bg-transparent/10 hover:bg-transparent/100 bg-neutral-800 shadow-lg rounded-full mr-3 p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
            </motion.div> 
    </header>
   
    
    
    
    
    );
};

export default Welcome;
