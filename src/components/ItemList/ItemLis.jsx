import Item from "../Item/Item"


const ItemLis = ({items}) => {
  return (
    <div> 
          <h4>PRODUCTOS</h4>
   
    <hr/>
    <div className="contendorCard">
   { items.map((producto)=>(
        <Item key={producto.id} item={producto}></Item>
    
    
   )
    
    )}
</div>
</div>
  )
}

export default ItemLis