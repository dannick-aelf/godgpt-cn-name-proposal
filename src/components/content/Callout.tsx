import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Warning, Info } from 'phosphor-react';
import type { CalloutType } from '../../types/presentation.types';
import { highlightWarningWords } from '../../utils/highlightText';

interface CalloutProps {
  type: CalloutType;
  content?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  type,
  content,
  title,
  className = '',
  children,
  icon,
}) => {
  const typeClasses = {
    success: 'bg-[rgba(87,85,238,0.05)] border-[#5755EE] border-opacity-30',
    warning: 'bg-[rgba(255,107,107,0.08)] border-[#ff6b6b] border-opacity-40',
    info: 'bg-[rgba(155,155,155,0.05)] border-[#454545] border-opacity-50',
    emphasis: 'bg-[rgba(155,155,155,0.1)] border-[#6b6b6b] text-[#ececec]',
  };

  const iconMap = {
    success: <CheckCircle size={18} weight="regular" className="text-[#5755EE] flex-shrink-0 opacity-70" />,
    warning: <Warning size={18} weight="regular" className="text-[#ff6b6b] flex-shrink-0 opacity-80" />,
    info: <Info size={18} weight="regular" className="text-[#9b9b9b] flex-shrink-0" />,
    emphasis: null,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={`rounded border ${typeClasses[type]} ${className} p-5`}
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
          {(icon || iconMap[type]) && (
            <div className="mt-0.5 flex-shrink-0">
              {icon || iconMap[type]}
            </div>
          )}
          <div className={`${type === 'emphasis' ? 'text-h3 font-medium' : 'text-body'} leading-relaxed text-center max-w-xl`}>
            {content ? highlightWarningWords(content) : null}
          </div>
        </div>
      )}
    </motion.div>
  );
};
