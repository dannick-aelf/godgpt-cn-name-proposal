import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Target, 
  ShieldWarning, 
  CurrencyDollar, 
  Code, 
  ChartLine, 
  CheckCircle, 
  Eye, 
  ArrowRight,
  Clock,
  XCircle
} from 'phosphor-react';

export const SummarySlide: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  
  const summaryData = [
    {
      item: isEnglish ? 'Strategic fit' : '战略契合度',
      conclusion: isEnglish ? '13/25 → Do not enter' : '13/25 → 不进入',
      icon: Target,
      status: 'warning',
      score: 13,
      maxScore: 25,
      threshold: 15,
    },
    {
      item: isEnglish ? 'Regulatory' : '监管',
      conclusion: isEnglish ? 'High content and operational risk for Western AI apps; strict rules on naming and content' : '西方AI应用的内容和运营风险高；命名和内容规则严格',
      icon: ShieldWarning,
      status: 'high-risk',
    },
    {
      item: isEnglish ? 'Financial' : '财务',
      conclusion: isEnglish ? 'GodGPT not yet profitable; entry ~$320k+; need ~67k paid subs in China; current base 38 → model does not close' : 'GodGPT尚未盈利；进入成本约$320k+；需要约67k付费订阅；当前基数38 → 模型不成立',
      icon: CurrencyDollar,
      status: 'critical',
      numbers: isEnglish ? ['$320k+', '67k subs', '38 current'] : ['$320k+', '67k订阅', '38当前'],
    },
    {
      item: isEnglish ? 'Engineering cost' : '工程成本',
      conclusion: isEnglish ? '310–690 total hours (Frontend 110–230 hrs; Backend 200–460 hrs); 8–17 weeks with 1 FTE, 4–9 weeks with 2' : '总计310–690小时（前端110–230小时；后端200–460小时）；1名全职工程师8–17周，2名4–9周',
      icon: Code,
      status: 'info',
      hours: { min: 310, max: 690 },
    },
    {
      item: isEnglish ? 'Ongoing cost' : '持续成本',
      conclusion: isEnglish ? 'Splitting would require allocating paid media budget and resources to run/maintain China version' : '拆分需要分配付费媒体预算和资源来运营/维护中国版本',
      icon: ChartLine,
      status: 'warning',
    },
    {
      item: isEnglish ? 'Recommendation' : '建议',
      conclusion: isEnglish ? 'Exclude China from distribution; retain "GodGPT" name; accept ~$4,230 foregone revenue; invest in profit-making apps' : '从分发中排除中国；保留"GodGPT"名称；接受约$4,230的损失收入；投资盈利应用',
      icon: CheckCircle,
      status: 'success',
    },
    {
      item: isEnglish ? 'Strategic stance' : '战略立场',
      conclusion: isEnglish ? 'China is a market on our mind; observe first, invest in profit-making apps now, revisit China when regulations and economics support it' : '中国是我们关注的市场；先观察，现在投资盈利应用，当监管和经济条件支持时重新考虑中国',
      icon: Eye,
      status: 'info',
    },
    {
      item: isEnglish ? 'Action' : '行动',
      conclusion: isEnglish ? 'Resubmit app with China excluded; document China as "observe"; reallocate 310–690 hrs and budget to profit-making apps and global GodGPT' : '重新提交排除中国的应用；将中国记录为"观察"；将310–690小时和预算重新分配给盈利应用和全球GodGPT',
      icon: ArrowRight,
      status: 'action',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'border-l-[#ff6b6b] bg-[rgba(255,107,107,0.05)]';
      case 'high-risk':
        return 'border-l-[#ffa500] bg-[rgba(255,165,0,0.05)]';
      case 'warning':
        return 'border-l-[#ffa500] bg-[rgba(255,165,0,0.05)]';
      case 'success':
        return 'border-l-[#5755EE] bg-[rgba(87,85,238,0.05)]';
      case 'action':
        return 'border-l-[#5755EE] bg-[rgba(87,85,238,0.08)]';
      default:
        return 'border-l-[#9b9b9b] bg-[rgba(155,155,155,0.05)]';
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'text-[#ff6b6b]';
      case 'high-risk':
        return 'text-[#ffa500]';
      case 'warning':
        return 'text-[#ffa500]';
      case 'success':
        return 'text-[#5755EE]';
      case 'action':
        return 'text-[#5755EE]';
      default:
        return 'text-[#9b9b9b]';
    }
  };

  return (
    <div className="h-screen w-full overflow-y-auto flex flex-col px-6 md:px-8 lg:px-12 py-8 pb-24">
      <div className="max-w-[1200px] w-full mx-auto space-y-6">
        {/* Hero Header */}
        <div className="text-center space-y-3 pb-4 border-b border-[#454545]">
          <h1 className="text-h1 md:text-display text-[32px] md:text-[44px] font-semibold text-[#ececec] tracking-tight">
            {isEnglish ? 'Executive Decision Brief' : '执行决策简报'}
          </h1>
          <p className="text-body text-[#9b9b9b]">
            {isEnglish ? 'Strategic analysis and recommendation for China market entry' : '中国市场进入的战略分析和建议'}
          </p>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {summaryData.map((row, index) => {
            const IconComponent = row.icon;
            const statusColor = getStatusColor(row.status);
            const iconColor = getIconColor(row.status);
            
            return (
              <div key={index} className="group flex">
                <Card className={`${statusColor} border-l-4 transition-all duration-300 hover:bg-opacity-10 flex-1 flex flex-col h-full`}>
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-[rgba(87,85,238,0.1)] ${iconColor}`}>
                        <IconComponent size={20} weight="regular" />
                      </div>
                      <h3 className="font-semibold text-h3 text-[#ececec] flex-1">
                        {row.item}
                      </h3>
                      {row.status === 'success' && (
                        <div className="px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wide bg-[rgba(87,85,238,0.15)] border border-[rgba(87,85,238,0.4)] text-[#5755EE] whitespace-nowrap">
                          {isEnglish ? '✓ Recommended' : '✓ 推荐'}
                        </div>
                      )}
                    </div>

                    {/* Score Display for Strategic Fit - No Progress Bar */}
                    {row.score !== undefined && (
                      <div className="space-y-3">
                        {/* Large Score Display */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)]">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold ${row.score < row.threshold! ? 'text-[#ff6b6b]' : 'text-[#5755EE]'}`}>
                              {row.score}
                            </span>
                            <span className="text-xl text-[#9b9b9b]">/</span>
                            <span className="text-xl text-[#9b9b9b]">{row.maxScore || 25}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <XCircle size={20} weight="fill" className="text-[#ff6b6b]" />
                            <span className="text-sm font-semibold text-[#ff6b6b]">
                              {isEnglish ? 'Below' : '低于'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Threshold and Gap Info */}
                        <div className="grid grid-cols-2 gap-2">
                          {row.threshold !== undefined && (
                            <div className="p-2 rounded bg-[rgba(87,85,238,0.1)] border border-[rgba(87,85,238,0.3)] text-center">
                              <div className="text-xs text-[#9b9b9b] mb-1">{isEnglish ? 'Threshold' : '阈值'}</div>
                              <div className="text-lg font-bold text-[#5755EE]">{row.threshold}</div>
                            </div>
                          )}
                          {row.score < row.threshold! && (
                            <div className="p-2 rounded bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] text-center">
                              <div className="text-xs text-[#9b9b9b] mb-1">{isEnglish ? 'Gap' : '差距'}</div>
                              <div className="text-lg font-bold text-[#ff6b6b]">
                                {row.threshold! - row.score}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Numbers for Financial */}
                    {row.numbers && (
                      <div className="flex gap-3 flex-wrap">
                        {row.numbers.map((num, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-md bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)]">
                            <span className="text-sm font-medium text-[#ff6b6b]">{num}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Hours Range for Engineering */}
                    {row.hours && (
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#9b9b9b]" />
                        <span className="text-sm text-[#9b9b9b]">
                          {row.hours.min}–{row.hours.max} {isEnglish ? 'hours' : '小时'}
                        </span>
                      </div>
                    )}

                    {/* Conclusion Text */}
                    <p className="text-body text-[#ececec] leading-relaxed pt-1 flex-1">
                      {row.conclusion}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom Visual Summary */}
        <div className="mt-6 mb-8 p-6 rounded-lg bg-gradient-to-r from-[rgba(87,85,238,0.1)] to-[rgba(87,85,238,0.05)] border border-[rgba(87,85,238,0.2)]">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle size={24} weight="regular" className="text-[#5755EE]" />
            <p className="text-h3 font-medium text-[#ececec] text-center">
              {isEnglish 
                ? 'Decision: Do not enter China at this time. Focus resources on profit-making apps and global GodGPT sustainability.'
                : '决定：此时不进入中国。将资源专注于盈利应用和全球GodGPT的可持续性。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
