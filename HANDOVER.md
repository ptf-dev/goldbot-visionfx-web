# Vision FX — Developer Handover Document

## Overview

Landing page for **Vision FX**, a forex/crypto trading signals platform. Single-page marketing site with 10 sections.

- **Live URL**: http://visionfx.xpipstech.com/
- **Repo**: https://github.com/ptf-dev/goldbot-visionfx-web
- **Figma**: https://www.figma.com/design/iEymihaN3rd8g0FU7nGPOQ/Vision-FX.?node-id=0-1

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.1.6 (App Router) |
| React | 19.2.3 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Font | Montserrat (Google Fonts) |
| gsap | 3.14.2 (DotGrid animation) |
| ogl | 1.0.11 (RippleGrid — unused, can remove) |
| three.js | 0.182.0 (PixelBlast — unused, can remove) |
| postprocessing | 6.38.2 (PixelBlast — unused, can remove) |

---

## Project Structure

```
goldbot-visionfx-web/
├── app/                          # Next.js application root
│   ├── Dockerfile                # Multi-stage Docker build (standalone)
│   ├── next.config.ts            # output: "standalone"
│   ├── package.json
│   ├── public/images/            # All static images (exported from Figma)
│   │   ├── logo.png
│   │   ├── hero-image.png
│   │   ├── gold-bot-section.png  # Gold robot background for PremiumCard
│   │   ├── reviews-section.png   # Telegram screenshot testimonials
│   │   ├── about-us.png
│   │   ├── before-trading.png
│   │   ├── after-trading.png
│   │   ├── hero-wrapper.png      # Lifestyle image for JoinVIP
│   │   ├── social-btns.png
│   │   ├── premium-section.png   # (unused — was full Figma export)
│   │   ├── before-after.png      # (unused — was full Figma export)
│   │   └── footer-bg.png         # (unused — was full Figma export)
│   └── src/
│       ├── app/
│       │   ├── layout.tsx        # Root layout, Montserrat font
│       │   ├── page.tsx          # Composes all 10 section components
│       │   ├── globals.css       # Theme colors, animations, utilities
│       │   └── favicon.ico
│       └── components/
│           ├── Header.tsx        # Fixed nav, mobile hamburger menu
│           ├── Hero.tsx          # DotGrid background, shimmer headline
│           ├── BenefitsBar.tsx   # Scrolling ticker marquee
│           ├── Reviews.tsx       # Testimonial screenshots + Telegram CTA
│           ├── PremiumCard.tsx   # Robot bg + pricing card overlay
│           ├── AboutUs.tsx       # About image + description
│           ├── BeforeAfter.tsx   # Before/After cards with arrows
│           ├── JoinVIP.tsx       # Crown icon, features list, lifestyle img
│           ├── FAQs.tsx          # Accordion with gold active border
│           ├── Footer.tsx        # CTA + nav links
│           ├── DotGrid.tsx       # ✅ ACTIVE — Canvas dot grid (gsap)
│           ├── PixelBlast.tsx    # ❌ UNUSED — Can be deleted
│           └── RippleGrid.tsx    # ❌ UNUSED — Can be deleted
```

---

## Page Sections (in order)

| # | Component | Section ID | Description |
|---|-----------|-----------|-------------|
| 1 | Header | — | Fixed top nav, hamburger on mobile, gold "Enroll Now" CTA |
| 2 | Hero | — | DotGrid animated background, shimmer "Trusted Since 2016", star ratings, two CTAs |
| 3 | BenefitsBar | — | Auto-scrolling ticker with 4 benefit items |
| 4 | Reviews | `#reviews` | "Real Traders. Real Results." + screenshot image + Telegram CTA pill |
| 5 | PremiumCard | `#gold-bot` | Gold robot background image, €400 pricing card overlaid |
| 6 | AboutUs | — | Full-width about image + description text |
| 7 | BeforeAfter | — | Side-by-side cards with labels + arrow icons |
| 8 | JoinVIP | `#features` | Crown icon, 6 feature checkmarks, lifestyle image |
| 9 | FAQs | `#faqs` | 5 accordion items, gold border on active, "Questions?" in gold |
| 10 | Footer | — | "Ready to Change Your Life?" CTA + nav links |

---

## Design System

### Colors (defined in `globals.css` @theme)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#050505` | Page background |
| `--color-foreground` | `#ffffff` | Default text |
| `--color-gold` | `#c9a84c` | Primary accent (buttons, highlights) |
| `--color-gold-dark` | `#a68a3e` | Gold hover states |
| `--color-gray-light` | `#d0d5dd` | Secondary text |
| `--color-gray-mid` | `#98a2b3` | Muted text |
| `--color-gray-dark` | `#1a1a1a` | Dark surfaces |
| `--color-card` | `#0f0f0f` | Card backgrounds |
| `--color-border` | `rgba(208,213,221,0.15)` | Borders |

### CSS Utility Classes

- `.gold-gradient` — Gold gradient background for buttons
- `.gold-text` — Gold gradient text (clip)
- `.shimmer-text` — Animated shimmer gold text (used on hero h1)
- `.ticker-scroll` — Infinite horizontal scroll animation
- `.grid-pattern` — Subtle grid background (unused currently)

### Animations

- `fade-up` — Fade in + slide up (with delay variants 1-4)
- `float` / `float-slow` — Gentle vertical float
- `glow-pulse` — Pulsing glow (removed from hero, still in CSS)
- `shimmer` — Text shimmer sweep

---

## Deployment

### Docker (Coolify)

The app is deployed via Docker on Coolify at `65.108.121.172:8000`.

```bash
# Build
docker build -t visionfx ./app

# Run
docker run -p 3000:3000 visionfx
```

The Dockerfile uses Next.js standalone output — no `node_modules` needed at runtime.

### Local Development

```bash
cd app
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

---

## Known Issues / TODO

1. **Unused dependencies** — `three`, `postprocessing`, `ogl` can be removed (were used by PixelBlast/RippleGrid, now replaced by DotGrid which only needs `gsap`). Delete `PixelBlast.tsx` and `RippleGrid.tsx` too.

2. **Unused images** — `premium-section.png`, `before-after.png`, `footer-bg.png` are full Figma section exports that caused duplicate content. Safe to delete.

3. **Team photo** — Client wants to add a team/founders photo to the site (two people with gold robot). Image needs to be placed in `public/images/` and wired into a component (AboutUs section is the natural fit).

4. **No mobile hamburger animation** — Menu opens/closes instantly, no slide transition.

5. **All links are anchors** — `#enroll`, `#telegram`, etc. don't go anywhere yet. Need real URLs (Telegram invite link, payment page, etc.).

6. **No SEO/OG tags** — Only basic title/description in layout.tsx metadata. Needs Open Graph image, Twitter card, etc.

7. **No analytics** — No Google Analytics, Meta Pixel, or similar tracking.

8. **HTTP only** — Site is served over HTTP (no SSL). Needs HTTPS configured on Coolify/reverse proxy.

9. **Reviews are a static image** — `reviews-section.png` is a Figma export. If reviews need to be dynamic/editable, this needs to be rebuilt as actual components with data.

10. **DotGrid performance on low-end mobile** — The canvas animation runs a requestAnimationFrame loop. Consider adding `prefers-reduced-motion` media query support or disabling on mobile.

---

## Git Info

- **Branch**: `main`
- **Remote**: `https://github.com/ptf-dev/goldbot-visionfx-web.git`
- **GitHub account**: `ptf-dev`
