import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.ts";
import postsReducer from "./postsSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
