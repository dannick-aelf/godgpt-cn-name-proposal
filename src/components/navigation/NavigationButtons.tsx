import React from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="flex items-center justify-center w-8 h-8 rounded-full text-[#ececec] hover:bg-[rgba(87,85,238,0.08)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 focus:outline-none"
        aria-label="Previous slide"
      >
        <CaretLeft size={18} weight="bold" />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="flex items-center justify-center w-8 h-8 rounded-full text-[#ececec] hover:bg-[rgba(87,85,238,0.08)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 focus:outline-none"
        aria-label="Next slide"
      >
        <CaretRight size={18} weight="bold" />
      </button>
    </div>
  );
};
