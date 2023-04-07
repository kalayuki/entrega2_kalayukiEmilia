import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {

          const{ totalCarrito }=useContext(CartContext)
          console.log(totalCarrito())
          

          return (
                    <Link to="/Cart">
                              <img className="carritoImg" src="./imagenes/carrito.png" />
                              <span >{totalCarrito()}</span>
                    </Link>
          )
}

export default CartWidget