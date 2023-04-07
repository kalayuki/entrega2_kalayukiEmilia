import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (

    <div className="col-3s">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>

          </Card.Text>
          <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver mas</Link>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Item