# GodGPT CN Name Proposal

A dynamic modern UI full web page presentation for GodGPT Chinese name proposal.

## Project Structure

```
godgpt-cn-name-proposal/
├── specs/
│   ├── design-system.md    # Design system specifications
│   ├── tokens.json          # Design tokens (colors, typography, spacing)
│   └── tech-stack.md        # Technology stack documentation
├── PROJECT_CONSTITUTION.md  # Project principles and guidelines
└── README.md
```

## Project Constitution

**All development must follow the [PROJECT_CONSTITUTION.md](./PROJECT_CONSTITUTION.md)**. This document establishes:

- Design philosophy and UI/UX guidelines
- Technical architecture principles
- Code quality standards
- Performance requirements
- Accessibility requirements
- Security considerations
- Development workflow

## Baseline Specification

**Implementation must follow the [SPECIFICATION.md](./SPECIFICATION.md)**. This document defines:

- Complete slide structure and content for 3 Chinese naming options
- Navigation system (minimalist bottom navigation)
- Animation and micro-animation specifications
- UI/UX requirements for presentation slides
- Technical implementation details
- Content organization and display rules

## Specifications

All design and technical specifications are maintained in the `specs/` directory:

- **Design System**: Complete design system with colors, typography, spacing, and component specifications
- **Design Tokens**: JSON format design tokens for implementation
- **Tech Stack**: Complete list of technologies, dependencies, and configuration

## Getting Started

This is a fresh project. Implementation will follow:

1. The principles in `PROJECT_CONSTITUTION.md`
2. The specifications in the `specs/` directory
3. The tech stack documented in `specs/tech-stack.md`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is deployed to GitHub Pages automatically via GitHub Actions.

**Live Site**: https://dannick-aelf.github.io/godgpt-cn-name-proposal/

The deployment workflow:
- Automatically builds and deploys on every push to `main` branch
- Uses GitHub Actions for CI/CD
- Deploys to GitHub Pages

**To enable GitHub Pages** (if not already enabled):
1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on the next push
