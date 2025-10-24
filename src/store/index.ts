import { configureStore } from "@reduxjs/toolkit";
import langSlice from "@/store/slices/langSlice";
import postsReducer from "@/store/slices/postsSlice";

export const store = configureStore({
  reducer: {
    lang: langSlice,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
