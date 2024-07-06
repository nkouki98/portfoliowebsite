import React from "react";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="4" className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="font-normal font-sans text-xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-800 mb-8">
        Get in touch, <a href="mailto:farhan1998@live.com" className="text-gray-600 font-sans tracking-tighter font-normal hover:underline">farhan1998@live.com</a>
      </h1>
      {/* <h2 className="font-thin font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-800 mb-4">
        or connect with me on
      </h2> */}
      <div className="flex space-x-8">
        <a href="https://www.linkedin.com/in/syedfarhanahmeduofc/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-zinc-600 hover:underline">
          <BiLogoLinkedin className="text-4xl sm:text-5xl md:text-6xl" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">LinkedIn</span>
        </a>
        <a href="https://github.com/nkouki98" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:underline">
          <BiLogoGithub className="text-4xl sm:text-5xl md:text-6xl" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
