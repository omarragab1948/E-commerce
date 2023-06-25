import './App.css';
import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
import ProductDetails  from './components/Pages/Product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Pages/Register/Register';
import SignIn from './components/Pages/SignIn/SignIn';
import MyAccount from './components/Pages/MyAccount/MyAccount';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/my-account' element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
