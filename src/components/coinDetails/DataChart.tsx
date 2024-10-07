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
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: {
        position: "right",
      }
    },
  };
  return (
    <div className="max-sm:w-full md2:w-[95%] xl:w-[90%] 2xl:w-[62.5rem] bg-[#0D0D0D] rounded-xl p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DataChart;
