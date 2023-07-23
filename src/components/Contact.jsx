import React from "react";
import * as BoxIcons from "react-icons/bi";

const Contact = () => {
  return (
    <div id="4" className="min-h-screen flex justify-center items-center">
      <div className="flex">

        

        <div className=" bg-gray-200 flex items-center justify-center w-full">
        <h1 className="font-thin font-sans text-3xl -tracking-wider text-gray-800 p-16 mr-12">Connect with me!</h1>
          <a href='https://www.linkedin.com/in/syedfarhanahmeduofc/' target='_blank' className="flex items-center justify-center space-x-10 p-10">
            <BoxIcons.BiLogoLinkedin className="text-7xl text-blue-600 hover:scale-105" />
          </a>
          <a href='https://github.com/nkouki98' target='_blank' className="flex items-center justify-center space-x-10 p-10" >
            <BoxIcons.BiLogoGithub className="text-7xl text-gray-400 hover:scale-105" /></a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
