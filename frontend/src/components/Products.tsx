import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Product';
import Spinner from './Spinner';
import React from 'react';
import { ProductProps } from '../model/productProps';
import Pagination from './pagination/pagination';

interface ProductsProps {
  cat: string;
  sort: string;
  search: string;
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className='mt-6 grid grid-cols-1 justify-items-center sm:jutify-items-start xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6 overflow-y-auto '>
    {children}
  </div>
);

const Products: React.FC<ProductsProps> = ({ cat, sort, search }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        let url = '';
        if (cat) {
          url = `http://localhost:8000/v1/product?category=${cat}`;
        } else if (search) {
          url = `http://localhost:8000/v1/product${search}`;
        } else {
          url = 'http://localhost:8000/v1/product';
        }
        const res = await axios.get(url);
        setProducts(res.data);
        console.log(products);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    getProducts();
    console.log(products);
  }, [cat, search]);

  useEffect(() => {
    const sortProducts = () => {
      const sortedProducts = [...products];
      if (sort === 'newest') {
        sortedProducts.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (sort === 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setProducts(sortedProducts);
    };
  
    sortProducts();
  }, [sort]);
  

  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState<ProductProps[]>([]);

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
    <>
      {loading ? (
        <Spinner />
      ) : currentProducts.length > 0 ? (
        <Container>
          {currentProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </Container>
      ) : (
        <div style={{ fontWeight: 'bold' }}>
          No products were found that met the criteria!
        </div>
      )}

      {currentProducts.length > 0 ? (
        <div className='flex justify-center my-3 flex-grow items-center'>
          <Pagination
            pageCount={Math.ceil(products.length / productsPerPage)}
            currentPage={currentPage}
            pageSize={productsPerPage}
            onPageChange={({ selected }: { selected: number }) =>
              handlePageChange({ selected })
            }
            onSizeChange={(value) => {
              handlePageSizeChange(value);
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default Products;
