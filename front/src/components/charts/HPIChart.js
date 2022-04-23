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

const dummyData = [
  { factor: 'GDP', value: 93.4, color: '#ffc9c9' },
  {
    factor: '사회적 지원',
    value: 89.5,
    color: '#fcc2d7',
  },
  { factor: '기대 수명', value: 94, color: '#eebefa' },
  { factor: '자유도', value: 90, color: '#d0bfff' },
  { factor: '관대함', value: 8.1, color: '#bac8ff' },
  {
    factor: '부패에 대한 인식',
    value: 47.1,
    color: '#a5d8ff',
  },
];

const HPIChart = () => {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <BarChart data={dummyData} layout="vertical">
        <XAxis type="number" />
        <YAxis yAxisId={0} dataKey="factor" type="category" />
        <YAxis dataKey="max" yAxisId={1} hide />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Bar dataKey="value" minPointSize={2} barSize={32}>
          {dummyData.map((d, idx) => {
            return <Cell Cell type="monotone" key={d.factor} fill={d.color} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HPIChart;
