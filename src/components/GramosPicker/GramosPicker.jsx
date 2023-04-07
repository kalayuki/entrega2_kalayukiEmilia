import React from 'react'

const GramosPicker = ({setGramos }) => {

        const  handleSelect=(e)=>{
          setGramos(e.target.value)
                    
          }



  return (
    <select onChange={handleSelect}>
          <option value={100}>100gr</option>
          <option value={200}>250gr</option>
          <option value={500}>500gr</option>
          <option value={1000}>1kg</option>
    </select>
  )
}

export default GramosPicker