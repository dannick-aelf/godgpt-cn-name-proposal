import React from 'react';
import { motion } from 'framer-motion';
import { TrendUp, Briefcase, ShieldCheck, Target, CheckCircle } from 'phosphor-react';
import { Card } from '../ui/Card';
import { StatusBadge } from '../content/StatusBadge';
import { useLanguage } from '../../contexts/LanguageContext';

interface MarketPositioningSlideProps {
  positioning: string;
  worksWellFor: string[];
  feelsLike: string[];
  bestUsedWhen: string[];
  optionNumber?: 2 | 3;
}

export const MarketPositioningSlide: React.FC<MarketPositioningSlideProps> = ({
  positioning,
  worksWellFor,
  feelsLike,
  bestUsedWhen,
  optionNumber,
}) => {
  const { language } = useLanguage();
  
      const getPositioningBadge = () => {
        if (optionNumber === 2) {
      return <StatusBadge text={language === 'en' ? 'Consumer' : '消费者'} variant="consumer" />;
    } else if (optionNumber === 3) {
      return <StatusBadge text={language === 'en' ? 'Concept' : '概念'} variant="concept" />;
    }
    return null;
  };
  
  const getCommonTranslation = (key: string): string => {
    const commonTranslations: Record<string, Record<string, string>> = {
      en: {
        'market.positioning': 'Positioning',
        'market.worksWell': 'Works well for',
        'market.feelsLike': 'Feels like',
        'market.bestUsed': 'Best used when',
        'section.market': 'Market Positioning in CN',
      },
      'zh-CN': {
        'market.positioning': '定位',
        'market.worksWell': '适用于',
        'market.feelsLike': '感觉像',
        'market.bestUsed': '最佳使用场景',
        'section.market': '中国市场定位',
      },
    };
    return commonTranslations[language][key] || key;
  };
  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-8 lg:px-12 py-4 pb-20">
      <div className="max-w-[992px] w-full mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendUp size={28} weight="bold" className="text-[#5755EE]" />
            <h1 className="text-h2 md:text-h1">{getCommonTranslation('section.market')}</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Positioning Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card highlighted>
              <div className="text-center py-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target size={20} weight="bold" className="text-[#5755EE]" />
                  <span className="text-h2 font-medium">{getCommonTranslation('market.positioning')}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                  {getPositioningBadge()}
                </div>
                <p className="text-h2 text-[#ececec]">{positioning}</p>
              </div>
            </Card>
          </motion.div>

          {/* Works well for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card>
              <div className="space-y-2 py-2">
                <div className="flex items-center justify-center gap-2 text-h2 font-medium mb-2">
                  <Briefcase size={20} weight="bold" className="text-[#5755EE]" />
                  <span>{getCommonTranslation('market.worksWell')}</span>
                </div>
                <ul className="space-y-1.5">
                  {worksWellFor.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-small text-center justify-center"
                    >
                      <CheckCircle size={16} weight="fill" className="text-[#5755EE] flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Feels like */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card>
              <div className="space-y-2 py-2">
                <div className="flex items-center justify-center gap-2 text-h2 font-medium mb-2">
                  <ShieldCheck size={20} weight="bold" className="text-[#5755EE]" />
                  <span>{getCommonTranslation('market.feelsLike')}</span>
                </div>
                <ul className="space-y-1.5">
                  {feelsLike.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-small text-center justify-center"
                    >
                      <CheckCircle size={16} weight="fill" className="text-[#5755EE] flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Best used when */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="md:col-span-2"
          >
            <Card>
              <div className="space-y-2 py-2">
                <div className="flex items-center justify-center gap-2 text-h2 font-medium mb-2">
                  <Target size={20} weight="bold" className="text-[#5755EE]" />
                  <span>{getCommonTranslation('market.bestUsed')}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {bestUsedWhen.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#454545] bg-[rgba(87,85,238,0.05)]"
                    >
                      <CheckCircle size={14} weight="fill" className="text-[#5755EE] flex-shrink-0" />
                      <span className="text-small">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
