import React from "react";
import { PieChart, Pie } from "recharts";

const PieChart1 = ({ information }) => {
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={information}
        dataKey="investment"
        cx={175}
        cy={175}
        outerRadius={58}
        fill="#8884d8"
      />
      <Pie
        data={information}
        dataKey="revenue"
        cx={175}
        cy={175}
        innerRadius={70}
        outerRadius={85}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default PieChart1;
