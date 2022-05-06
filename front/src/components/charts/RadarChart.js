import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

export default function App({ resultAmount }) {
  const data = [
    {
      subject: '자유',
      A: 0.7,
      B: resultAmount.Freedom.toFixed(2),
      fullMark: 1,
    },
    {
      subject: 'GDP',
      A: 0.92,
      B: resultAmount.GDP.toFixed(2),
      fullMark: 1,
    },
    {
      subject: '관용',
      A: -0.15,
      B: resultAmount.Generosity.toFixed(2),
      fullMark: 1,
    },
    {
      subject: '기대수명',
      A: 0.96,
      B: resultAmount.HLE.toFixed(2),
      fullMark: 1,
    },
    {
      subject: '부정부패',
      A: 0.22,
      B: resultAmount.corruption.toFixed(2),
      fullMark: 1,
    },
    {
      subject: '사회적 지지',
      A: 0.81,
      B: resultAmount.socialSupport.toFixed(2),
      fullMark: 1,
    },
  ];
  return (
    <RadarChart
      className='radarChart'
      cx={300}
      cy={250}
      outerRadius={150}
      width={400}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey='subject' />
      <PolarRadiusAxis angle={30} domain={[0, 1]} />
      <Radar
        name='South Korea'
        dataKey='A'
        stroke='#8884d8'
        fill='#8884d8'
        fillOpacity={0.6}
      />
      <Radar
        name={resultAmount.Country}
        dataKey='B'
        stroke='#82ca9d'
        fill='#82ca9d'
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
