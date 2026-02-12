import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  XCircle, 
  Question, 
  Globe, 
  Target,
  Scales
} from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

export const CoreQuestionSlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'The Core Question' : '核心问题'}
          </h1>
        </div>

        {/* Not This / But This */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Not This */}
          <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)] border-2">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[rgba(155,155,155,0.15)] border border-[rgba(155,155,155,0.3)]">
                  <XCircle size={24} weight="regular" className="text-[#9b9b9b]" />
                </div>
                <h3 className="text-h3 font-semibold text-[#9b9b9b]">
                  {isEnglish ? 'Not This' : '不是这个'}
                </h3>
              </div>
              <div className="pl-12">
                <p className="text-body text-[#ececec] leading-relaxed italic">
                  {isEnglish 
                    ? '"Can we launch in China?"'
                    : '"我们能否在中国推出？"'
                  }
                </p>
              </div>
            </div>
          </Card>

          {/* But This */}
          <Card className="bg-gradient-to-br from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.4)] border-2 ring-2 ring-[rgba(87,85,238,0.2)]">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[rgba(87,85,238,0.2)] border border-[rgba(87,85,238,0.4)]">
                  <Question size={24} weight="regular" className="text-[#5755EE]" />
                </div>
                <h3 className="text-h3 font-semibold text-[#ececec]">
                  {isEnglish ? 'But This' : '而是这个'}
                </h3>
              </div>
              <div className="pl-12">
                <p className="text-h3 font-semibold text-[#ececec] leading-relaxed">
                  {isEnglish 
                    ? '"Is the expected risk-adjusted return worth the regulatory, operational, and strategic constraints?"'
                    : '"预期的风险调整回报是否值得监管、运营和战略约束？"'
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[rgba(155,155,155,0.05)] border-[rgba(155,155,155,0.3)]">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[rgba(155,155,155,0.15)] border border-[rgba(155,155,155,0.3)] flex-shrink-0">
                  <Globe size={24} weight="regular" className="text-[#9b9b9b]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 font-semibold text-[#ececec] mb-2">
                    {isEnglish ? 'Separate Operating Environment' : '独立运营环境'}
                  </h3>
                  <p className="text-body text-[#ececec] leading-relaxed">
                    {highlightWarningWords(
                      isEnglish
                        ? 'China is a separate operating environment: different app build, different name, different backend, different compliance and publisher expectations.'
                        : '中国是一个独立的运营环境：不同的应用构建、不同的名称、不同的后端、不同的合规和发布商期望。'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)]">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.3)] flex-shrink-0">
                  <Target size={24} weight="regular" className="text-[#5755EE]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 font-semibold text-[#ececec] mb-2">
                    {isEnglish ? 'Strategic Business Decision' : '战略商业决策'}
                  </h3>
                  <p className="text-body text-[#ececec] leading-relaxed">
                    {highlightWarningWords(
                      isEnglish
                        ? 'This is a strategic business decision, not a technical feasibility question'
                        : '这是一个战略商业决策，而不是技术可行性问题'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Emphasis */}
        <div className="pt-4">
          <Card className="bg-gradient-to-r from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border-[rgba(87,85,238,0.3)] border-2">
            <div className="p-6">
              <div className="flex items-center justify-center gap-4">
                <Scales size={28} weight="regular" className="text-[#5755EE]" />
                <p className="text-h3 font-medium text-[#ececec] text-center">
                  {isEnglish 
                    ? 'Weighing risk-adjusted returns against constraints'
                    : '权衡风险调整回报与约束条件'
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
