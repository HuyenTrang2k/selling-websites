import { useLayoutEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import AboutUs from './page/AboutUs';
import Footer from './components/Footer';
import Login from './page/Login';
import Home from './page/Home';
import ProductList from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Contact from './page/Contact';
import './App.css';

function App() {
  const [containerWidth, setContainerWidth] = useState('max-w-2xl');

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1280) {
        setContainerWidth('max-w-7xl');
      } else if (windowWidth >= 1024) {
        setContainerWidth('max-w-5xl');
      } else if (windowWidth >= 768) {
        setContainerWidth('max-w-4xl');
      } else {
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
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${containerWidth} mx-auto`}
      >
        <Announcement />
        {true ? <Navbar /> : null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          {/* <Route path='/products/:cat' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path="/register" element={<SignUp />} /> */}
          {/* <Route path = "/admin" element={<Admin />}/> */}
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/success' element={<Success />} /> */}
        </Routes>
        {true ? <Footer /> : null}
      </div>
      <div className="banner-wrapper text-center md:none">
        <a
          data-cate="0"
          data-place="1865"
          href="https://www.thegioididong.com/mua-online-gia-re"
          className={`fixed top-[12rem] w-[89px]`}
          style={{left:`calc(((100vw - 1280px)/2) - 105px)`}}
        >
          <img
            className="block max-w-full h-auto"
            style={{ cursor: 'pointer' }}
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Trai-80x271.png"
            alt="Liễn Trái"
          />
        </a>
        <a
          data-cate="0"
          data-place="1866"
          href="https://www.thegioididong.com/mua-online-gia-re"
          className={`fixed top-[12rem] right-[calc(((100vw - 1280px)/2) - 105px)] w-[89px]`}
          style={{right:`calc(((100vw - 1280px)/2) - 105px)`}}
        >
          <img
            className="block max-w-full h-auto"
            style={{ cursor: 'pointer' }}
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Phai-80x271.png"
            alt="Liễn Phải"
          />
        </a>
      </div>
      <div className='pine-tree fixed none sm:display'>
        <img
          className='pine-tree-left'
          src={'src/assets/images/light-pine-tree.png'}
          alt='Pine Tree'
        />
        <img
          className='pine-tree-right'
          src={'src/assets/images/pine-tree.png'}
          alt='Pine Tree'
        />
        <img
          className='santa-left'
          src={'src/assets/images/santa-left.png'}
          alt='Santa Claus'
        />
        <img
          className='santa-right'
          src={'src/assets/images/santa-right.png'}
          alt='Santa Claus'
        />
      </div>
    </>
  );
}

export default App;
