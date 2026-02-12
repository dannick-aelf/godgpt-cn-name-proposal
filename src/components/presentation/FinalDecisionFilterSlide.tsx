import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Check, 
  Database, 
  Lock, 
  WarningCircle, 
  Users, 
  ShieldWarning, 
  XCircle 
} from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const FinalDecisionFilterSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const conditions = isEnglish ? [
    { icon: Database, text: 'China infra can be fully isolated' },
    { icon: Lock, text: 'A filtered/restricted model and feature set are acceptable' },
    { icon: WarningCircle, text: 'Sudden feature removal or takedown is acceptable' },
    { icon: Users, text: 'There is a credible path to >70k paid subscribers in China' },
    { icon: ShieldWarning, text: 'The company accepts ongoing regulatory unpredictability and compliance burden' },
  ] : [
    { icon: Database, text: '中国基础设施可以完全隔离' },
    { icon: Lock, text: '过滤/受限的模型和功能集是可接受的' },
    { icon: WarningCircle, text: '突然的功能移除或下架是可接受的' },
    { icon: Users, text: '在中国有可信的路径达到>70k付费订阅者' },
    { icon: ShieldWarning, text: '公司接受持续的监管不可预测性和合规负担' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <Check size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Final Decision Filter' : '最终决策过滤器'}
          </h1>
          <p className="text-body text-[#9b9b9b] max-w-2xl mx-auto">
            {isEnglish 
              ? 'Enter China only if all of the following hold:'
              : '只有在以下所有条件都满足时才进入中国：'
            }
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <Card 
                key={index}
                className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)] border-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)] flex-shrink-0">
                      <span className="text-lg font-bold text-[#5755EE]">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent size={20} weight="regular" className="text-[#9b9b9b]" />
                        <p className="text-body text-[#ececec] font-medium leading-relaxed">
                          {highlightWarningWords(condition.text)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Assessment Result */}
        <Card className="bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(255,107,107,0.05)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]">
                <XCircle size={28} weight="fill" className="text-[#ff6b6b]" />
              </div>
              <div className="flex-1">
                <h3 className="text-h3 font-semibold text-[#ececec] mb-2">
                  {isEnglish ? 'Assessment' : '评估'}
                </h3>
                <p className="text-body text-[#ececec] leading-relaxed">
                  {highlightWarningWords(
                    isEnglish
                      ? 'At least one critical condition fails. Do not enter.'
                      : '至少一个关键条件失败。不进入。'
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
