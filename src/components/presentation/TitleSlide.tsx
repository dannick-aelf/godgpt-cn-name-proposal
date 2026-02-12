import React from 'react';
import { motion } from 'framer-motion';
import { ChartLineUp } from 'phosphor-react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-20 pb-32">
      <div className="max-w-[992px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center space-y-8"
        >
          {/* Main Title */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <ChartLineUp size={48} weight="regular" className="text-[#5755EE]" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-display md:text-[48px] lg:text-[56px] font-semibold text-center text-[#ececec] tracking-tight"
            >
              GodGPT China Market
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-h2 text-[#9b9b9b] font-normal"
            >
              <span>Research & Recommendation</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
