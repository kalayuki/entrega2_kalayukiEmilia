import { createContext, useState } from "react";


export const  LoginContext = createContext()


const MOCK_USER =[
          {
                    id:2,
                    email: 'admn@gamil.com',
                    password:"123",
          },
          {
                    id:1,
                    email: 'tutor@gamil.com',
                    password:"1234",
          },
          {
                    id:1,
                    email: 'alumno@gamil.com',
                    password:"12345",
          }
         
]




export const LoginProvider =({children})=>{
          const [user, setUser] = useState({
                    email:null,
                    logged:false
          })

          console.log(user)
          const tryLogin= (values)=>{
                    const match =MOCK_USER.find((user)=> user.email=== values.email)

                    if (match && match.password ===values.password){
                              setUser({
                                        logged:true,
                                        email: match.email
                              })

                    }
          }
          return (
                    <LoginContext.Provider value={{
                              user,
                              tryLogin
                    }}>
                              {children}
                    </LoginContext.Provider>

          )
}