import { Dispatch, SetStateAction } from "react";
import { gettingDate } from "./getDate";
import { ChartDataType } from "../types/DataTypes";

export const settingChartData = (
  setChartData: Dispatch<SetStateAction<ChartDataType>>,
  prices1: [number, number][],
  prices2?: [number, number][]
) => {
  if (prices2) {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1?.map((data) => data[1]),
          borderWidth: 1,
          fill: false,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#FF9332",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto 2",
          data: prices2?.map((data) => data[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          data: prices1?.map((data) => data[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "#FF9500",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
