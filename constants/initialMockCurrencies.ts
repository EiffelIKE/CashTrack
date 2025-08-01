import { Currency } from '@/types/currency'

export const initialMockCurrencies: Currency[] = [
  {
    name: "Cuban pesos",
    abbreviation: "CUP",
    denominations: [5, 10, 20, 50, 100, 200, 500, 1000],
  },
  {
    name: "US Dollars",
    abbreviation: "USD",
    denominations: [1, 5, 10, 20, 50, 100]
  },
  {
    name: "UE Euros",
    abbreviation: "EUR",
    denominations: [5, 10, 20, 50, 100]
  },
  {
    name: "Mexican pesos",
    abbreviation: "MXN",
    denominations: [5, 10, 20, 50, 100]
  }
]