import React from 'react';
import ProductCategory from '../components/ProductCategory';
import Slider from '../components/Slider';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className='flex flex-col justify-center bg-[#F9EA89] '>
      <Slider/>
      <Categories/>
      <ProductCategory />
    </div>
  );
};

export default Home;
