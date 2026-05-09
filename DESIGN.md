# The Living Journal — Design System (Sage Flow)

## Philosophy
A deliberate, editorial aesthetic that reduces cognitive load for ADHD-focused productivity. Every visual decision should feel intentional, calm, and premium.

## Typography
| Role | Font | Weight | Size |
|------|------|--------|------|
| Display | Playfair Display | 700 | 48px |
| Headline LG | Playfair Display | 600 | 32px |
| Headline MD | Playfair Display | 500 | 24px |
| Body LG | Inter | 400 | 18px |
| Body MD | Inter | 400 | 16px |
| Label MD | Inter | 500 | 14px |
| Label SM | Inter | 600 | 12px |

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#181919` | Primary text, headings |
| `secondary` | `#526442` | Sage green accent, active states |
| `sage-glow` | `#9CAF88` | Agent Pulse, focus accents |
| `background` | `#fdf8f8` | Page background |
| `surface` | `#fdf8f8` | Card surfaces |
| `surface-container-lowest` | `#ffffff` | Elevated cards |
| `on-surface-variant` | `#444748` | Secondary text |
| `outline-variant` | `#c4c7c7` | Borders, dividers |
| `secondary-container` | `#d2e6bc` | Active nav highlights |
| `primary-container` | `#2d2d2d` | CTA buttons |

## Corners & Shadows
- **Card radius**: `rounded-lg` (8px / 0.5rem)
- **Button radius**: `rounded-lg` (8px)
- **Full-round**: `rounded-full` (avatars, FABs, toggles)
- **Shadow Level 1**: `0 4px 20px rgba(45, 45, 45, 0.04)` — cards at rest
- **Shadow Level 2**: `0 8px 30px rgba(45, 45, 45, 0.08)` — cards on hover/focus

## Spacing Scale
| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `xxl` | 64px |

## Icons
- **Library**: Material Symbols Outlined (Google Fonts CDN)
- **Default weight**: 400, FILL 0
- **Active/selected**: FILL 1
- **Size**: 20–24px for UI, 48px for display

## Agent Pulse
- A soft `#9CAF88` glow circle in the Sidebar
- Animates with a breathing pulse when background agents are active
- Static sage dot when agents are idle
