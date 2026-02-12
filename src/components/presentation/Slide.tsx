import React from 'react';
import { motion } from 'framer-motion';
import type { Slide as SlideType } from '../../types/presentation.types';
import { ChineseTitle } from '../content/ChineseTitle';
import { StatusBadge } from '../content/StatusBadge';
import { Callout } from '../content/Callout';
import { BulletListCard } from '../content/BulletListCard';
import { TextCard } from '../content/TextCard';
import { CharacterBreakdownCard } from '../content/CharacterBreakdownCard';
import { ChartCard } from '../content/ChartCard';
import { 
  Translate, 
  ListBullets, 
  Storefront, 
  TrendUp,
  ShieldWarning,
  Database,
  CurrencyDollar,
  Users,
  ChartBar,
  ChartLine,
  Target,
  WarningCircle,
  FileText,
  Buildings,
  Code
} from 'phosphor-react';
import { SummarySlide } from './SummarySlide';
import { TitleSlide } from './TitleSlide';
import { ThankYouSlide } from './ThankYouSlide';
import { RecommendationIntroSlide } from './RecommendationIntroSlide';
import { MarketPositioningSlide } from './MarketPositioningSlide';
import { EvaluationFrameworkSlide } from './EvaluationFrameworkSlide';
import { ExecutiveSummarySlide } from './ExecutiveSummarySlide';
import { CoreQuestionSlide } from './CoreQuestionSlide';
import { StrategicFitSlide } from './StrategicFitSlide';
import { RegulatoryRiskSlide } from './RegulatoryRiskSlide';
import { FinancialModelSlide } from './FinancialModelSlide';
import { CompetitiveLandscapeSlide } from './CompetitiveLandscapeSlide';
import { DecisionMatrixSlide } from './DecisionMatrixSlide';
import { FinalDecisionFilterSlide } from './FinalDecisionFilterSlide';
import { RecommendationSlide } from './RecommendationSlide';
import { StrategicStanceSlide } from './StrategicStanceSlide';
import { NextStepsSlide } from './NextStepsSlide';
import { useLanguage } from '../../contexts/LanguageContext';

interface SlideProps {
  slide: SlideType;
  isActive: boolean;
}

export const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  const { language } = useLanguage();
  
  if (!isActive) return null;

  // Check specific slide IDs first (before type checks)
  if (slide.id === 'thank-you') {
    return <ThankYouSlide />;
  }

  if (slide.id === 'executive-summary') {
    return <ExecutiveSummarySlide />;
  }

  if (slide.id === 'core-question') {
    return <CoreQuestionSlide />;
  }

  if (slide.id === 'strategic-fit') {
    return <StrategicFitSlide />;
  }

  // Regulatory Risk Slides
  if (slide.id === 'regulatory-content' || slide.id === 'regulatory-data' || slide.id === 'regulatory-operational') {
    const risks = slide.callouts?.map(callout => ({
      icon: callout.icon || WarningCircle,
      content: callout.content || '',
      severity: (callout.type === 'warning' ? 'high' : 'info') as 'high' | 'medium' | 'critical',
    })) || [];
    
    return (
      <RegulatoryRiskSlide
        slideId={slide.id}
        title={slide.title || ''}
        risks={risks}
      />
    );
  }

  // Financial Model Slides
  if (slide.id === 'financial-entry' || slide.id === 'financial-engineering' || slide.id === 'financial-revenue') {
    const chartSection = slide.content.sections.find(s => s.type === 'chart');
    const chartData = chartSection?.chartData || [];
    const chartType = slide.id === 'financial-entry' 
      ? 'entry-cost' 
      : slide.id === 'financial-engineering' 
      ? 'engineering' 
      : 'revenue';
    
    const calloutsData = slide.callouts?.map(callout => ({
      type: callout.type as 'warning' | 'info',
      icon: callout.icon || CurrencyDollar,
      content: callout.content || '',
    })) || [];
    
    return (
      <FinancialModelSlide
        slideId={slide.id}
        title={slide.title || ''}
        chartType={chartType}
        chartData={chartData}
        callouts={calloutsData}
      />
    );
  }

  if (slide.id === 'competitive') {
    return <CompetitiveLandscapeSlide />;
  }

  if (slide.id === 'decision-matrix') {
    return <DecisionMatrixSlide />;
  }

  if (slide.id === 'final-decision') {
    return <FinalDecisionFilterSlide />;
  }

  if (slide.id === 'recommendation') {
    return <RecommendationSlide />;
  }

  if (slide.id === 'strategic-stance') {
    return <StrategicStanceSlide />;
  }

  if (slide.id === 'next-steps') {
    return <NextStepsSlide />;
  }

  if (slide.id === 'recommendation-intro') {
    return <RecommendationIntroSlide />;
  }

  if (slide.type === 'summary') {
    return <SummarySlide />;
  }

  if (slide.id === 'evaluation-framework') {
    return <EvaluationFrameworkSlide />;
  }

  if (slide.type === 'title' && slide.id === 'title') {
    return <TitleSlide />;
  }

  // Market Positioning slides - use special component
  if (slide.type === 'market' && slide.optionNumber) {
    const positioning = slide.content.sections.find(s => s.items && s.items.length > 0 && !s.title)?.items?.[0] || '';
    // Find sections by checking for translated titles (works for both languages)
    const worksWellSection = slide.content.sections.find(s => 
      s.title && (s.title.includes('Works well') || s.title.includes('适用于'))
    );
    const feelsLikeSection = slide.content.sections.find(s => 
      s.title && (s.title.includes('Feels like') || s.title.includes('感觉像'))
    );
    const bestUsedSection = slide.content.sections.find(s => 
      s.title && (s.title.includes('Best used') || s.title.includes('最佳使用场景'))
    );
    const worksWellFor = worksWellSection?.items || [];
    const feelsLike = feelsLikeSection?.items || [];
    const bestUsedWhen = bestUsedSection?.items || [];

    return (
      <MarketPositioningSlide
        positioning={positioning}
        worksWellFor={worksWellFor}
        feelsLike={feelsLike}
        bestUsedWhen={bestUsedWhen}
        optionNumber={slide.optionNumber}
      />
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto space-y-8">
        {/* Title Section for Option Slides */}
        {slide.chineseCharacters && slide.pinyin && (
          <div className="flex flex-col items-center gap-6">
            <ChineseTitle
              characters={slide.chineseCharacters}
              pinyin={slide.pinyin}
            />
            {slide.statusBadge && (
              <StatusBadge
                text={slide.statusBadge.text}
                variant={slide.statusBadge.variant}
              />
            )}
            {slide.title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-h2 text-[#9b9b9b] text-center"
              >
                {slide.title}
              </motion.div>
            )}
          </div>
        )}

        {/* Title for regular title slides without Chinese characters */}
        {slide.type === 'title' && !slide.chineseCharacters && slide.title && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-h1 md:text-display text-[32px] md:text-[40px] font-semibold text-[#ececec] tracking-tight">
              {slide.title}
            </h1>
          </motion.div>
        )}

        {/* Content Sections */}
        <div className="space-y-6 flex flex-col items-center">
          {slide.content.sections.map((section, index) => {
            const getIcon = () => {
              // Use icon from section if provided
              if (section.icon) return section.icon;
              
              // Fallback to title-based icon detection
              if (section.title) {
                const title = section.title.toLowerCase();
                if (title.includes('meaning')) return <Translate size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('linguistic')) return <ListBullets size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('app store')) return <Storefront size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('market')) return <TrendUp size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('strategic fit')) return <Target size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('regulatory')) return <ShieldWarning size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('content risk')) return <WarningCircle size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('data architecture')) return <Database size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('operational control')) return <Buildings size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('financial')) return <CurrencyDollar size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('engineering')) return <Code size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('revenue')) return <ChartBar size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('competitive')) return <Users size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('decision')) return <ChartLine size={20} weight="regular" className="text-[#5755EE]" />;
                if (title.includes('executive')) return <FileText size={20} weight="regular" className="text-[#5755EE]" />;
              }
              return null;
            };

            const getSectionBadges = () => {
              const badges: React.ReactNode[] = [];
              
              // App Store slides - add Safe badge
              if (slide.type === 'app-store' && slide.optionNumber === 2) {
                badges.push(<StatusBadge key="safe" text={language === 'en' ? 'Very Safe' : '非常安全'} variant="safe" />);
                badges.push(<StatusBadge key="compliant" text={language === 'en' ? 'Compliant' : '合规'} variant="compliant" />);
              }
              if (slide.type === 'app-store' && slide.optionNumber === 3) {
                badges.push(<StatusBadge key="safe" text={language === 'en' ? 'Extremely Safe' : '极其安全'} variant="safe" />);
                badges.push(<StatusBadge key="compliant" text={language === 'en' ? 'Compliant' : '合规'} variant="compliant" />);
              }
              
              // Linguistic slides - add Common badge
              if (slide.type === 'linguistic' && slide.optionNumber === 2) {
                badges.push(<StatusBadge key="common" text={language === 'en' ? 'Widely Used' : '广泛使用'} variant="common" />);
              }
              
              return badges.length > 0 ? (
                <div className="flex items-center justify-center gap-2 flex-wrap mt-2">
                  {badges}
                </div>
              ) : null;
            };

            return (
              <div key={index} className="w-full max-w-2xl">
                {section.title && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    className="mb-6 text-center"
                  >
                    <h2 className="text-h2 md:text-h3 text-[#9b9b9b] font-normal flex items-center justify-center gap-2">
                      {getIcon()}
                      <span>{section.title}</span>
                    </h2>
                    {getSectionBadges()}
                  </motion.div>
                )}
                {section.type === 'bullet-list' && section.items && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <BulletListCard
                      items={section.items}
                      title={section.title}
                      icon={getIcon()}
                      className="w-full"
                    />
                  </motion.div>
                )}
                {section.type === 'text' && section.items && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <TextCard
                      items={section.items}
                      title={section.title}
                      icon={getIcon()}
                      className="w-full"
                    />
                  </motion.div>
                )}
                {section.type === 'character-breakdown' && section.items && (
                  <CharacterBreakdownCard
                    items={section.items}
                    className="w-full"
                  />
                )}
                {section.type === 'chart' && (
                  <ChartCard
                    section={section}
                    className="w-full"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Callouts */}
        {slide.callouts && slide.callouts.length > 0 && (
          <div className="space-y-4 flex flex-col items-center">
            {slide.callouts.map((callout, index) => (
              <div key={index} className="w-full max-w-2xl">
                <Callout
                  type={callout.type}
                  content={callout.content}
                  title={callout.title}
                  icon={callout.icon}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
