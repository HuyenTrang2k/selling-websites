import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { clearCart, loginUser, removeProductOfCart } from '../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { clearProduct, removeProduct } from '../redux/cartRedux';
import React from 'react';
import axios from 'axios';
import { RootState } from '../redux/store';

const Cart = () => {
  const user = useSelector((state: RootState) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const history = useNavigate();

  const handlePayment = () => {
    console.log(cart.total);
    axios.post('http://localhost:8000/pay', {
      total: cart.total
    })
      .then((response) => {
        handleClear()
        // change page to
        window.location.replace(response.data);
      });
  };

  const handleClear = () => {
    dispatch(clearProduct(cart.products));
  };

  const handleDelete = () => {
    dispatch(removeProduct(cart.products));
  };

  let totalPrice = 0;

  return (
    <div className="p-4 sm:p-2 flex-1 w-full text-center">
      <h1 className="text-center font-bold">YOUR BAG</h1>
      <div className="flex items-center justify-between p-4">
        <div className="font-semibold cursor-pointer underline border-black hover:bg-black hover:text-white" >
          <Link to="/"> &lt; CONTINUE SHOPPING</Link>
        </div>
        <div className="hidden sm:flex">
          <span className="underline cursor-pointer m-0 px-2">Shopping Bag({cart.products.length})</span>
          <span className="underline cursor-pointer m-0 px-2">Your Wishlist (0)</span>
        </div>
        {user ? (
          ""
        ) : (
          <Link to="/login">
            <button className="p-2 font-semibold cursor-pointer bg-black text-white">LOGIN TO CHECK OUT</button>
          </Link>
        )}
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="Item flex-1 gap-4 flex flex-col"> {/* Sử dụng flex-2/3 để Item chiếm 2/3 của row */}
          {cart.products.map((product, index) => (
            totalPrice += product.price * product.quantity,
            <div key={index} className="flex justify-between">
              <div className="flex-2 flex">
                <img src={product.image} alt="product" className="w-20 h-20" />
                <div className="p-4 flex flex-col justify-around">
                  <span>
                    <b>Product:</b> {product.name}
                  </span>
                  <span>
                    <b>ID:</b> {product.id}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="flex items-center ">
                  <div className="text-24 m-5">Quantity: {product.quantity}</div>
                </div>
                <div className="text-30 font-light">Price: ${product.price * product.quantity}</div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Link
                  className="w-20 h-10 font-semibold cursor-pointer rounded-md hover:bg-red-400 hover:text-white justify-center items-center flex"
                  onClick={handleDelete} to={''}                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              className="w-40 block mr-2 hover:bg-red-600 hover:text-white justify-end"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="w-1/3 border border-solid border-gray-300 rounded p-4 flex flex-col gap-4">
          <h1 className="font-semibold">ORDER SUMMARY</h1>
          <div className="mb-30 mt-30">
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Total</span>
              <span>${totalPrice + 5.9}</span>
            </div>
          </div>
          <div className="flex justify-end mt-auto"> {/* Sử dụng mt-auto để đặt nút "CHECKOUT NOW" ở vị trí bottom 10px */}
            {user ? (
              <button
                className="w-full p-2 bg-black text-white font-semibold cursor-pointer"
                onClick={() => handlePayment()}
              >
                CHECKOUT NOW
              </button>
            ) : (
              <Link to="/login">
                <button className="w-full p-2 bg-black text-white font-semibold cursor-pointer">LOGIN TO CHECK OUT</button>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
