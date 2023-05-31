import { Dispatch } from "redux";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed, updateUserAction } from "./authSlice";
import { addProduct, removeProduct, clearProduct } from "./cartRedux";
import axios from "axios";
import { useSelector } from 'react-redux';
import { RootState } from './store';
export const loginUser = async (dispatch: Dispatch<any>, user: any): Promise<boolean> => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    return true;
  } catch (err) {
    dispatch(loginFailed());
    return err.response.data.message;
  }
};
export const updateProfile = async (dispatch: Dispatch<any>, user: any, currentUser: any): Promise<boolean> => {
  dispatch(loginStart());
  const { _id } = currentUser;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const res = await axios.put(`http://localhost:8000/v1/user/${_id}`, user, config);
    currentUser = { ...currentUser, username: user.username, phone: user.phone, address: user.address, updateAt: res.data.updateAt }
    dispatch(updateUserAction(currentUser));
    return true;
  } catch (err) {
    dispatch(loginFailed());
    return err.response.data.message;
  }
};

export const registerUser = async (
  dispatch: Dispatch<any>,
  user: { username: string, email: string, password: string }
): Promise<any> => {
  dispatch(loginStart());
  try {
    console.log(user)
    const res = await axios.post("http://localhost:8000/v1/auth/register", user);
    return res.data;
  } catch (err) {
    dispatch(loginFailed());
    return err.response.data;
  }
};

export const logoutUser = async (dispatch: Dispatch<any>, navigate: any): Promise<void> => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logoutFailed());
  }
};

export const addProductToCart = async (props: {
  dispatch: Dispatch<any>;
  userId: string;
  productId: string;
  quantity: number;
}): Promise<void> => {
  // console.log(props.userId, props.productId);
  // const res = await axios.post(`http://localhost:8000/v1/cart/${props.userId}/${props.productId}`, {quantity:props.quantity});
  // props.dispatch(addProduct(res.data));
  //add product to cart
  const res = await axios.post(`http://localhost:8000/v1/cart/${props.userId}/${props.productId}`, {
    quantity: props.quantity,
  });
  props.dispatch(addProduct(res.data));
};

export const removeProductFromCart = async (
  product: any,
  user: any,
  dispatch: Dispatch<any>
): Promise<void> => {
  const res = await axios.delete(`http://localhost:8000/v1/cart/${user.id}/${product.id}`);
  dispatch(removeProduct(res.data));
};

export const clearCart = async (dispatch: Dispatch<any>): Promise<void> => {
  //clear cart in redux
  dispatch(clearProduct([]));
};

export const removeProductOfCart = async (
  product: any,
  dispatch: Dispatch<any>
): Promise<void> => {
  //remove product from cart in redux
  dispatch(removeProduct(product));
};
