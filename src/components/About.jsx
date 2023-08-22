import React from 'react';
import { motion } from "framer-motion";
const About = () => {
  return (
   <div id="2" className='flex justify-center min-h-screen border-8 border-yellow-600 bg-cover bg-center bg-black '>

    <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr]">
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50, y:250 },
            visible: { opacity: 1, x: 0,  y:250 },
          }}
        >   
      <div className="relative">
        <h1 className=" invisible md:visible font-thin font-sans md:text-3xl tracking-tighter text-white mx-auto ">About Me</h1>
      </div>
  
      </motion.div>


      <div className="p-3 mx-auto md:p-5 w-full relative md:items-center md:flex ">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.5}}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0},
          }}
        >   
        <p className=" font-thin font-sans text-base md:text-lg text-gray-300 md:p-16 text-ellipsis text-left">
        Hi, I'm Farhan, a passionate and detail-oriented web developer based in Calgary, Alberta. I'm currently pursuing my undergraduate studies at the University of Calgary, where I'm constantly honing my skills and exploring new technologies in the world of web development.
            My primary focus is on Full-stack development, with a strong emphasis on front-end technologies. I enjoy creating visually appealing and user-friendly websites that leave a lasting impression on users.
            Besides coding, I have a keen interest in photography, both film and digital. When I'm not in front of a computer, you'll often find me capturing moments through the lens of my camera, finding beauty in the world around me.
            I believe in staying physically and mentally fit, and working out is an integral part of my daily routine. Oh, and did I mention, I'm a coffee enthusiast too? I love savoring a good cup of coffee while brainstorming new ideas for web projects.
            I'm constantly seeking opportunities to collaborate and contribute to meaningful projects. If you're interested in working together or have any questions, feel free to reach out to me. Let's create something great together!
        </p>
        </motion.div>
      </div>
      </div>
    </div>

  
  );
};

export default About;
