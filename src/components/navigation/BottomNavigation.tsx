import React from 'react';
import { Globe } from 'phosphor-react';
import { NavigationDots } from './NavigationDots';
import { NavigationButtons } from './NavigationButtons';
import { useLanguage } from '../../contexts/LanguageContext';

interface BottomNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
}) => {
  const canGoPrevious = currentSlide > 0;
  const canGoNext = currentSlide < totalSlides - 1;
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-CN' : 'en');
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(33,33,33,0.95)] backdrop-blur-sm border-t border-[#454545]"
      aria-label="Slide navigation"
    >
      <div className="max-w-[992px] mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-4 flex items-center justify-between gap-4">
        <div className="text-small text-[#9b9b9b] flex-shrink-0 min-w-[60px]">
          {currentSlide + 1} / {totalSlides}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <NavigationDots
            totalSlides={totalSlides}
            currentSlide={currentSlide}
            onDotClick={onDotClick}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <NavigationButtons
              onPrevious={onPrevious}
              onNext={onNext}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
            />
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm border border-[#454545] bg-transparent hover:bg-[rgba(87,85,238,0.08)] text-small text-[#ececec] transition-colors duration-150 focus:outline-none flex-shrink-0"
            aria-label={t('nav.language')}
            title={t('nav.language')}
          >
            <Globe size={16} weight="bold" className="text-[#5755EE]" />
            <span className="text-xs">{language === 'en' ? 'EN' : '中文'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
