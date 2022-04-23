import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: '1월', value: 10 },
  { month: '2월', value: 13 },
  { month: '3월', value: 25 },
  { month: '4월', value: 30 },
  { month: '5월', value: 50 },
  { month: '6월', value: 69 },
  { month: '7월', value: 75 },
  { month: '8월', value: 61.2 },
  { month: '9월', value: 50 },
  { month: '10월', value: 13 },
  { month: '11월', value: 25 },
  { month: '12월', value: 30 },
];

const WeatherChart = () => {
  return (
    <ResponsiveContainer width={400} height={400}>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey='value' fill='#74c0fc ' />
        <XAxis dataKey='month' />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
