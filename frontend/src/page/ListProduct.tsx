import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductProps } from '../model/productProps';
import Products from '../components/Products';
import Pagination from '../components/pagination/pagination';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [totalItem, setTotalItem] = useState(0);
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/v1/product');
      setProducts(res.data);
      setTotalItem(res.data.length);
    } catch (err) {}
  };
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const maxPage = Math.ceil(products.length / productsPerPage);
    if (currentPage > maxPage) {
      setCurrentPage(1);
    }
    getCurrentProducts();
    scrollToTop();
  }, [currentPage, products, productsPerPage]);

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    setCurrentProducts(currentProducts);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handlePageSizeChange = (value: number) => {
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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
            pageSize={productsPerPage}
            onPageChange={({ selected }: { selected: number }) =>
              handlePageChange({ selected })
            }
            onSizeChange={(value) => {
              handlePageSizeChange(value)
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
