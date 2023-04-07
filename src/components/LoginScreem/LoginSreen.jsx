import React, { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'

const LoginSreen = () => {

const {user, tryLogin} = useContext(LoginContext)

      const [values,setValue] = useState({
         email:'',
         password:''
      })
      const handleInputChange = (e)=>{
         
         setValue({
          ...values,
          [e.target.name]:e.target.value
         })
      }



   const handleSubmit = (e)=>{
      e.preventDefault()
      tryLogin(values)
 
     
   }




  return (
   <div className="login-screen">
   <div className="login">
             <h2>Login</h2>
             <hr/>
             <form onSubmit={ handleSubmit}>
                       <input  
                        value={values.email}

                        onChange={ handleInputChange}
                       type={'text'}
                       className='form-control'
                       placeholder="Tu mail"
                       name="email">
                       </input>
                       <input
                       value={values.password}
                      onChange={  handleInputChange}
                          type={'text'}
                          className='form-control my-3'
                          placeholder="Password"
                          name='password'
                       >
                       </input>
                       <button  className='btn btn-primary' type='submit'>Login</button>
             </form>
   </div>
</div>
  )
}

export default LoginSreen