import * as BoxIcons from "react-icons/bi"

const Header = () => {
  
    // Function to handle the download button click
    const handleDownload = () => {
      // Get the URL of the PDF file from the public folder
      const pdfURL ='/SyedAhmed.pdf';
  
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfURL;
  
      // Set the download attribute to specify the filename
      link.download = 'SyedAhmedResume.pdf';
  
      // Programmatically trigger the click event on the link
      link.click();
    };
  
    return (

      <header className="bg-white min-h-screen flex justify-center items-center">
        <div>
        <h1 className="lg:text-9xl text-5xl font-serif italic -tracking-widest text-slate-800">Syed Farhan Ahmed</h1>
        <p className="text-slate-700 text-3xl font-light tracking-widest ">Aspiring Full-stack developer</p>
        
        <button onClick={handleDownload} className="hover:scale-105 text-lg font-light tracking-tighter w-1/8 p-3 text-yellow-100 bg-slate-900 shadow-2xl rounded-xl">
      Resume <BoxIcons.BiDownArrowAlt className=" items-center text-center inline-flex"/>
       </button>
        
        
        </div>        
      </header>
    );
  };
  
  export default Header;