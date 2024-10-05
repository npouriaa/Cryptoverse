import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { CoinDetailsType } from "../types/DataTypes";
import { options } from "../reusable/requestOptions";

export const getCoinDetailsDatails = async (
  coinId: string | undefined,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    setError("");
    const res = await axios.get<CoinDetailsType>(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      options
    );
    return res.data;
  } catch (err) {
    setError((err as Error).message);
    return;
  }
};
