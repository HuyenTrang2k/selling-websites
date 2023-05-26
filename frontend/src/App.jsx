import { useLayoutEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import AboutUs from './page/AboutUs';
import Footer from './components/Footer';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import ProductList from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Contact from './page/Contact';
import './App.css';
import StickySidebar from './components/StickySidebar';
import PineTree from './components/PineTreeDecor';

function App() {
  const [containerWidth, setContainerWidth] = useState('max-w-2xl');
  const [showBanner, setShowBanner] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1560) {
        setContainerWidth('max-w-7xl');
        setShowBanner(true);
      } else if (windowWidth >= 1440) {
        setContainerWidth('max-w-6xl');
        setShowBanner(true);
      } else if (windowWidth >= 1280) {
        setContainerWidth('max-w-5xl');
        setShowBanner(true);
      } else if (windowWidth >= 1024) {
        setShowBanner(false);
        setContainerWidth('max-w-4xl');
      } else if (windowWidth >= 768) {
        setShowBanner(false);
        setContainerWidth('max-w-3xl');
      } else {
        setShowBanner(false);
        setContainerWidth('max-w-2xl');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {true ? (
        <>
          <div
            className={`flex flex-col items-center justify-center min-h-screen ${containerWidth} mx-auto`}
          >
            <Navbar />
            <Announcement />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:cat' element={<ProductList />} />
              <Route path='/products/' element={<ProductList />} />
              <Route path='/product/:id' element={<ProductDetail />} />

              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </div>
          {showBanner ? (
            <>
              <StickySidebar />
              <PineTree />
            </>
          ) : null}
        </>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
