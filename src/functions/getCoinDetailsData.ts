import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const getCoinDetailsDatails = async (
  coinId: string | undefined,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    setError("");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      options
    );
    console.log(res);
  } catch (err) {
    setError((err as Error).message);
  }
};
