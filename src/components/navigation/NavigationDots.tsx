import React from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  totalSlides,
  currentSlide,
  onDotClick,
}) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === currentSlide;
        return (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className="focus:outline-none rounded-full transition-all duration-200 hover:scale-125"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              animate={{
                scale: isActive ? 1.3 : 1,
                backgroundColor: isActive ? '#5755EE' : '#454545',
              }}
              transition={{ duration: 0.3 }}
              className={`rounded-full ${isActive ? 'w-2 h-2' : 'w-1.5 h-1.5'}`}
            />
          </button>
        );
      })}
    </div>
  );
};
