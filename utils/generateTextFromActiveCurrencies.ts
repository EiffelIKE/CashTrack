import { CurrencyWithDenominationAmounts } from '@/types/currency';
import { parseAmount } from './parseAmount';

export const generateTextFromActiveCurrencies = (
  total: CurrencyWithDenominationAmounts[]
) => {
  let text = 'The track total is: \n';
  total?.forEach(({ denominations, abbreviation, name }) => {
    const total = denominations.reduce(
      (acc, curr) => acc + Number(curr.count) * Number(curr.amount),
      0
    );
    text += `${name} - ${abbreviation} \n   Total of: ${parseAmount({ amount: total, currency: abbreviation })}\n\n`;
    denominations.forEach(({ amount, count }) => {
      if (count !== '0') {
        text += `${amount}:    Total:  ${parseAmount({ amount: Number(count) * Number(amount), currency: abbreviation })} \n\n`;
      }
    });
  });
  return text;
};
