import React from 'react';
import { motion } from 'framer-motion';
import type { Slide as SlideType } from '../../types/presentation.types';
import { ChineseTitle } from '../content/ChineseTitle';
import { StatusBadge } from '../content/StatusBadge';
import { Callout } from '../content/Callout';
import { BulletListCard } from '../content/BulletListCard';
import { TextCard } from '../content/TextCard';
import { CharacterBreakdownCard } from '../content/CharacterBreakdownCard';
import { Translate, ListBullets, Storefront, TrendUp } from 'phosphor-react';
import { SummarySlide } from './SummarySlide';
import { TitleSlide } from './TitleSlide';
import { ThankYouSlide } from './ThankYouSlide';
import { RecommendationIntroSlide } from './RecommendationIntroSlide';
import { MarketPositioningSlide } from './MarketPositioningSlide';
import { EvaluationFrameworkSlide } from './EvaluationFrameworkSlide';
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

        {/* Content Sections */}
        <div className="space-y-6 flex flex-col items-center">
          {slide.content.sections.map((section, index) => {
            const getIcon = () => {
              if (section.title) {
                if (section.title.includes('Meaning')) return <Translate size={28} weight="bold" className="text-[#5755EE]" />;
                if (section.title.includes('Linguistic')) return <ListBullets size={28} weight="bold" className="text-[#5755EE]" />;
                if (section.title.includes('App Store')) return <Storefront size={28} weight="bold" className="text-[#5755EE]" />;
                if (section.title.includes('Market')) return <TrendUp size={28} weight="bold" className="text-[#5755EE]" />;
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                    className="mb-6 text-center"
                  >
                    <h2 className="text-h1 flex items-center justify-center gap-3">
                      {getIcon()}
                      <span>{section.title}</span>
                    </h2>
                    {getSectionBadges()}
                  </motion.div>
                )}
                {section.type === 'bullet-list' && section.items && (
                  <BulletListCard
                    items={section.items}
                    title={section.title}
                    icon={getIcon()}
                    className="w-full"
                  />
                )}
                {section.type === 'text' && section.items && (
                  <TextCard
                    items={section.items}
                    title={section.title}
                    icon={getIcon()}
                    className="w-full"
                  />
                )}
                {section.type === 'character-breakdown' && section.items && (
                  <CharacterBreakdownCard
                    items={section.items}
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
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
