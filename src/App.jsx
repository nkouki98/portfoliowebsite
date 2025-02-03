import React from 'react';
import { motion } from "framer-motion";
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Work1 from './components/Work1';
import Layout from './components/Layout';
import Technologies from './components/Technologies';
function App() {
  return (
    <Router>
      <>
   <div className=''>
        <div id='container' className=' h-screen'>
          {/* <Layout /> */}
          <div>
            <Welcome />
          </div>
            <div id='works' className=''>
            <Work1 />
            </div>
            <div className=''>
              <Technologies/>
            </div>
          <div className= "h-screen flex items-center justify-center ">
            <Contact />
          </div>
          </div>
        </div>

 
        
     
      </>
    </Router>
 
  );
}

export default App;
