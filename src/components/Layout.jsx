import React from 'react';
import StickyNavbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <StickyNavbar />
      <main>
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
