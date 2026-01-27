import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'phosphor-react';

interface BulletListProps {
  items: string[];
  className?: string;
}

export const BulletList: React.FC<BulletListProps> = ({
  items,
  className = '',
}) => {
  return (
    <ul className={`space-y-4 flex flex-col items-center ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
          className="flex items-center gap-3 text-body leading-relaxed max-w-xl"
        >
          <CheckCircle size={20} weight="fill" className="text-[#5755EE] flex-shrink-0" />
          <span className="text-center">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};
