import React from 'react'
import Login from './Page/Login';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import ProfilePage from './Page/ProfilePage';
import MessagePage from './Page/MessagePage';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/account' element={<Login />} />
      <Route path='/profile/:id' element={<ProfilePage />} />
      <Route path='/message' element={<MessagePage />} />
    </Routes>
  )
}
