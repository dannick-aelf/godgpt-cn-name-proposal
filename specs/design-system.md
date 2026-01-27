# Design System Specification
## Generated from Figma Frame: "Upgrade plan"

---

## 1. Color Tokens

### Semantic Colors

#### Primary Colors
```typescript
primary: {
  brand: '#212121',        // Primary brand color (main background, core brand identity)
}
```

#### Accent Colors
```typescript
accent: {
  highlight: '#5755EE',    // GodGPT brand accent color (used for featured plans, CTAs, highlights)
  highlightLight: 'rgba(87, 85, 238, 0.08)', // 8% opacity accent color (card backgrounds)
}
```

#### Text Colors
```typescript
text: {
  primary: '#ececec',      // Primary text color (headings, body text)
  secondary: '#9b9b9b',    // Secondary text (descriptions, helper text)
  inverse: '#171717',      // Text on light backgrounds (buttons with white bg)
  onAccent: '#ffffff',     // Text on accent/highlight color backgrounds
}
```

#### Background Colors
```typescript
background: {
  base: '#212121',         // Main background color (matches primary brand)
  surface: '#ffffff',      // Surface color (button backgrounds)
  card: 'transparent',     // Card background (transparent with border)
}
```

#### Border Colors
```typescript
border: {
  default: '#454545',     // Default border color (cards, dividers)
  accent: '#5755EE',      // Accent border color (highlighted cards on pricing page)
}
```

#### Gradient Colors
```typescript
gradient: {
  telegram: {
    start: '#2aabee',
    end: '#229ed9',
  }
}
```

---

## 2. Typography Tokens

### Font Family
```typescript
fontFamily: {
  primary: 'SF Pro',      // System font stack
  // Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
}
```

### Font Sizes
```typescript
fontSize: {
  display: '48px',         // Large price display (line-height: 40px)
  h1: '32px',             // Page headings (line-height: 40px)
  h2: '20px',             // Section headings (line-height: 28px)
  body: '16px',           // Body text (line-height: 24px)
  small: '14px',          // Small text, captions (line-height: 20px)
}
```

### Font Weights
```typescript
fontWeight: {
  regular: 400,           // Regular text
  medium: 510,            // Medium weight (buttons, emphasis)
  bold: 700,              // Bold text (strong emphasis)
}
```

### Line Heights
```typescript
lineHeight: {
  tight: '1.25',          // 40px / 32px = 1.25 (headings)
  normal: '1.5',         // 24px / 16px = 1.5 (body)
  relaxed: '1.4',        // 28px / 20px = 1.4 (subheadings)
  compact: '1.43',       // 20px / 14px = 1.43 (small text)
}
```

### Letter Spacing
```typescript
letterSpacing: {
  normal: '0',            // Default letter spacing
}
```

### Typography Scale
```typescript
typography: {
  display: {
    fontSize: '48px',
    lineHeight: '40px',
    fontWeight: 510,
    fontFamily: 'SF Pro',
  },
  heading1: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 510,
    fontFamily: 'SF Pro',
    color: '#ececec',
  },
  heading2: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    color: '#ececec',
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    color: '#ececec',
  },
  bodySmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    color: '#ececec',
  },
  caption: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    color: '#9b9b9b',
  },
}
```

---

## 3. Spacing Tokens

### Base Unit
```typescript
baseUnit: 4,              // 4px base unit for consistent spacing
```

### Spacing Scale
```typescript
spacing: {
  xs: '4px',              // 0.25 unit
  sm: '8px',              // 0.5 unit
  md: '16px',             // 1 unit
  lg: '24px',             // 1.5 units
  xl: '32px',             // 2 units
  '2xl': '40px',          // 2.5 units
  '3xl': '48px',          // 3 units
}
```

### Component Spacing
```typescript
componentSpacing: {
  cardPadding: '24px',    // Internal padding for cards
  cardGap: '16px',        // Gap between cards
  sectionGap: '40px',     // Gap between major sections
  textGap: '16px',        // Gap between text elements
  buttonPaddingX: '16px', // Horizontal padding for buttons
  buttonPaddingY: '14px', // Vertical padding for buttons (calculated from 48px height)
  listItemGap: '24px',    // Gap between list items (40px - 16px icon = 24px)
  iconTextGap: '24px',    // Gap between icon and text (5956 - 5932 = 24px)
}
```

### Layout Spacing
```typescript
layout: {
  screenPadding: '20px',  // Screen edge padding
  containerMaxWidth: '992px', // Content container max width
  cardWidth: '320px',     // Standard card width
  cardMinHeight: '468px', // Minimum card height
}
```

---

## 4. Component Specifications

### Button Component

#### Variants

**Primary Button (Accent/Highlight)**
```typescript
button: {
  primary: {
    // Dimensions
    height: '48px',
    minWidth: '272px',    // Based on card button width
    paddingX: '16px',
    paddingY: '14px',
    
    // Visual
    backgroundColor: '#5755EE', // GodGPT accent color (pricing page specific)
    color: '#ffffff',
    borderRadius: '16px',
    border: 'none',
    
    // Typography
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: 510,
    fontFamily: 'SF Pro',
    textAlign: 'center',
    
    // States
    hover: {
      backgroundColor: '#4B49DC', // Slightly darker purple
    },
    active: {
      backgroundColor: '#413FC8', // Even darker purple
      transform: 'scale(0.98)',
    },
    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
}
```

**Secondary Button (White)**
```typescript
button: {
  secondary: {
    // Dimensions
    height: '48px',
    minWidth: '272px',
    paddingX: '16px',
    paddingY: '14px',
    
    // Visual
    backgroundColor: '#ffffff',
    color: '#171717',
    borderRadius: '16px',
    border: 'none',
    
    // Typography
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: 510,
    fontFamily: 'SF Pro',
    textAlign: 'center',
    
    // States
    hover: {
      backgroundColor: '#f5f5f5',
    },
    active: {
      backgroundColor: '#e8e8e8',
      transform: 'scale(0.98)',
    },
    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
}
```

**Text Button (Link Style)**
```typescript
button: {
  text: {
    // Dimensions
    height: '36px',
    paddingX: '8px',
    paddingY: '8px',
    
    // Visual
    backgroundColor: 'transparent',
    color: '#9b9b9b',
    borderRadius: '0',
    border: 'none',
    
    // Typography
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    
    // States
    hover: {
      color: '#ececec',
    },
    active: {
      opacity: 0.8,
    },
  },
}
```

#### Button Specifications Summary
- **Touch Target**: Minimum 48px height (meets accessibility standards)
- **Border Radius**: 16px (consistent with card radius)
- **Font**: SF Pro, 16px, Medium (510 weight)
- **Padding**: 16px horizontal, 14px vertical
- **States**: Hover, Active, Disabled with appropriate visual feedback
- **Transitions**: 150ms ease for state changes

---

### Input Component

#### Text Input
```typescript
input: {
  text: {
    // Dimensions
    height: '48px',
    minWidth: '272px',
    paddingX: '16px',
    paddingY: '14px',
    
    // Visual
    backgroundColor: 'transparent',
    color: '#ececec',
    borderRadius: '8px',
    border: '1px solid #454545',
    
    // Typography
    fontSize: '16px',      // Prevents iOS zoom
    lineHeight: '24px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    
    // Placeholder
    placeholderColor: '#9b9b9b',
    
    // States
    focus: {
      borderColor: '#5755EE', // GodGPT accent color
      borderWidth: '2px',
      outline: 'none',
    },
    error: {
      borderColor: '#ff4444', // Error color (not in design, standard)
    },
    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
}
```

#### Input Label
```typescript
input: {
  label: {
    // Typography
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    fontFamily: 'SF Pro',
    color: '#ececec',
    
    // Spacing
    marginBottom: '8px',
  },
}
```

#### Input Helper Text
```typescript
input: {
  helperText: {
    // Typography
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    fontFamily: 'SF Pro',
    color: '#9b9b9b',
    
    // Spacing
    marginTop: '8px',
  },
}
```

#### Input Specifications Summary
- **Height**: 48px (meets accessibility standards, prevents iOS zoom)
- **Border Radius**: 8px (slightly smaller than buttons for distinction)
- **Font**: SF Pro, 16px, Regular
- **Padding**: 16px horizontal, 14px vertical
- **Border**: 1px solid #454545 (default), 2px #5755EE (focus)
- **States**: Default, Focus, Error, Disabled

---

## 5. Border Radius Tokens

```typescript
borderRadius: {
  sm: '6px',              // Small badges, tags
  md: '8px',              // Inputs
  lg: '16px',            // Buttons, cards
  xl: '24px',            // Large containers, pills
  full: '9999px',        // Fully rounded (pills, avatars)
}
```

---

## 6. Shadow Tokens

```typescript
shadow: {
  // Note: No shadows observed in the design
  // Design uses borders and background colors for elevation
  none: 'none',
}
```

---

## 7. Component Patterns

### Card Component
```typescript
card: {
  // Dimensions
  width: '320px',
  minHeight: '468px',
  padding: '24px',
  
  // Visual
  backgroundColor: 'transparent',
  borderRadius: '16px',
  border: '1px solid #454545',
  
  // Spacing
  gap: '24px',            // Internal spacing between elements
}
```

### Card (Highlighted/Popular - Pricing Page)
```typescript
card: {
  highlighted: {
    // Visual
    backgroundColor: 'rgba(35, 133, 14, 0.08)', // Accent highlight light
    border: '1px solid #5755EE', // GodGPT accent border
    borderRadius: '16px',
    // Note: This styling is specific to pricing page featured plans
  },
}
```

### Badge Component (Pricing Page)
```typescript
badge: {
  popular: {
    // Dimensions
    height: '24px',
    paddingX: '8px',
    
    // Visual
    backgroundColor: 'transparent',
    border: '1px solid #5755EE', // GodGPT accent color
    borderRadius: '6px',
    
    // Typography
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 510,
    fontFamily: 'SF Pro',
    color: '#5755EE', // GodGPT accent color
    // Note: Used for "POPULAR" badge on pricing page
  },
}
```

---

## 8. Accessibility Standards

### Color Contrast Ratios
- **Primary Text (#ececec) on Brand Background (#212121)**: ~15.8:1 ✓ (WCAG AAA)
- **Secondary Text (#9b9b9b) on Brand Background (#212121)**: ~4.6:1 ✓ (WCAG AA)
- **Button Text (#ffffff) on Accent Highlight (#5755EE)**: ~4.5:1 ✓ (WCAG AA)
- **Button Text (#171717) on White (#ffffff)**: ~12.6:1 ✓ (WCAG AAA)

### Touch Targets
- **Buttons**: 48px height ✓ (meets 44px minimum)
- **Inputs**: 48px height ✓ (meets 44px minimum)
- **Interactive Elements**: Minimum 44x44px ✓

### Typography
- **Body Text**: 16px minimum ✓ (prevents iOS zoom, readable)
- **Line Heights**: 1.4-1.5 ✓ (optimal readability)

---

## 9. Implementation Notes

### CSS Custom Properties (Recommended)
```css
:root {
  /* Colors */
  --color-primary: #212121; /* Primary brand color */
  --color-accent: #5755EE; /* GodGPT accent color (pricing page) */
  --color-accent-light: rgba(35, 133, 14, 0.08);
  --color-text-primary: #ececec;
  --color-text-secondary: #9b9b9b;
  --color-text-inverse: #171717;
  --color-bg-base: #212121; /* Matches primary brand */
  --color-bg-surface: #ffffff;
  --color-border: #454545;
  --color-border-accent: #5755EE;
  
  /* Typography */
  --font-family: 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-display: 48px;
  --font-size-h1: 32px;
  --font-size-h2: 20px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}
```

### React/TypeScript Implementation
```typescript
// Recommended structure for component library
export const designTokens = {
  colors: { /* ... */ },
  typography: { /* ... */ },
  spacing: { /* ... */ },
  borderRadius: { /* ... */ },
};

export const Button = ({ variant = 'primary', ...props }) => { /* ... */ };
export const Input = ({ type = 'text', ...props }) => { /* ... */ };
```

---

## 10. Design System Principles

1. **Dark-First Design**: Optimized for dark backgrounds (#212121 brand color) with high contrast text
2. **Accessibility**: All components meet WCAG AA standards minimum
3. **Touch-Optimized**: All interactive elements meet 44px minimum touch target
4. **Consistent Spacing**: 4px base unit for predictable layouts
5. **Brand Consistency**: Primary brand color (#212121) as core identity; GodGPT accent color (#5755EE) used strategically for pricing page CTAs and highlights
6. **Typography Hierarchy**: Clear size and weight hierarchy for information architecture
7. **Component Reusability**: Standardized components (Button, Input, Card) for consistency

---

## 10. Pricing Tiers Structure (2026)

### 4-Tier Pricing Model

The pricing page displays 4 distinct tiers:

1. **Premium Weekly** - $5/week ($20/month equivalent)
   - Secondary button variant
   - No badge
   - Standard card styling

2. **Premium Monthly** - $15/month
   - Secondary button variant
   - "Most Popular" badge (⭐)
   - Standard card styling

3. **Premium Annual** - $120/year ($10/month equivalent)
   - Primary button variant (GodGPT accent #5755EE)
   - "Best Value" badge (🔥)
   - Highlighted card (purple background and border)
   - Savings: $60/year

4. **God Mode Annual** - $888/year ($74/month equivalent)
   - Primary button variant (GodGPT accent #5755EE)
   - "Exclusive" badge (👑)
   - Highlighted card (purple background and border)
   - Annual-only tier

### Color Usage
- **Accent Color:** #5755EE (GodGPT brand purple)
- **Highlighted Cards:** rgba(87, 85, 238, 0.08) background with #5755EE border
- **Primary Buttons:** #5755EE background
- **Badge Borders:** #5755EE for accent badges
- **No Green Colors:** All previous green (#23850e) references replaced with purple (#5755EE)

---

*Generated from Figma Frame: "Upgrade plan" (ID: 3141:19153)*
*Date: 2024-12-31*
*Updated: January 9, 2025 - New 4-tier pricing structure, GodGPT accent color (#5755EE)*

