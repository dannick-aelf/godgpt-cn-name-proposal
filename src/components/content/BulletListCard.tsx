import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'phosphor-react';
import { Card } from '../ui/Card';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      <Card>
        <div className="space-y-4">
          {title && (
            <div className="flex items-center justify-center gap-2 text-h2 font-medium">
              {icon}
              <span>{title}</span>
            </div>
          )}
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3 text-body leading-relaxed"
              >
                <CheckCircle size={20} weight="fill" className="text-[#5755EE] flex-shrink-0 mt-0.5" />
                <span className="text-center flex-1">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
};
