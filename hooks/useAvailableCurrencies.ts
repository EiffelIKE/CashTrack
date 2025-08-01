import { selectAvailableCurrencies } from '@/store/slices/CurrencySlice';
import { useAppSelector } from './useReduxHooks';

export const useAvailableCurrencies = () => useAppSelector(selectAvailableCurrencies)