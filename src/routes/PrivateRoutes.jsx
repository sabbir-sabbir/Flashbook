import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { authState } = useAuth();
  return (
    <>
      {" "}
      {authState.authToken ? (
        <>
         <ProfileProvider>
           <Header /> <Outlet />
         </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}{" "}
    </>
  );
};

export default PrivateRoutes;
