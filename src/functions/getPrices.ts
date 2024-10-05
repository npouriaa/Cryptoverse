import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { options } from "../reusable/requestOptions";
import { CoinPricesType } from "../types/DataTypes";

export const getPrices = async (
  id: string,
  days: number,
  priceType: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const response = await axios.get<CoinPricesType>(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    );
    if (priceType == "market_caps") {
      return response.data.market_caps;
    } else if (priceType == "total_volumes") {
      return response.data.total_volumes;
    } else {
      return response.data.prices;
    }
  } catch (err) {
    setError((err as Error).message);
    return;
  }
};
