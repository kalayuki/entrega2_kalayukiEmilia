import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from '../Contador/Contador';

const ItemDetail = ({item}) => {
  return (
    <div>  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.description}
        
        <p>Precio: ${item.precio}
        <hr/>
          <p>{item.medida} x {item.precio}gr</p>
        
       </p>
      </Card.Text>
      <Contador/>
      <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
  </Card>
</div>
  )
}

export default ItemDetail