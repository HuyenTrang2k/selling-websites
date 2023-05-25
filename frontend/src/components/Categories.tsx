import React from 'react';
import { categories } from '../data';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 ">
      {categories.map((item) => (
        <div key={item.id} className="relative h-240">
          <Link to={`/products/${item.cat}`}>
            <img
              className="w-full h-full object-cover rounded-2xl"
              style={{ height: '240px' }}
              src={item.img}
              alt={item.title}
            />
            <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center">
              <button className="border-none px-10 py-2 bg-white text-gray-600 font-semibold cursor-pointer">
                {item.title}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
