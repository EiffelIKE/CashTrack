export type CurrencyAbreviation = "CUP" | "USD" | "EUR" | "MXN"

export interface Currency {
  name: string;
  denominations: Denomination[];
  abbreviation: CurrencyAbreviation;
}

export type Denomination = {
  amount: string;
  id: string;
};

export type DenominationWithCount = Denomination & {
  count: string;
};

export interface CurrencyWithDenominationAmounts
  extends Omit<Currency, 'denominations'> {
  denominations: DenominationWithCount[];
}

export type ActiveCurrencies = CurrencyAbreviation[]

export type TrackCurrencies = {
  [key in CurrencyAbreviation]: {
    [key in Denomination['amount']]: number
  }
}