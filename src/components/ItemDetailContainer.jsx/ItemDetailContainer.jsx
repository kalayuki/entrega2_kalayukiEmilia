
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { pedirProductoPorId } from '../../helpers/pediDatos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {


        const [item, setItem] = useState(null)

        const [loading , setLoading]=useState(true)

       const {itemId}= useParams()
      useEffect(() => {
       setLoading(true)

       pedirProductoPorId(Number(itemId))
       .then((resp)=>{
         setItem(resp)
       }).finally(()=>{
        setLoading(false)
       })

      }, [])
      






  return (
    <div className="itemDetailContainer">{
      loading
      ?
      <h2>Cargando .....</h2>
        :<ItemDetail item={item}/>

    }
    </div>
  )
}

export default ItemDetailContainer