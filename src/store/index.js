import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { dusts: [], bookmarks: [] };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addDusts(state, action) {
      state.dusts = action.payload;
    },
    addBookmarks(state, action) {
      if (
        !state.bookmarks.some(
          (bookmark) => bookmark.stationName === action.payload.stationName
        )
      ) {
        state.bookmarks.push(action.payload);
      }
    },
    deleteBookmarks(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (data) => data.stationName !== action.payload
      );
    },
  },
});

const store = configureStore({
  reducer: dataSlice.reducer,
});

export const dataActions = dataSlice.actions;

export default store;
