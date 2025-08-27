import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;