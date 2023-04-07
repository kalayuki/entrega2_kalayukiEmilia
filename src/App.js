import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nostros from './components/Nosotros/Nostros';
import Contacto from './components/contacto/Contacto';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import LoginSreen from './components/LoginScreem/LoginSreen';
import { LoginContext, LoginProvider } from './context/LoginContext';
import { useContext } from 'react';
import AppRouter from './components/routes/AppRouter';





function App() {
 




  return (
    
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
         <AppRouter/>
         


        </BrowserRouter>
      </CartProvider>

    </LoginProvider>

  );

}

export default App;
