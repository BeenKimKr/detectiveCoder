import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './style.css';

const HPIChart = ({ resultAmount }) => {
  const data = [
    { factor: 'GDP', value: resultAmount.GDP.toFixed(2), color: '#ffc9c9' },
    {
      factor: '사회적 지원',
      value: resultAmount.socialSupport.toFixed(2),
      color: '#fcc2d7',
    },
    {
      factor: '기대 수명',
      value: resultAmount.HLE.toFixed(2),
      color: '#eebefa',
    },
    {
      factor: '자유도',
      value: resultAmount.Freedom.toFixed(2),
      color: '#d0bfff',
    },
    {
      factor: '관대함',
      value: resultAmount.Generosity.toFixed(2),
      color: '#bac8ff',
    },
    {
      factor: '부패에 대한 인식',
      value: resultAmount.corruption.toFixed(2),
      color: '#a5d8ff',
    },
  ];

  return (
    <div className='chart'>
      <span className='chartTitle'>행복 수치를 결정하는 6가지 요인</span>
      <ResponsiveContainer width={400} height={400}>
        <BarChart data={data} layout='vertical'>
          <XAxis type='number' />
          <YAxis width={130} yAxisId={0} dataKey='factor' type='category' />
          <YAxis dataKey='max' yAxisId={1} hide />
          <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
          <Bar dataKey='value' minPointSize={2} barSize={32}>
            {data.map((d, idx) => {
              return (
                <Cell Cell type='monotone' key={d.factor} fill={d.color} />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HPIChart;
