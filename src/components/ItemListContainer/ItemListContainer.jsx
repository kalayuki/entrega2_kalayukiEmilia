import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


import { pediDatos } from "../../helpers/pediDatos";
import ItemLis from "../ItemList/ItemLis";





const ItemListContainer = () => {

  const [productos, setProductos]=useState(null)
  const [loading, setLoading]=useState(true)
    
  const {categoryId} = useParams()

 

useEffect(() => {
  setLoading(true)
  pediDatos()
  .then((response)=>{

    if(!categoryId){
      setProductos(response)
    }else{
      setProductos(response.filter((prod)=> prod.category === categoryId))
    }

   
  })
  .catch((error)=>{
    console.log(error)
  })//para que se ejecue si por mas que de true o erro 
 .finally(()=>{
    setLoading(false)
  })
}, [categoryId])




  return (
    <div >
      {
        loading
        ? <h2>Cargando datos ...</h2>
        :<ItemLis items={productos}/>
      }
    
    </div>
  )
}

export default ItemListContainer