


const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {




          const handleSumar = () => {
                    cantidad < max &&

                              setCantidad(cantidad + 1)
          }

          const handleRestar = () => {

                    cantidad > 1 &&
                              setCantidad(cantidad - 1)
          }




          return (
                    <div>


                              <button className={cantidad ===1 ? "btn btn-outline-danger":"btn btn-outline-primary"} 
                              disabled={cantidad ===1}
                              onClick={handleRestar}>
                                        -
                              </button>
                              <sapan className="mx-2">{cantidad}</sapan>

                              <button className={cantidad ===max ? "btn btn-outline-danger":"btn btn-outline-primary"}
                              disabled={cantidad ===max} onClick={handleSumar}>
                                        +
                                        </button>
                              <hr></hr>
                              <button onClick={handleAgregar} className='btn btn-success my-2'>Agregar al carrito</button>


                    </div>
          )
}

export default ItemCount