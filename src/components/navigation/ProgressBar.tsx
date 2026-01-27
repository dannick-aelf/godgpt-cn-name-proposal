import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentSlide,
  totalSlides,
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#454545] z-50">
      <motion.div
        className="h-full bg-[#5755EE]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
