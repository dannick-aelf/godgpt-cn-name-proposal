import React from 'react';

interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  highlighted = false,
  className = '',
}) => {
  const baseClasses = 'rounded-lg p-6 border';
  const highlightedClasses = highlighted
    ? 'bg-[rgba(87,85,238,0.08)] border-[#5755EE]'
    : 'bg-transparent border-[#454545]';

  return (
    <div className={`${baseClasses} ${highlightedClasses} ${className}`}>
      {children}
    </div>
  );
};
