import { CurrencyAbreviation, Denomination } from '@/types/currency';

export interface DenominationRowProps {
  denominationAmount: Denomination['amount'];
  index: number;
  abbreviation: CurrencyAbreviation;
  value: string;
  onChange: (value: string) => void
}
