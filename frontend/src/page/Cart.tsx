import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearProduct, removeProduct } from '../redux/cartRedux';
import axios from 'axios';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import React from 'react';

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const user = useSelector((state: any) => state.auth.login.currentUser);
  const dispatch = useDispatch<Dispatch<any>>();
  const cart = useSelector((state: any) => state.cart);
  const history = useNavigate();

  const handlePayment = () => {
    console.log(cart.total);
    axios
      .post('http://localhost:8000/pay', {
        total: cart.total,
      })
      .then((response) => {
        handleClear();
        window.location.replace(response.data);
      });
  };

  const handleClear = () => {
    dispatch(clearProduct(cart.products));
  };

  const handleDelete = (product: any) => {
    dispatch(removeProduct(product));
  };

  let totalPrice = 0;

  useEffect(() => {
    cart.products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
  }, [cart.products]);

  return (
    <div>
      <div>
        <h1>YOUR BAG</h1>
        <div>
          <button>
            <Link to="/">CONTINUE SHOPPING</Link>
          </button>
          <div>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          {user ? (
            <button type="button" onClick={handlePayment}>
              CHECKOUT NOW
            </button>
          ) : (
            <Link to="/login">
              <button type="button">LOGIN TO CHECK OUT</button>
            </Link>
          )}
        </div>
        <div>
          <div>
            {cart.products.map((product, index) => (
              <div key={index}>
                <div>
                  <img src={product.image} alt="Product" />
                  <div>
                    <span>
                      <b>Product:</b> {product.name}
                    </span>
                    <span>
                      <b>ID:</b> {product.id}
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>{product.quantity}</span>
                  </div>
                  <div>
                    <span>$ {product.price * product.quantity}</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(product)}
                    style={{ width: 70, height: 36 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => handleClear()}
              style={{ width: 200, float: 'right', marginTop: 20, marginRight: 10 }}
            >
              Clear
            </button>
            <hr />
          </div>
          <div>
            <h1>ORDER SUMMARY</h1>
            <div>
              <div>
                <span>Subtotal</span>
                <span>$ {totalPrice}</span>
              </div>
              <div>
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div>
                <span>Total</span>
                <span>$ {totalPrice + 5.9}</span>
              </div>
              {user ? (
                <button onClick={() => handlePayment()}>CHECKOUT NOW</button>
              ) : (
                <Link to="/login">
                  <button>LOGIN TO CHECK OUT</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
