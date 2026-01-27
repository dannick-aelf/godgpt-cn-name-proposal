export type SlideType = 
  | 'title' 
  | 'option-overview' 
  | 'meaning' 
  | 'linguistic' 
  | 'app-store' 
  | 'market' 
  | 'summary';

export type StatusBadgeVariant = 'best' | 'gen-z' | 'philosophy' | 'safe' | 'compliant' | 'premium' | 'consumer' | 'concept' | 'neutral' | 'common';

export type CalloutType = 'success' | 'warning' | 'info' | 'emphasis';

export interface StatusBadge {
  text: string;
  variant: StatusBadgeVariant;
}

export interface Callout {
  type: CalloutType;
  content: string;
  title?: string;
}

export interface ContentSection {
  title?: string;
  type: 'text' | 'bullet-list' | 'character-breakdown' | 'comparison';
  items?: string[];
  highlight?: boolean;
}

export interface SlideContent {
  sections: ContentSection[];
}

export interface Slide {
  id: string;
  type: SlideType;
  optionNumber?: 1 | 2 | 3;
  title?: string;
  chineseCharacters?: string;
  pinyin?: string;
  statusBadge?: StatusBadge;
  content: SlideContent;
  callouts?: Callout[];
}

export interface SlideState {
  currentSlideIndex: number;
  totalSlides: number;
  isTransitioning: boolean;
  direction: 'forward' | 'backward';
}

export interface NavigationState {
  canGoNext: boolean;
  canGoPrevious: boolean;
  isKeyboardNavigation: boolean;
}
