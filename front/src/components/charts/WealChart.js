import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import "./style.css";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    color,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={color}
        className="font-irop"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={color}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={color}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={color} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="font-noto"
      >{`${value} 위`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        className="font-noto"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function App({ resultHPIRank }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const data = [
    {
      name: "GDP",
      value: resultHPIRank.GDP,
      color: "#ffc9c9",
      a: 70 - resultHPIRank.GDP,
    },
    {
      name: "사회적 지원",
      value: resultHPIRank.socialSupport,
      color: "#fcc2d7",
      a: 70 - resultHPIRank.socialSupport,
    },
    {
      name: "기대 수명",
      value: resultHPIRank.HLE,
      color: "#eebefa",
      a: 70 - resultHPIRank.HLE,
    },
    {
      name: "자유도",
      value: resultHPIRank.Freedom,
      color: "#d0bfff",
      a: 70 - resultHPIRank.Freedom,
    },
    {
      name: "관대함",
      value: resultHPIRank.Generosity,
      color: "#bac8ff",
      a: 70 - resultHPIRank.Generosity,
    },
    {
      name: "부패에 대한 인식",
      value: resultHPIRank.corruption,
      color: "#a5d8ff",
      a: 70 - resultHPIRank.corruption,
    },
  ];
  return (
    <PieChart className="wealChart" width={500} height={300}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={250}
        cy={130}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        // dataKey='a'
        datakey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
