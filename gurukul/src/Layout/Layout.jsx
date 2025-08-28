
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;