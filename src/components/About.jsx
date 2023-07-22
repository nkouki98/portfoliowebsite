import React from 'react';

const About = () => {
  return (
   <div id="about" className='flex justify-center min-h-screen'>

    <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr]">
      
      <div className="flex justify-center items-center p-2 bg-neutral-50 border border-gray-300  shadow-xl rounded-xl scale-75">
        <h1 className="font-thin font-sans sm:text-lg md:text-xl lg:text-4xl hover:scale-110 tracking-tighter text-gray-900 ">About Me</h1>
      </div>
  
    
      <div className="flex justify-center items-center p-10 md:p-16 w-full bg-slate-600">
        <p className="font-thin font-sans text-base sm:text-xs md:text-base lg:text-xl  hover:scale-105 text-slate-50 p-10 text-ellipsis text-left">
        Hi, I'm Farhan, a passionate and detail-oriented web developer based in Calgary, Alberta. I'm currently pursuing my undergraduate studies at the University of Calgary, where I'm constantly honing my skills and exploring new technologies in the world of web development.
            My primary focus is on Full-stack development, with a strong emphasis on front-end technologies. I enjoy creating visually appealing and user-friendly websites that leave a lasting impression on users.
            Besides coding, I have a keen interest in photography, both film and digital. When I'm not in front of a computer, you'll often find me capturing moments through the lens of my camera, finding beauty in the world around me.
            I believe in staying physically and mentally fit, and working out is an integral part of my daily routine. Oh, and did I mention, I'm a coffee enthusiast too? I love savoring a good cup of coffee while brainstorming new ideas for web projects.
            I'm constantly seeking opportunities to collaborate and contribute to meaningful projects. If you're interested in working together or have any questions, feel free to reach out to me. Let's create something great together!
        </p>
      </div>
      </div>
    </div>

  
  );
};

export default About;
