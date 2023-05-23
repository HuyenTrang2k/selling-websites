import { useState } from 'react';

import Navbar from './components/Navbar';
import AboutUs from './page/AboutUs';
import Footer from './components/Footer';
import Login from './page/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductList from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Contact from './page/Contact';
function App() {
  return (
    <div className='min-w-300 min-h-screen flex flex-col'>
      {true? <Navbar/>: null}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          {/* <Route path='/products/:cat' element={<ProductList />} />
       
          <Route path='/cart' element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<SignUp />} /> */}
          {/* <Route path = "/admin" element={<Admin />}/> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/success' element={<Success />} /> */}
        </Routes>
      {true?<Footer />:null}
    </div>
  );
}

export default App;
