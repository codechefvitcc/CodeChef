import React from 'react';
import { Footer, Navbar, DeptDisplay } from '../Components';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <DeptDisplay />
      <Footer />
    </>
  );
};

export default Layout;