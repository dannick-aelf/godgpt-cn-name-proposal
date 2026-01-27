import React, { useState } from 'react';
import { SlideContainer } from './SlideContainer';
import { BottomNavigation } from '../navigation/BottomNavigation';
import { ProgressBar } from '../navigation/ProgressBar';
import { useSlideNavigation } from '../../hooks/useSlideNavigation';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useSwipe } from '../../hooks/useSwipe';
import type { Slide } from '../../types/presentation.types';

interface PresentationProps {
  slides: Slide[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    previousSlide,
  } = useSlideNavigation(slides.length);

  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleNext = () => {
    setDirection('forward');
    nextSlide();
  };

  const handlePrevious = () => {
    setDirection('backward');
    previousSlide();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 'forward' : 'backward');
    goToSlide(index);
  };

  useKeyboard({
    onNext: handleNext,
    onPrevious: handlePrevious,
    onGoToFirst: () => {
      setDirection('backward');
      goToSlide(0);
    },
    onGoToLast: () => {
      setDirection('forward');
      goToSlide(totalSlides - 1);
    },
  });

  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
  });

  return (
    <div
      className="relative w-full min-h-screen bg-[#212121]"
      {...swipeHandlers}
    >
      <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
      <SlideContainer
        slides={slides}
        currentSlideIndex={currentSlide}
        direction={direction}
      />
      <BottomNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
      />
    </div>
  );
};
