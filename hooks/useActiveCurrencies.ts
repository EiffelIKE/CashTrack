import {
  selectActiveCurrencies,
  setAddActiveCurrency,
  setDeleteActiveCurrency,
  setResetActiveCurrencies,
} from '@/store/slices/CurrencySlice';
import { Currency, CurrencyAbreviation } from '@/types/currency';
import { useAppDispatch, useAppSelector } from './useReduxHooks';

export const useActiveCurrencies = () => {
  const activeCurrencies = useAppSelector(selectActiveCurrencies);
  const dispatch = useAppDispatch();

  const deleteActiveCurrency = (currencyAbreviation: CurrencyAbreviation) => {
    dispatch(setDeleteActiveCurrency(currencyAbreviation));
  };

  const addNewActiveCurrency = (currency: Currency) => {
    dispatch(
      setAddActiveCurrency({
        ...currency,
        denominations: currency.denominations.map((den) => {
          return {
            ...den,
            count: '0',
          };
        }),
      })
    );
  };

  const resetActiveCurrencies = () => dispatch(setResetActiveCurrencies())

  return { activeCurrencies, deleteActiveCurrency, addNewActiveCurrency, resetActiveCurrencies };
};
