import { setFullActiveCurrencies } from '@/store/slices/CurrencySlice';
import { selectHistory, setDeleteHistory } from '@/store/slices/HistorySlice';
import { CurrencyWithDenominationAmounts } from '@/types/currency';
import { useAppDispatch, useAppSelector } from './useReduxHooks';

export const useHistoryTracks = () => {
  const historyTracks = useAppSelector(selectHistory);
  const dispatch = useAppDispatch()

  const deleteHisotry = (id: string) => {
    dispatch(setDeleteHistory(id))
  }

  const cloneFromHistory = (trackActiveCurrencies: CurrencyWithDenominationAmounts[]) => {
    dispatch(setFullActiveCurrencies(trackActiveCurrencies))
  }  

  return { historyTracks, deleteHisotry, cloneFromHistory }
}