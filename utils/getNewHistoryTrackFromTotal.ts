import { CurrencyData } from '@/components/CurrencyCard/types';
import { CurrencyWithDenominationAmounts } from '@/types/currency';
import { generateUID } from './generateUID';

export const getNewHistoryTrackfromTotal = ({
  total,
  activeCurrencies,
}: {
  total: CurrencyData[];
  activeCurrencies: CurrencyWithDenominationAmounts[];
}) => {
  const track = activeCurrencies.map((item) => {
    const currencyState = total.find(
      (trackState) => trackState.abbreviation === item.abbreviation
    );
    return {
      ...item,
      denominations: item.denominations.map((denomination) => {
        return {
          ...denomination,
          count: currencyState?.currencyState[denomination.amount] || '0',
        };
      }),
    };
  });

  return {
    activeCurrencies: track,
    modificationDate: new Date().toISOString(),
    id: generateUID(),
  };
};
