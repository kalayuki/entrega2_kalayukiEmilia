import React from 'react'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import Cart from '../Cart/Cart'
import Contacto from '../contacto/Contacto'
import ItemDetailContainer from '../ItemDetailContainer.jsx/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import LoginSreen from '../LoginScreem/LoginSreen'
import NavBar from '../NavBar/NavBar'
import Nostros from '../Nosotros/Nostros'

const AppRouter = () => {

          const {user}= useContext (LoginContext)
  return (
          <BrowserRouter>
                     {
            user.logged
              ? <>
                <div className="App">

                  <NavBar />

                  <Routes>

                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                    <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/Nosotros' element={<Nostros />} />
                    <Route path='*' element={<Navigate to="/" />} />

                  </Routes>

                </div>
                
              </>
              :
              <>
              <Routes>
                <Route path='/login' element={<LoginSreen/>} />
                <Route path='*' element={<Navigate to="/lofin"/>} />
              </Routes>
           
          </>
      }

          </BrowserRouter>
  )
}

export default AppRouter