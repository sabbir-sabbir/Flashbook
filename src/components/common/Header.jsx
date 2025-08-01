import React from 'react'
import Logo from '../../assets/header-logo.svg'
import fakeuserimg from '../../assets/fake-user.svg'
import { RiHome5Fill } from "react-icons/ri";
import { RiNotification3Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import Logout from '../../pages/auth/Logout/Logout';

const Header = () => {
  return (
    <>
    <nav  className="common flex justify-between border-b-2 border-white ">
        <div className="flex items-center gap-1">
            <Link to="/" > <img className="w-9 h-9  " src={Logo} alt="Logo" /></Link>
            <h1 className="font-playwrite text-[20px] font-semibold hidden md:block "> <span className="text-[#fb8b24] text-2xl font-playwrite ">F</span> lashbooK</h1>
        </div>

        <div className="flex items-center gap-4  ">
            <Link to="/" className="nav-btn !pl-6"> <RiHome5Fill className="nav-btn-icon" />Home</Link>
            <Link to="/" className="nav-btn"> <RiNotification3Fill className="nav-btn-icon" /></Link>
            <Logout/>
            <Link to="/" className="nav-btn !pr-0 !border-r-0"> <img className="w-8 h-8 rounded-full bg-white " src={fakeuserimg} alt="User picture" /></Link>
        </div>
    </nav>
    </>
  )
}

export default Header