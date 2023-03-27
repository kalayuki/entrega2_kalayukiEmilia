import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import Nostros from './components/Nosotros/Nostros';
import Contacto from './components/contacto/Contacto';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/Nosotros' element={<Nostros/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>

     {/* <Nostros/>
     <Contacto/>
     <ItemListContainer greeting='hola Mundo'/>
     <Contador/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
