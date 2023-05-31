import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearProduct } from "../redux/cartRedux";
import React from 'react';
import { RootState } from '../redux/store';
const Order = () => {
    const user = useSelector((state: RootState) => state.auth.login.currentUser);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    console.log(user._id)
    const postOrder =() => {
        axios.post(`http://localhost:8000/v1/order/${user._id}`, {
            products: cart.products,

          },)
          .then((response) => {
            console.log(response)
            dispatch(clearProduct(cart.products))
            
            window.location.href = "http://localhost:3006/";
        })
    }
    return (
        <div className="order">
            <h1>ORDER SUCCESS</h1>
            <button type='button' onClick={postOrder()} >to home</button>
        </div>
    )
}

export default Order