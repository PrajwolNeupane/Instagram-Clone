import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    socket:null
}


const SocketSlice = createSlice({
    name:"Socket",
    initialState,
    reducers:{
        addSocket:(state,action) => {
            state.socket = action.payload;
        }
    }
});

export default SocketSlice.reducer;
export const {addSocket} = SocketSlice.actions;