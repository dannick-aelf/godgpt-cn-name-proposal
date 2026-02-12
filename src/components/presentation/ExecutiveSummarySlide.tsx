import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  XCircle, 
  Target, 
  CurrencyDollar, 
  Users, 
  Code, 
  TrendDown
} from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const ExecutiveSummarySlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const summaryPoints: Array<{
    icon: any;
    iconColor: string;
    bgColor: string;
    borderColor: string;
    label: string;
    value: string;
    subValue?: string;
    highlight?: boolean;
    score?: number;
    maxScore?: number;
    threshold?: number;
  }> = [
    {
      icon: XCircle,
      iconColor: 'text-[#ff6b6b]',
      bgColor: 'bg-[rgba(255,107,107,0.1)]',
      borderColor: 'border-[rgba(255,107,107,0.3)]',
      label: isEnglish ? 'Recommendation' : '建议',
      value: isEnglish ? 'Do not enter China at this time' : '此时不进入中国',
      highlight: true,
    },
    {
      icon: Target,
      iconColor: 'text-[#ffa500]',
      bgColor: 'bg-[rgba(255,165,0,0.1)]',
      borderColor: 'border-[rgba(255,165,0,0.3)]',
      label: isEnglish ? 'Strategic Fit Score' : '战略契合度得分',
      value: '13/25',
      subValue: isEnglish ? 'Below threshold (15) → Do not enter' : '低于阈值（15）→ 不进入',
      highlight: true,
      score: 13,
      maxScore: 25,
      threshold: 15,
    },
    {
      icon: CurrencyDollar,
      iconColor: 'text-[#ff6b6b]',
      bgColor: 'bg-[rgba(255,107,107,0.1)]',
      borderColor: 'border-[rgba(255,107,107,0.3)]',
      label: isEnglish ? 'Entry Cost' : '进入成本',
      value: '~$320k+',
      subValue: isEnglish ? 'Current base: 38 paid subscribers' : '当前基数：38个付费订阅者',
    },
    {
      icon: Users,
      iconColor: 'text-[#ff6b6b]',
      bgColor: 'bg-[rgba(255,107,107,0.1)]',
      borderColor: 'border-[rgba(255,107,107,0.3)]',
      label: isEnglish ? 'Required to Justify' : '证明合理性所需',
      value: '~67,000',
      subValue: isEnglish ? 'paid subscribers in China' : '中国付费订阅者',
    },
    {
      icon: Code,
      iconColor: 'text-[#9b9b9b]',
      bgColor: 'bg-[rgba(155,155,155,0.1)]',
      borderColor: 'border-[rgba(155,155,155,0.3)]',
      label: isEnglish ? 'Engineering Cost' : '工程成本',
      value: '310–690',
      subValue: isEnglish ? 'total hours (Frontend 110–230; Backend 200–460)' : '总小时数（前端110–230；后端200–460）',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <Target size={32} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Executive Summary' : '执行摘要'}
          </h1>
          <p className="text-body text-[#9b9b9b] max-w-2xl mx-auto">
            {isEnglish 
              ? 'Strategic analysis and recommendation for China market entry decision'
              : '中国市场进入决策的战略分析和建议'
            }
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {summaryPoints.map((point, index) => {
            const IconComponent = point.icon;
            
            return (
              <Card 
                key={index} 
                className={`${point.bgColor} ${point.borderColor} border-2 transition-all duration-300 hover:scale-[1.02] ${point.highlight ? 'ring-2 ring-[rgba(255,107,107,0.3)]' : ''}`}
              >
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${point.bgColor} ${point.borderColor} border`}>
                      <IconComponent size={24} weight="regular" className={point.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wide">
                        {point.label}
                      </p>
                    </div>
                  </div>
                  
                  {/* Score Visualization - Card Style */}
                  {point.score !== undefined && (
                    <div className="space-y-4">
                      {/* Large Score Display */}
                      <div className="text-center space-y-3">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className={`text-5xl font-bold ${point.score < point.threshold! ? 'text-[#ff6b6b]' : 'text-[#5755EE]'}`}>
                            {point.score}
                          </span>
                          <span className="text-3xl font-medium text-[#9b9b9b]">/</span>
                          <span className="text-3xl font-medium text-[#9b9b9b]">{point.maxScore}</span>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${point.score < point.threshold! ? 'bg-[rgba(255,107,107,0.15)] border border-[rgba(255,107,107,0.3)]' : 'bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)]'}`}>
                          {point.score < point.threshold! ? (
                            <>
                              <XCircle size={16} weight="fill" className="text-[#ff6b6b]" />
                              <span className="text-sm font-semibold text-[#ff6b6b]">
                                {isEnglish ? 'Below Threshold' : '低于阈值'}
                              </span>
                            </>
                          ) : (
                            <>
                              <Target size={16} weight="fill" className="text-[#5755EE]" />
                              <span className="text-sm font-semibold text-[#5755EE]">
                                {isEnglish ? 'Above Threshold' : '高于阈值'}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Comparison Cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {/* Current Score */}
                        <div className={`p-3 rounded-lg text-center ${point.score < point.threshold! ? 'bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)]' : 'bg-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.3)]'}`}>
                          <div className="text-xs text-[#9b9b9b] mb-1">{isEnglish ? 'Current' : '当前'}</div>
                          <div className={`text-lg font-bold ${point.score < point.threshold! ? 'text-[#ff6b6b]' : 'text-[#5755EE]'}`}>
                            {point.score}
                          </div>
                        </div>
                        
                        {/* Threshold */}
                        {point.threshold !== undefined && (
                          <div className="p-3 rounded-lg text-center bg-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.3)]">
                            <div className="text-xs text-[#9b9b9b] mb-1">{isEnglish ? 'Threshold' : '阈值'}</div>
                            <div className="text-lg font-bold text-[#5755EE]">
                              {point.threshold}
                            </div>
                          </div>
                        )}
                        
                        {/* Maximum */}
                        <div className="p-3 rounded-lg text-center bg-[rgba(155,155,155,0.1)] border border-[rgba(155,155,155,0.3)]">
                          <div className="text-xs text-[#9b9b9b] mb-1">{isEnglish ? 'Maximum' : '最大值'}</div>
                          <div className="text-lg font-bold text-[#9b9b9b]">
                            {point.maxScore}
                          </div>
                        </div>
                      </div>
                      
                      {/* Gap Visualization */}
                      {point.threshold !== undefined && point.score < point.threshold && (
                        <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)]">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#9b9b9b]">{isEnglish ? 'Gap to threshold:' : '距离阈值差距:'}</span>
                            <span className="text-sm font-bold text-[#ff6b6b]">
                              {point.threshold - point.score} {isEnglish ? 'points' : '分'}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* Conclusion */}
                      <div className="pt-2 border-t border-[#454545]">
                        <p className="text-sm text-[#ececec] leading-relaxed text-center font-medium">
                          {point.subValue}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Regular value display (for non-score items) */}
                  {point.score === undefined && (
                    <div className="space-y-1">
                      <p className={`text-2xl font-bold ${point.highlight ? point.iconColor : 'text-[#ececec]'}`}>
                        {point.value}
                      </p>
                      {point.subValue && (
                        <p className="text-sm text-[#9b9b9b] leading-relaxed">
                          {point.subValue}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Critical Warning */}
        <Card className="bg-[rgba(255,107,107,0.08)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)] flex-shrink-0">
                <TrendDown size={24} weight="regular" className="text-[#ff6b6b]" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-h3 font-semibold text-[#ececec]">
                  {isEnglish ? 'Critical Context' : '关键背景'}
                </h3>
                <p className="text-body text-[#ececec] leading-relaxed">
                  {highlightWarningWords(
                    isEnglish
                      ? 'GodGPT is not currently profitable. Splitting into two apps would require allocating paid media budget and ongoing resources to run and maintain the China version.'
                      : 'GodGPT目前尚未盈利。拆分为两个应用需要分配付费媒体预算和持续资源来运营和维护中国版本。'
                  )}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
