import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChartLine, CheckCircle, XCircle, ArrowRight } from 'phosphor-react';
import { ComparisonChart } from '../charts/ComparisonChart';

export const DecisionMatrixSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const comparisonData = isEnglish ? [
    { name: 'Upfront Cost ($k)', enter: 320, exclude: 0 },
    { name: 'Ongoing Cost ($k/yr)', enter: 120, exclude: 0 },
    { name: 'Regulatory Risk (1-5)', enter: 5, exclude: 1 },
    { name: 'Eng Hours (hundreds)', enter: 5, exclude: 0 },
  ] : [
    { name: '前期成本 ($k)', enter: 320, exclude: 0 },
    { name: '持续成本 ($k/年)', enter: 120, exclude: 0 },
    { name: '监管风险 (1-5)', enter: 5, exclude: 1 },
    { name: '工程小时 (百)', enter: 5, exclude: 0 },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <ChartLine size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Entry Strategy Decision Matrix' : '进入战略决策矩阵'}
          </h1>
        </div>

        {/* Comparison Chart */}
        <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
          <div className="p-6">
            <ComparisonChart data={comparisonData} height={350} />
          </div>
        </Card>

        {/* Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Enter China */}
          <Card className="bg-[rgba(255,107,107,0.1)] border-[rgba(255,107,107,0.4)] border-2">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]">
                  <XCircle size={28} weight="fill" className="text-[#ff6b6b]" />
                </div>
                <h3 className="text-h2 font-semibold text-[#ececec]">
                  {isEnglish ? 'Enter China' : '进入中国'}
                </h3>
              </div>
              <ul className="space-y-2 text-body text-[#ececec]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b6b] mt-1">•</span>
                  <span>{isEnglish ? '$320k upfront + $120k/year ongoing' : '$320k前期 + $120k/年持续'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b6b] mt-1">•</span>
                  <span>{isEnglish ? 'High regulatory risk (5/5)' : '高监管风险（5/5）'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b6b] mt-1">•</span>
                  <span>{isEnglish ? '500+ engineering hours diverted' : '500+工程小时被转移'}</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Exclude China */}
          <Card className="bg-gradient-to-br from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.4)] border-2 ring-2 ring-[rgba(87,85,238,0.2)]">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[rgba(87,85,238,0.2)] border border-[rgba(87,85,238,0.4)]">
                  <CheckCircle size={28} weight="fill" className="text-[#5755EE]" />
                </div>
                <h3 className="text-h2 font-semibold text-[#ececec]">
                  {isEnglish ? 'Exclude China' : '排除中国'}
                </h3>
              </div>
              <ul className="space-y-2 text-body text-[#ececec]">
                <li className="flex items-start gap-2">
                  <span className="text-[#5755EE] mt-1">✓</span>
                  <span>{isEnglish ? 'No upfront or ongoing costs' : '无前期或持续成本'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5755EE] mt-1">✓</span>
                  <span>{isEnglish ? 'Minimal regulatory risk (1/5)' : '最小监管风险（1/5）'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5755EE] mt-1">✓</span>
                  <span>{isEnglish ? 'Engineering hours retained for profit-making apps' : '工程小时保留用于盈利应用'}</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Key Insight */}
        <Card className="bg-gradient-to-r from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-center gap-4">
              <ArrowRight size={24} weight="regular" className="text-[#5755EE]" />
              <p className="text-h3 font-medium text-[#ececec] text-center flex-1">
                {isEnglish
                  ? 'Excluding China avoids large fixed cost, limits regulatory exposure, and keeps focus on higher-ROI uses of capital and engineering'
                  : '排除中国避免了大量固定成本，限制了监管风险，并将重点放在资本和工程的高投资回报率用途上'
                }
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
