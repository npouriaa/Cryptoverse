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
    console.log(coinData);
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
    <div className="w-full p-4">
      <button onClick={() => console.log(chartData)}>dsds</button>
      {loading ? <p>loading</p> : <Line data={chartData} options={options} />}
    </div>
  );
};

export default CoinDetails;
