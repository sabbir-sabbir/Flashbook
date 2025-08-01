import React, {useState} from 'react'
import { AuthContext } from '../context'

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({});
  return (
   <AuthContext.Provider  value={{authState, setAuthState}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider