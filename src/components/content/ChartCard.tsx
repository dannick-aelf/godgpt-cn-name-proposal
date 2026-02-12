import React from 'react';
import { Card } from '../ui/Card';
import { BarChart } from '../charts/BarChart';
import { PieChart } from '../charts/PieChart';
import { HorizontalBarChart } from '../charts/HorizontalBarChart';
import { ComparisonChart } from '../charts/ComparisonChart';
import type { ContentSection } from '../../types/presentation.types';

interface ChartCardProps {
  section: ContentSection;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ section, className = '' }) => {
  if (!section.chartData || !section.chartType) {
    return null;
  }

  const renderChart = () => {
    // Check if we need log scale (for revenue reality chart with large differences)
    const values = section.chartData!.map(d => d.value).filter((v): v is number => v !== undefined);
    const useLogScale = values.length > 0 && values.some(v => v > 0) 
      ? Math.max(...values) / Math.min(...values.filter(v => v > 0)) > 100
      : false;

    switch (section.chartType) {
      case 'bar':
        return (
          <BarChart
            data={section.chartData!.map(d => ({
              name: d.name,
              value: d.value || 0,
              color: d.color,
            }))}
            height={300}
            useLogScale={useLogScale}
          />
        );
      case 'pie':
        return (
          <PieChart
            data={section.chartData!.map(d => ({
              name: d.name,
              value: d.value || 0,
              color: d.color || '#5755EE',
            }))}
            height={300}
          />
        );
      case 'horizontal-bar':
        return (
          <HorizontalBarChart
            data={section.chartData!.map(d => ({
              name: d.name,
              value: d.value || 0,
              color: d.color,
            }))}
            height={300}
          />
        );
      case 'comparison':
        return (
          <ComparisonChart
            data={section.chartData!.map(d => ({
              name: d.name,
              enter: d.enter || 0,
              exclude: d.exclude || 0,
            }))}
            height={300}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <Card>
        <div className="space-y-4">
          {(section.title || section.icon) && (
            <div className="flex items-center justify-center gap-2 text-h3 text-[#9b9b9b] font-normal text-center">
              {section.icon}
              {section.title && <span>{section.title}</span>}
            </div>
          )}
          <div className="w-full">
            {renderChart()}
          </div>
        </div>
      </Card>
    </div>
  );
};
