import { useParams } from "react-router-dom";
import { getCoinDetailsDatails } from "../functions/getCoinDetailsData";
import { useEffect, useState } from "react";
import { CoinDetailsObjectType } from "../types/DataTypes";
import { settingCoinObject } from "../functions/settingCoinObject";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<CoinDetailsObjectType | undefined>(
    undefined
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinDetailsDatails(coinId, setError);
    console.log(coinData);
    if (coinData) {
      settingCoinObject(coinData, setCoin);
      // const prices = 
    } else {
      setError("No coin data available");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [coinId]);

  return <div className="w-full"></div>;
};

export default CoinDetails;
