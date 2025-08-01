import {
  selectActiveCurrencies,
  setAddActiveCurrency,
  setDeleteActiveCurrency,
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

  return { activeCurrencies, deleteActiveCurrency, addNewActiveCurrency };
};
