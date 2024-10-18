import { useParams } from "react-router-dom";
import { getCoinDetailsDatails } from "../functions/getCoinDetailsData";
import { MouseEvent, useEffect, useState } from "react";
import { ChartDataType, CoinDetailsObjectType } from "../types/DataTypes";
import { settingCoinObject } from "../functions/settingCoinObject";
import { getPrices } from "../functions/getPrices";
import { settingChartData } from "../functions/settingChartData";

import LoaderSpinner from "../components/landingPage/LoaderSpinner";
import Details from "../components/coinDetails/Details";
import DataChart from "../components/coinDetails/DataChart";
import SelectDays from "../components/coinDetails/SelectDays";
import { SelectChangeEvent } from "@mui/material";
import TogglePriceType from "../components/coinDetails/TogglePriceType";
import Description from "../components/coinDetails/Description";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<CoinDetailsObjectType | undefined>(
    undefined
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [priceType, setPriceType] = useState<string>("prices");
  const [days, setDays] = useState<number | string>(30);
  const [chartData, setChartData] = useState<ChartDataType>(
    {} as ChartDataType
  );

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinDetailsDatails(coinId, setError);
    if (coinData && coinId) {
      settingCoinObject(coinData, setCoin);
      const prices = await getPrices(coinId, days, priceType, setError);
      console.log(prices);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    } else {
      setError("No coin data available");
    }
    setLoading(false);
  };

  const handleDaysChange = async (
    event: SelectChangeEvent<number | string>
  ) => {
    if (coinId) {
      setLoading(true);
      setDays(event.target.value);
      const prices = await getPrices(
        coinId,
        event.target.value,
        priceType,
        setError
      );
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handlePriceTypeChange = async (
    event: MouseEvent<HTMLElement>,
    newPriceType: string
  ) => {
    if (coinId && newPriceType) {
      setPriceType(newPriceType);
      console.log(newPriceType);
      const prices = await getPrices(coinId, days, newPriceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [coinId]);

  return (
    <div className="w-full min-h-[86.5vh] flex justify-center items-start py-4">
      {!loading && !error && coin !== undefined ? (
        <div className="flex flex-col justify-start max-sm:p-4 md2:p-0 items-center gap-6 max-sm:w-full md2:w-[95%] md3:w-[90%] xl:w-[90%] 2xl:w-[62.5rem]">
          <Details coin={coin} />
          <div className=" bg-[#0D0D0D] rounded-xl p-4 w-full">
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              pTag={false}
            />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <DataChart chartData={chartData} />
          </div>
            <Description description={coin.description} name={coin.name}/>
        </div>
      ) : error ? (
        <div className="p-4 2xl:w-1/3 sm2:w-3/5 max-sm:w-full">
          <div className="p-4 rounded-xl bg-[#0D0D0D] text-red-500 text-center text-sm">
            {error} - Error while loading {coinId} details. Please try again
            later
          </div>
        </div>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default CoinDetails;
