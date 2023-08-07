import { createAsyncThunk } from '@reduxjs/toolkit';
import getRealTimeStation from '../apis/getRealTimeStation';
import { DataFetchError } from '../constants/networkErrors';

// 비동기로 즐겨찾기 데이터를 갱신하는 Thunk 액션 생성
export const updateBookmarks = createAsyncThunk(
  'data/updateBookmarks',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState(); // 현재 Redux 상태 가져오기

    // 즐겨찾기 목록에서 각 측정소의 미세먼지 데이터를 비동기로 가져와서 업데이트
    const updatedBookmarks = [];

    for (const bookmark of state.data.bookmarks) {
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
      }
    }

    return updatedBookmarks;
  }
);
