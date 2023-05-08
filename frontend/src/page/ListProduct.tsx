import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../model/productProps';
import Products from '../components/Products';
import Pagination from '../components/pagination/pagination';
import Dropdown from '../components/dropdown';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItem, setTotalItem] = useState(0);
  const [resetPage, setResetPage] = useState(false);
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/v1/product');
      setProducts(res.data);
      setTotalItem(res.data.length);
    } catch (err) {}
  };
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    getCurrentProducts();
  }, [currentPage, products, productsPerPage]);

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    console.log(currentPage);
    setCurrentProducts(currentProducts);
  };
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };


  const handlePageSizeChange = (value) => {
    setProductsPerPage(value)
                  setCurrentPage(1)
                  setResetPage(true);
  };

  const options = [{ value: 10 }, { value: 20 }, { value: 30 }];
  return (
    <div className='bg-white h-full flex flex-col'>
      <div className='mx-auto lg:p-8 rounded-2xl max-w-7xl'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Product List</h1>
        <Products products={currentProducts} />
      </div>

      {products.length > 0 ? (
        <div className='flex justify-center my-3 flex-grow items-center'>
          <Pagination
            pageCount={Math.ceil(products.length / productsPerPage)}
            currentPage={currentPage}
            resetPage={resetPage}
            onPageChange={({ selected }: { selected: number }) =>
              handlePageChange({ selected })
            }
          />
          <div className='relative inline-block text-left mt-2'>
              <Dropdown
                options={options}
                value={productsPerPage}
                onChange={(value)=>{handlePageSizeChange(value)}
                }
              />
            </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
