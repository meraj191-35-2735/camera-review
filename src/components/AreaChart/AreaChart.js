import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChart1 = (props) => {
  const { information } = props;
  return (
    <AreaChart
      width={400}
      height={300}
      data={information}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="investment"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
    </AreaChart>
  );
};
export default AreaChart1;
