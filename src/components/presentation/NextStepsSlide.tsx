import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, Calculator, Target, Code, ArrowRight } from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const NextStepsSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const steps = isEnglish ? [
    {
      department: 'Product / Legal',
      icon: FileText,
      text: 'Confirm with Apple the exact resubmission steps to exclude China while keeping the current app name and global distribution',
    },
    {
      department: 'Finance',
      icon: Calculator,
      text: 'Book the ~$4,230 as foregone revenue and ensure it is reflected in forecasts; no China entry cost in P&L',
    },
    {
      department: 'Strategy',
      icon: Target,
      text: 'Document "China out of scope for current planning horizon" and revisit only if strategic fit and regulatory tolerance are re-scored and reach ≥15 and "acceptable" respectively',
    },
    {
      department: 'Product / Engineering',
      icon: Code,
      text: 'Allocate the 310–690 hours (Frontend 110–230, Backend 200–460) and associated budget to new / profit-making apps (priority) and global GodGPT: retention, conversion, and path to profitability',
    },
  ] : [
    {
      department: '产品/法律',
      icon: FileText,
      text: '与苹果确认确切的重新提交步骤，以排除中国，同时保留当前应用名称和全球分发',
    },
    {
      department: '财务',
      icon: Calculator,
      text: '将约$4,230记为损失收入，并确保反映在预测中；P&L中无中国进入成本',
    },
    {
      department: '战略',
      icon: Target,
      text: '记录"中国在当前规划范围内不在范围内"，只有在战略契合度和监管容忍度重新评分并分别达到≥15和"可接受"时才重新考虑',
    },
    {
      department: '产品/工程',
      icon: Code,
      text: '将310–690小时（前端110–230，后端200–460）和相关预算分配给新/盈利应用（优先）和全球GodGPT：留存、转化和盈利路径',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <ArrowRight size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Next Steps' : '下一步'}
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)]">
                      <IconComponent size={24} weight="regular" className="text-[#5755EE]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#5755EE] uppercase tracking-wide">
                        {step.department}
                      </span>
                      <span className="text-xs text-[#9b9b9b]">•</span>
                      <span className="text-xs text-[#9b9b9b]">
                        {isEnglish ? 'Step' : '步骤'} {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-body text-[#ececec] leading-relaxed">
                    {highlightWarningWords(step.text)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Visual Flow Indicator */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="flex items-center gap-1">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-2 h-2 rounded-full bg-[#5755EE]" />
                {index < steps.length - 1 && (
                  <ArrowRight size={16} weight="regular" className="text-[#5755EE] opacity-50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
