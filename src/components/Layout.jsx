import React from 'react';
import StickyNavbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <StickyNavbar />
      <main>
        {children}
      </main>
      {/* You can add a footer or any other common elements here */}
    </div>
  );
};

export default Layout;
