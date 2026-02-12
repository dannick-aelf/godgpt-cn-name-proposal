import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Target, XCircle } from 'phosphor-react';
import { HorizontalBarChart } from '../charts/HorizontalBarChart';

export const StrategicFitSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const criteria = isEnglish ? [
    { name: 'Strategic importance to mission', value: 2, color: '#ff6b6b', max: 5 },
    { name: 'User/revenue base & growth', value: 3, color: '#ffa500', max: 5 },
    { name: 'Ability to isolate infrastructure', value: 3, color: '#ffa500', max: 5 },
    { name: 'Willingness to accept restrictions', value: 3, color: '#ffa500', max: 5 },
    { name: 'Long-term compliance commitment', value: 2, color: '#ff6b6b', max: 5 },
  ] : [
    { name: '对使命的战略重要性', value: 2, color: '#ff6b6b', max: 5 },
    { name: '用户/收入基数与增长', value: 3, color: '#ffa500', max: 5 },
    { name: '隔离基础设施的能力', value: 3, color: '#ffa500', max: 5 },
    { name: '接受限制的意愿', value: 3, color: '#ffa500', max: 5 },
    { name: '长期合规承诺', value: 2, color: '#ff6b6b', max: 5 },
  ];

  const totalScore = 13;
  const maxScore = 25;
  const threshold = 15;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <Target size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Strategic Fit Assessment' : '战略契合度评估'}
          </h1>
        </div>

        {/* Score Summary Card */}
        <Card className="bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(255,107,107,0.05)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]">
                  <XCircle size={28} weight="fill" className="text-[#ff6b6b]" />
                </div>
                <div>
                  <div className="text-sm text-[#9b9b9b] mb-1">{isEnglish ? 'Total Score' : '总分'}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#ff6b6b]">{totalScore}</span>
                    <span className="text-2xl text-[#9b9b9b]">/</span>
                    <span className="text-2xl text-[#9b9b9b]">{maxScore}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-[#9b9b9b] mb-1">{isEnglish ? 'Threshold' : '阈值'}</div>
                <div className="text-2xl font-bold text-[#5755EE]">{threshold}</div>
                <div className="mt-2 px-3 py-1.5 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]">
                  <span className="text-sm font-semibold text-[#ff6b6b]">
                    {isEnglish ? 'Do not enter' : '不进入'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Criteria Breakdown */}
        <div className="space-y-4">
          <h2 className="text-h2 font-semibold text-[#ececec] text-center">
            {isEnglish ? 'Assessment Criteria' : '评估标准'}
          </h2>
          <div className="space-y-3">
            {criteria.map((criterion, index) => (
              <Card key={index} className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-body text-[#ececec] font-medium">{criterion.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: criterion.max }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < criterion.value
                                ? criterion.value <= 2
                                  ? 'bg-[#ff6b6b]'
                                  : 'bg-[#ffa500]'
                                : 'bg-[#454545]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-lg font-bold ${criterion.value <= 2 ? 'text-[#ff6b6b]' : 'text-[#ffa500]'}`}>
                        {criterion.value}/{criterion.max}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Chart */}
        <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
          <div className="p-6">
            <HorizontalBarChart
              data={criteria.map(c => ({ name: c.name, value: c.value, color: c.color }))}
              height={250}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
