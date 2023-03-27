import { useEffect, useState } from "react"


const Contador = () => {

    

    const [counter, setCounter] = useState(0)
    const [hola, setHola] = useState(true)
    
    const handleClick = ()=>{
        setCounter(counter + 1)
       
    }

    const handleHola = ()=>{
        
       setHola(!hola)
    }

    useEffect(() => {
      console.log ("Componentes montado")
    }, [])
    
  return (
    <div className="container my-5">
        <button onClick={handleClick} className="btn btn-primary">- 1 + </button>
        <p>Click : {counter}</p>
        <hr></hr>
        <button onClick={handleHola} className="btn btn-primary">
             </button>
    </div>
  )
}

export default Contador