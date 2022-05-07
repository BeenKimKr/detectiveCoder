import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

export default function App({ resultAmount, deliverTemp }) {
  const data = [
    { name: '1월', 선호: deliverTemp, 평균: resultAmount.jan },
    { name: '2월', 선호: deliverTemp, 평균: resultAmount.feb },
    { name: '3월', 선호: deliverTemp, 평균: resultAmount.mar },
    { name: '4월', 선호: deliverTemp, 평균: resultAmount.apr },
    { name: '6월', 선호: deliverTemp, 평균: resultAmount.jun },
    { name: '7월', 선호: deliverTemp, 평균: resultAmount.jul },
    { name: '5월', 선호: deliverTemp, 평균: resultAmount.may },
    { name: '8월', 선호: deliverTemp, 평균: resultAmount.aug },
    { name: '9월', 선호: deliverTemp, 평균: resultAmount.sep },
    { name: '10월', 선호: deliverTemp, 평균: resultAmount.oct },
    { name: '11월', 선호: deliverTemp, 평균: resultAmount.nov },
    { name: '12월', 선호: deliverTemp, 평균: resultAmount.dec },
  ];

  return (
    <div style={{ width: 500, height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart width={400} height={400} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Legend />
          <Bar dataKey="평균" barSize={20} fill="#DB7093" />
          <Line type="monotone" dataKey="선호" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
