import { ChartDataset } from "chart.js";

export type CoinType = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
};

export type CoinDetailsType = {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    price_change_percentage_24h: number;
    total_volume: {
      usd: number;
    };
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
};

export type CoinDetailsObjectType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  price_change_percentage_24h: number;
  total_volume: number;
  current_price: number;
  market_cap: number;
};

export type CoinPricesType = {
  prices: [number, number][];
  total_volumes: [number, number][];
  market_caps: [number, number][];
};

export type ChartDataType = {
  labels: string[];
  datasets: Array<ChartDataset<'line', number[]>>; // Enforcing correct type for datasets
};