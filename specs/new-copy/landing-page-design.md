# Effect Landing Page Design Specification

## Design System

### Color Palette
- **Background**: #000000 (Pure black)
- **Primary Surface**: #0A0A0A (Near black)
- **Secondary Surface**: #141414 (Slightly lighter)
- **Border**: #262626 (Subtle gray)
- **Text Primary**: #FFFFFF (Pure white)
- **Text Secondary**: #A3A3A3 (Muted gray)
- **Text Tertiary**: #737373 (Dimmed)
- **Accent Green**: #22C55E (Effect brand green)
- **Accent Red**: #EF4444 (Error/complexity indicator)
- **Code Background**: #0F0F0F
- **Code Border**: #1F1F1F

### Typography
- **Headings**: Inter Display (or similar geometric sans)
- **Body**: Inter
- **Code**: JetBrains Mono or Fira Code
- **Weights**: 
  - Thin (100) for large displays
  - Regular (400) for body
  - Medium (500) for emphasis
  - Bold (700) for CTAs

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

---

## Navigation Bar

### Layout
- **Fixed position**, backdrop blur effect
- **Height**: 64px
- **Background**: rgba(0, 0, 0, 0.8) with 10px blur
- **Border bottom**: 1px solid #262626

### Content
```
[Effect Logo] ←32px→ Docs | Examples | Community ←auto→ v3.10.18 | GitHub | Discord
```

### Elements
- **Logo**: Monochrome white Effect logo, 24px height
- **Nav Links**: Text secondary, hover to white with subtle transition
- **Version Badge**: 
  - Background: #141414
  - Border: 1px solid #262626
  - Padding: 4px 12px
  - Font: Mono, 12px
  - Green dot indicator for latest
- **Icons**: GitHub and Discord, 20px, feather icons style

---

## Hero Section

### Layout (Split Screen)
- **Left**: 45% width, content
- **Right**: 55% width, animated graph
- **Height**: 100vh - nav height
- **Padding**: 128px horizontal on ultrawide

### Left Content
```
TypeScript for engineers 
building production-grade systems
─────────────────────────────────
A batteries-included toolkit for async workflows, 
typed errors, dependency injection, observability, 
and more—for AI, infra, and everything in between.

[Get Started] → [Community]

Used in production by:
Vercel · MasterClass · Zendesk
```

### Typography Hierarchy
- **Headline**: 
  - Font size: 56px (desktop) / 40px (mobile)
  - Line height: 1.1
  - Font weight: 100
  - Letter spacing: -0.02em
- **Subheadline**: 
  - Font size: 20px
  - Line height: 1.5
  - Color: Text secondary
  - Max width: 480px
- **CTA Buttons**:
  - Primary: White bg, black text, 48px height, 24px padding horizontal
  - Secondary: Transparent, white border, same dimensions
  - Arrow animation on hover (→ becomes longer)
- **Trust indicators**: 
  - Font size: 14px
  - Color: Text tertiary
  - Logo height: 16px, monochrome

### Right Side - Graph Visualization

#### Canvas Design
- **Background**: Subtle grid pattern (#0A0A0A lines)
- **Axes**: 
  - Color: #262626
  - Labels: Text tertiary, 12px
  - Dashed grid lines every major tick
- **Curves**:
  - Without Effect: #EF4444, 3px stroke, growing exponentially
  - With Effect: #22C55E, 3px stroke, linear growth
  - Smooth bezier curves with slight glow effect
- **Annotations**:
  - Appear as dots on timeline
  - Expand to show text on animation
  - Background: #141414 with 1px border
  - Connected with thin line to curve

#### Animation Sequence
1. Grid fades in (0-500ms)
2. Axes draw (500-1000ms)
3. Green line animates left to right (1000-3000ms)
4. Red line follows, diverging (1500-3500ms)
5. Annotations pop in sequentially (3500-5000ms)
6. Subtle floating animation on completion

---

## Interactive Examples Section

### Container
- **Background**: #0A0A0A
- **Border**: 1px solid #262626
- **Border radius**: 12px
- **Padding**: 32px

### Example Cards Grid
- **Layout**: 3 columns (desktop), 1 column (mobile)
- **Gap**: 16px

### Individual Card Design
```
┌─────────────────────────┐
│ ● Effect.succeed        │ ← Header (green dot for status)
│ ─────────────────────   │
│ Create an effect that   │ ← Description
│ always succeeds         │
│                         │
│ [Run] [Reset]          │ ← Action buttons
└─────────────────────────┘
```

- **Background**: #141414
- **Border**: 1px solid #262626 (glows green when running)
- **Hover**: Border becomes #333, slight scale(1.02)
- **Running state**: Animated border gradient
- **Success state**: Green flash, then fade
- **Error state**: Red flash with shake animation

---

## Problem Section

### Visual Treatment
- **Large background text**: "PROBLEMS" in #0A0A0A at 200px, behind content
- **Problem items**: Displayed as terminal-style output

```
$ npm start
> Async flows turn into spaghetti
> Errors go uncaught until production  
> Tests become painful
> Global state leaks across modules
> Logs tell you something failed—but not what or where
```

- **Font**: Monospace
- **Prompt color**: #737373
- **Error color**: #EF4444
- **Typing animation**: Each line appears with cursor effect

---

## Why Effect Section

### Section Header
- **Background**: Gradient mesh (very subtle green to black)
- **Large quote**: Font size 32px, weight 100

### Feature Grid
- **6 cards** in 3x2 grid
- **Card design**:
  ```
  ┌─────────────────────────────────┐
  │ ✓ Dependency injection          │
  │ ─────────────────────────────── │
  │ No decorators, no magic.        │
  │ Just services you declare,      │
  │ provide, and test.              │
  │                                 │
  │ [View example →]                │
  └─────────────────────────────────┘
  ```
- **Hover**: Subtle glow effect, slight Y translation
- **Check mark**: Green with subtle pulse animation

### AI Section
- **Background pattern**: Subtle neural network visualization in #0A0A0A
- **Code example**: 
  - Syntax highlighted
  - Line numbers in #262626
  - Active line highlighting on hover
- **Company logos**: Monochrome, 32px height
- **Podcast links**: Play button overlay on hover

---

## Developer Tools Section

### Tool Cards
- **Layout**: 2x2 grid
- **Visual style**: Screenshot with glass morphism overlay

```
┌─────────────────────────┐
│ [Tool Screenshot]       │
│ ███████████████████████ │
│ ███████████████████████ │
│ ┌─────────────────────┐ │
│ │ Effect DevTools     │ │ ← Overlay
│ │ Visualize running   │ │
│ │ effects in real time│ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

- **Screenshot**: Slightly dimmed
- **Overlay**: 
  - Background: rgba(0, 0, 0, 0.9)
  - Backdrop blur: 10px
  - Border: 1px solid rgba(255, 255, 255, 0.1)

---

## Technical Foundation

### Three Pillars Layout
```
Effects          Runtime          Schema
───────          ───────          ──────
[Code]           [Code]           [Code]
                                 
Description      Description      Description

[Learn more →]   [Learn more →]   [Learn more →]
```

- **Column separators**: Vertical lines in #262626
- **Code blocks**: 
  - Max height with fade to black at bottom
  - Subtle syntax highlighting
  - Copy button on hover

---

## Social Proof Bar

### Design
- **Background**: #141414
- **Layout**: Centered flex container
- **Metrics**: 
  ```
  15K+            1M+              4.8K+
  GitHub Stars    Weekly Downloads Discord Members
  ```
- **Number style**: Font size 32px, weight 700, white
- **Label style**: Font size 14px, text tertiary

---

## FAQ Section

### Accordion Style
```
┌─────────────────────────────────────────┐
│ + Why does Effect's syntax look         │
│   different from typical TypeScript?    │
└─────────────────────────────────────────┘
```

- **Closed state**: Plus icon, single line
- **Open state**: 
  - Minus icon
  - Content slides down with subtle animation
  - Answer in text secondary
  - Code examples with syntax highlighting
- **Hover**: Background to #141414

---

## Final CTA

### Layout
- **Centered content**, max-width 800px
- **Background**: Subtle radial gradient from green/10% to transparent
- **CTAs in horizontal line**:
  ```
  [Get Started →]  [★ Star on GitHub]  Read the Docs
      Primary          Secondary           Text
  ```

---

## Responsive Breakpoints
- **Mobile**: < 768px (Stack everything, reduce font sizes by 20%)
- **Tablet**: 768px - 1024px (2 column grids become 1)
- **Desktop**: 1024px+ (Full layout)
- **Ultra-wide**: > 1920px (Max content width 1400px, centered)

## Animation Principles
- **Subtle and smooth**: 200-300ms transitions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **No jarring movements**: Fade and scale, avoid slides
- **Performance**: Use transform and opacity only
- **Reduce motion**: Respect prefers-reduced-motion

## Accessibility
- **Focus states**: 2px white outline with 2px offset
- **Contrast**: All text passes WCAG AA
- **Keyboard navigation**: Full support
- **Screen readers**: Proper ARIA labels
- **Skip links**: Hidden but available

This design emphasizes clarity, sophistication, and technical precision while maintaining the "infrastructure" feel appropriate for a production-grade tool.