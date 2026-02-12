import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe, Scales, Eye, TrendUp, ArrowRight } from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const StrategicStanceSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const actions = isEnglish ? [
    { icon: Eye, text: 'Observe the China market first' },
    { icon: TrendUp, text: 'Invest in our profit-making apps to strengthen the portfolio' },
    { icon: ArrowRight, text: 'When regulatory and economic conditions are more favorable, revisit expanding into China with a dedicated strategy and resources' },
  ] : [
    { icon: Eye, text: '首先观察中国市场' },
    { icon: TrendUp, text: '投资我们的盈利应用以加强投资组合' },
    { icon: ArrowRight, text: '当监管和经济条件更加有利时，用专门的战略和资源重新考虑扩展到中国' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <Globe size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Strategic Stance' : '战略立场'}
          </h1>
        </div>

        {/* Opening Statement */}
        <Card className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)] flex-shrink-0">
                <Globe size={24} weight="regular" className="text-[#5755EE]" />
              </div>
              <p className="text-body text-[#ececec] leading-relaxed flex-1">
                {isEnglish
                  ? 'China remains a market on our mind'
                  : '中国仍然是我们关注的市场'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Context */}
        <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[rgba(155,155,155,0.15)] border border-[rgba(155,155,155,0.3)] flex-shrink-0">
                <Scales size={24} weight="regular" className="text-[#9b9b9b]" />
              </div>
              <p className="text-body text-[#ececec] leading-relaxed flex-1">
                {highlightWarningWords(
                  isEnglish
                    ? 'Given current strict regulations on Western AI apps and the fact that GodGPT is not yet profitable, the better business decision is to:'
                    : '鉴于当前对西方AI应用的严格监管以及GodGPT尚未盈利的事实，更好的商业决策是：'
                )}
              </p>
            </div>
          </div>
        </Card>

        {/* Action Steps */}
        <div className="space-y-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={index}
                className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)] flex-shrink-0">
                      <IconComponent size={20} weight="regular" className="text-[#5755EE]" />
                    </div>
                    <p className="text-body text-[#ececec] leading-relaxed flex-1 pt-2">
                      {highlightWarningWords(action.text)}
                    </p>
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
