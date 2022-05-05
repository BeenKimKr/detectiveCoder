import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const WeatherChart = ({ resultAmount }) => {
  const data = [
    { month: "1월", value: resultAmount.jan },
    { month: "2월", value: resultAmount.feb },
    { month: "3월", value: resultAmount.mar },
    { month: "4월", value: resultAmount.apr },
    { month: "5월", value: resultAmount.may },
    { month: "6월", value: resultAmount.jun },
    { month: "7월", value: resultAmount.jul },
    { month: "8월", value: resultAmount.aug },
    { month: "9월", value: resultAmount.sep },
    { month: "10월", value: resultAmount.oct },
    { month: "11월", value: resultAmount.nov },
    { month: "12월", value: resultAmount.dec },
  ];
  console.log(resultAmount);
  return (
    <div className="chart">
      <span className="chartTitle font-irop">월별 평균 기온(°C)</span>
      <ResponsiveContainer width={400} height={400}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="value" fill="#74c0fc" />
          <XAxis dataKey="month" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
