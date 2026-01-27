import React from 'react';
import { motion } from 'framer-motion';
import { ComparisonCard } from '../content/ComparisonCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslatedSlides } from '../../data/translations';

export const SummarySlide: React.FC = () => {
  const { language, t } = useLanguage();
  const tSlides = getTranslatedSlides(language);
  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-8 lg:px-12 py-4 pb-20">
      <div className="max-w-[992px] w-full mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-h1 md:text-display text-[32px] md:text-[40px] mb-6">{t('summary.title')}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <ComparisonCard
              optionNumber={1}
              chineseCharacters="戈德"
              pinyin="Gē Dé"
              positioning={tSlides['summary.comparison.positioning1']}
              bestFor={[
                tSlides['summary.comparison.bestFor1.1'],
                tSlides['summary.comparison.bestFor1.2'],
                tSlides['summary.comparison.bestFor1.3'],
              ]}
              tone={tSlides['summary.comparison.tone1']}
              delay={0.6}
            />
            <ComparisonCard
              optionNumber={2}
              chineseCharacters="戈迪"
              pinyin="Gē Dí"
              positioning={tSlides['summary.comparison.positioning2']}
              bestFor={[
                tSlides['summary.comparison.bestFor2.1'],
                tSlides['summary.comparison.bestFor2.2'],
                tSlides['summary.comparison.bestFor2.3'],
              ]}
              tone={tSlides['summary.comparison.tone2']}
              delay={0.8}
            />
            <ComparisonCard
              optionNumber={3}
              chineseCharacters="心镜"
              pinyin="Xīn Jìng"
              positioning={tSlides['summary.comparison.positioning3']}
              bestFor={[
                tSlides['summary.comparison.bestFor3.1'],
                tSlides['summary.comparison.bestFor3.2'],
                tSlides['summary.comparison.bestFor3.3'],
              ]}
              tone={tSlides['summary.comparison.tone3']}
              delay={1.0}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
