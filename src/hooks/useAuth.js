import {useContext, useDebugValue} from 'react'
import { AuthContext } from '../context'


export const useAuth = ()=> {
    const {authState} = useContext(AuthContext);
    useDebugValue(authState, authState => authState?.user ? "user Logged in" : "user not found"); 
    return useContext(AuthContext)
}