import { Line } from "react-chartjs-2";
import { ChartDataType } from "../../types/DataTypes";
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

type DataChartType = {
  chartData: ChartDataType;
  multiAxis: boolean;
};

const DataChart = ({ chartData, multiAxis }: DataChartType) => {
  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: multiAxis
      ? {
          crypto1: {
            position: "left",
          },
          crypto2: {
            position: "right",
          },
        }
      : {
          crypto1: {
            position: "left",
          },
        },
  };
  return (
      <Line data={chartData} options={options} />
  );
};

export default DataChart;
