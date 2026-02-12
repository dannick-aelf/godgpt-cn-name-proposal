import React from 'react';
import { Card } from '../ui/Card';
import { 
  CurrencyDollar, 
  Code, 
  ChartBar
} from 'phosphor-react';
import { BarChart } from '../charts/BarChart';
import { PieChart } from '../charts/PieChart';
import { highlightWarningWords } from '../../utils/highlightText';

interface FinancialModelSlideProps {
  slideId: string;
  title: string;
  chartType?: 'entry-cost' | 'engineering' | 'revenue';
  chartData?: any[];
  callouts: Array<{
    type: 'warning' | 'info';
    icon: React.ReactNode | any;
    content: string;
  }>;
}

export const FinancialModelSlide: React.FC<FinancialModelSlideProps> = ({ 
  title, 
  chartType, 
  chartData, 
  callouts 
}) => {

  const getIcon = () => {
    if (title.includes('Entry Cost') || title.includes('进入成本')) return CurrencyDollar;
    if (title.includes('Engineering') || title.includes('工程')) return Code;
    if (title.includes('Revenue') || title.includes('收入')) return ChartBar;
    return CurrencyDollar;
  };

  const IconComponent = getIcon();

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <IconComponent size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {title}
          </h1>
        </div>

        {/* Chart Section */}
        {chartData && chartData.length > 0 && (
          <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
            <div className="p-6">
              {chartType === 'engineering' ? (
                <PieChart data={chartData} height={300} />
              ) : (
                <BarChart data={chartData} height={300} useLogScale={chartType === 'revenue'} />
              )}
            </div>
          </Card>
        )}

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {callouts.map((callout, index) => {
            const isWarning = callout.type === 'warning';
            const isReactElement = React.isValidElement(callout.icon);
            
            return (
              <Card 
                key={index}
                className={`${
                  isWarning 
                    ? 'bg-[rgba(255,107,107,0.1)] border-[rgba(255,107,107,0.3)]' 
                    : 'bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]'
                } border-2 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${
                      isWarning 
                        ? 'bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]' 
                        : 'bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)]'
                    } flex-shrink-0`}>
                      {isReactElement ? (
                        <div className={isWarning ? 'text-[#ff6b6b]' : 'text-[#5755EE]'}>
                          {callout.icon}
                        </div>
                      ) : (
                        React.createElement(callout.icon, { 
                          size: 24, 
                          weight: "regular", 
                          className: isWarning ? 'text-[#ff6b6b]' : 'text-[#5755EE]' 
                        })
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-body text-[#ececec] leading-relaxed">
                        {highlightWarningWords(callout.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
