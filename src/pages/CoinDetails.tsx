import { useParams } from "react-router-dom";
import { getCoinDetailsDatails } from "../functions/getCoinDetailsData";
import { useEffect, useState } from "react";
import { ChartDataType, CoinDetailsObjectType } from "../types/DataTypes";
import { settingCoinObject } from "../functions/settingCoinObject";
import { getPrices } from "../functions/getPrices";
import { Line } from "react-chartjs-2";
import { settingChartData } from "../functions/settingChartData";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  Filler,
} from "chart.js";
import LoaderSpinner from "../components/landingPage/LoaderSpinner";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import Details from "../components/coinDetails/Details";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<CoinDetailsObjectType | undefined>(
    undefined
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [priceType, setPriceType] = useState<string>("prices");
  const [chartData, setChartData] = useState<ChartDataType>(
    {} as ChartDataType
  );

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinDetailsDatails(coinId, setError);
    if (coinData && coinId) {
      settingCoinObject(coinData, setCoin);
      const prices = await getPrices(coinId, 21, priceType, setError);
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

  useEffect(() => {
    getData();
  }, [coinId]);

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      // crypto2: multiAxis && {
      //   position: "right",
      // },
    },
  };

  return (
    <div className="w-full min-h-[86.5vh] flex justify-center items-start py-4">
      {!loading && !error && coin !== undefined ? (
        <div className="flex flex-col justify-start items-center gap-6 p-4">
          <Details coin={coin}/>
          <div className="max-sm:w-full md2:w-[95%] xl:w-[90%] 2xl:w-[62.5rem] bg-[#0D0D0D] rounded-xl p-4">
            <Line data={chartData} options={options} />
          </div>
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
