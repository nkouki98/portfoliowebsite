import * as BoxIcons from "react-icons/bi"
import ParticleContainer from "./ParticleContainer";
const Header = () => {
  
    // Function to handle the download button click
    // const handleDownload = () => {
    //   // Get the URL of the PDF file from the public folder
    //   const pdfURL ='/SyedFarhanAhmed.pdf';
  
    //   // Create a temporary link element
    //   const link = document.createElement('a');
    //   link.href = pdfURL;
  
    //   // Set the download attribute to specify the filename
    //   link.download = 'SyedAhmedResume.pdf';
  
    //   // Programmatically trigger the click event on the link
    //   link.click();
    // };
  
    return (
      <header id='1' className="bg-black min-h-screen flex justify-center items-center">
      <div className="relative bg-gray-900/60 shadow-2xl rounded-2xl items-start p-10 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="md:columns-1 items-start">
              <h1 className=" font-sans font-extralight text-4xl md:text-5xl lg:text-6xl tracking-tighter text-left text-zinc-300">Hi, I am Farhan</h1>
              <p className="text-base md:text-lg font-mono tracking-wider text-left text-zinc-300">Final year Computer Science student at the University of Calgary</p>
              <div className="text-left mt-5">
                  <button onClick={handleDownload} className="border font-sans font-normal justify-start items-start border-zinc-400 shadow-md rounded hover:scale-110 text-base md:text-lg tracking-tighter p-2 md:w-1/4 text-zinc-300">
                      RESUME 
                  </button>
              </div>
          </div>
      </div>
  </header>
    );
};

export default Header;
