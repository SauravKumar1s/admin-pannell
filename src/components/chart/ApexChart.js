import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RechartsDonutChart = () => {
  const data = [
    { name: 'Red', value: 300 },
    { name: 'Blue', value: 50 },
    { name: 'Yellow', value: 100 },
  ];

  const COLORS = ['#FF4560', '#775DD0', '#FFC556'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RechartsDonutChart;
