import { Dispatch, SetStateAction } from "react";
import { gettingDate } from "./getDate";
import { ChartDataType } from "../types/DataTypes";

export const settingChartData = (
  setChartData: Dispatch<SetStateAction<ChartDataType>>,
  prices1: [number, number][]
) => {
  setChartData({
    labels: prices1?.map((data) => gettingDate(data[0])),
    datasets: [
      {
        data: prices1?.map((data) => data[1]),
        borderWidth: 3,
        fill: true,
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#824F07");
          gradient.addColorStop(1, "#0D0D0D");
          return gradient;
        },
        tension: 0.25,
        borderColor: "#FF9500",
        pointRadius: 0,
        yAxisID: "crypto1",
      },
    ],
  });
};
