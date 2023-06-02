import React from 'react';
import ProductCategory from '../components/ProductCategory';
import Slider from '../components/Slider';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className='flex flex-col justify-center bg-gradient-to-r from-teal-300 to-indigo-700 '>
      <Slider/>
      <Categories/>
      <ProductCategory />
    </div>
  );
};

export default Home;
