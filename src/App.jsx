import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from './routes/PrivateRoutes';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/auth/Login/LoginPage';
import RegistrationPage from './pages/auth/Register/RegistrationPage'
import ProfilePage from './pages/profile/ProfilePage'
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoutes/>} >
      <Route path="/"  element={<HomePage/>} exact />
      <Route path="/me"  element={<ProfilePage/>} />
      </Route>
      
      <Route path="/login"  element={<LoginPage/>} />
      <Route path="/register"  element={<RegistrationPage/>} />
      <Route path="*"  element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App