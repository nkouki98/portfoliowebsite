import React from "react";
import * as BoxIcons from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,3fr] gap-2 mx-3 h-max">

        <div className="flex justify-center items-center text-center p-4 scale-90 rounded-lg">
          <h1 className="font-thin font-sans text-3xl tracking-tighter text-gray-900">Connect with me!</h1>
        </div>

        <div className=" bg-zinc-100 shadow-md border border-gray-300 rounded-lg flex items-center justify-center">
          <button className="flex items-center justify-center space-x-8 p-10">
            <BoxIcons.BiLogoLinkedin className="text-7xl text-blue-600 hover:scale-105" />
            <BoxIcons.BiLogoGithub className="text-7xl text-gray-700 hover:scale-105" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;
