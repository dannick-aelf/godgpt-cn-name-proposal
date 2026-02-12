import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface HorizontalBarData {
  name: string;
  value: number;
  color?: string;
}

interface HorizontalBarChartProps {
  data: HorizontalBarData[];
  height?: number;
  showGrid?: boolean;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data, height = 300, showGrid = true }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        layout="vertical"
        data={data}
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#454545" opacity={0.3} />}
        <XAxis type="number" stroke="#9b9b9b" tick={{ fill: '#9b9b9b', fontSize: 12 }} axisLine={{ stroke: '#454545' }} />
        <YAxis 
          type="category" 
          dataKey="name" 
          stroke="#9b9b9b"
          tick={{ fill: '#9b9b9b', fontSize: 12 }}
          axisLine={{ stroke: '#454545' }}
          width={90}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #454545',
            borderRadius: '4px',
            color: '#ececec',
          }}
          labelStyle={{ color: '#ececec' }}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || '#5755EE'} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
