import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { Link } from 'react-router-dom';
import { ProductProps } from '../model/productProps';
import { CategoryProps } from '../model/categoryProps';
import Products from './Products';

const ProductCategory = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [category, setCategory] = useState<CategoryProps[]>([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:8000/v1/product');
      setProducts(res.data);
      setLoading(false);
    } catch (err) { }
  };

  const getCategory = async () => {
    try {
      setLoading(true);
      const resCat = await axios.get('http://localhost:8000/v1/category');
      setCategory(resCat.data);
      setLoading(false);
    } catch (err) { }
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const handlerArrays = (catInput) => {
    let arrayOfArrays: ProductProps[] = [];
    const chunkSize = 5;
    arrayOfArrays = products.filter(
      (item) =>
        item.category === category.find((cat) => cat.name === catInput)?.id
    );
    return arrayOfArrays;
  };

  const getRandomColor = () => {
    const minRed = 46;
    const minGreen = 100;
    const minBlue = 101;

    const red = Math.floor(Math.random() * (256 - minRed) + minRed);
    const green = Math.floor(Math.random() * (256 - minGreen) + minGreen);
    const blue = Math.floor(Math.random() * (256 - minBlue) + minBlue);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className='flex flex-col justify-center text-center'>
      {category.map((cat) => (
        <div
          className='p-8 border-white border-2 border-solid'
          style={{
            background: `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()})`,
           backgroundSize: '100% 100%',
          }}
          key={cat.id}
        >
          <h1 className='m-5 text-5xl font-bold text-white'>{cat.name}</h1>
          <div className='mt-6 grid grid-cols-1 justify-items-center sm:jutify-items-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6 overflow-hidden pb-4'>
            {handlerArrays(cat.name)
              .slice(0, 5)
              .map((item) => (
                <Product key={item.id} item={item} />
              ))}
          </div>
          <Link
            to={`/products/${cat.name}`}
            className='bg-white text-black no-underline p-2.5 w-[370px] inline-block overflow-hidden rounded-md text-center py-3 mb-4 mx-auto sm:w-[200px]'
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
