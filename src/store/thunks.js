import { createAsyncThunk } from '@reduxjs/toolkit';
import getRealTimeStation from '../apis/getRealTimeStation';
import { DataFetchError } from '../constants/networkErrors';

export const updateBookmarks = createAsyncThunk(
  'bookmarks/updateBookmarks',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const updatedBookmarks = [];

    for (const bookmark of state) {
      try {
        const data = await getRealTimeStation(bookmark.stationName);
        const { pm10Grade, pm10Value, pm10Flag, dataTime } =
          data.response.body.items[0];

        updatedBookmarks.push({
          stationName: bookmark.stationName,
          sidoName: bookmark.sidoName,
          pm10Grade,
          pm10Value,
          pm10Flag,
          dataTime,
        });
      } catch (error) {
        console.error(`${bookmark.stationName} ${DataFetchError}`);
        updatedBookmarks.push(bookmark);
      }
    }

    localStorage.setItem('bookmark', JSON.stringify(updatedBookmarks));
    return updatedBookmarks;
  }
);
