import { createSlice } from '@reduxjs/toolkit';
import { updateBookmarks } from './thunks'; // Thunk 액션 가져오기

const initialState = [];

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, action) {
      if (
        !state.some(
          (bookmark) => bookmark.stationName === action.payload.stationName
        )
      ) {
        state.push(action.payload);
        localStorage.setItem('bookmark', JSON.stringify(state));
      }
    },
    removeBookmark(state, action) {
      const updatedState = state.filter(
        (data) => data.stationName !== action.payload
      );
      localStorage.setItem('bookmark', JSON.stringify(updatedState));
      return updatedState;
    },
    loadBookmarks(state) {
      const storedState = localStorage.getItem('bookmark');
      if (storedState) {
        return JSON.parse(storedState);
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateBookmarks.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { addBookmark, removeBookmark, loadBookmarks } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
