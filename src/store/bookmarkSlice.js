import { createSlice } from '@reduxjs/toolkit';
import { updateBookmarks } from './bookmarkThunks';

const initialState = { bookmarks: [] };

const bookmarkSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addBookmark(state, action) {
      if (
        !state.bookmarks.some(
          (bookmark) => bookmark.stationName === action.payload.stationName
        )
      ) {
        state.bookmarks.push(action.payload);
        localStorage.setItem('bookmarkState', JSON.stringify(state));
      }
    },
    removeBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (data) => data.stationName !== action.payload
      );
      localStorage.setItem('bookmarkState', JSON.stringify(state));
    },
    loadBookmarks(state) {
      const storedState = localStorage.getItem('bookmarkState');
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        state.bookmarks = parsedState.bookmarks;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateBookmarks.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
    });
  },
});

export const { addBookmark, removeBookmark, loadBookmarks } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
