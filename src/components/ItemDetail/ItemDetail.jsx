import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import GramosPicker from '../GramosPicker/GramosPicker';
import ItemCount from '../ItemCount/ItemCount';
import LowStock from '../LowStock/LowStock'


const ItemDetail = ({ item }) => {

         const {agergarAlCarrito,  isInCart } = useContext(CartContext)

         
        console.log( isInCart(item.id))



          const [cantidad, setCantidad] = useState(1)

          const [gramos, setGramos] = useState(100)

        


          const handleAgregar = () => {
                    const newItem = {
                              ...item,
                              cantidad,
                              gramos
                              
                    }

                   
                    agergarAlCarrito(newItem)


                    
          }
          


          return (
                    <div>  <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={item.img} />
                              <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                                  {item.description}

                                                  <p>Precio: ${item.precio}
                                                            <hr />
                                                            <p>{item.medida} x {item.precio}gr</p>

                                                    {
                                                      item.stock <= 5 && <LowStock stock={item.stock}/>
                                                    }
                                                  </p>
                                        </Card.Text>
                                        <div> 
                                                  <GramosPicker setGramos={setGramos}  /> 
                                        </div>
                                        {
                                           isInCart (item.id)
                                           ? 
                                           
                                           <>
                                          
                                           <ItemCount max={item.stock}
                                           cantidad={cantidad}
                                           setCantidad={setCantidad}
                                           handleAgregar={handleAgregar} />
                                           <Link to="/cart" className='btn btn-succes my-2'> TERMINAR MI COMPRA </Link>
                                           </>
                                           
                                           :
                                           <ItemCount max={item.stock}
                                           cantidad={cantidad}
                                           setCantidad={setCantidad}
                                           handleAgregar={handleAgregar} />
                                        }
                                                
                                                           
                                                             
          
                                                  

                              </Card.Body>
                    </Card>
                    
                    </div>
          )
}

export default ItemDetail