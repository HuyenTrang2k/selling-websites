import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { clearProduct } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Order = () => {
  const user = useSelector((state: any) => state.auth.login.currentUser);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postOrder = () => {
    axios.post(`http://localhost:8000/v1/order/${user._id}`, {
      products: cart.products,
    })
    .then((response) => {
      console.log(response);
      dispatch(clearProduct(cart.products));
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="order">
      <h1>ORDER SUCCESS</h1>
      <button onClick={postOrder}>to home</button>
    </div>
  );
}

export default Order;
