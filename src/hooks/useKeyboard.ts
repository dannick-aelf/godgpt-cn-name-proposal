import { useEffect } from 'react';

interface UseKeyboardProps {
  onNext: () => void;
  onPrevious: () => void;
  onGoToFirst: () => void;
  onGoToLast: () => void;
}

export const useKeyboard = ({
  onNext,
  onPrevious,
  onGoToFirst,
  onGoToLast,
}: UseKeyboardProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious();
          break;
        case 'Home':
          e.preventDefault();
          onGoToFirst();
          break;
        case 'End':
          e.preventDefault();
          onGoToLast();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onNext, onPrevious, onGoToFirst, onGoToLast]);
};
