import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      </Route>
    </Routes>
  );
}

export default App;
