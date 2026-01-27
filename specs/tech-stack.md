# Tech Stack Specification

## Core Technologies

### Frontend Framework
- **React**: ^19.2.0
- **React DOM**: ^19.2.0
- **TypeScript**: ~5.9.3

### Build Tools
- **Vite**: ^7.2.4 (Build tool and dev server)
- **@vitejs/plugin-react**: ^5.1.1 (React plugin for Vite)

### Styling
- **Tailwind CSS**: ^4.1.18 (Utility-first CSS framework)
- **@tailwindcss/postcss**: ^4.1.18 (PostCSS plugin for Tailwind)
- **PostCSS**: ^8.5.6 (CSS processing)
- **Autoprefixer**: ^10.4.23 (CSS vendor prefixing)

### Icons
- **phosphor-react**: ^1.4.1 (Icon library)
- **react-icons**: ^5.5.0 (Icon library)

### Code Quality
- **ESLint**: ^9.39.1 (Linting)
- **@eslint/js**: ^9.39.1 (ESLint JavaScript config)
- **typescript-eslint**: ^8.46.4 (TypeScript ESLint integration)
- **eslint-plugin-react-hooks**: ^7.0.1 (React Hooks linting)
- **eslint-plugin-react-refresh**: ^0.4.24 (React Refresh linting)

### Type Definitions
- **@types/node**: ^24.10.1
- **@types/react**: ^19.2.5
- **@types/react-dom**: ^19.2.3

### Utilities
- **globals**: ^16.5.0 (Global variables for ESLint)

## Project Structure

```
project/
├── specs/
│   ├── design-system.md
│   ├── tokens.json
│   └── tech-stack.md
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Scripts

- `dev`: Start development server (Vite)
- `build`: Build for production (TypeScript compilation + Vite build)
- `lint`: Run ESLint
- `preview`: Preview production build

## Node.js Requirements

- **Node**: >=18.0.0
- **npm**: >=9.0.0

## Configuration Files

### Vite Config
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Tailwind Config
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
