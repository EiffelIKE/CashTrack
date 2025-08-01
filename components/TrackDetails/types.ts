import { CurrencyWithDenominationAmounts } from '@/types/currency';

export interface TrackDetailsProps {
  modificationDate: string;
  activeCurrencies: CurrencyWithDenominationAmounts[];
  handleClone?: (activeCurrencies: CurrencyWithDenominationAmounts[]) => void;
  deleteHisotry?: () => void;
  handleShare?: (text: string) => void;
}