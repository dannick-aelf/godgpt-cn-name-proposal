import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from './Slide';
import type { Slide as SlideType } from '../../types/presentation.types';

interface SlideContainerProps {
  slides: SlideType[];
  currentSlideIndex: number;
  direction: 'forward' | 'backward';
}

export const SlideContainer: React.FC<SlideContainerProps> = ({
  slides,
  currentSlideIndex,
  direction,
}) => {
  const currentSlide = slides[currentSlideIndex];

  const slideVariants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={currentSlideIndex}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="w-full"
      >
        <Slide slide={currentSlide} isActive={true} />
      </motion.div>
    </AnimatePresence>
  );
};
