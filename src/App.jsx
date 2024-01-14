import React from 'react';
import { motion } from "framer-motion";
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Work1 from './components/Work1';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <>
        <div id='container' className='bg-neutral-200 h-screen'>
          <Layout />
          <div>
            <Welcome />
          </div>
          <div id='works'>
          </div>
            <div>
            <Work1 />
            </div>
          <div className='bg-neutral-200 h-screen  flex items-center justify-center '>
            <Contact />
          </div>
        </div>

 
        
     
      </>
    </Router>
 
  );
}

export default App;
