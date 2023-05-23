import React from 'react';
import { ProductProps } from '../model/productProps';
import { NavLink } from 'react-router-dom';
import Product from './Product';
interface Props {
  products: ProductProps[];
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className='mt-6 grid grid-cols-1 justify-items-center sm:jutify-items-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6 overflow-y-auto '>
      {products.length > 0 ? (
        <>
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </>
      ) : (
        <p>Không có sản phẩm nào.</p>
      )}
    </div>
  );
};

export default Products;
