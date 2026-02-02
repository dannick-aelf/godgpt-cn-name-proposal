import type { Slide } from '../types/presentation.types';
import type { Language } from '../contexts/LanguageContext';
import { getTranslatedSlides } from './translations';

export const getSlides = (language: Language): Slide[] => {
  const t = getTranslatedSlides(language);
  
  // Helper to get common translations
  const getCommonTranslation = (key: string): string => {
    const commonTranslations: Record<Language, Record<string, string>> = {
      en: {
        'section.meaning': 'Meaning',
        'section.linguistic': 'Linguistic & Cultural Notes',
        'section.appstore': 'App Store (China) Considerations',
        'section.market': 'Market Positioning in CN',
        'market.worksWell': 'Works well for:',
        'market.feelsLike': 'Feels like:',
        'market.bestUsed': 'Best used when:',
      },
      'zh-CN': {
        'section.meaning': '含义',
        'section.linguistic': '语言与文化注释',
        'section.appstore': '应用商店（中国）考量',
        'section.market': '中国市场定位',
        'market.worksWell': '适用于:',
        'market.feelsLike': '感觉像:',
        'market.bestUsed': '最佳使用场景:',
      },
    };
    return commonTranslations[language][key] || key;
  };

  return [
    // Slide 1: Title/Introduction
    {
      id: 'title',
      type: 'title',
      title: language === 'en' ? 'GodGPT – Chinese Naming Options' : 'GodGPT – 中文命名选项',
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'info',
          content: t['title.callout'],
        },
      ],
    },

    // Slide 2: Evaluation Framework
    {
      id: 'evaluation-framework',
      type: 'title',
      title: language === 'en' ? 'Evaluation Framework' : '评估框架',
      content: {
        sections: [],
      },
    },

    // Option 2: 戈迪 (Gē Dí) - Overview
    {
      id: 'option2-overview',
      type: 'option-overview',
      optionNumber: 2,
      chineseCharacters: '戈迪',
      pinyin: 'Gē Dí',
      statusBadge: {
        text: t['option2.badge'],
        variant: 'gen-z',
      },
      title: t['option2.title'],
      content: {
        sections: [],
      },
    },

    // Option 2: Meaning
    {
      id: 'option2-meaning',
      type: 'meaning',
      optionNumber: 2,
      title: getCommonTranslation('section.meaning'),
      content: {
        sections: [
          {
            type: 'character-breakdown',
            items: [
              t['option2.meaning.char1'],
              t['option2.meaning.char2'],
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'emphasis',
          content: t['option2.meaning.callout'],
        },
      ],
    },

    // Option 2: Linguistic & Cultural Notes
    {
      id: 'option2-linguistic',
      type: 'linguistic',
      optionNumber: 2,
      title: getCommonTranslation('section.linguistic'),
      content: {
        sections: [
          {
            type: 'bullet-list',
            items: [
              t['option2.linguistic.1'],
              t['option2.linguistic.2'],
              t['option2.linguistic.3'],
            ],
          },
        ],
      },
    },

    // Option 2: App Store Considerations
    {
      id: 'option2-app-store',
      type: 'app-store',
      optionNumber: 2,
      title: getCommonTranslation('section.appstore'),
      content: {
        sections: [
          {
            type: 'bullet-list',
            items: [
              t['option2.appstore.1'],
              t['option2.appstore.2'],
              t['option2.appstore.3'],
              t['option2.appstore.4'],
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: t['option2.appstore.warning'],
        },
      ],
    },

    // Option 2: Market Positioning
    {
      id: 'option2-market',
      type: 'market',
      optionNumber: 2,
      title: getCommonTranslation('section.market'),
      content: {
        sections: [
          {
            type: 'text',
            items: [t['option2.market.positioning']],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.worksWell'),
            items: [
              t['option2.market.works.1'],
              t['option2.market.works.2'],
              t['option2.market.works.3'],
            ],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.feelsLike'),
            items: [
              t['option2.market.feels.1'],
              t['option2.market.feels.2'],
              t['option2.market.feels.3'],
            ],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.bestUsed'),
            items: [
              t['option2.market.best.1'],
              t['option2.market.best.2'],
              t['option2.market.best.3'],
            ],
          },
        ],
      },
    },

    // Option 3: 心镜 (Xīn Jìng) - Overview
    {
      id: 'option3-overview',
      type: 'option-overview',
      optionNumber: 3,
      chineseCharacters: '心镜',
      pinyin: 'Xīn Jìng',
      statusBadge: {
        text: t['option3.badge'],
        variant: 'philosophy',
      },
      title: t['option3.title'],
      content: {
        sections: [],
      },
      callouts: [
        {
          type: 'warning',
          content: t['option3.warning'],
        },
      ],
    },

    // Option 3: Meaning
    {
      id: 'option3-meaning',
      type: 'meaning',
      optionNumber: 3,
      title: getCommonTranslation('section.meaning'),
      content: {
        sections: [
          {
            type: 'character-breakdown',
            items: [
              t['option3.meaning.char1'],
              t['option3.meaning.char2'],
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'emphasis',
          content: t['option3.meaning.callout'],
        },
      ],
    },

    // Option 3: Linguistic & Cultural Notes
    {
      id: 'option3-linguistic',
      type: 'linguistic',
      optionNumber: 3,
      title: getCommonTranslation('section.linguistic'),
      content: {
        sections: [
          {
            type: 'bullet-list',
            items: [
              t['option3.linguistic.1'],
              t['option3.linguistic.2'],
              t['option3.linguistic.3'],
              t['option3.linguistic.4'],
            ],
          },
        ],
      },
    },

    // Option 3: App Store Considerations
    {
      id: 'option3-app-store',
      type: 'app-store',
      optionNumber: 3,
      title: getCommonTranslation('section.appstore'),
      content: {
        sections: [
          {
            type: 'bullet-list',
            items: [
              t['option3.appstore.1'],
              t['option3.appstore.2'],
              t['option3.appstore.3'],
              t['option3.appstore.4'],
            ],
          },
        ],
      },
      callouts: [
        {
          type: 'warning',
          content: t['option3.appstore.warning'],
        },
      ],
    },

    // Option 3: Market Positioning
    {
      id: 'option3-market',
      type: 'market',
      optionNumber: 3,
      title: getCommonTranslation('section.market'),
      content: {
        sections: [
          {
            type: 'text',
            items: [t['option3.market.positioning']],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.worksWell'),
            items: [
              t['option3.market.works.1'],
              t['option3.market.works.2'],
              t['option3.market.works.3'],
            ],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.feelsLike'),
            items: [
              t['option3.market.feels.1'],
              t['option3.market.feels.2'],
              t['option3.market.feels.3'],
            ],
          },
          {
            type: 'text',
            title: getCommonTranslation('market.bestUsed'),
            items: [
              t['option3.market.best.1'],
              t['option3.market.best.2'],
              t['option3.market.best.3'],
            ],
          },
        ],
      },
    },

    // Recommendation Introduction Slide
    {
      id: 'recommendation-intro',
      type: 'title',
      title: language === 'en' ? 'Recommendation' : '推荐',
      content: {
        sections: [],
      },
    },

    // Summary Slide
    {
      id: 'summary',
      type: 'summary',
      title: language === 'en' ? 'Summary: Two Strategic Options' : '总结：两个战略选项',
      content: {
        sections: [
          {
            type: 'comparison',
            items: [],
          },
        ],
      },
    },

    // Thank You Slide
    {
      id: 'thank-you',
      type: 'title',
      title: language === 'en' ? 'Thank You' : '谢谢',
      content: {
        sections: [],
      },
    },
  ];
};
