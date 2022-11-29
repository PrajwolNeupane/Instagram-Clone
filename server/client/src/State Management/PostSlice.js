import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post:null
}


const PostSlice = createSlice({
    name:"Post",
    initialState,
    reducers:{
        addPost:(state,action) => {
            state.post = action.payload;
        }
    }
});

export default PostSlice.reducer;
export const {addPost} = PostSlice.actions;