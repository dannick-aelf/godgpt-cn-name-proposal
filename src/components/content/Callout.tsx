import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Warning, Info } from 'phosphor-react';
import type { CalloutType } from '../../types/presentation.types';

interface CalloutProps {
  type: CalloutType;
  content?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  type,
  content,
  title,
  className = '',
  children,
}) => {
  const typeClasses = {
    success: 'bg-[rgba(87,85,238,0.08)] border-[#5755EE]',
    warning: 'bg-[rgba(255,193,7,0.08)] border-[#FFC107]',
    info: 'bg-transparent border-[#454545]',
    emphasis: 'bg-[#5755EE] text-white border-none',
  };

  const iconMap = {
    success: <CheckCircle size={20} weight="fill" className="text-[#5755EE] flex-shrink-0" />,
    warning: <Warning size={20} weight="fill" className="text-[#FFC107] flex-shrink-0" />,
    info: <Info size={20} weight="fill" className="text-[#9b9b9b] flex-shrink-0" />,
    emphasis: null,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`rounded-lg p-6 border ${typeClasses[type]} ${className}`}
    >
      {title && (
        <div className={`text-h2 font-medium mb-3 text-center ${className.includes('py-4') ? 'text-[18px] mb-2' : ''}`}>{title}</div>
      )}
      {children ? (
        <div className="flex flex-col items-center">
          {children}
        </div>
      ) : (
        <div className="flex items-start justify-center gap-3">
          {iconMap[type] && <div className="mt-0.5 flex-shrink-0">{iconMap[type]}</div>}
          <div className={`${type === 'emphasis' ? 'text-h2' : 'text-body'} leading-relaxed text-center max-w-xl`}>
            {content}
          </div>
        </div>
      )}
    </motion.div>
  );
};
