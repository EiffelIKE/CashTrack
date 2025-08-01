import { Currency, CurrencyWithDenominationAmounts } from '@/types/currency'

export type CurreniesState = {
  currencies: Currency [],
  activeCurrencies: CurrencyWithDenominationAmounts []
}

