interface Currency {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: number | null;
  quoteIncrement: number | null;
  baseMinSize: number | null;
  baseMaxSize: number | null;
  tradingStatus: "enabled" | "disabled";
  listRoles: null;
  baseCurrencyTruncate: number;
  priceTruncate: number;
  quoteCurrencyTruncate: numer;
}

interface CurrencyPrice extends Currency {
  price: Price;
}
