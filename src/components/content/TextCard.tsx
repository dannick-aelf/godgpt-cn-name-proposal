import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      <Card>
        <div className="space-y-4 text-center">
          {title && (
            <div className="flex items-center justify-center gap-2 text-h2 font-medium">
              {icon}
              <span>{title}</span>
            </div>
          )}
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="text-body leading-relaxed"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
