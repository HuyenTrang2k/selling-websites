import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { addProductToCart, changeQuantityProductCart, clearCart, loginUser, removeProductFromCart, removeProductOfCart } from '../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { clearProduct, removeProduct } from '../redux/cartRedux';
import React, { useState } from 'react';
import axios from 'axios';
import { RootState } from '../redux/store';

const Cart = () => {
  const user = useSelector((state: RootState) => state.auth.login.currentUser);
  const cart = useSelector((state: RootState) => state.cart);
  const userId = user?._id;
  const dispatch = useDispatch();
  const history = useNavigate();
  const handlePayment = () => {
    axios.post('http://localhost:8000/pay', {
      total: cart.total
    })
      .then((response) => {
        handleClear()
        window.location.replace(response.data);
      });
  };

  const handleClear = async () => {
    await clearCart(dispatch, userId);
  };

  const handleDelete = (id: string) => {
    removeProductFromCart(id, userId, dispatch);
  };

  const handleQuantity = async (action: string, productId: string) => {
    const cartProduct = cart.products.find((product) => product.id === productId);
    if (cartProduct) {
      if (action === 'increase') {
        const newQuantity = cartProduct.quantity + 1;
        console.log(newQuantity);
        changeQuantityProductCart({ dispatch, userId, productId:cartProduct.productId, quantity: newQuantity });
      } else if (action === 'decrease') {
        if (cartProduct.quantity > 1) {
          const newQuantity = cartProduct.quantity - 1;
          changeQuantityProductCart({ dispatch, userId, productId:cartProduct.productId, quantity: newQuantity });
        } else {
          removeProductFromCart(productId, userId, dispatch);
        }
      }
    }
  }

  let totalPrice = 0;
  return (
    <div className="p-4 sm:p-2 flex-1 w-full text-center">
      <h1 className='m-4 text-3xl font-bold'>Your bag</h1>
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
      <div className="flex justify-between flex-col sm:flex-row gap-4">
        <div className="Item flex-1 gap-4 flex flex-col">
          {cart.products.map((product, index) => (
            totalPrice += product.price * product.quantity,
            <div key={index} className="flex justify-between">
              <div className="flex-2 flex">
                <img src={product.image} alt="product" className="w-20 h-20" />
                <div className="p-4 flex flex-col justify-around">
                  <span>
                    <b>Product:</b> {product.name}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="flex items-center ">
                  <div className="flex items-center ml-4">
                    <button
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                      onClick={() => handleQuantity('decrease', product.id)}
                    >
                      -
                    </button>
                    <span className="w-8 h-8 border border-gray-300 flex items-center justify-center mx-2">
                      {product.quantity}
                    </span>
                    <button
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                      onClick={() => handleQuantity('increase', product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-30 font-light">Price: ${product.price * product.quantity}</div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Link
                  className="w-20 h-10 font-semibold cursor-pointer rounded-md hover:bg-red-400 hover:text-white justify-center items-center flex"
                  onClick={() => handleDelete(product.id)} to={''}>
                  Delete
                </Link>
              </div>
            </div>
          ))}
          {cart.products.length !== 0 ?
            <div className="flex justify-end">
              <button
                className="w-40 block mr-2 hover:bg-red-600 hover:text-white justify-end"
                onClick={handleClear}
              >
                Clear
              </button>
            </div> : <div className="flex justify-center mt-4">
              <span>
                No products in cart
              </span>
            </div>
          }
        </div>
        {cart.products.length !== 0 ?
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
            <div className="flex justify-end mt-auto">
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
          : null}

      </div>
    </div >
  );
};

export default Cart;
