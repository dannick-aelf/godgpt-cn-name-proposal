import React from 'react';
import { Card } from '../ui/Card';
import { highlightWarningWords } from '../../utils/highlightText';

interface TextCardProps {
  items: string[];
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const TextCard: React.FC<TextCardProps> = ({
  items,
  title,
  icon,
  className = '',
}) => {
  return (
    <div className={className}>
      <Card>
        <div className="space-y-4 text-center">
          {(title || icon) && (
            <div className="flex items-center justify-center gap-2 text-h2 font-medium">
              {icon}
              {title && <span>{title}</span>}
            </div>
          )}
          <div className="space-y-3">
            {items.map((item, index) => (
              <p
                key={index}
                className="text-body leading-relaxed"
              >
                {highlightWarningWords(item)}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
