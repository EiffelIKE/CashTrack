import { CurrencyWithDenominationAmounts } from '@/types/currency';

export type Track= {
  id: string;
  modificationDate: string;
  activeCurrencies: CurrencyWithDenominationAmounts[];
}
 
export type HistorySliceState = {
  historyTrack: Track[]
}