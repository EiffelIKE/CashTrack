import { RootState } from "@/store";
import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from './types';

export const themeSliceName = 'theme'

const initialState: ThemeState = {
  activeTheme: undefined
};

const themeSlice = createSlice({
  name: themeSliceName,
  initialState,
  reducers: {
    setTheme(state, action) {
      state.activeTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectActiveTheme = (state: RootState) => state.theme.activeTheme

export default themeSlice.reducer;