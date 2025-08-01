import { initialMockCurrencies } from '@/constants/initialMockCurrencies';
import { RootState } from '@/store';
import {
  CurrencyAbreviation,
  CurrencyWithDenominationAmounts,
} from '@/types/currency';
import { createSlice } from '@reduxjs/toolkit';
import { CurreniesState } from './types';

export const currenciesSliceName = 'currencies';

const initialState: CurreniesState = {
  currencies: initialMockCurrencies,
  activeCurrencies: [],
};

const currenciesSlice = createSlice({
  name: currenciesSliceName,
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.currencies = action.payload;
    },
    setAddActiveCurrency(
      state,
      action: { payload: CurrencyWithDenominationAmounts }
    ) {
      state.activeCurrencies = [...state.activeCurrencies, action.payload];
    },
    setDeleteActiveCurrency(state, action: { payload: CurrencyAbreviation }) {
      state.activeCurrencies = state.activeCurrencies.filter(
        (currency) => currency.abbreviation !== action.payload
      );
    },
    setFullActiveCurrencies(
      state,
      action: { payload: CurrencyWithDenominationAmounts[] }
    ) {
      state.activeCurrencies = action.payload;
    },
    setResetActiveCurrencies(state) {
      state.activeCurrencies = [];
    },
  },
});

export const {
  setCurrencies,
  setDeleteActiveCurrency,
  setAddActiveCurrency,
  setResetActiveCurrencies,
  setFullActiveCurrencies,
} = currenciesSlice.actions;

export const selectAvailableCurrencies = (state: RootState) =>
  state.availableCurrencies.currencies;
export const selectActiveCurrencies = (state: RootState) =>
  state.availableCurrencies.activeCurrencies;

export default currenciesSlice.reducer;
