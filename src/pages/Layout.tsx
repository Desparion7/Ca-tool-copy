import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { colorMode } from '../app/slice/colorModeSlice';

const Layout = () => {
  const mode = useSelector(colorMode);

  return (
    <div className={` ${mode === 'dark' ? 'dark' : 'light'}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
