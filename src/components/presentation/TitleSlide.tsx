import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Globe, CheckCircle } from 'phosphor-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const TitleSlide: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center space-y-8"
        >
          {/* Main Title with Icon */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <Sparkle size={64} weight="fill" className="text-[#5755EE]" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkle size={24} weight="fill" className="text-[#5755EE] opacity-70" />
              </motion.div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-display md:text-[56px] lg:text-[64px] font-medium"
            >
              GodGPT
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 text-h2 text-[#5755EE] font-medium"
            >
              <Globe size={24} weight="bold" />
              <span>{t('title.subtitle')}</span>
            </motion.div>
          </div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto"
          >
            {[
              { icon: <CheckCircle size={24} weight="fill" />, text: t('title.feature1'), color: 'text-[#5755EE]' },
              { icon: <CheckCircle size={24} weight="fill" />, text: t('title.feature2'), color: 'text-[#5755EE]' },
              { icon: <CheckCircle size={24} weight="fill" />, text: t('title.feature3'), color: 'text-[#5755EE]' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-[#454545] bg-[rgba(87,85,238,0.05)] hover:bg-[rgba(87,85,238,0.1)] transition-colors duration-200"
              >
                <div className={`${feature.color} flex-shrink-0`}>
                  {feature.icon}
                </div>
                <span className="text-body text-[#ececec] text-center font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
