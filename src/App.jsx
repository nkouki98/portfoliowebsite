import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import { FullPage, Slide } from 'react-full-page'
import Layout from './components/Layout'
import ParticleContainer from './components/ParticleContainer'
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;



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




    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden'>
    <ParticleContainer/>
  
      <div className='md:snap-start bg-black h-screen w-screen flex items-center justify-center '>
      
        <Header/>
      </div>
      <div className='md:snap-start  bg-black md:h-screen w-screen flex items-center justify-center '>
      <About/>
      </div>
      <div className='md:snap-start bg-white md:h-screen w-screen flex items-center justify-center'>
      <Work/>
      </div>
      <div className='md:snap-start bg-white h-screen w-screen flex items-center justify-center '>
      <Contact/>
      </div>
    
    </div>
    </>





  
  );
};

export default App
