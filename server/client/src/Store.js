import { configureStore } from '@reduxjs/toolkit';
import TokenSlice from './State Management/TokenSlice.js';
import UserSlice from './State Management/UserSlice.js';
import PostSlice from './State Management/PostSlice.js';
import SocketSlice from './State Management/SocketSlice.js';

export const Store = configureStore({
    reducer: {
        Token: TokenSlice,
        User: UserSlice,
        Post:PostSlice,
        Socket:SocketSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})