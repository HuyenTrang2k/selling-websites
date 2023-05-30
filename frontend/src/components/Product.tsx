import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <div className='group relative p-3 bg-white max-w-xs xs:text-start text-center max-h-350'>
      <NavLink to={`/product/${item.id}`} className='group block'>
        <div className='overflow-hidden rounded-md lg:h-[15rem] transition-all duration-300 ease-in-out transform group-hover:scale-[1.08]'>
          <img
            src={item.image}
            alt={item.name}
            className='object-contain w-full h-full'
          />
        </div>
        <h3 className='mt-4 text-base font-medium leading-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
          {item.name}
        </h3>
        <p className='mt-2 text-lg font-bold text-red-500'>${item.price}</p>
        <p className='mt-1 text-sm text-gray-500 line-clamp-4 overflow-ellipsis'>
          {item.description}
        </p>
      </NavLink>
    </div>
  );
};

export default Product;
