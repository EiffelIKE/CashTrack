import { CurrencyAbreviation, CurrencyWithDenominationAmounts, Denomination } from '@/types/currency';
import { RefObject } from 'react';

export type CurrencyData = {
  currencyState: Record<Denomination['amount'], string>;
  total: number,
  abbreviation: CurrencyAbreviation
}

export type CurrencyCardRef = {
  getData: () => CurrencyData;
  clear: () => void;
};

export interface CurrencyCardProps {
  ref: RefObject<CurrencyCardRef | null>,
  currency: CurrencyWithDenominationAmounts
}