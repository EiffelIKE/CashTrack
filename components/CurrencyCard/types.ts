import { CurrencyWithDenominationAmounts } from '@/types/currency';
import { RefObject } from 'react';

export type CurrencyCardRef = {
  getData: () => { [denomId: string]: number };
  clear: () => void;
};

export interface CurrencyCardProps {
  ref: RefObject<CurrencyCardRef | null>,
  currency: CurrencyWithDenominationAmounts
}