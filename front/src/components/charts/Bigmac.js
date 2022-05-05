import React, { PureComponent } from 'react';
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

const Bigmac = ({ resultAmount }) => {
  const data = [
    { factor: 'KOR', price: 4.2, color: '#20B2AA' },
    {
      factor: resultAmount.Ab,
      price: (resultAmount.price * 10).toFixed(2),
      color: '#fcc2d7',
    },
  ];

  return (
    <div className='bigmacChart'>
      <span className='chartTitle font-irop'>빅맥으로 알아보는 물가($)</span>
      <ResponsiveContainer width={400} height={150}>
        <BarChart data={data} layout='vertical'>
          <XAxis type='number' />
          <YAxis yAxisId={0} dataKey='factor' type='category' />
          <YAxis dataKey='max' yAxisId={1} hide />
          <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
          <Bar dataKey='price' minPointSize={2} barSize={32}>
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

export default Bigmac;
