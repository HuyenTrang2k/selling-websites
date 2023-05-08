import React from 'react';
import { Product } from '../model/productProps';
interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  
  return (
    <div className='mt-6 grid grid-cols-1 justify-items-center sm:jutify-items-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6 min-h-screen overflow-y-auto '>
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative p-3 bg-white max-w-xs xs:text-start text-center'
            >
              <a href='#' className='group block'>
                <button className='bg-red-500 p-2'> delete</button>
                <div className='overflow-hidden rounded-md lg:h-[15rem] transition-all duration-300 ease-in-out transform group-hover:scale-[1.08]'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='object-contain w-full h-full'
                  />
                </div>
                <h3 className='mt-4 text-base font-medium leading-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                  {product.name}
                </h3>
                <p className='mt-2 text-lg font-bold text-red-500'>
                  ${product.price}
                </p>
                <p className='mt-1 text-sm text-gray-500 line-clamp-4 overflow-ellipsis'>
                  {product.description}
                </p>
              </a>
            </div>
          ))}
        </>
      ) : (
        <p>Không có sản phẩm nào.</p>
      )}
    </div>
  );
};

export default Products;
