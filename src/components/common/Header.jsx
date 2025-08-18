import React from "react";
import Logo from "../../assets/header-logo.svg";
import fakeuserimg from "../../assets/rabbit.svg";
import { RiHome5Fill } from "react-icons/ri";
import { RiNotification3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logout from "../../pages/auth/Logout/Logout";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

const Header = () => {
  const { state } = useProfile();
  const { authState } = useAuth();

  // storing user from authState or Profile page
  const user = state?.user ?? authState?.user;
  return (
    <>
      <nav className="common flex justify-between border-b-[0.25px] border-white ">
        <div className="flex items-center gap-1">
          <Link to="/">
            {" "}
            <img className="w-9 h-9  " src={Logo} alt="Logo" />
          </Link>
          <h1 className="font-playwrite text-[20px] font-semibold hidden md:block ">
            {" "}
            <span className="text-[#fb8b24] text-2xl font-playwrite ">
              F
            </span>{" "}
            lashbooK
          </h1>
        </div>

        <div className="flex items-center gap-4  ">
          <Link to="/" className="nav-btn !pl-6">
            {" "}
            <RiHome5Fill className="nav-btn-icon" />
            Home
          </Link>
          <Link to="/" className="nav-btn">
            {" "}
            <RiNotification3Fill className="nav-btn-icon" />
          </Link>
          <Logout />
          <Link
            to="/me"
            className="nav-btn !pr-0 !border-r-0 flex items-center gap-2 "
          >
            {" "}
            
            <img
              className="w-8 h-8 rounded-full bg-white "
             src={
      user?.avatar
        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`
        : {fakeuserimg} 
    }
              alt="User picture"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
