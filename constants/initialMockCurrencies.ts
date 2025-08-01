import { Currency } from '@/types/currency'

export const initialMockCurrencies: Currency[] = [
  {
    name: "Cuban pesos",
    abbreviation: "CUP",
    denominations: [
      { amount: '5', id: '5' },
      { amount: '10', id: '10' },
      { amount: '20', id: '20' },
      { amount: '50', id: '50' },
      { amount: '100', id: '100' },
      { amount: '200', id: '200' }, 
      { amount: '500', id: '500' },
      { amount: '1000', id: '1000' },
    ],
  },
  {
    name: "US Dollars",
    abbreviation: "USD",
    denominations: [
      { amount: '1', id: '1' },
      { amount: '5', id: '5' },
      { amount: '10', id: '10' },
      { amount: '20', id: '20' },
      { amount: '50', id: '50' },
      { amount: '100', id: '100' },
    ]
  },
  {
    name: "UE Euros",
    abbreviation: "EUR",
    denominations: [
      { amount: '5', id: '5' },
      { amount: '10', id: '10' },
      { amount: '20', id: '20' },
      { amount: '50', id: '50' },
      { amount: '100', id: '100' },
    ]
  },
  {
    name: "Mexican pesos",
    abbreviation: "MXN",
    denominations: [
      { amount: '5', id: '5' },
      { amount: '10', id: '10' },
      { amount: '20', id: '20' },
      { amount: '50', id: '50' },
      { amount: '100', id: '100' },
    ]
  }
]