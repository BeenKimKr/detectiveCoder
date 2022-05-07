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

const Bigmac = ({ resultBigmacPrice, resultAmount }) => {
  const data = [
    { factor: 'KOR', price: 4900, color: '#FFA500' },
    {
      factor: resultAmount.Ab,
      price: resultBigmacPrice.price.toFixed(0),
      color: '#80ca9c',
    },
  ];

  return (
    <div className='bigmacChart'>
      <span className='font-irop font-bold'>🍔 빅맥으로 알아보는 물가(₩)</span>
      <ResponsiveContainer
        className='flex justify-center'
        width={450}
        height={200}
      >
        <BarChart data={data} layout='vertical'>
          <XAxis type='number' />
          <YAxis yAxisId={0} dataKey='factor' type='category' />
          <YAxis dataKey='max' yAxisId={1} hide />
          <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
          <Bar dataKey='price' minPointSize={2} barSize={24}>
            {data.map((d, idx) => {
              return <Cell type='monotone' key={d.factor} fill={d.color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bigmac;
