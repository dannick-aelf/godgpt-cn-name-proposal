import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'phosphor-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const RecommendationIntroSlide: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center space-y-10"
        >
          {/* Section Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px bg-[#454545] flex-1 max-w-[200px]"></div>
            <ArrowRight size={24} weight="bold" className="text-[#5755EE]" />
            <div className="h-px bg-[#454545] flex-1 max-w-[200px]"></div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-display md:text-[56px] lg:text-[64px]">
              {t('recommendation.title')}
            </h1>
            <p className="text-h2 text-[#9b9b9b] max-w-2xl mx-auto leading-relaxed">
              {language === 'en' ? 'Based on comprehensive evaluation of all three options' : '基于对所有三个选项的全面评估'}
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6 pt-4"
          >
            <div className="flex items-center gap-3 text-body text-[#ececec]">
              <CheckCircle size={24} weight="fill" className="text-[#5755EE] flex-shrink-0" />
              <span>{language === 'en' ? 'Meaning & Linguistic Analysis' : '含义与语言分析'}</span>
            </div>
            <div className="flex items-center gap-3 text-body text-[#ececec]">
              <CheckCircle size={24} weight="fill" className="text-[#5755EE] flex-shrink-0" />
              <span>{language === 'en' ? 'App Store Considerations' : '应用商店考量'}</span>
            </div>
            <div className="flex items-center gap-3 text-body text-[#ececec]">
              <CheckCircle size={24} weight="fill" className="text-[#5755EE] flex-shrink-0" />
              <span>{language === 'en' ? 'Market Positioning in China' : '中国市场定位'}</span>
            </div>
          </motion.div>

          {/* Next Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-body text-[#9b9b9b]">
              {language === 'en' ? 'See our recommended choice →' : '查看我们的推荐选择 →'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
