import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { addProductToCart } from '../redux/apiRequest';
import { ProductProps } from '../model/productProps';
import React from 'react';
import { publicRequest } from '../../requestMethods';

const ProductDetail: React.FC<ProductProps> = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.login.currentUser);
  const userId = user?._id;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/" + id);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type: 'dec' | 'inc') => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    const productId = product.id;
    addProductToCart({ quantity, productId, userId, dispatch });
  };

  return (
    <div className="bg-white h-[80vh] mt-10 flex justify-center">
    <div className="sm:px-6 lg:px-8 flex-1 flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Detail</h1>
      <div className="flex flex-wrap flex-row gap-4">
        <div className="w-full md:w-1/2 flex-1 justify-center">
          <img
            className="h-80 object-scale-down "
            src={product.image}
            alt="Product"
          />
        </div>
        <div className="w-full md:w-auto flex-1 flex-col gap-3">
          <h1 className="text-xl font-semibold">{product.name}</h1>
          <p className="my-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="font-bold text-xl">$ {product.price}</span>
            <div className="flex items-center ml-4">
              <button
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                onClick={() => handleQuantity('dec')}
              >
                -
              </button>
              <span className="w-8 h-8 border border-gray-300 flex items-center justify-center mx-2">
                {quantity}
              </span>
              <button
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                onClick={() => handleQuantity('inc')}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="w-1/3 px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProductDetail;
