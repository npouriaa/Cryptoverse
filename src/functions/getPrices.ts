import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { options } from "../reusable/requestOptions";

export const getPrices = (
  id: string,
  days: number,
  priceType: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  const prices = axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
    options
  );
};
