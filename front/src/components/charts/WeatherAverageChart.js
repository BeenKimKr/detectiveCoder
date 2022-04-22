import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const dummyData = [
  { month: '1월', value: 10 },
  { month: '2월', value: 13 },
  { month: '3월', value: 25 },
  { month: '4월', value: 30 },
  { month: '5월', value: 50 },
  { month: '6월', value: 69 },
  { month: '7월', value: 75 },
  { month: '8월', value: 80 },
  { month: '9월', value: 50 },
  { month: '10월', value: 13 },
  { month: '11월', value: 25 },
  { month: '12월', value: 30 },
];

const WeatherAverageChart = ({}) => (
  <div style={{ width: '700px', height: '500px' }}>
    <ResponsiveBar
      data={dummyData}
      keys={['value']}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#a9e34b']}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'precipitation',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  </div>
);

export default WeatherAverageChart;
