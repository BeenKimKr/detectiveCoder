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
import './style.css';

const dummyData = [
  { factor: '우리나라', price: 5600, color: '#ffc9c9' },
  {
    factor: '독일',
    price: 7000,
    color: '#fcc2d7',
  },
];

const Bigmac = () => {
  return (
    <div className='bigmacChart'>
      <span className='chartTitle'>빅맥으로 알아보는 물가</span>
      <ResponsiveContainer width={400} height={150}>
        <BarChart data={dummyData} layout='vertical'>
          <XAxis type='number' />
          <YAxis yAxisId={0} dataKey='factor' type='category' />
          <YAxis dataKey='max' yAxisId={1} hide />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Bar dataKey='price' minPointSize={2} barSize={32}>
            {dummyData.map((d, idx) => {
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

export default Bigmac;
