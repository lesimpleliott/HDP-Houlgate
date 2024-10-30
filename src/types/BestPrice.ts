export type BestPriceResponse = {
  bestPrice: string;
  bestPrice_unFormatted: number;
  bestPriceDistrib: string;
  bestPriceDistrib_unFormatted: number;
  errors: string;
};

export type UseBestPriceParams = {
  fromDate: string;
  toDate: string;
};
