# StageSync

Vue 3 SaaS dashboard for music bookers, venue operators, artists, and tour managers.

---

## What It Is

A single main dashboard where users manage bookings, riders, venues, and tour logistics depending on their role. One app, scoped views per user type.

---

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Install & Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build      # production build
npm run test       # unit tests
npm run test:e2e   # e2e tests
```

---

## Tech Stack

| | |
|---|---|
| Framework | Vue 3 (Composition API) |
| Build | Vite |
| State | Pinia |
| Routing | Vue Router 4 |
| Styling | Tailwind CSS |
| Forms | VeeValidate + Zod |
| Testing | Vitest + Playwright |

---

## Project Structure

```
src/
├── components/
│   ├── common/       # buttons, inputs, modals, tables
│   ├── booking/      # offer cards, pipeline, contracts
│   ├── rider/        # rider builder sections
│   └── venue/        # venue cards, calendar
├── layouts/          # DashboardLayout, AuthLayout
├── pages/
│   └── dashboard/    # main dashboard view and sub-panels
├── stores/           # auth, bookings, riders, venues
├── services/         # API calls
└── types/            # TypeScript interfaces
```

---

## Dashboard Panels

The main dashboard shows contextual panels based on user role:

| Role | Panels |
|---|---|
| Artist | Upcoming shows, open offers, rider status |
| Booking Agent | Deal pipeline, artist roster, pending offers |
| Venue Booker | Availability calendar, incoming inquiries, rider inbox |
| Tour Manager | Itinerary, rider tracker, crew contacts |

---

## Design Guide

### Aesthetic

Early 2000s punk/alternative energy — think Warped Tour lineups, MTV2 graphics, DIY zine layouts — grounded in a clean SaaS shell. The tension between raw and functional is intentional. It should feel like a tool built *by* someone who goes to shows, not a startup template.

### Tone

Blunt. Direct. No soft corporate language. Labels say "Reject" not "Decline offer." Actions are verbs. Nothing is "optimized" or "seamless."

---

### Colors

Light mode only. High contrast. No gradients.

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F5F4F0` | Page background (off-white, slightly warm) |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-border` | `#1A1A1A` | All borders — heavy, black |
| `--color-text` | `#111111` | Body text |
| `--color-text-muted` | `#555555` | Secondary labels |
| `--color-accent` | `#D4FF00` | Primary action — electric yellow-green |
| `--color-accent-dark` | `#B8E000` | Accent hover state |
| `--color-danger` | `#FF2D2D` | Destructive actions, error states |
| `--color-success` | `#00C44F` | Confirmed, signed, done |
| `--color-neutral` | `#E0DED8` | Disabled, inactive |

The yellow-green accent is the one loud color. Everything else is near-monochrome.

---

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Headings | `Space Grotesk` | 700 | 24–36px |
| Labels / UI | `Space Grotesk` | 500 | 12–14px |
| Body | `Inter` | 400 | 14–16px |
| Monospace (riders, contracts) | `JetBrains Mono` | 400 | 13px |

- Headings are all-caps where space allows
- Letter-spacing on labels: `0.08em`
- No decorative fonts — legibility first

---

### Borders & Elevation

- **All cards and panels**: `border: 2px solid #1A1A1A`
- **No box shadows** — use borders for depth, not drop shadows
- **No rounded corners on containers** — panels and cards are sharp rectangles
- **Dividers**: `1px solid #1A1A1A`, full-width

The grid should feel like a zine layout or a setlist printed on cardstock.

---

### Buttons

Slightly rounded — `border-radius: 4px`. Not pill-shaped, not square.

```
Primary     bg: #D4FF00  border: 2px solid #1A1A1A  text: #111111  hover: bg #B8E000
Secondary   bg: #FFFFFF  border: 2px solid #1A1A1A  text: #111111  hover: bg #F0EFE9
Danger      bg: #FF2D2D  border: 2px solid #1A1A1A  text: #FFFFFF  hover: bg #CC0000
Ghost       bg: none     border: 2px solid #1A1A1A  text: #111111  hover: bg #F0EFE9
```

- Font: `Space Grotesk` 500, uppercase, `letter-spacing: 0.06em`
- Padding: `8px 16px` (small), `10px 20px` (default)
- No gradients, no glow, no shadows

---

### Form Inputs

```
border: 2px solid #1A1A1A
border-radius: 4px
background: #FFFFFF
padding: 8px 12px
font: Inter 14px
focus: border-color #D4FF00, outline: none
error: border-color #FF2D2D
```

---

### Status Badges

Flat, bordered, no fill except for confirmed states.

| Status | Style |
|---|---|
| Confirmed | bg `#00C44F`, text white, border black |
| Pending | bg white, text `#111`, border black |
| Hold | bg `#E0DED8`, text `#555`, border black |
| Rejected | bg `#FF2D2D`, text white, border black |

`border-radius: 3px`, `font-size: 11px`, uppercase, `letter-spacing: 0.08em`

---

### Layout

- Sidebar nav: fixed left, `240px` wide, `border-right: 2px solid #1A1A1A`, background `#F5F4F0`
- Main content: padded `32px`, max-width `1280px`
- Dashboard grid: CSS Grid, `gap: 16px`, columns defined per panel layout
- No animated transitions on layout — state changes are instant

---

### Icons

Use [Phosphor Icons](https://phosphoricons.com/) — weight `regular` or `bold`. No filled/rounded icon sets. Icons should feel utilitarian, not friendly.

---

### What to Avoid

- Gradients of any kind
- Drop shadows
- Pill-shaped buttons or blob shapes
- Rounded card corners
- Pastel or muted accent colors
- Friendly/bubbly illustration styles
- Micro-animations on standard interactions
- Emoji in UI labels

---

## License

Private. All rights reserved.
