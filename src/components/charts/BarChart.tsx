import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface BarChartData {
  name: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
  showGrid?: boolean;
  useLogScale?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ data, height = 300, showGrid = true, useLogScale = false }) => {
  const formatYAxis = (tickItem: number) => {
    if (useLogScale && tickItem >= 1000) {
      return `${(tickItem / 1000).toFixed(0)}k`;
    }
    return tickItem.toString();
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#454545" opacity={0.3} />}
        <XAxis 
          dataKey="name" 
          stroke="#9b9b9b"
          tick={{ fill: '#9b9b9b', fontSize: 12 }}
          axisLine={{ stroke: '#454545' }}
        />
        <YAxis 
          stroke="#9b9b9b"
          tick={{ fill: '#9b9b9b', fontSize: 12 }}
          axisLine={{ stroke: '#454545' }}
          tickFormatter={formatYAxis}
          scale={useLogScale ? 'log' : 'linear'}
          domain={useLogScale ? ['auto', 'auto'] : [0, 'auto']}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #454545',
            borderRadius: '4px',
            color: '#ececec',
          }}
          labelStyle={{ color: '#ececec' }}
          formatter={(value: number | undefined) => value ? value.toLocaleString() : ''}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || '#5755EE'} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
