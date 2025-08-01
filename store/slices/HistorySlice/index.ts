import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';
import { HistorySliceState, Track } from './types';

export const historySliceName = 'history';

const initialState: HistorySliceState = {
  historyTrack: [{
    activeCurrencies: [],
    id: '', 
    modificationDate: new Date().toISOString()
  }],
};

const historySlice = createSlice({
  name: historySliceName,
  initialState,
  reducers: {
    setAddHistory(state, action: { payload: Track }) {
      state.historyTrack = [...state.historyTrack, action.payload];
    },
    setResetHistory(state) {
      state.historyTrack = [];
    },
    setDeleteHistory(state, action: { payload: string }) {
      state.historyTrack = state.historyTrack.filter(
        (track) => track.id !== action.payload
      );
    },
  },
});

export const { setAddHistory, setResetHistory, setDeleteHistory } = historySlice.actions;

export const selectHistory = (state: RootState) => state.history.historyTrack;

export default historySlice.reducer;
