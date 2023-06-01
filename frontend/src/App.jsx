import { Route, Routes, useNavigate } from 'react-router-dom';
import AboutUs from './page/AboutUs';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import ProductList from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Contact from './page/Contact';
import './App.css';
import { useSelector } from 'react-redux';
import ContainerLayout from './components/ContainerLayout';
import { useEffect } from 'react';
import Profile from './page/Profile';
import Cart from './page/Cart';
import Order from './page/Order';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};

function App() {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<ContainerLayout user={user} />}>
        <Route index element={<Home />} />
        <Route path='products/:cat' element={<ProductList />} />
        <Route path='products/' element={<ProductList />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='profile' element={<Profile />} />
        <Route path='cart' element={<Cart />} />
        <Route path='order' element={<Order />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
