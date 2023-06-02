import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [sort, setSort] = useState('newest');
  const { search } = location;

  const handlerTitle = (value) => {
    switch (value) {
      case 'Camera':
        return 'Camera';
      case 'Storage device':
        return 'Storage device';
      case 'Camera':
        return 'Router';
      case undefined: {
        if (search) {
          return 'Search';
        } else {
          return 'All Products';
        }
      }
    }
  };

  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className='flex flex-col flex-1 w-full text-center'>
      <h1 className='m-4 text-3xl font-bold'>{handlerTitle(cat)}</h1>
      <div className='flex justify-around items-center m-4 w-full'>
        <div className='flex items-center'>
          <span className='mr-4 font-semibold'>Sort Products:</span>
          <select
            className='px-4 py-2 mr-4'
            onChange={(e) => setSort(e.target.value)}
          >
            <option value='newest'>Newest</option>
            <option value='asc'>Price (asc)</option>
            <option value='desc'>Price (desc)</option>
          </select>
        </div>
        <div className='flex items-center gap-3'>
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2'
            value={searchInput}
            onChange={handleSearch}
          />
          <Link
            to={`/products?search=${searchInput}`}
            style={{ background: 'none', border: 'none', display: 'flex' }}
          >
            <i className='fas fa-search'></i>
          </Link>
        </div>
      </div>
      <Products cat={cat} sort={sort} search={search} />
    </div>
  );
};

export default ProductList;
