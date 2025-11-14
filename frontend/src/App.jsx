import React from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route pathe="/" element={<HomePage/>}/>
        <Route pathe="/signup" element={<SignUpPage/>}/>
        <Route pathe="/login" element={<LoginPage/>}/>
        <Route pathe="/settings" element={<SettingsPage/>}/>
        <Route pathe="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App