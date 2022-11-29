import React, { useEffect, useRef } from 'react'
import Login from './Page/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import ProfilePage from './Page/ProfilePage';
import MessagePage from './Page/MessagePage';
import ExplorePage from './Page/ExplorePage';
import getCookie from './Hooks/getCookie.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from './State Management/TokenSlice';
import { addUser } from './State Management/UserSlice';
import { addPost } from './State Management/PostSlice';
import { addSocket } from './State Management/SocketSlice.js';
import { api } from './Const';
import axios from 'axios';
import io from "socket.io-client";


export default function App() {

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.Token);
  const { user } = useSelector((state) => state.User);
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect(api);
  }, []);

  useEffect(() => {

    dispatch(addToken(getCookie("c_user") === undefined ? null : getCookie("c_user")));

  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.post(`${api}/user/me/`, { token: token });
        dispatch(addUser(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    const getPostData = async () => {
      try {
        const res = await axios.get(`${api}/post/10`);
        dispatch(addPost(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    if (token) {
      getUserData();
      getPostData();

    }
  }, [token]);

  useEffect(() => {
    if(user){
      socket.current.emit("new-user-add", user);
    }
  }, [user]);

  return (
    <Routes>
      <Route path='/' element={<>{token === null ? <Navigate to={"/account"} /> : <HomePage />}</>} />
      <Route path='/account' element={<>{token !== null ? <Navigate to={"/"} /> : <Login />}</>} />
      <Route path='/explore' element={<>{token === null ? <Navigate to={"/account"} /> : <ExplorePage />}</>} />
      <Route path='/profile/:id' element={<>{token === null ? <Navigate to={"/account"} /> : <ProfilePage />}</>} />
      <Route path='/message' element={<>{token === null ? <Navigate to={"/account"} /> : <MessagePage />}</>} />
    </Routes>
  )
}
