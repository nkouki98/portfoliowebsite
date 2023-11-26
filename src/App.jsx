
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './components/Contact'
import Welcome from './components/Welcome'
import Work1 from './components/Work1' 
import { motion } from "framer-motion";
import Layout from './components/Layout'
import React, { useState, useEffect } from 'react';

function App() {

  return (

  
  <>
     

    <div className='h-screen w-screen overflow-scroll overflow-x-hidden'>
    <Layout/>
    <div className='mx-5'>
      <Welcome/>
    </div>
    <div id='works'>

    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -150},
            visible: { opacity: 1, x: 0, y:20},
          }}
        >   
          
  

  <h1 className=" font-thin md:text-8xl text-5xl font-sans text-neutral-700 -tracking-wider md:p-2 text-center md:text-center mx-auto my-12">
    Recent work.
  </h1>
  </motion.div>

      </div> 

      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.2}}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0.2},
            visible: { opacity: 1},
          }}
        >   
          
  

          <div className=' bg-white flex items-center justify-center'>
      <Work1/>
      </div>
  </motion.div>  
    {/* <div className=' bg-white flex items-center justify-center'>
      <Work1/>
      </div> */}
     
      <div className=' bg-white h-screen w-screen flex items-center justify-center '>
      <Contact/>
      </div>
    
    </div>
    <div className='h-screen w-screen overflow-scroll overflow-x-hidden'>
    <Layout />
    <div className='mx-3'>
      <Welcome />
    </div>

    <div id='works'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0, y: 20 },
        }}
        className="md:w-3/4 mx-auto my-5" // Center and adjust width on medium screens and above
      >
        <h1 className="font-thin md:text-6xl text-4xl font-sans text-neutral-500 tracking-wider text-center">
          Recent work.
        </h1>
      </motion.div>
      <Work1/>
    </div>

    {/* <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0.2 },
        visible: { opacity: 1 },
      }}
    >
      <div className='bg-white flex items-center justify-center'>
        <Work1 />
      
      </div>
    </motion.div> */}
  
    <div className='bg-white h-screen w-screen flex items-center justify-center'>
      <Contact />
    </div>
    </div>

    </>





  
  );
};

export default App
