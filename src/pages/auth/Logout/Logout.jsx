import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { RiLogoutBoxRFill } from "react-icons/ri";

const Logout = () => {
    const {setAuthState} = useAuth()
    const navigate = useNavigate();

    const handleLogOut = ()=> {
        setAuthState({})
        console.log("Log out");
        navigate("/")
        
    }
    let LogoutAltText  = "This is Log Out Button"
  return (
    <>
    <button className="nav-btn" onClick={handleLogOut}>
         <RiLogoutBoxRFill className="nav-btn-icon" />
    </button>
    </>
  )
}

export default Logout