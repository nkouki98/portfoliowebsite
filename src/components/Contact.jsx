import React from "react";
import * as BoxIcons from "react-icons/bi";
import { Button } from "react-scroll";

const Contact = () => {
  const handleDownload = () => {
    // Get the URL of the PDF file from the public folder
    const pdfURL ='/ResumeFarhan.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfURL;

    // Set the download attribute to specify the filename
    link.download = 'SyedFarhanAhmed.pdf';

    // Programmatically trigger the click event on the link
    link.click();
  };
 
  return (
    <div id="4" className="min-h-screen flex justify-center items-center">
  <div className="flex flex-col md:flex-row"> {/* Use flex-col for stacking on small screens and flex-row for larger screens */}
    <div className="relative">
    <h1 className="font-thin font-sans text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-800 p-4 md:p-16 mr-0 md:mr-12">Connect with me!</h1>
    </div>
    <div className="bg-neutral-200 flex items-center justify-center w-full md:w-auto"> {/* Set width to auto on larger screens */}
      <div className="relative">
      <a href='https://www.linkedin.com/in/syedfarhanahmeduofc/' target='_blank' className="flex items-center justify-center space-x-6 sm:space-x-10 p-6 md:p-10">
        <BoxIcons.BiLogoLinkedin className="text-4xl sm:text-5xl md:text-7xl text-blue-600 hover:scale-105" /> {/* Adjust icon size for different screen sizes */}
      </a>
      </div>
      <div className="relative">
      <a href='https://github.com/nkouki98' target='_blank' className="flex items-center justify-center space-x-6 sm:space-x-10 p-6 md:p-10">
        <BoxIcons.BiLogoGithub className="text-4xl sm:text-5xl md:text-7xl text-gray-400 hover:scale-105" /> {/* Adjust icon size for different screen sizes */}
      </a>
      </div>
      <div className="relative">
      <button onClick={handleDownload} className="flex items-center justify-center space-x-6 sm:space-x-10 md:p-4 bg-black text-white text-sm md:text-base p-3 shadow-md rounded-md hover:scale-105 ml-3">
                      RESUME 
                  </button>
      </div>
    </div>

  </div>
</div>

  );
};

export default Contact;
