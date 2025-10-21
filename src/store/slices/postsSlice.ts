import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  favoriteId: number | null;
}

const initialState: PostsState = {
  favoriteId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteId = action.payload;
    },
  },
});

export const { setFavorite } = postsSlice.actions;
export default postsSlice.reducer;
