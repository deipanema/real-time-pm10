import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarkSlice'; // Slice 리듀서 가져오기

const store = configureStore({
  reducer: bookmarkReducer,
});

export default store;
