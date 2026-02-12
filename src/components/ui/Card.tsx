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
  const baseClasses = 'rounded border p-6';
  const highlightedClasses = highlighted
    ? 'bg-[rgba(87,85,238,0.05)] border-[#5755EE] border-opacity-30'
    : 'bg-transparent border-[#454545] border-opacity-50';

  return (
    <div className={`${baseClasses} ${highlightedClasses} ${className}`}>
      {children}
    </div>
  );
};
