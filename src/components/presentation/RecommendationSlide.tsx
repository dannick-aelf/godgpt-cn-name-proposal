import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  XCircle, 
  CheckCircle, 
  Money, 
  Code, 
  ChartBar, 
  Target, 
  ChartLine
} from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const RecommendationSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const benefits = isEnglish ? [
    { icon: Code, text: 'No China-specific build or compliance cost' },
    { icon: Code, text: 'No dual-app and dual-backend burden (310–690 dev hours retained)' },
    { icon: ChartBar, text: 'No allocation of paid media budget or ongoing resources to run and maintain a China version' },
    { icon: Target, text: 'Full engineering and budget focus on profit-making apps and on making global GodGPT sustainable' },
  ] : [
    { icon: Code, text: '无中国特定构建或合规成本' },
    { icon: Code, text: '无双应用和双后端负担（保留310–690开发小时）' },
    { icon: ChartBar, text: '不分配付费媒体预算或持续资源来运营和维护中国版本' },
    { icon: Target, text: '将工程和预算完全专注于盈利应用和使全球GodGPT可持续发展' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <XCircle size={36} weight="regular" className="text-[#ff6b6b]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Recommendation' : '建议'}
          </h1>
        </div>

        {/* Main Recommendation */}
        <Card className="bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(255,107,107,0.05)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)]">
                <XCircle size={28} weight="fill" className="text-[#ff6b6b]" />
              </div>
              <p className="text-h2 font-semibold text-[#ececec] text-center flex-1">
                {isEnglish 
                  ? 'Do not move forward with China as a market under the current strategy'
                  : '在当前战略下不将中国作为市场推进'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Action Items */}
        <Card className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2">
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={24} weight="regular" className="text-[#5755EE]" />
              <h3 className="text-h3 font-semibold text-[#ececec]">
                {isEnglish ? 'Action Plan' : '行动计划'}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.2)]">
                <CheckCircle size={20} weight="fill" className="text-[#5755EE] flex-shrink-0 mt-0.5" />
                <p className="text-body text-[#ececec] leading-relaxed">
                  {isEnglish
                    ? 'Retain the global app name "GodGPT" and choose Option B with Apple: resubmit the app excluding the China region from distribution'
                    : '保留全球应用名称"GodGPT"，并选择与苹果的选项B：重新提交应用，从分发中排除中国地区'
                  }
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.2)]">
                <Money size={20} weight="regular" className="text-[#5755EE] flex-shrink-0 mt-0.5" />
                <p className="text-body text-[#ececec] leading-relaxed">
                  {isEnglish
                    ? 'Treat the ~$4,230 foregone China revenue as an acceptable loss in exchange for:'
                    : '将约$4,230的损失中国收入视为可接受的损失，以换取：'
                  }
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)] flex-shrink-0">
                      <IconComponent size={20} weight="regular" className="text-[#5755EE]" />
                    </div>
                    <p className="text-body text-[#ececec] leading-relaxed flex-1">
                      {highlightWarningWords(benefit.text)}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-gradient-to-r from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-center gap-4">
              <ChartLine size={24} weight="regular" className="text-[#5755EE]" />
              <p className="text-h3 font-medium text-[#ececec] text-center flex-1">
                {highlightWarningWords(
                  isEnglish
                    ? 'The $4,230 "loss" is small relative to the $320k+ entry cost and the value of focusing on profit-making apps'
                    : '$4,230的"损失"相对于$320k+的进入成本和专注于盈利应用的价值来说很小'
                )}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
