# Baseline Specification
## GodGPT Chinese Naming Options Presentation

**Version**: 1.0.0  
**Last Updated**: January 28, 2025  
**Project Type**: Dynamic Modern UI Full Web Page Presentation  
**Presentation Format**: Slide-based interactive presentation

---

## Table of Contents

1. [Overview](#overview)
2. [User Stories](#user-stories)
3. [Functional Requirements](#functional-requirements)
4. [Slide Structure & Content](#slide-structure--content)
5. [UI/UX Specifications](#uiux-specifications)
6. [Navigation System](#navigation-system)
7. [Animation Specifications](#animation-specifications)
8. [Technical Specifications](#technical-specifications)
9. [Content Specifications](#content-specifications)
10. [Accessibility Requirements](#accessibility-requirements)
11. [Performance Requirements](#performance-requirements)

---

## Overview

### Purpose
Create an immersive, animated presentation showcasing three Chinese naming options for GodGPT. The presentation should be visually engaging, easy to navigate, and clearly communicate the evaluation criteria for each option.

### Key Objectives
1. Present three Chinese naming options with clear differentiation
2. Provide detailed evaluation: Meaning, App Store Considerations, Market Positioning
3. Create an engaging, modern presentation experience
4. Enable easy navigation between slides
5. Maintain minimalist aesthetic aligned with GodGPT brand

### Target Audience
- Internal stakeholders
- Decision makers
- Brand strategists
- Product team

### Presentation Flow
1. Title/Introduction Slide
2. Option 1: 戈德 (Gē Dé) - Multiple slides
3. Option 2: 戈迪 (Gē Dí) - Multiple slides
4. Option 3: 心镜 (Xīn Jìng) - Multiple slides
5. Summary/Comparison Slide
6. Conclusion/Next Steps (optional)

---

## User Stories

### As a viewer, I want to:
1. **US-001**: Navigate between slides easily using bottom navigation
2. **US-002**: See each naming option clearly separated on its own slides
3. **US-003**: Understand the meaning and positioning of each option quickly
4. **US-004**: See clear visual callouts for important information
5. **US-005**: Experience smooth animations that enhance understanding
6. **US-006**: View a summary comparing all options at the end
7. **US-007**: Navigate using keyboard (arrow keys, spacebar)
8. **US-008**: See progress indicator showing current slide position
9. **US-009**: Access slide content without overwhelming text density
10. **US-010**: Experience consistent GodGPT brand aesthetic throughout

### As a presenter, I want to:
1. **US-011**: Control presentation flow (next/previous)
2. **US-012**: See which slide is currently displayed
3. **US-013**: Have smooth transitions between slides
4. **US-014**: Present on various screen sizes (mobile, tablet, desktop)

---

## Functional Requirements

### Core Functionality

#### FR-001: Slide Navigation
- **Requirement**: Users must be able to navigate between slides
- **Methods**:
  - Bottom navigation bar (primary)
  - Keyboard navigation (arrow keys, spacebar, Enter)
  - Touch/swipe gestures (mobile)
  - Click/tap on navigation dots
- **Constraints**:
  - Navigation must be visible at all times
  - Must indicate current slide position
  - Must disable navigation at first/last slide appropriately

#### FR-002: Slide Progression
- **Requirement**: Slides must progress in defined sequence
- **Behavior**:
  - Forward: Next slide
  - Backward: Previous slide
  - Loop: Optional (disabled by default)
- **Edge Cases**:
  - First slide: Back button disabled/hidden
  - Last slide: Next button shows "Summary" or "End"
  - Invalid slide index: Reset to valid slide

#### FR-003: Content Display
- **Requirement**: Each slide must display content clearly
- **Constraints**:
  - Maximum text per slide: ~150 words or 3-4 key points
  - Content must be readable on mobile (minimum 16px font)
  - Important information must have visual callouts
  - Chinese characters must render correctly

#### FR-004: Animation System
- **Requirement**: Animations must enhance presentation without distracting
- **Types**:
  - Slide transitions (entrance/exit)
  - Content reveal animations (staggered)
  - Micro-interactions (hover, active states)
  - Callout highlight animations
- **Performance**: All animations must maintain 60fps

#### FR-005: Responsive Design
- **Requirement**: Presentation must work on all screen sizes
- **Breakpoints**:
  - Mobile: 0-767px (primary)
  - Tablet: 768px-1023px
  - Desktop: 1024px+
- **Adaptations**:
  - Text size scaling
  - Layout adjustments
  - Touch target sizes (minimum 44x44px)

---

## Slide Structure & Content

### Slide Architecture

#### Slide 1: Title/Introduction
**Content**:
- Title: "GodGPT – Chinese Naming Options"
- Subtitle: "Detailed Evaluation: Meaning · App Store Considerations · Market Positioning (China)"
- Visual: GodGPT branding/logo
- Callout: "Three strategic options for the Chinese market"

**Layout**:
- Centered content
- Large title (48px display)
- Subtitle (20px h2)
- Minimal navigation hint

**Animation**:
- Title fade in (300ms)
- Subtitle fade in with delay (400ms)
- Logo/branding fade in (500ms)

---

#### Option 1: 戈德 (Gē Dé) - Slide Sequence

##### Slide 2: Option 1 - Title & Overview
**Content**:
- Large Chinese characters: "戈德" (prominent, 64px+)
- Pinyin: "Gē Dé"
- Status badge: "⭐ Best overall, linguistically standard"
- Positioning: "Primary / Formal Brand Name"

**Layout**:
- Chinese characters centered, large
- Pinyin below (24px)
- Status badge top-right
- Positioning subtitle (20px)

**Animation**:
- Chinese characters scale in (400ms, ease-out)
- Pinyin fade in (500ms)
- Badge pulse animation (subtle)

##### Slide 3: Option 1 - Meaning
**Content**:
- Section title: "Meaning"
- Character breakdown:
  - "戈: Phonetic carrier (used in transliterations, neutral)"
  - "德: Virtue, integrity, moral principle"
- Combined interpretation callout:
  - "Not read literally as 'virtue' by users — perceived as a neutral transliteration of 'God'."

**Layout**:
- Section title (32px h1)
- Two-column or stacked character breakdown
- Interpretation in highlighted card/callout box

**Animation**:
- Section title slide in from left (300ms)
- Character breakdown items stagger in (200ms delay each)
- Interpretation callout fade in with scale (400ms)

##### Slide 4: Option 1 - Linguistic & Cultural Notes
**Content**:
- Section title: "Linguistic & Cultural Notes"
- Key points (bullet list, max 4):
  - "德" is extremely common in Chinese brand names
  - Carries positive but non-religious undertones
  - Sounds authoritative but not aggressive
  - Familiar structure → easy acceptance

**Layout**:
- Section title (32px h1)
- Bullet list with icons or visual markers
- Each point on separate line with spacing

**Animation**:
- Title fade in (300ms)
- Bullet points stagger in (150ms delay each)

##### Slide 5: Option 1 - App Store Considerations
**Content**:
- Section title: "App Store (China) Considerations"
- Success indicators (✅):
  - Safe for App Store review
  - No explicit religion / deity usage
  - No ideology, no politics
  - Suitable for AI, tools, knowledge products
- Warning (⚠️):
  - Slightly "serious" tone — not playful by default

**Layout**:
- Section title (32px h1)
- Success items in green/positive styling
- Warning in yellow/caution styling
- Visual icons (checkmarks, warning)

**Animation**:
- Title fade in (300ms)
- Success items animate in with checkmark reveal (200ms delay each)
- Warning pulses gently (subtle)

##### Slide 6: Option 1 - Market Positioning
**Content**:
- Section title: "Market Positioning in CN"
- Positioning tag: "Premium / Serious / Trustworthy"
- Use cases:
  - Investor-facing branding
  - System-level AI positioning
  - "AI assistant with depth"
- Feels like:
  - A platform, not a toy
  - Something users can rely on
- Best used when:
  - You want credibility
  - You want longevity
  - You want the most "correct" name linguistically

**Layout**:
- Section title (32px h1)
- Positioning tag as large badge/callout
- Use cases in card format
- "Feels like" and "Best used when" as separate sections

**Animation**:
- Title fade in (300ms)
- Positioning tag scale in (400ms)
- Use cases cards slide in (staggered, 200ms delay)

---

#### Option 2: 戈迪 (Gē Dí) - Slide Sequence

##### Slide 7: Option 2 - Title & Overview
**Content**:
- Large Chinese characters: "戈迪" (prominent, 64px+)
- Pinyin: "Gē Dí"
- Status badge: "⭐ Gen-Z & app-forward"
- Positioning: "Consumer / Friendly Brand Name"

**Layout**: Same as Option 1 title slide
**Animation**: Same pattern as Option 1

##### Slide 8: Option 2 - Meaning
**Content**:
- Section title: "Meaning"
- Character breakdown:
  - "戈: Phonetic"
  - "迪: Guide, progress, to lead forward"
- Combined interpretation callout:
  - "Reads as a soft, modern transliteration, not a concept."

**Layout**: Same as Option 1 meaning slide
**Animation**: Same pattern as Option 1

##### Slide 9: Option 2 - Linguistic & Cultural Notes
**Content**:
- Section title: "Linguistic & Cultural Notes"
- Key points:
  - "迪" is widely used in: Apps, Youth brands, Lifestyle tech
  - Lighter tone than 德
  - Feels approachable and companion-like

**Layout**: Same as Option 1 linguistic slide
**Animation**: Same pattern as Option 1

##### Slide 10: Option 2 - App Store Considerations
**Content**:
- Section title: "App Store (China) Considerations"
- Success indicators (✅):
  - Very safe
  - No religious meaning
  - Strong fit for AI assistants / chat apps
  - Friendly to younger users
- Warning (⚠️):
  - Slightly less "authoritative" than 戈德

**Layout**: Same as Option 1 app store slide
**Animation**: Same pattern as Option 1

##### Slide 11: Option 2 - Market Positioning
**Content**:
- Section title: "Market Positioning in CN"
- Positioning tag: "Gen-Z / Consumer / App-native"
- Use cases:
  - Daily-use AI companion
  - Conversational AI
  - Emotional or reflective interactions
- Feels like:
  - An AI buddy
  - Something you talk with, not to
- Best used when:
  - You want adoption
  - You want friendliness
  - You want lower psychological barrier to use

**Layout**: Same as Option 1 market positioning slide
**Animation**: Same pattern as Option 1

---

#### Option 3: 心镜 (Xīn Jìng) - Slide Sequence

##### Slide 12: Option 3 - Title & Overview
**Content**:
- Large Chinese characters: "心镜" (prominent, 64px+)
- Pinyin: "Xīn Jìng"
- Status badge: "⭐ Core brand philosophy"
- Positioning: "Concept Name / Philosophy Layer / Mode"
- Important note callout: "⚠️ NOT a phonetic translation of 'God' - It is a conceptual name"

**Layout**:
- Same as previous title slides
- Important note as prominent warning callout (accent color border)

**Animation**:
- Same pattern as previous options
- Warning callout pulses gently on load

##### Slide 13: Option 3 - Meaning
**Content**:
- Section title: "Meaning"
- Character breakdown:
  - "心: Heart, mind, inner self"
  - "镜: Mirror, reflection"
- Combined meaning callout (large, prominent):
  - "Heart Mirror" / "Mind Mirror"
  - "→ A mirror that reflects what's already inside you"

**Layout**:
- Same as previous meaning slides
- Combined meaning in extra-large callout box (accent background)

**Animation**:
- Same pattern as previous options
- Combined meaning callout has special emphasis animation

##### Slide 14: Option 3 - Linguistic & Cultural Notes
**Content**:
- Section title: "Linguistic & Cultural Notes"
- Key points:
  - Deeply Chinese, poetic, intuitive
  - Resonates with: Reflection, Self-understanding, Awareness
  - Spiritual but not religious
  - No deity, no worship, no belief system

**Layout**: Same as previous linguistic slides
**Animation**: Same pattern as previous options

##### Slide 15: Option 3 - App Store Considerations
**Content**:
- Section title: "App Store (China) Considerations"
- Success indicators (✅):
  - Extremely safe
  - No banned religious keywords
  - No ideology
  - Fits self-growth, AI reflection, journaling, assistant modes
- Warning (⚠️):
  - Should not be the sole product name for AI listing
  - (best used as a feature / mode / philosophy)

**Layout**: Same as previous app store slides
**Animation**: Same pattern as previous options

##### Slide 16: Option 3 - Market Positioning
**Content**:
- Section title: "Market Positioning in CN"
- Positioning tag: "Meaningful / Poetic / Differentiated"
- Perfect for:
  - "Mirror" positioning of GodGPT
  - Differentiating from utility-only AI
  - Emotional and reflective AI use cases
- Example usage:
  - 戈德 · 心镜模式
  - 戈迪 AI（心镜）
  - GodGPT 心镜：照见你的真实
- Tagline:
  - "你的真理已在心中，心镜帮你看见"
  - (Your truth is already within; Heart Mirror helps you see it)

**Layout**:
- Same as previous market positioning slides
- Example usage in code/quote style formatting
- Tagline in large, elegant callout

**Animation**:
- Same pattern as previous options
- Tagline has special fade-in with emphasis

---

#### Slide 17: Summary/Comparison

**Content**:
- Title: "Summary: Three Strategic Options"
- Comparison table or cards showing:
  - Option 1: 戈德 (Gē Dé)
    - Positioning: Primary / Formal
    - Best for: Credibility, longevity, linguistic correctness
    - Tone: Premium, serious, trustworthy
  - Option 2: 戈迪 (Gē Dí)
    - Positioning: Consumer / Friendly
    - Best for: Adoption, friendliness, lower barrier
    - Tone: Gen-Z, app-native, companion-like
  - Option 3: 心镜 (Xīn Jìng)
    - Positioning: Concept / Philosophy
    - Best for: Differentiation, emotional connection, mode/feature
    - Tone: Meaningful, poetic, reflective

**Layout**:
- Three-column layout (desktop) or stacked (mobile)
- Each option in card format
- Key differentiators highlighted
- Visual comparison indicators

**Animation**:
- Cards slide in from sides (staggered)
- Comparison highlights animate in
- Final emphasis on key differentiators

---

## UI/UX Specifications

### Design System Compliance

All UI elements must follow the design system specified in `specs/design-system.md`:

#### Colors
- **Background**: #212121 (primary brand)
- **Text Primary**: #ececec
- **Text Secondary**: #9b9b9b
- **Accent**: #5755EE (for highlights, CTAs, active states)
- **Border Default**: #454545
- **Border Accent**: #5755EE

#### Typography
- **Font Family**: SF Pro system stack
- **Display (Chinese characters)**: 64px, weight 510
- **Heading 1**: 32px, weight 510
- **Heading 2**: 20px, weight 400
- **Body**: 16px, weight 400
- **Small**: 14px, weight 400

#### Spacing
- **Screen Padding**: 20-24px (mobile)
- **Section Gap**: 40px
- **Card Padding**: 24px
- **Text Gap**: 16px
- **Component Gap**: 16px

### Slide Layout

#### Content Area
- **Max Width**: 992px (centered on desktop)
- **Padding**: 20-24px (mobile), 32px (tablet), 40px (desktop)
- **Vertical Spacing**: Generous whitespace between sections

#### Content Density Rules
- **Maximum 3-4 key points per slide**
- **Maximum ~150 words per slide**
- **One main concept per slide**
- **Visual breaks between sections**

### Callout Components

#### Success Callout (✅)
- **Background**: rgba(87, 85, 238, 0.08) (accent light)
- **Border**: 1px solid #5755EE (accent)
- **Border Radius**: 16px
- **Padding**: 24px
- **Icon**: Checkmark in accent color
- **Text**: Primary text color

#### Warning Callout (⚠️)
- **Background**: rgba(255, 193, 7, 0.08) (yellow light)
- **Border**: 1px solid #FFC107 (yellow)
- **Border Radius**: 16px
- **Padding**: 24px
- **Icon**: Warning in yellow
- **Text**: Primary text color

#### Info Callout
- **Background**: Transparent
- **Border**: 1px solid #454545
- **Border Radius**: 16px
- **Padding**: 24px
- **Text**: Primary text color

#### Emphasis Callout (for key messages)
- **Background**: #5755EE (accent color)
- **Border**: None
- **Border Radius**: 16px
- **Padding**: 32px
- **Text**: #ffffff (white)
- **Font Size**: 20px (larger for emphasis)

### Status Badges

#### Badge Styles
- **Height**: 32px
- **Padding**: 8px horizontal, 4px vertical
- **Border Radius**: 6px
- **Font Size**: 14px
- **Font Weight**: 510 (medium)

#### Badge Variants
- **Best Overall**: Accent background (#5755EE), white text
- **Gen-Z**: Accent border, accent text
- **Core Philosophy**: Accent background, white text with star icon

### Chinese Character Display

#### Large Display (Title Slides)
- **Font Size**: 64px minimum (up to 96px on desktop)
- **Font Weight**: 510 (medium)
- **Line Height**: 1.2
- **Color**: #ececec (primary text)
- **Spacing**: Generous margin around characters

#### Pinyin Display
- **Font Size**: 24px
- **Font Weight**: 400 (regular)
- **Color**: #9b9b9b (secondary text)
- **Position**: Below Chinese characters
- **Spacing**: 8px gap from Chinese characters

---

## Navigation System

### Bottom Navigation Bar

#### Design
- **Position**: Fixed at bottom of viewport
- **Height**: 64px (mobile), 72px (desktop)
- **Background**: rgba(33, 33, 33, 0.95) with backdrop blur
- **Border**: 1px solid #454545 (top border only)
- **Padding**: 16px horizontal, 12px vertical

#### Components

##### Navigation Dots
- **Display**: Horizontal row of dots
- **Active Dot**: 
  - Size: 8px diameter
  - Color: #5755EE (accent)
  - Background: #5755EE
- **Inactive Dot**:
  - Size: 6px diameter
  - Color: #454545
  - Background: #454545
- **Spacing**: 8px between dots
- **Interaction**: Click/tap to jump to slide

##### Slide Counter
- **Position**: Left side of navigation
- **Text**: "Slide X of Y" or "X / Y"
- **Font Size**: 14px
- **Color**: #9b9b9b (secondary text)

##### Navigation Buttons
- **Position**: Right side of navigation
- **Previous Button**:
  - Icon: Left arrow (chevron-left)
  - Size: 24x24px
  - Color: #ececec (primary text)
  - Disabled: #454545, opacity 0.4
  - Touch Target: 44x44px minimum
- **Next Button**:
  - Icon: Right arrow (chevron-right)
  - Size: 24x24px
  - Color: #ececec (primary text)
  - Disabled: #454545, opacity 0.4
  - Touch Target: 44x44px minimum
- **Spacing**: 16px between buttons

#### Responsive Behavior
- **Mobile**: Full-width navigation, centered dots
- **Tablet**: Full-width navigation, larger touch targets
- **Desktop**: Centered navigation bar (max-width: 992px), hover states

### Keyboard Navigation

#### Supported Keys
- **Arrow Right / Space / Enter**: Next slide
- **Arrow Left**: Previous slide
- **Home**: First slide
- **End**: Last slide
- **Escape**: Optional (close any modals/overlays)

#### Visual Feedback
- Show brief visual indicator when keyboard navigation is used
- Highlight current slide in navigation dots

### Touch/Swipe Gestures (Mobile)

#### Swipe Gestures
- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide
- **Swipe Threshold**: 50px minimum
- **Animation**: Smooth slide transition with swipe velocity

#### Visual Feedback
- Show slide preview during swipe
- Dim inactive slide slightly
- Return to position if swipe is incomplete

### Progress Indicator

#### Visual Progress Bar (Optional)
- **Position**: Top of viewport (optional, can be in navigation)
- **Height**: 2-4px
- **Background**: #454545
- **Progress Fill**: #5755EE (accent)
- **Width**: Percentage based on current slide / total slides

---

## Animation Specifications

### Slide Transitions

#### Transition Types

##### Slide In/Out (Primary)
- **Direction**: Horizontal (left/right)
- **Duration**: 300ms
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- **Effect**: 
  - Next slide: Slide in from right, current slides out to left
  - Previous slide: Slide in from left, current slides out to right

##### Fade (Alternative)
- **Duration**: 300ms
- **Easing**: `ease-out`
- **Effect**: Fade out current, fade in next

##### Scale + Fade (For Emphasis)
- **Duration**: 400ms
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight bounce)
- **Effect**: Scale from 0.95 to 1.0 with fade in

#### Transition Rules
- Use slide in/out for standard navigation
- Use fade for content updates within same slide
- Use scale + fade for important callouts

### Content Reveal Animations

#### Staggered List Items
- **Delay**: 150ms between items
- **Duration**: 300ms per item
- **Effect**: Fade in + slide up (20px)
- **Easing**: `ease-out`

#### Character Breakdown
- **Delay**: 200ms between characters
- **Duration**: 400ms per character
- **Effect**: Scale in (0.8 to 1.0) + fade in
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`

#### Callout Highlights
- **Duration**: 500ms
- **Effect**: 
  - Border glow pulse (2 iterations)
  - Background fade in
  - Scale from 0.98 to 1.0
- **Easing**: `ease-out`

### Micro-Interactions

#### Button Hover
- **Duration**: 150ms
- **Effect**: Background color change, slight scale (1.0 to 1.02)
- **Easing**: `ease-out`

#### Button Active/Press
- **Duration**: 100ms
- **Effect**: Scale down (1.0 to 0.98), opacity to 0.8
- **Easing**: `ease-in`

#### Navigation Dot Hover
- **Duration**: 200ms
- **Effect**: Scale up (1.0 to 1.2), color change to accent
- **Easing**: `ease-out`

#### Navigation Dot Active
- **Duration**: 300ms
- **Effect**: Scale pulse (1.0 → 1.3 → 1.0)
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Performance Requirements

#### Animation Performance
- **Target FPS**: 60fps
- **Use**: `transform` and `opacity` only (GPU accelerated)
- **Avoid**: `width`, `height`, `top`, `left` animations
- **Reduce Motion**: Respect `prefers-reduced-motion` media query

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Timing

#### Entrance Animations
- **Title/Heading**: 300ms delay, 400ms duration
- **Body Content**: 400ms delay, 300ms duration
- **Callouts**: 600ms delay, 400ms duration
- **Navigation**: 800ms delay, 300ms duration

#### Exit Animations
- **Duration**: 200ms (faster than entrance)
- **Easing**: `ease-in` (opposite of entrance)

---

## Technical Specifications

### Technology Stack

#### Core Framework
- **React**: ^19.2.0
- **TypeScript**: ~5.9.3
- **Vite**: ^7.2.4

#### Styling
- **Tailwind CSS**: ^4.1.18
- **PostCSS**: ^8.5.6
- **Autoprefixer**: ^10.4.23

#### Animation Library
- **Framer Motion**: ^11.x (recommended for complex animations)
- **OR**: CSS transitions/animations (lighter weight)

#### Icons
- **phosphor-react**: ^1.4.1
- **react-icons**: ^5.5.0

### Component Architecture

#### Core Components

```
src/
├── components/
│   ├── presentation/
│   │   ├── Slide.tsx              # Base slide component
│   │   ├── SlideContainer.tsx     # Slide wrapper with transitions
│   │   └── Presentation.tsx       # Main presentation component
│   ├── navigation/
│   │   ├── BottomNavigation.tsx   # Bottom nav bar
│   │   ├── NavigationDots.tsx     # Dot indicators
│   │   ├── NavigationButtons.tsx # Prev/Next buttons
│   │   └── ProgressBar.tsx        # Optional progress indicator
│   ├── content/
│   │   ├── ChineseTitle.tsx       # Large Chinese character display
│   │   ├── Callout.tsx            # Callout box component
│   │   ├── StatusBadge.tsx        # Status badge component
│   │   ├── BulletList.tsx         # Animated bullet list
│   │   └── ComparisonCard.tsx     # Summary comparison card
│   └── ui/
│       ├── Button.tsx             # Button component (from design system)
│       └── Card.tsx                # Card component (from design system)
```

### State Management

#### Slide State
```typescript
interface SlideState {
  currentSlideIndex: number;
  totalSlides: number;
  isTransitioning: boolean;
  direction: 'forward' | 'backward';
}
```

#### Navigation State
```typescript
interface NavigationState {
  canGoNext: boolean;
  canGoPrevious: boolean;
  isKeyboardNavigation: boolean;
}
```

### Data Structure

#### Slide Data Model
```typescript
interface Slide {
  id: string;
  type: 'title' | 'option-overview' | 'meaning' | 'linguistic' | 'app-store' | 'market' | 'summary';
  optionNumber?: 1 | 2 | 3;
  title?: string;
  chineseCharacters?: string;
  pinyin?: string;
  statusBadge?: {
    text: string;
    variant: 'best' | 'gen-z' | 'philosophy';
  };
  content: SlideContent;
  callouts?: Callout[];
}

interface SlideContent {
  sections: ContentSection[];
}

interface ContentSection {
  title?: string;
  type: 'text' | 'bullet-list' | 'character-breakdown' | 'comparison';
  items?: string[];
  highlight?: boolean;
}
```

### Routing/Navigation Logic

#### Slide Navigation
```typescript
const useSlideNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  return { currentSlide, totalSlides, goToSlide, nextSlide, previousSlide };
};
```

### Keyboard Event Handling

```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'Enter':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        previousSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentSlide, totalSlides]);
```

### Touch/Swipe Handling

```typescript
const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) onSwipeLeft();
    if (isRightSwipe) onSwipeRight();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
```

### Performance Optimization

#### Code Splitting
- Lazy load slide components
- Split by route/section if needed

#### Image Optimization
- Use WebP format with fallbacks
- Lazy load images
- Responsive images with srcset

#### Animation Optimization
- Use `will-change` sparingly
- Use `transform` and `opacity` only
- Debounce scroll/resize events
- Use `requestAnimationFrame` for custom animations

---

## Content Specifications

### Content Structure

#### Slide Content Rules
1. **One Main Concept Per Slide**: Each slide should focus on a single idea
2. **Maximum 3-4 Key Points**: Limit bullet points to maintain clarity
3. **Visual Hierarchy**: Use size, weight, and color to establish importance
4. **Scannable Format**: Use short sentences, bullet points, and visual breaks

#### Chinese Text Handling
- **Font**: System Chinese fonts (PingFang SC, Microsoft YaHei, etc.)
- **Fallback**: Sans-serif with Chinese support
- **Rendering**: Ensure proper character spacing and line breaks
- **Pinyin**: Use proper tone marks (Gē Dé, Gē Dí, Xīn Jìng)

#### Content Localization
- All content is in English with Chinese characters for names
- Chinese characters should be prominently displayed
- Pinyin provided for pronunciation
- English explanations for all concepts

### Content Data

#### Option 1: 戈德 (Gē Dé)
- **Full Content**: As provided in user requirements
- **Slides**: 5 slides (overview, meaning, linguistic, app store, market)
- **Key Messages**: Best overall, formal, trustworthy, credible

#### Option 2: 戈迪 (Gē Dí)
- **Full Content**: As provided in user requirements
- **Slides**: 5 slides (overview, meaning, linguistic, app store, market)
- **Key Messages**: Gen-Z friendly, consumer-focused, approachable

#### Option 3: 心镜 (Xīn Jìng)
- **Full Content**: As provided in user requirements
- **Slides**: 5 slides (overview, meaning, linguistic, app store, market)
- **Key Messages**: Conceptual, philosophical, differentiated, mode/feature

#### Summary Slide
- **Content**: Comparison of all three options
- **Format**: Three-column layout (desktop) or stacked (mobile)
- **Key Differentiators**: Highlighted for each option

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

#### Keyboard Navigation
- All interactive elements keyboard accessible
- Logical tab order
- Visible focus indicators (2-3px accent color outline)
- Skip links if needed

#### Screen Reader Support
- Semantic HTML elements
- ARIA labels for icon-only buttons
- ARIA live regions for slide changes
- Alt text for images/icons
- Proper heading hierarchy

#### Color Contrast
- Text on background: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum
- All colors meet contrast requirements from design system

#### Touch Targets
- Minimum 44x44px for all interactive elements
- 8px minimum spacing between targets
- No hover-only interactions

#### Reduced Motion
- Respect `prefers-reduced-motion` media query
- Provide alternative navigation methods
- Disable or simplify animations when motion is reduced

### Accessibility Testing
- Test with screen readers (VoiceOver, NVDA)
- Test keyboard navigation
- Test with high contrast mode
- Test with zoom (up to 200%)
- Test on various devices and screen sizes

---

## Performance Requirements

### Core Web Vitals

#### Largest Contentful Paint (LCP)
- **Target**: < 2.5 seconds
- **Optimization**: 
  - Optimize images
  - Preload critical resources
  - Minimize render-blocking resources

#### First Input Delay (FID)
- **Target**: < 100 milliseconds
- **Optimization**:
  - Minimize JavaScript execution time
  - Code splitting
  - Lazy load non-critical code

#### Cumulative Layout Shift (CLS)
- **Target**: < 0.1
- **Optimization**:
  - Set dimensions for images
  - Reserve space for dynamic content
  - Avoid inserting content above existing content

### Loading Performance

#### Initial Load
- **Bundle Size**: < 200KB gzipped
- **Time to Interactive**: < 3.5 seconds on 3G
- **First Contentful Paint**: < 1.8 seconds

#### Runtime Performance
- **Animation Frame Rate**: 60fps
- **JavaScript Execution**: < 100ms per frame
- **Memory Usage**: Monitor and prevent leaks

### Optimization Strategies

1. **Code Splitting**: Lazy load slide components
2. **Image Optimization**: WebP with fallbacks, lazy loading
3. **Font Loading**: Use `font-display: swap`
4. **Bundle Optimization**: Tree shaking, minification
5. **Caching**: Appropriate cache headers

---

## Implementation Phases

### Phase 1: Foundation
- Set up project structure
- Implement base slide component
- Create navigation system
- Set up routing/state management

### Phase 2: Content Slides
- Implement Option 1 slides (5 slides)
- Implement Option 2 slides (5 slides)
- Implement Option 3 slides (5 slides)
- Implement summary slide

### Phase 3: Animations
- Implement slide transitions
- Add content reveal animations
- Add micro-interactions
- Optimize performance

### Phase 4: Polish
- Accessibility audit
- Performance optimization
- Cross-browser testing
- Responsive design refinement

### Phase 5: Testing & Launch
- User testing
- Bug fixes
- Final optimizations
- Deployment

---

## Success Criteria

### Functional
- ✅ All slides display correctly
- ✅ Navigation works on all devices
- ✅ Animations are smooth (60fps)
- ✅ Content is readable and scannable
- ✅ Summary slide clearly compares options

### Performance
- ✅ LCP < 2.5s
- ✅ FID < 100ms
- ✅ CLS < 0.1
- ✅ Bundle size < 200KB gzipped

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation works
- ✅ Screen reader compatible
- ✅ Touch targets meet size requirements

### User Experience
- ✅ Easy to navigate
- ✅ Clear visual hierarchy
- ✅ Engaging animations
- ✅ Consistent brand aesthetic
- ✅ Works on all screen sizes

---

## Open Questions / Decisions Needed

1. **Animation Library**: Use Framer Motion or CSS animations?
2. **Progress Indicator**: Include top progress bar or just bottom navigation?
3. **Auto-play**: Should presentation auto-advance (probably no)?
4. **Loop**: Should presentation loop back to start (probably no)?
5. **Export**: Should presentation be exportable as PDF/static (future consideration)?

---

## Document Status

**Version**: 1.0.0  
**Status**: Baseline Specification  
**Next Steps**: Review and approval, then implementation planning  
**Last Updated**: January 28, 2025

---

**This specification serves as the baseline for all implementation work. All development must align with this document and the PROJECT_CONSTITUTION.md.**
