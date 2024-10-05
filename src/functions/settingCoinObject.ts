import { Dispatch, SetStateAction } from "react";
import { CoinDetailsObjectType, CoinDetailsType } from "../types/DataTypes";

export const settingCoinObject = (data : CoinDetailsType, setCoin : Dispatch<SetStateAction<CoinDetailsObjectType | undefined>>) => {
    setCoin({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      description: data.description.en,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      total_volume: data.market_data.total_volume.usd,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
    });
  };