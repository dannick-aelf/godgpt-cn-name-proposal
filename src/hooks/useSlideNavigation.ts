import { useState, useCallback } from 'react';

export const useSlideNavigation = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const canGoNext = currentSlide < totalSlides - 1;
  const canGoPrevious = currentSlide > 0;

  return {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    previousSlide,
    canGoNext,
    canGoPrevious,
  };
};
