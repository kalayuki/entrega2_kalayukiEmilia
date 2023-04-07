import Item from "../Item/Item"


const ItemLis = ({ items }) => {
  return (
    <div className="itemList">
      <h4>PRODUCTOs</h4>

      <hr />
      <div className="contendorCard">
        {items.map((producto) => (
          <Item key={producto.id} item={producto}></Item>


        )

        )}
      </div>
    </div>
  )
}

export default ItemLis