import React from 'react';
import { Circle } from 'phosphor-react';
import { Card } from '../ui/Card';
import { highlightWarningWords } from '../../utils/highlightText';

interface BulletListCardProps {
  items: string[];
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const BulletListCard: React.FC<BulletListCardProps> = ({
  items,
  title,
  icon,
  className = '',
}) => {
  return (
    <div className={className}>
      <Card>
        <div className="space-y-4">
          {(title || icon) && (
            <div className="flex items-center justify-center gap-2 text-h2 font-medium">
              {icon}
              {title && <span>{title}</span>}
            </div>
          )}
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-body leading-relaxed"
              >
                <Circle size={6} weight="fill" className="text-[#9b9b9b] flex-shrink-0 mt-2" />
                <span className="text-center flex-1">{highlightWarningWords(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};
