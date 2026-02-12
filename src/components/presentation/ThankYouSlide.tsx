import React from 'react';
import { CheckCircle, ArrowRight, Target, ChartLine, Handshake } from 'phosphor-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const ThankYouSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const nextSteps = [
    {
      icon: Target,
      text: isEnglish ? 'Validate assumptions with product, engineering, and finance' : '与产品、工程和财务部门验证假设',
    },
    {
      icon: ChartLine,
      text: isEnglish ? 'Focus resources on profit-making apps' : '将资源专注于盈利应用',
    },
    {
      icon: Handshake,
      text: isEnglish ? 'Revisit China when conditions are favorable' : '当条件有利时重新考虑中国',
    },
  ];
  
  return (
    <div className="h-screen w-full overflow-y-auto flex items-center justify-center px-6 md:px-8 lg:px-12 py-20">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="text-center space-y-12">
          {/* Main Thank You Section */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#5755EE] opacity-20 blur-3xl rounded-full" />
                <div className="relative p-6 rounded-full bg-gradient-to-br from-[rgba(87,85,238,0.2)] to-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.3)]">
                  <CheckCircle size={64} weight="regular" className="text-[#5755EE]" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-display md:text-[48px] lg:text-[64px] font-semibold text-[#ececec] tracking-tight">
                {isEnglish ? 'Thank You' : '谢谢'}
              </h1>
              <p className="text-h2 text-[#9b9b9b] max-w-2xl mx-auto leading-relaxed">
                {isEnglish 
                  ? 'Strategic decision brief prepared for board review'
                  : '为董事会审查准备的战略决策简报'
                }
              </p>
            </div>
          </div>

          {/* Path Forward */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
              <ArrowRight size={20} weight="regular" className="text-[#5755EE]" />
              <span className="text-h3 font-medium text-[#9b9b9b]">
                {isEnglish ? 'Path Forward' : '前进道路'}
              </span>
              <ArrowRight size={20} weight="regular" className="text-[#5755EE]" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className="group relative p-6 rounded-lg bg-[rgba(87,85,238,0.05)] border border-[rgba(87,85,238,0.2)] hover:bg-[rgba(87,85,238,0.1)] transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-lg bg-[rgba(87,85,238,0.15)] group-hover:bg-[rgba(87,85,238,0.25)] transition-colors">
                        <IconComponent size={28} weight="regular" className="text-[#5755EE]" />
                      </div>
                      <p className="text-body text-[#ececec] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                    {index < nextSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight size={20} weight="regular" className="text-[#5755EE] opacity-50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-[#454545]">
            <p className="text-sm text-[#9b9b9b] max-w-2xl mx-auto leading-relaxed">
              {isEnglish 
                ? 'Assumptions and cost estimates should be validated with product, engineering, and finance teams before finalizing the decision.'
                : '在最终确定决策之前，假设和成本估算应与产品、工程和财务团队验证。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
