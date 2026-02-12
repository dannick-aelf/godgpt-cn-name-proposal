import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ComparisonData {
  name: string;
  enter: number;
  exclude: number;
}

interface ComparisonChartProps {
  data: ComparisonData[];
  height?: number;
  enterColor?: string;
  excludeColor?: string;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ 
  data, 
  height = 300,
  enterColor = '#ff6b6b',
  excludeColor = '#5755EE'
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#454545" opacity={0.3} />
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
        <Legend
          wrapperStyle={{ color: '#9b9b9b', fontSize: '12px', paddingTop: '20px' }}
        />
        <Bar dataKey="enter" fill={enterColor} name="Enter China" radius={[4, 4, 0, 0]} />
        <Bar dataKey="exclude" fill={excludeColor} name="Exclude China" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
