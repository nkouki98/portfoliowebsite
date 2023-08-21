import * as BoxIcons from "react-icons/bi"
import ParticleContainer from "./ParticleContainer";
const Header = () => {
  
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

      <header id='1' className="bg-black min-h-screen flex justify-center items-center">

        <div className="relative">
      
        <h1 className="lg:text-5xl font-serif font-extralight text-4xl tracking-tight italic text-zinc-300">Syed Farhan Ahmed
        </h1>
       
        {/* <p className="text-zinc-500 text-xl font-light tracking-widest ">
       Developer</p> */}
        
        <button onClick={handleDownload} className=" border font-sans font-normal border-zinc-400 mt-5 shadow-md rounded hover:scale-110 text-lg  tracking-tighter w-1/4 p-2 text-zinc-300 ">
          RESUME 
       </button>
     
        
        </div> 
   
      </header>
    );
  };
  
  export default Header;