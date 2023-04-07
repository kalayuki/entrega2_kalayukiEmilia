

const LowStock = ({stock})=>{
          return (
                    <p><stronge>{
                              stock ===1 
                              ?  `quedan solo ${stock} unidad`
                              :`Quedan solo ${stock} unidades`}</stronge></p>
          )         
}
export default LowStock