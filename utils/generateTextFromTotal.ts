import { CurrencyData } from '@/components/CurrencyCard/types';
import { parseAmount } from './parseAmount';

export const generateTextFromTotal = (total: CurrencyData[]) => {
  let text = 'The track total is: \n';
  total?.forEach(({ currencyState, abbreviation, total }) => {
    text += `${abbreviation}:   Total of: ${parseAmount({ amount: total, currency: abbreviation })}\n\n`;
    Object.entries(currencyState).forEach(([key, value]) => {
      if (value !== '0') {
        text += `${key}:    Total:  ${parseAmount({ amount: Number(value) * Number(key), currency: abbreviation })} \n\n`;
      }
    });
  });
  return text;
};
