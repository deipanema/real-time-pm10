import { createSlice } from '@reduxjs/toolkit';
import { updateBookmarks } from './thunks';

const initialState = [];

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, action) {
      const existingBookmark = state.find(
        (bookmark) => bookmark.stationName === action.payload.stationName
      );
      if (!existingBookmark) {
        state.push(action.payload);
      }
    },
    removeBookmark(state, action) {
      return state.filter(
        (bookmark) => bookmark.stationName !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateBookmarks.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
