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
    } catch (err) {}
  };

  const getCategory = async () => {
    try {
      setLoading(true);
      const resCat = await axios.get('http://localhost:8000/v1/category');
      setCategory(resCat.data);
      console.log(resCat.data);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    getCategory();
    getProducts();
    console.log(category);
    console.log(products);
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

  return (
    <div className='flex flex-col justify-center text-center'>
          {category.map((cat) => (
      <div
        className='p-8 mb-4'
        style={{
          backgroundImage:
            'url(//cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/newyear2023/Background/xu-huong-mua-sam.png)',
          backgroundSize: '100% 100%',
        }}
        key={cat.id}
      >
        <h1 className='m-5 text-5xl font-bold text-white'>{cat.name}</h1>
        <div className='flex flex-row flex-wrap gap-4 p-8 pt-0'>
        {/* <Products products={handlerArrays(cat.name).slice(0, 5)} /> */}
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
