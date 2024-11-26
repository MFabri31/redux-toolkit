import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;
