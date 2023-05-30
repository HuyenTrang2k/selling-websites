import { Dispatch } from "redux";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed } from "./authSlice";
import { addProduct, removeProduct, clearProduct } from "./cartRedux";
import axios from "axios";
export const loginUser = async (dispatch: Dispatch<any>, user: any): Promise<boolean> => {
  dispatch(loginStart());
  try {
    // const res = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(user));
    console.log(user);
    return true;
  } catch (err) {
    dispatch(loginFailed());
    return false;
  }
};

export const registerUser = async (
  user: any,
  dispatch: Dispatch<any>,
  navigate: any
): Promise<any> => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/v1/auth/register", user);
    return res.data;
    // navigate("/login");
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
  dispatch(clearProduct(null));
};

export const removeProductOfCart = async (
  product: any,
  dispatch: Dispatch<any>
): Promise<void> => {
  //remove product from cart in redux
  dispatch(removeProduct(product));
};
