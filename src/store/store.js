import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarkSlice';

const store = configureStore({
  reducer: bookmarkReducer,
});

export default store;
