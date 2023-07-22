import React from 'react'
import * as BootStrap from "react-icons/bs"
import * as BoxIcons from "react-icons/bi"
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react'
const Work = () => {
 
  return (
 
<div className='min-h-screen w-screen lg:mx-10 scale-95 bg-black'>
  <h1 className="text-5xl font-thin font-sans text-white tracking-tighter p-3 md:p-12 text-center md:text-left">
    Recent work
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mx-2 md:mx-auto justify-items-center items-center">
    {/* Column 1 */}
    <div className="bg-transparent p-2">
      <p className='text-white text-sm mb-2 md:mb-5'>Traveller's weather</p>
      <img
        src="project1.png"
        alt="Image 1"
        className="lg:w-full h-auto sm:w-2/3 mx-auto shadow-md rounded-lg hover:scale-105"
      />
      <div className='flex justify-center md:justify-start mt-3'>
        <button className='text-yellow-100 font-sans font-thin text-base mx-auto md:mx-0 tracking-wider'>
          Github
        </button>
        <BoxIcons.BiLogoReact className=" mx-2 md:mx-auto text-4xl text-blue-600 hover:scale-105" />
        <BoxIcons.BiLogoTailwindCss className=" mx-2 md:mx-auto text-4xl text-blue-200 hover:scale-105" />
      </div>
    </div>

    {/* Column 2 */}
    <div className="bg-transparent p-2">
      <p className='text-white text-sm mb-2 md:mb-5'>Go RESTful API</p>
      <img
        src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Fuchsia.svg"
        alt="Image 2"
        className="lg:w-full border border-gray-500 lg:h-auto sm:w-2/3 sm:h-3/4 w-full mx-auto shadow-md rounded-lg hover:scale-105"
      />
      <div className='flex justify-center md:justify-start mt-3'>
        <button className='text-yellow-100 font-sans font-thin text-base mx-auto md:mx-0 tracking-wider'>
          Github
        </button>
        <BoxIcons.BiLogoReact className=" mx-2 md:mx-auto text-4xl text-blue-600 hover:scale-105" />
        <BoxIcons.BiLogoTailwindCss className=" mx-2 md:mx-auto text-4xl text-blue-200 hover:scale-105" />
      </div>
    </div>

    {/* Column 3 */}
    <div className="bg-transparent p-2">
      <p className='text-white text-sm mb-2 md:mb-5'>Portfolio</p>
      <img
        src="project3.png"
        alt="Image 3"
        className="w-full h-auto mx-auto shadow-md rounded-lg hover:scale-105"
      />
      <div className='flex justify-center md:justify-start mt-3'>
        <button className='text-yellow-100 font-sans font-thin text-base mx-auto md:mx-0 tracking-wider'>
          Github
        </button>
        <BoxIcons.BiLogoReact className=" mx-2 md:mx-auto text-4xl text-blue-600 hover:scale-105" />
        <BoxIcons.BiLogoTailwindCss className=" mx-2 md:mx-auto text-4xl text-blue-200 hover:scale-105" />
      </div>
    </div>
  </div>
</div>


  );
};

export default Work;

