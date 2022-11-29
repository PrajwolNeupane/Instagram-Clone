import { configureStore } from '@reduxjs/toolkit';
import TokenSlice from './State Management/TokenSlice.js';
import UserSlice from './State Management/UserSlice.js';

export const Store = configureStore({
    reducer: {
        Token: TokenSlice,
        User: UserSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})