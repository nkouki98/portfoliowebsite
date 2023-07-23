import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import { FullPage, Slide } from 'react-full-page';
import { motion } from 'framer-motion';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

 useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  return (

  
  <>

{width < breakpoint && <div className='min-h-screen bg-transparent overflow-scroll'>
  <FullPage>
    <Slide> <Header/></Slide>

    <Slide> <About/></Slide>
    <Slide> <Work/></Slide>
    <Slide> <Contact/></Slide>
   </FullPage>
    </div> }
  
 
    {width > breakpoint && 
    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden'>
      <div className='snap-start bg-transparent h-screen w-screen flex items-center justify-center text-8xl'>
        <Header/>
      </div>
      <div className='snap-start  bg-gray-800 h-screen w-screen flex items-center justify-center text-8xl'>
      <About/>
      </div>
      <div className='snap-start bg-white h-screen w-screen flex items-center justify-center text-8xl'>
      <Work/>
      </div>
      <div className='snap-start bg-white h-screen w-screen flex items-center justify-center text-8xl'>
      <Contact/>
      </div>
    </div>}
    </>





  
  );
};

export default App
