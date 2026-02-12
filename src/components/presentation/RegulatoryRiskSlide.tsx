import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  ShieldWarning, 
  Warning,
  WarningCircle
} from 'phosphor-react';
import { highlightWarningWords } from '../../utils/highlightText';

interface RegulatoryRiskSlideProps {
  slideId: string;
  title: string;
  risks: Array<{
    icon: React.ReactNode | any;
    content: string;
    severity: 'high' | 'medium' | 'critical';
  }>;
}

export const RegulatoryRiskSlide: React.FC<RegulatoryRiskSlideProps> = ({ title, risks }) => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-[rgba(255,107,107,0.15)]',
          border: 'border-[rgba(255,107,107,0.4)]',
          iconBg: 'bg-[rgba(255,107,107,0.2)]',
          iconBorder: 'border-[rgba(255,107,107,0.4)]',
          iconColor: 'text-[#ff6b6b]',
          text: 'text-[#ff6b6b]',
        };
      case 'high':
        return {
          bg: 'bg-[rgba(255,165,0,0.15)]',
          border: 'border-[rgba(255,165,0,0.4)]',
          iconBg: 'bg-[rgba(255,165,0,0.2)]',
          iconBorder: 'border-[rgba(255,165,0,0.4)]',
          iconColor: 'text-[#ffa500]',
          text: 'text-[#ffa500]',
        };
      default:
        return {
          bg: 'bg-[rgba(155,155,155,0.1)]',
          border: 'border-[rgba(155,155,155,0.3)]',
          iconBg: 'bg-[rgba(155,155,155,0.15)]',
          iconBorder: 'border-[rgba(155,155,155,0.3)]',
          iconColor: 'text-[#9b9b9b]',
          text: 'text-[#9b9b9b]',
        };
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[1200px] w-full mx-auto space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#454545] to-[#454545]" />
            <ShieldWarning size={36} weight="regular" className="text-[#ff6b6b]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#454545] to-[#454545]" />
          </div>
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {title}
          </h1>
        </div>

        {/* Risk Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {risks.map((risk, index) => {
            const colors = getSeverityColor(risk.severity);
            const isReactElement = React.isValidElement(risk.icon);
            
            return (
              <Card 
                key={index}
                className={`${colors.bg} ${colors.border} border-2 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="p-5 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${colors.iconBg} ${colors.iconBorder} border flex-shrink-0`}>
                      {isReactElement ? (
                        <div className={colors.iconColor}>
                          {risk.icon}
                        </div>
                      ) : (
                        React.createElement(risk.icon, { size: 24, weight: "regular", className: colors.iconColor })
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {risk.severity === 'critical' && (
                          <WarningCircle size={16} weight="fill" className="text-[#ff6b6b]" />
                        )}
                        {risk.severity === 'high' && (
                          <Warning size={16} weight="fill" className="text-[#ffa500]" />
                        )}
                        <span className={`text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
                          {risk.severity === 'critical' 
                            ? (isEnglish ? 'Critical Risk' : '严重风险')
                            : risk.severity === 'high'
                            ? (isEnglish ? 'High Risk' : '高风险')
                            : (isEnglish ? 'Risk' : '风险')
                          }
                        </span>
                      </div>
                      <p className="text-body text-[#ececec] leading-relaxed">
                        {highlightWarningWords(risk.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary Banner */}
        <Card className="bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(255,165,0,0.1)] border-[rgba(255,107,107,0.4)] border-2">
          <div className="p-6">
            <div className="flex items-center justify-center gap-3">
              <Warning size={28} weight="regular" className="text-[#ff6b6b]" />
              <p className="text-h3 font-medium text-[#ececec] text-center">
                {isEnglish 
                  ? 'Multiple regulatory risks require careful consideration and ongoing compliance monitoring'
                  : '多个监管风险需要仔细考虑和持续合规监控'
                }
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
