import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'


const Cart = () => {


          const { cart, totalCompra, vaciarCarrito, eliminarCarrito } = useContext(CartContext)

          if (cart.length === 0) {
                    return (
                              <div>
                                        <h2>No tienes productos en el carrito</h2>
                                        <hr />
                                        <Link to="/" className="btn btn-primary">Volver</Link>
                              </div>
                    )
          }

          return (

                    <div>




                              <h2>TU COMPRA</h2>
                              <hr />
                              {
                                        cart.map((prod) => (
                                                  <div>
                                                            <h4>{prod.title}</h4>
                                                            <img src={prod.img} alt={prod.title} />
                                                            <p>Precio: ${prod.precio * prod.cantidad}</p>
                                                            <small>Cantidad:{prod.cantidad}</small>
                                                            <button onClick={() => eliminarCarrito(prod.id)} clasName="btn btn-danger">Eliminar</button>
                                                            <hr />
                                                  </div>


                                        ))

                              }
                              <hr />
                              <h3>TOTAL:{totalCompra()}</h3>
                              <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>








                    </div>
          )
}

export default Cart