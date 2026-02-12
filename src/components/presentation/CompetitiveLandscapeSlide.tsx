import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { Users, ShieldWarning, XCircle } from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const CompetitiveLandscapeSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const challenges = isEnglish ? [
    'Local AI and "wellness" / spiritual apps already exist',
    'Some benefit from state alignment or ecosystem integration',
    'Regulatory and naming constraints (e.g. no "GPT" in app name) favor local players',
    'GodGPT\'s differentiation would need to be preserved under stricter content limits',
    'Possible feature cuts (e.g. open-ended current-events or sensitive themes)',
    'A new, China-only brand name and positioning would be required',
  ] : [
    '本地AI和"健康"/精神应用已经存在',
    '一些受益于国家对齐或生态系统整合',
    '监管和命名约束（例如应用名称中不能有"GPT"）有利于本地玩家',
    'GodGPT的差异化需要在更严格的内容限制下保持',
    '可能的功能削减（例如开放式时事或敏感主题）',
    '需要新的、仅限中国的品牌名称和定位',
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <Users size={36} weight="regular" className="text-[#5755EE]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Competitive Landscape' : '竞争格局'}
          </h1>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="bg-[rgba(255,107,107,0.05)] border-[rgba(255,107,107,0.3)] border-2 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[rgba(255,107,107,0.15)] border border-[rgba(255,107,107,0.3)] flex-shrink-0">
                    <XCircle size={20} weight="regular" className="text-[#ff6b6b]" />
                  </div>
                  <p className="text-body text-[#ececec] leading-relaxed flex-1">
                    {highlightWarningWords(challenge)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <Card className="bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(255,165,0,0.1)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[rgba(255,107,107,0.2)] border border-[rgba(255,107,107,0.4)] flex-shrink-0">
                <ShieldWarning size={28} weight="regular" className="text-[#ff6b6b]" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-h3 font-semibold text-[#ececec]">
                  {isEnglish ? 'Core Differentiation at Risk' : '核心差异化面临风险'}
                </h3>
                <p className="text-body text-[#ececec] leading-relaxed">
                  {highlightWarningWords(
                    isEnglish
                      ? 'GodGPT\'s core differentiation (open-ended, reflective AI) would be compromised under China\'s content restrictions'
                      : 'GodGPT的核心差异化（开放式、反思性AI）将在中国的内容限制下受到损害'
                  )}
                </p>
                <p className="text-body text-[#9b9b9b] leading-relaxed italic mt-3">
                  {isEnglish
                    ? 'Can GodGPT compete in China without open-ended knowledge, Western brand, and full global feature set?'
                    : 'GodGPT能否在没有开放式知识、西方品牌和完整全球功能集的情况下在中国竞争？'
                  }
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
