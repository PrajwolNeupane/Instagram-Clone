import { configureStore } from '@reduxjs/toolkit';
import TokenSlice from './State Management/TokenSlice.js';

export const Store = configureStore({
    reducer: {
        Token: TokenSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})