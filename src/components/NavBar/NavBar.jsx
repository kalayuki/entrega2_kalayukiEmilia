import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


function NavBar({black}) {
  return (
    <>
      
      <div   className='NavbarNavBar' >
      
          <Link to="/">
        <img src="./imagenes/nemuLogo.jpg" alt="Logo" className='LogoNavBar' />
        </Link>
          <div href="#home">Ne.Mu</div> 
          <div className="linksNav">
            
            <Link className='link_navBar' to="/">  Inicio</Link>
            <Link className='link_navBar' to="productos/DESAYUNOS_Y_MERIENDAS"    > Desayunos y meriendas</Link>
            <Link className='link_navBar' to="productos/LECHES_VEGETALES"> Leches Vegetales</Link>
            <Link className='link_navBar' to="productos/MIX"> Mix</Link>
            <Link className='link_navBar' to="productos/LEGUMBRES_y_SEMILLAS">Legumbres y semillas </Link>
            <Link className='link_navBar' to="/nosotros">Nosotros</Link>
            <Link className='link_navBar'  to="/contacto"> Contacto</Link>
           
            </div>
        <CartWidget/>
     
        </div>
    
    </>
  );
}

export default NavBar;