# Project Constitution
## GodGPT CN Name Proposal - Dynamic Modern UI Full Web Page Presentation

**Version**: 1.0.0  
**Last Updated**: January 28, 2025  
**Project Type**: Dynamic Modern UI Full Web Page Presentation

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [UI/UX Guidelines](#uiux-guidelines)
3. [Technical Architecture Principles](#technical-architecture-principles)
4. [Code Quality Standards](#code-quality-standards)
5. [Performance Requirements](#performance-requirements)
6. [Accessibility Requirements](#accessibility-requirements)
7. [Security Considerations](#security-considerations)
8. [Development Workflow](#development-workflow)
9. [Component Architecture](#component-architecture)
10. [State Management](#state-management)

---

## Design Philosophy

### Core Principles

1. **Dark-First Design**
   - Primary brand color (#212121) as the foundation
   - High contrast text (#ececec) for optimal readability
   - Strategic use of accent color (#5755EE) for CTAs and highlights
   - Transparent cards with borders for depth without heavy shadows

2. **Dynamic Presentation**
   - Full-page immersive experience
   - Smooth, purposeful animations and transitions
   - Progressive content revelation
   - Interactive elements that respond to user engagement

3. **Modern Aesthetic**
   - Clean, minimal interface
   - Generous whitespace (using 4px base unit system)
   - Consistent border radius (8px-16px range)
   - No shadows - elevation through borders and backgrounds

4. **Brand Consistency**
   - GodGPT accent color (#5755EE) for all interactive highlights
   - Consistent typography hierarchy (SF Pro system font stack)
   - Unified spacing system (4px base unit)
   - Cohesive component patterns

5. **User-Centric**
   - Every interaction provides clear feedback
   - Loading states for all async operations
   - Error states with actionable guidance
   - Empty states that guide user action

---

## UI/UX Guidelines

### Mobile-First Approach

- **Primary Target**: Mobile devices (0-767px)
- **Progressive Enhancement**: Scale up to tablet (768px+) and desktop (1024px+)
- **Touch-Optimized**: All interactive elements minimum 44x44px
- **Screen Edge Padding**: 20-24px on mobile, adjusted for larger screens

### Spacing System

- **Base Unit**: 4px (all spacing multiples of 4)
- **Scale**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (40px), 3xl (48px)
- **Component Spacing**:
  - Card padding: 24px
  - Card gap: 16px
  - Section gap: 40px
  - Text gap: 16px
  - Button padding: 16px horizontal, 14px vertical

### Typography Hierarchy

- **Display**: 48px (hero text, large numbers)
- **Heading 1**: 32px (page titles)
- **Heading 2**: 20px (section headings)
- **Body**: 16px (primary content - minimum for readability)
- **Small**: 14px (captions, helper text)

**Rules**:
- Maximum 3 font sizes per screen
- Minimum 16px for body text (prevents iOS zoom)
- Line heights: 1.25 (headings), 1.5 (body), 1.4 (subheadings)
- Font weights: 400 (regular), 510 (medium), 700 (bold)

### Color Usage

- **Primary Brand**: #212121 (background, core identity)
- **Accent Highlight**: #5755EE (CTAs, featured elements, borders)
- **Text Primary**: #ececec (headings, body)
- **Text Secondary**: #9b9b9b (descriptions, helper text)
- **Text Inverse**: #171717 (text on white surfaces)
- **Border Default**: #454545 (cards, dividers)
- **Border Accent**: #5755EE (highlighted elements)

**Contrast Requirements**:
- Primary text on brand background: ~15.8:1 (WCAG AAA)
- Secondary text on brand background: ~4.6:1 (WCAG AA)
- Button text on accent: ~4.5:1 (WCAG AA)

### Component Standards

#### Buttons
- **Height**: 48-56px (minimum 48px for accessibility)
- **Border Radius**: 16px
- **Padding**: 16px horizontal, 14px vertical
- **Font**: 16px, medium weight (510), SF Pro
- **States**: Default, Hover, Active (scale 0.98), Disabled (0.4 opacity), Loading
- **Variants**: Primary (accent bg), Secondary (white bg), Text (transparent)

#### Cards
- **Padding**: 24px
- **Border Radius**: 16px
- **Border**: 1px solid #454545 (default) or #5755EE (highlighted)
- **Background**: Transparent (default) or rgba(87, 85, 238, 0.08) (highlighted)
- **Gap**: 24px between internal elements

#### Inputs
- **Height**: 48-56px (minimum 48px)
- **Border Radius**: 8px
- **Border**: 1px solid #454545 (default), 2px #5755EE (focus)
- **Font**: 16px (prevents iOS zoom)
- **States**: Default, Focus, Error, Disabled

### Animation & Transitions

- **Micro-interactions**: 150-200ms (button press, icon change)
- **Standard transitions**: 200-300ms (page transitions, modal open)
- **Complex animations**: 300-500ms (card flip, complex state changes)
- **Easing**: `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`
- **Performance**: Use `transform` and `opacity` for 60fps animations
- **Reduced Motion**: Respect `prefers-reduced-motion` media query

### Interactive States

All interactive elements must have:
- **Default**: Normal appearance
- **Hover** (desktop): Subtle visual change (10% lighter/darker or opacity change)
- **Active/Pressed**: 0.8 opacity OR scale(0.98) with 150ms transition
- **Focus**: Visible 2-3px outline in accent color (#5755EE)
- **Disabled**: 0.4 opacity + `cursor: not-allowed` + `pointer-events: none`
- **Loading**: Spinner/skeleton + disable interaction

---

## Technical Architecture Principles

### Framework & Language

- **React 19**: Latest React features, server components ready
- **TypeScript 5.9**: Strict type checking, no `any` types
- **Vite 7**: Fast development, optimized production builds

### Component Architecture

1. **Component Structure**
   ```
   components/
   ├── ui/              # Reusable UI primitives (Button, Card, Input)
   ├── layout/          # Layout components (Header, Footer, Container)
   ├── sections/        # Full-page sections (Hero, Features, CTA)
   └── features/        # Feature-specific components
   ```

2. **Component Principles**
   - Single Responsibility: Each component has one clear purpose
   - Composition over Configuration: Build complex UIs from simple components
   - Props Interface: All props typed with TypeScript interfaces
   - Default Props: Provide sensible defaults for optional props
   - Controlled Components: Prefer controlled over uncontrolled where possible

3. **File Naming**
   - Components: PascalCase (e.g., `PricingCard.tsx`)
   - Utilities: camelCase (e.g., `formatPrice.ts`)
   - Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
   - Types: PascalCase with `.types.ts` suffix (e.g., `Pricing.types.ts`)

### Styling Architecture

- **Tailwind CSS 4**: Utility-first CSS framework
- **Design Tokens**: Import from `tokens.json` for consistency
- **CSS Custom Properties**: Use for dynamic theming
- **Component Styles**: Co-locate with components when needed
- **Global Styles**: Minimal, only for base resets and typography

**Styling Rules**:
- Prefer Tailwind utilities over custom CSS
- Use design tokens for colors, spacing, typography
- Mobile-first responsive classes (`sm:`, `md:`, `lg:`)
- No inline styles except for dynamic values
- CSS modules for component-specific styles if needed

### Code Organization

```
src/
├── components/         # React components
├── hooks/             # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── constants/        # Application constants
├── assets/           # Static assets (images, icons)
├── styles/           # Global styles, Tailwind config
├── App.tsx           # Root component
└── main.tsx          # Application entry point
```

### State Management

- **Local State**: `useState` for component-specific state
- **Shared State**: React Context for app-wide state
- **Server State**: React Query (if needed) for API data
- **Form State**: React Hook Form for complex forms
- **URL State**: React Router for navigation state

**State Principles**:
- Keep state as close to usage as possible
- Lift state up only when necessary
- Use derived state when possible (avoid redundant state)
- Normalize complex state structures

### Build & Development

- **Development**: Vite dev server with HMR
- **Production**: Optimized build with code splitting
- **Type Checking**: TypeScript compiler in strict mode
- **Linting**: ESLint with React and TypeScript plugins
- **Formatting**: Prettier (if configured)

---

## Code Quality Standards

### TypeScript Standards

1. **Strict Mode**: Always enabled
2. **No `any` Types**: Use `unknown` or proper types
3. **Explicit Return Types**: For public functions and components
4. **Interface over Type**: Prefer interfaces for object shapes
5. **Type Imports**: Use `import type` for type-only imports

```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // ...
};

// ❌ Bad
const Button = (props: any) => {
  // ...
};
```

### React Best Practices

1. **Functional Components**: Use function components exclusively
2. **Hooks**: Use hooks for state and side effects
3. **Memoization**: Use `React.memo`, `useMemo`, `useCallback` judiciously
4. **Key Props**: Always provide stable keys for lists
5. **Error Boundaries**: Implement error boundaries for production

```typescript
// ✅ Good
const MemoizedCard = React.memo(({ title, description }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
});

// ❌ Bad
const Card = ({ title, description }) => {
  return <div>{title}</div>; // Missing description
};
```

### Component Patterns

1. **Props Destructuring**: Destructure props in function signature
2. **Default Props**: Use default parameters
3. **Conditional Rendering**: Use ternary or logical AND
4. **Event Handlers**: Use arrow functions or `useCallback`
5. **Accessibility**: Include ARIA attributes where needed

```typescript
// ✅ Good
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={label}>
        {label}
        {required && <span aria-label="required">*</span>}
      </label>
      <input
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${label}-error` : undefined}
      />
      {error && <span id={`${label}-error`}>{error}</span>}
    </div>
  );
};
```

### Code Organization

1. **Imports Order**:
   - React and React-related
   - Third-party libraries
   - Internal components
   - Utilities and types
   - Styles

2. **Export Strategy**:
   - Named exports for components
   - Default exports only for pages/routes
   - Barrel exports (`index.ts`) for component directories

3. **File Size**: Keep components under 400 lines
4. **Function Length**: Keep functions under 50 lines
5. **Complexity**: Break down complex logic into smaller functions

### Documentation

1. **Component Documentation**: JSDoc comments for public APIs
2. **Complex Logic**: Inline comments explaining "why", not "what"
3. **README**: Component-level README for complex components
4. **Type Definitions**: Self-documenting through TypeScript types

```typescript
/**
 * PricingCard displays a pricing tier with features and CTA.
 * 
 * @param tier - The pricing tier information
 * @param isHighlighted - Whether this card should be highlighted
 * @param onSelect - Callback when user selects this tier
 */
interface PricingCardProps {
  tier: PricingTier;
  isHighlighted?: boolean;
  onSelect: (tierId: string) => void;
}
```

---

## Performance Requirements

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Loading Performance

- **Initial Bundle Size**: < 200KB gzipped
- **Time to Interactive**: < 3.5 seconds on 3G
- **First Contentful Paint**: < 1.8 seconds

### Runtime Performance

- **Animation Frame Rate**: 60fps for all animations
- **JavaScript Execution**: < 100ms per frame
- **Memory Usage**: Monitor and prevent memory leaks

### Optimization Strategies

1. **Code Splitting**:
   - Route-based code splitting
   - Component lazy loading for below-the-fold content
   - Dynamic imports for heavy dependencies

2. **Asset Optimization**:
   - Images: WebP format with fallbacks
   - Lazy loading for images below the fold
   - Responsive images with `srcset`
   - SVG optimization

3. **Bundle Optimization**:
   - Tree shaking for unused code
   - Minification and compression
   - Vendor chunk splitting

4. **Rendering Optimization**:
   - Virtual scrolling for long lists
   - `React.memo` for expensive components
   - `useMemo` and `useCallback` for expensive computations
   - Avoid unnecessary re-renders

5. **Network Optimization**:
   - Preconnect to external domains
   - Resource hints (preload, prefetch)
   - HTTP/2 server push (if applicable)

### Performance Monitoring

- Use React DevTools Profiler during development
- Lighthouse audits before production deployment
- Monitor Core Web Vitals in production
- Set up performance budgets in CI/CD

---

## Accessibility Requirements

### WCAG 2.1 Compliance

- **Level**: AA minimum (AAA where possible)
- **Color Contrast**: 
  - Normal text: 4.5:1 minimum
  - Large text (18px+): 3:1 minimum
  - Interactive elements: 3:1 minimum

### Semantic HTML

- Use proper HTML elements (`<button>`, `<nav>`, `<main>`, `<section>`, etc.)
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels associated with inputs
- Alt text for all images

### ARIA Attributes

- Use ARIA when semantic HTML isn't sufficient
- `aria-label` for icon-only buttons
- `aria-describedby` for form errors
- `aria-live` for dynamic content updates
- `role` attributes when necessary

### Keyboard Navigation

- **Tab Order**: Logical, sequential flow
- **Focus Indicators**: Visible 2-3px outline in accent color (#5755EE)
- **Skip Links**: Provide skip to main content
- **Keyboard Shortcuts**: Document and provide alternatives
- **Focus Management**: Manage focus in modals and dynamic content

### Screen Reader Support

- Test with screen readers (VoiceOver, NVDA, JAWS)
- Provide text alternatives for icons
- Announce dynamic content changes
- Use `aria-hidden` appropriately

### Touch Accessibility

- **Target Size**: Minimum 44x44px (iOS) / 48x48dp (Android)
- **Spacing**: 8px minimum between touch targets
- **No Hover-Only**: All features accessible via touch
- **Gesture Support**: Support native gestures where appropriate

### Testing Accessibility

- Automated: axe DevTools, Lighthouse accessibility audit
- Manual: Keyboard navigation, screen reader testing
- User Testing: Include users with disabilities in testing

---

## Security Considerations

### Client-Side Security

1. **Input Validation**:
   - Validate all user inputs
   - Sanitize data before rendering
   - Use TypeScript for type safety

2. **XSS Prevention**:
   - Never use `dangerouslySetInnerHTML` without sanitization
   - Use React's built-in XSS protection
   - Validate and sanitize external data

3. **Dependency Security**:
   - Regularly update dependencies
   - Use `npm audit` to check for vulnerabilities
   - Pin dependency versions in `package-lock.json`

4. **Environment Variables**:
   - Never commit secrets to version control
   - Use `.env` files for local development
   - Prefix public env vars with `VITE_` (Vite convention)

### Data Handling

1. **Sensitive Data**:
   - Never store sensitive data in localStorage
   - Use secure, httpOnly cookies for authentication
   - Encrypt sensitive data in transit (HTTPS)

2. **API Security**:
   - Validate API responses
   - Handle errors gracefully
   - Implement rate limiting on client side
   - Use CORS properly

3. **Content Security Policy**:
   - Implement CSP headers (if applicable)
   - Restrict inline scripts and styles
   - Whitelist trusted domains

### Privacy

1. **User Data**:
   - Minimize data collection
   - Obtain consent for data usage
   - Provide privacy policy
   - Comply with GDPR/CCPA if applicable

2. **Third-Party Services**:
   - Audit third-party scripts
   - Use privacy-respecting analytics
   - Implement cookie consent if needed

---

## Development Workflow

### Git Workflow

1. **Branch Naming**:
   - `feature/` - New features
   - `fix/` - Bug fixes
   - `refactor/` - Code refactoring
   - `docs/` - Documentation updates
   - `style/` - Styling changes

2. **Commit Messages**:
   - Use conventional commits format
   - Clear, descriptive messages
   - Reference issue numbers if applicable

3. **Pull Requests**:
   - Descriptive title and description
   - Link to related issues
   - Request review before merging
   - Ensure all checks pass

### Development Environment

1. **Local Setup**:
   - Node.js >= 18.0.0
   - npm >= 9.0.0
   - Git for version control

2. **Development Commands**:
   - `npm run dev` - Start development server
   - `npm run build` - Build for production
   - `npm run lint` - Run ESLint
   - `npm run preview` - Preview production build

3. **Code Quality Checks**:
   - TypeScript compilation must pass
   - ESLint must pass with no errors
   - All tests must pass (if applicable)

### Testing Strategy

1. **Unit Tests**: Test individual components and utilities
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test critical user flows (if applicable)
4. **Visual Regression**: Test UI consistency (if applicable)

### Deployment

1. **Pre-Deployment Checklist**:
   - All tests pass
   - Build succeeds without errors
   - Performance budgets met
   - Accessibility audit passed
   - Security audit passed

2. **Production Build**:
   - Optimized and minified
   - Source maps generated (for debugging)
   - Environment variables set correctly

---

## Component Architecture

### Component Hierarchy

```
App
├── Layout
│   ├── Header
│   ├── Main
│   │   ├── Hero Section
│   │   ├── Features Section
│   │   ├── Content Section
│   │   └── CTA Section
│   └── Footer
└── Modals/Overlays (if needed)
```

### Component Categories

1. **UI Primitives** (`components/ui/`):
   - Button, Card, Input, Badge, etc.
   - Highly reusable, minimal dependencies
   - Follow design system specifications

2. **Layout Components** (`components/layout/`):
   - Container, Grid, Stack, etc.
   - Provide structure and spacing
   - Responsive by default

3. **Section Components** (`components/sections/`):
   - Hero, Features, Pricing, etc.
   - Full-page sections
   - May compose UI primitives

4. **Feature Components** (`components/features/`):
   - Feature-specific components
   - Business logic included
   - May use hooks for state management

### Component Patterns

1. **Compound Components**: For related components that work together
2. **Render Props**: For flexible component composition
3. **Custom Hooks**: Extract reusable logic
4. **Higher-Order Components**: Use sparingly, prefer hooks

---

## State Management

### State Categories

1. **UI State**: Component visibility, modals, toggles
   - Use `useState` at component level
   - Lift up only when needed

2. **Form State**: User input, validation
   - Use React Hook Form for complex forms
   - Use `useState` for simple forms

3. **Application State**: User preferences, theme, etc.
   - Use React Context for app-wide state
   - Keep context providers minimal

4. **Server State**: API data, caching
   - Use React Query if needed
   - Use `useEffect` + `useState` for simple cases

### State Principles

1. **Single Source of Truth**: Don't duplicate state
2. **Derived State**: Compute from existing state when possible
3. **State Colocation**: Keep state close to where it's used
4. **Immutable Updates**: Always create new objects/arrays
5. **Normalize Complex State**: Flatten nested structures

---

## Design System Integration

### Token Usage

- Import design tokens from `specs/tokens.json`
- Use tokens for colors, spacing, typography
- Create TypeScript types from tokens
- Generate Tailwind config from tokens (if applicable)

### Component Library

- Build components following design system specifications
- Document component API and usage
- Provide examples and variants
- Ensure accessibility compliance

---

## Continuous Improvement

### Regular Reviews

- Code reviews for all changes
- Design system updates as needed
- Performance monitoring and optimization
- Accessibility audits

### Documentation Updates

- Keep README current
- Update component documentation
- Document architectural decisions
- Maintain changelog

### Learning & Growth

- Stay updated with React and ecosystem
- Experiment with new patterns (safely)
- Share knowledge with team
- Refactor technical debt regularly

---

## Conclusion

This constitution serves as the foundation for all development decisions in the GodGPT CN Name Proposal project. All team members should:

1. **Read and Understand**: Familiarize yourself with all sections
2. **Follow Consistently**: Apply these principles in all work
3. **Suggest Improvements**: Propose updates when better approaches are found
4. **Reference Regularly**: Use this document to guide decisions

**Remember**: Principles are guidelines, not rigid rules. Use judgment and context when applying them, but always have a good reason for deviations.

---

**Document Status**: Living Document  
**Review Frequency**: Monthly or as needed  
**Owners**: Development Team  
**Last Review**: January 28, 2025
