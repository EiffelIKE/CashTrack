import { initialMockCurrencies } from '@/constants/initialMockCurrencies';
import { RootState } from "@/store";
import { createSlice } from '@reduxjs/toolkit';
import { CurreniesState } from './types';

export const currenciesSliceName = 'currencies'

const initialState: CurreniesState = {
  currencies: initialMockCurrencies
};

const currenciesSlice = createSlice({
  name: currenciesSliceName,
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.currencies = action.payload;
    },
  },
});

export const { setCurrencies } = currenciesSlice.actions;

export const selectAvailableCurrencies = (state: RootState) => state.availableCurrencies.currencies

export default currenciesSlice.reducer;