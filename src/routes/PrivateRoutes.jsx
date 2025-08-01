import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";

const PrivateRoutes = () => {
  const { authState } = useAuth();
  return <> {authState.user ? <><Header/> <Outlet /></> : <Navigate to="/login" />} </>;
};

export default PrivateRoutes;
