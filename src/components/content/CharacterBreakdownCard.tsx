import React from 'react';
import { motion } from 'framer-motion';
import { Translate } from 'phosphor-react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';

interface CharacterBreakdownCardProps {
  items: string[];
  className?: string;
}

export const CharacterBreakdownCard: React.FC<CharacterBreakdownCardProps> = ({
  items,
  className = '',
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      <Card>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-h2 font-medium mb-4">
            <Translate size={24} weight="bold" className="text-[#5755EE]" />
            <span>{t('section.characterBreakdown')}</span>
          </div>
          <div className="space-y-6">
            {items.map((item, index) => {
              // Extract Chinese character (before colon) and explanation
              const colonIndex = item.indexOf(':');
              const chineseChar = colonIndex > 0 ? item.substring(0, colonIndex).trim() : '';
              const explanation = colonIndex > 0 ? item.substring(colonIndex + 1).trim() : item;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                  className="flex flex-col items-center gap-3"
                >
                  {chineseChar && (
                    <div className="text-[64px] md:text-[80px] font-medium text-[#ececec] leading-none">
                      {chineseChar}
                    </div>
                  )}
                  <div className="text-body text-[#9b9b9b] leading-relaxed text-center max-w-md">
                    {explanation}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
