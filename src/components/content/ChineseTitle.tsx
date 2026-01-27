import React from 'react';
import { motion } from 'framer-motion';

interface ChineseTitleProps {
  characters: string;
  pinyin: string;
  className?: string;
}

export const ChineseTitle: React.FC<ChineseTitleProps> = ({
  characters,
  pinyin,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="chinese-display text-[#ececec]"
      >
        {characters}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="pinyin"
      >
        {pinyin}
      </motion.div>
    </div>
  );
};
