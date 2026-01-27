import React from 'react';
import { motion } from 'framer-motion';
import { Translate, Storefront, TrendUp } from 'phosphor-react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';

export const EvaluationFrameworkSlide: React.FC = () => {
  const { t } = useLanguage();
  
  const dimensions = [
    {
      icon: <Translate size={32} weight="bold" />,
      title: t('eval.meaning'),
      description: t('eval.meaning.desc'),
    },
    {
      icon: <Storefront size={32} weight="bold" />,
      title: t('eval.appstore'),
      description: t('eval.appstore.desc'),
    },
    {
      icon: <TrendUp size={32} weight="bold" />,
      title: t('eval.market'),
      description: t('eval.market.desc'),
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-h1"
          >
            {t('eval.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-h2 text-[#9b9b9b] max-w-2xl mx-auto"
          >
            {t('eval.subtitle')}
          </motion.p>

          {/* Dimension Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Card highlighted>
                  <div className="flex flex-col items-center gap-4 p-6">
                    <div className="text-[#5755EE] flex-shrink-0">
                      {dimension.icon}
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-h2 font-medium text-[#ececec]">
                        {dimension.title === t('eval.meaning') ? (
                          <>
                            {dimension.title.split(' & ')[0]} &<br />{dimension.title.split(' & ')[1]}
                          </>
                        ) : (
                          dimension.title
                        )}
                      </h3>
                      <p className="text-body text-[#9b9b9b]">
                        {dimension.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
