# Function.ai Design System Extraction

Source inspected with Playwright MCP: https://www.function.ai/
Page title: Medical Intelligence (MI) by Function
Extraction date: 2026-05-21
Viewports sampled: 929x917 and 1440x1000

This document records the design language, tokens, layout behavior, typography, colors, assets, and component patterns extracted from the live Function.ai homepage. Measurements marked as "computed" came directly from browser computed styles.

## 1. Overall Creative Direction

The site uses a luxury editorial / medical-intelligence aesthetic:

- High contrast black and white foundation.
- Large serif display typography as the primary brand signal.
- Sparse copy, long scroll narrative, and cinematic pacing.
- Scientific/medical tone without default health-tech blue.
- Minimal chrome: almost no decorative borders, no visible card-heavy SaaS layout, no drop-shadow driven depth.
- Motion-led experience: text reveal, pinned sections, scroll progress, and moving/person asset strips.
- Editorial composition: huge headlines, centered moments, isolated text blocks, and full-bleed image/video-like sections.

## 2. CSS Variables Extracted

```css
:root {
  --color--black: #000;
  --color--white: white;
  --color--brown: #2d2420;
  --color--warm-gray: #c0bcb5;
  --color--dark-gray: #3c3d42;
  --color--orange: #c07858;

  --font--main: Ftbase, sans-serif;
  --font--accent: "Financier Display", sans-serif;
  --font--mono: Martianmono, Arial, sans-serif;

  --reveal: .6s cubic-bezier(.53, .02, 0, .99);
  --ease: 0.8s cubic-bezier(0.84, 0.00, 0.16, 1.00);
}
```

## 3. Color System

### Primary Palette

| Token | Value | Usage |
| --- | --- | --- |
| Black | `#000000` | Hero background, footer shell, dark narrative sections |
| White | `#ffffff` | Body background, reversed text, footer inner panel |
| Brown | `#2d2420` | Warm text moments and contrast against neutral scenes |
| Warm gray | `#c0bcb5` / extracted as `#c0bcbc` in one computed sample | Soft neutral accent |
| Dark gray | `#3c3d42` | Dark neutral UI/section accent |
| Orange | `#c07858` | Warm highlight/accent token, not dominant in sampled visible elements |

### Observed Color Usage

- Text colors were almost entirely `#ffffff`, `#000000`, and `#2d2420`.
- Backgrounds were mainly `#ffffff` and `#000000`.
- The page avoids saturated medical colors. It relies on contrast, serif type, and asset mood instead.
- UI does not depend on gradients or colorful surfaces.

## 4. Typography

### Font Families

| Role | Family | Observed Use |
| --- | --- | --- |
| Main sans | `Ftbase, sans-serif` | Body text, links, nav, utility copy, labels |
| Accent serif | `"Financier Display", sans-serif` | H1/H2/H3, major narrative statements |
| Mono | `Martianmono, Arial, sans-serif` | Small technical labels, eyebrow/meta text |

### Font Weights

Computed distribution:

- `300`: dominant for body and display typography.
- `400`: common for utility text.
- `500`: used sparingly for small labels and emphasis.

### Display Typography

| Element | Font | Size | Weight | Line height | Notes |
| --- | --- | ---: | ---: | ---: | --- |
| Hero H1 | Financier Display | `128px` at 929px viewport | 300 | `119.04px` | Very tight, approx 0.93 ratio |
| Large reveal H2 | Financier Display | `181px` at 1440px viewport | 300 | `168.33px` | Split into words/chars for animation |
| Section H2 | Financier Display | `104px` | 300 | `96.72px` | Reversed white on black |
| "AI for humans" | Financier Display | `80px` | 300 | `74.4px` | Centered, compact title |
| Mid section H2 | Financier Display | `55.04px` | 300 | `49.536px` | Tight, around 0.9 ratio |
| H3 cards/statements | Financier Display | `48px` | 300 | `52.8px` | More relaxed, around 1.1 ratio |
| Feature title | Financier Display | `40.96px` | 300 | `36.864px` | Small editorial display inside feature modules |

### Body / Utility Typography

| Use | Font | Size | Weight | Line height |
| --- | --- | ---: | ---: | ---: |
| Body default | Ftbase | `18px` | 300 | `18px` default on body |
| Paragraph feature copy | Ftbase | `18.08px` | 300 | `23.504px` |
| Nav/link | Ftbase | `16px` | 300 | `20.8px` |
| Footer link | Ftbase | `17px` | 400 | `22.1px` |
| Small mono labels | Martianmono | `11.04px` | 400 | not always visible |
| Secondary intro row | Ftbase | `36px` | 300 | `46.8px` |

### Typography Rules To Reuse

- Pair an elegant high-contrast serif with a quiet sans.
- Keep display type light (`font-weight: 300`).
- Use tight display leading, often `0.9-0.95`.
- Avoid heavy bold titles.
- Use body text sparingly, with generous spatial isolation.
- Use mono only as a small scientific/technical accent, not for long reading.

## 5. Font Utility Classes Found

```css
.f-9 { font-size: 0.5625rem; }
.f-10 { font-size: 0.625rem; }
.f-12 { font-size: 0.75rem; }
.f-13 { font-size: 0.8125rem; }
.f-14 { font-size: 0.875rem; }
.f-15 { font-size: 0.9375rem; }
.f-16 { font-size: 1rem; }
.f-19 { font-size: 1.1875rem; }
.f-20 { font-size: 1.25rem; }
.f-32 { font-size: 2rem; }
.f-inherit { font-size: inherit; }
.f-181 { font-size: 181px; }
.f-80 { font-size: 80px; }

.weight-200 { font-weight: 200; }
.weight-300 { font-weight: 300; }
.weight-400 { font-weight: 400; }
.weight-500 { font-weight: 500; }
.weight-600 { font-weight: 600; }
.weight-700 { font-weight: 700; }
.weight-800 { font-weight: 800; }
```

Responsive overrides observed for `.f-181`:

```css
@media screen and (max-width: 991px) and (min-width: 767px) {
  .hero_leave .f-181 { font-size: 6.5rem; }
}

@media screen and (max-width: 768px) and (min-width: 479px) {
  .hero_leave .f-181 { font-size: 5rem; }
}

@media screen and (max-width: 480px) {
  .hero_leave .f-181 { font-size: 3rem; }
}
```

## 6. Spacing System

The site uses a utility scale based mostly on rem values, with dense 4px/8px increments and larger editorial jumps.

### Gap Scale

```css
.gap-4 { gap: .25rem; }
.gap-6 { gap: .375rem; }
.gap-8 { gap: .5rem; }
.gap-10 { gap: .625rem; }
.gap-12 { gap: .75rem; }
.gap-14 { gap: .875rem; }
.gap-16 { gap: 1rem; }
.gap-20 { gap: 1.25rem; }
.gap-24 { gap: 1.5rem; }
.gap-32 { gap: 2rem; }
.gap-40 { gap: 2.5rem; }
.gap-48 { gap: 3rem; }
.gap-52 { gap: 3.25rem; }
.gap-56 { gap: 3.5rem; }
.gap-64 { gap: 4rem; }
.gap-72 { gap: 4.5rem; }
.gap-78 { gap: 4.875rem; }
.gap-80 { gap: 5rem; }
.gap-104 { gap: 6.5rem; }
.gap-130 { gap: 8.125rem; }
.gap-144 { gap: 9rem; }
.gap-170 { gap: 10.625rem; }
```

### Padding Scale

Common vertical classes:

```css
.py-6 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
.py-10 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
.py-16 { padding-top: 1rem; padding-bottom: 1rem; }
.py-20 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
.py-24 { padding-top: 1.6rem; padding-bottom: 1.6rem; }
.py-30 { padding-top: 1.875rem; padding-bottom: 1.875rem; }
.py-32 { padding-top: 2rem; padding-bottom: 2rem; }
.py-40 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
.py-48 { padding-top: 3rem; padding-bottom: 3rem; }
.py-60 { padding-top: 3.75rem; padding-bottom: 3.75rem; }
.py-80 { padding-top: 5rem; padding-bottom: 5rem; }
.py-100 { padding-top: 6.25rem; padding-bottom: 6.25rem; }
.py-112 { padding-top: 7rem; padding-bottom: 7rem; }
```

Horizontal padding extends up to very wide editorial gutters:

```css
.px-24 { padding-left: 1.6rem; padding-right: 1.6rem; }
.px-32 { padding-left: 2rem; padding-right: 2rem; }
.px-48 { padding-left: 3rem; padding-right: 3rem; }
.px-80 { padding-left: 5rem; padding-right: 5rem; }
.px-112 { padding-left: 7rem; padding-right: 7rem; }
.px-144 { padding-left: 9rem; padding-right: 9rem; }
.px-168 { padding-left: 10.5rem; padding-right: 10.5rem; }
```

### Section Spacing

```css
.section-space {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

@media screen and (max-width: 992px) {
  .section-space {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
```

## 7. Layout System

### Global Layout

- `body`: white background, no default margin, `Ftbase` font, `18px`, weight 300.
- `main`: `overflow: clip`, allowing scroll-driven scenes without horizontal overflow.
- Sections are full-width and very tall, creating a narrative scroll.
- The page is not built as a grid of cards; sections behave like stages.

### Observed Section Heights at 929px Viewport

| Section | Approx top | Height | Content summary |
| --- | ---: | ---: | --- |
| Hero / intro | `0` | `5044px` | "Before today..." and "now, there is MI." |
| AI for humans | `4127px` | `4585px` | Predictive/preventive/personalized/intelligence modules |
| Signal/noise section | `7795px` | `3512px` | "See what's yet to be seen." |
| Warm transition | `11306px` | `1834px` | "A new world of health from within." |
| Top-down / data model | `13140px` | `3067px` | Scientific research, data points, continuous learning |
| People strip | `16207px` | `977px` | "For all of us" with human image strip |
| Final / footer | `17184px` | `917px` | MI accessibility and footer |

### Layout Utilities Found

```css
.relative { position: relative; }
.sticky { position: sticky; }
.absolute { position: absolute; }
.static { position: static; }
.flex-auto { flex: auto; }
.flex-wrap { flex-wrap: wrap; }
.w-full { width: 100%; }
.h-px { height: 1px; }
.h-auto { height: auto; }
.h-128 { height: 7.5rem; }
.h-664 { height: 41.5rem; }
.h-100vh { height: 100vh; }
```

### Aspect Ratios Found

```css
.aspect-612-1234 { aspect-ratio: 612 / 1234; }
.aspect-666-549 { aspect-ratio: 666 / 549; }
.aspect-600-540 { aspect-ratio: 600 / 540; }
.aspect-532-673 { aspect-ratio: 532 / 673; }
.aspect-632-300 { aspect-ratio: 632 / 300; }
.aspect-616-640 { aspect-ratio: 616 / 640; }
.aspect-1051-664 { aspect-ratio: 1051 / 664; }
.aspect-416-500 { aspect-ratio: 416 / 500; }
.aspect-1120-480 { aspect-ratio: 1120 / 480; }
```

## 8. Components And Patterns

### Navigation

Observed behavior:

- Minimal navigation.
- Logo and simple text link pattern.
- White navigation over dark hero.
- At smaller breakpoints or non-top scroll state, nav logo fill changes to black.
- Links inherit color and remove default underline.

Relevant CSS behavior extracted:

```css
a {
  color: inherit;
  text-decoration: inherit;
}

@media screen and (max-width: 991px) {
  body:not(.at-top) .nav_logo svg * {
    fill: black !important;
  }
}
```

### Hero

Observed:

- Full-bleed dark introduction.
- H1 text: "Before today, our health was in the dark"
- H1 computed at 929px viewport:
  - Width: `783px`
  - Position: `x: 73`, `y: 138`
  - Font: Financier Display
  - Size: `128px`
  - Weight: `300`
  - Line height: `119.04px`
  - Color: white
- Large vertical portrait/mobile-like asset centered lower in hero:
  - Asset: `main.webp`
  - Visible size sampled: `480px x 1606px`
  - Source: `https://cdn.prod.website-files.com/67201316e453580db6424752/6735cba51fdc781c0e1387f1_main.webp`

Design pattern:

- Do not center everything immediately. Use offset editorial composition.
- Let the hero occupy several scroll heights.
- Use black background + white serif headline.
- Use text as the main visual object, not as supporting copy.

### Large Reveal Statement

Text: "now, there is MI."

Computed:

- Font: Financier Display
- Size: `104px` at 929px viewport, `181px` in the large desktop reveal state
- Weight: `300`
- Line height: around `0.93`
- Color: white
- Uses split words/chars classes like `.word` and `.char`, likely for reveal animation.

### Feature Modules

Section title: "AI for humans"

Computed:

- Font: Financier Display
- Size: `80px`
- Weight: `300`
- Line height: `74.4px`
- Centered

Feature module pattern:

- Title examples: Predictive, Preventive.
- Feature title:
  - Font: Financier Display
  - Size: `40.96px`
  - Line height: `36.864px`
  - Weight: `300`
- Feature copy:
  - Font: Ftbase
  - Size: `18.08px`
  - Line height: `23.504px`
  - Weight: `300`
- Small overlay/inverted state:
  - White text on dark/black module.
  - Label uses Ftbase `18.08px`, weight `500`, line-height `16.272px`.

### Circular CTA

Observed footer CTA:

- Text: "Functionhealth.com"
- Size: `76px x 76px` visible box in sampled viewport.
- Display: flex.
- Position: absolute.
- Border radius: `929px` computed, effectively fully round.
- Border width: `1px`.
- Padding: `14.08px 29px 14.08px 14.08px`.
- Text color: white.
- Background transparent in computed style, likely image/video/parent contrast carries the button.

Pattern:

- Use circular/pill geometry only for deliberate CTA moments.
- Keep most UI rectangular or unframed.

### Footer

Observed:

- Outer footer shell: black.
- Inner footer wrapper: white.
- Footer height sample:
  - Outer: `1425px x 242px`
  - Inner: `1383px x 200px`
- Links:
  - Font: Ftbase
  - Size: `17px`
  - Weight: `400`
  - Line height: `22.1px`
  - Underline drawn with pseudo-element, not browser underline.

Underline pattern:

```css
.underline,
.policy_rich-text a {
  position: relative;
}

.underline:before,
.policy_rich-text a:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: currentColor;
}
```

## 9. Motion System

### Timing Tokens

```css
--reveal: .6s cubic-bezier(.53, .02, 0, .99);
--ease: 0.8s cubic-bezier(0.84, 0.00, 0.16, 1.00);
```

### Motion Patterns Inferred From DOM/CSS

- Text split into `.word` and `.char` spans for staged animation.
- Long scroll scenes imply pinned/sticky sections.
- Hero and narrative statements likely transition between black and white states.
- People strip uses repeated horizontal image assets, suggesting marquee / continuous carousel.
- Main page hides `main` and `.nav` during loader state, then reveals:

```css
.loader { display: flex; }
main, .nav { visibility: hidden; }
```

After load, the loader receives `hidden`.

## 10. Imagery And Assets

### Stylesheets

```text
https://cdn.prod.website-files.com/67201316e453580db6424752/css/function-ai.shared.60b282dfe.css
https://function-ai-function-health.vercel.app/main-style.css
```

### Key Image Assets Observed

Hero/main:

```text
https://cdn.prod.website-files.com/67201316e453580db6424752/6735cba51fdc781c0e1387f1_main.webp
```

People strip / "For all of us" assets:

```text
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae3e690550fe4d5fe6a52_functionai-person02.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae41dbbdab97138dc50b4_functionai-person04.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae444f9cc52887154a704_functionai-person01.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae46ee4047421b9117a72_functionai-person05.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae48cf9cc5288715505bb_functionai-person07.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae4a2556f938c142685b0_functionai-person06.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae4cef9cc52887155465e_functionai-person11.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae4f0c201ba5e40cdfc16_functionai-person12.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae5124bf063b9991b215f_functionai-person09.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae53efa96875ee4c736b9_functionai-person10.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/678ae57012370c19b30dda32_functionai-person08.webp
https://cdn.prod.website-files.com/67201316e453580db6424752/673b5a5cfdff04ab803757a4_us%20item%2006.png
https://cdn.prod.website-files.com/67201316e453580db6424752/673b5a5ceb59ece032f9ce9b_us%20item%2007.png
https://cdn.prod.website-files.com/67201316e453580db6424752/673b5a5cfd6f766402629281_us%20item%2009.png
```

### Image Style

- Cropped human/person fragments for inclusivity/humanity.
- Main vertical interface-like asset used as a long scroll anchor.
- Assets are not decorative stock photos; they behave as core narrative objects.
- Repetition of people assets creates a collective/human system feel.

## 11. Responsive Breakpoints

Media queries extracted:

```css
@media screen and (min-width: 1441px) { ... }
@media screen and (max-width: 992px) { ... }
@media screen and (max-width: 991px) { ... }
@media screen and (max-width: 991px) and (min-width: 767px) { ... }
@media screen and (max-width: 768px) and (min-width: 479px) { ... }
@media screen and (max-width: 480px) { ... }
@media screen and (max-width: 479px) { ... }
```

Responsive strategy:

- Desktop gets very large editorial typography.
- Tablet/mobile aggressively reduces giant display type.
- Section vertical spacing drops from `7rem` to `4rem`.
- Mobile utility classes use `sm-` prefix, e.g. `sm-gap-*`, `sm-flex-*`, `sm_h-*`, `sm-fixed-bottom`.

## 12. Borders, Radius, Shadows

### Border Radius

Computed distribution:

- `0px`: dominant. Most layout is square/unstyled.
- `929px`: fully round elements, especially circular CTAs or pills.
- `30.08px`, `20px`, `50.08px`, `22px`, `30px`: occasional rounded UI/media surfaces.

### Shadows

No significant visible box shadows were detected in computed visible elements, but utility exists:

```css
.shadow-md {
  box-shadow:
    0px 61px 61px 0px rgba(0, 0, 0, 0.03),
    0px 15px 34px 0px rgba(0, 0, 0, 0.04);
}
```

Design implication:

- Avoid shadow-heavy cards.
- Use scale, contrast, motion, and whitespace for hierarchy.

## 13. Implementation Principles To Recreate This Look

1. Start with black/white, then add only one or two warm accent neutrals.
2. Use an elegant serif display face for all major claims.
3. Keep display typography light and tightly led.
4. Make the page feel like a scroll film, not a static landing page.
5. Use full-viewport or multi-viewport sections.
6. Use sticky/pinned scenes and split-text reveal animations.
7. Keep body copy short, low weight, and precise.
8. Avoid standard SaaS hero/card/testimonial blocks.
9. Use image assets as narrative anchors, not decoration.
10. Let most components have no border, no radius, and no shadow.
11. Reserve circles/pills for one or two important CTA moments.
12. Use mono labels only as a scientific accent.

## 14. Reusable Token Draft

This is a practical local token set based on the extraction:

```css
:root {
  --ds-black: #000000;
  --ds-white: #ffffff;
  --ds-brown: #2d2420;
  --ds-warm-gray: #c0bcb5;
  --ds-dark-gray: #3c3d42;
  --ds-orange: #c07858;

  --ds-font-main: Ftbase, sans-serif;
  --ds-font-display: "Financier Display", Georgia, serif;
  --ds-font-mono: Martianmono, "IBM Plex Mono", monospace;

  --ds-ease: cubic-bezier(0.84, 0, 0.16, 1);
  --ds-reveal: cubic-bezier(.53, .02, 0, .99);

  --ds-space-section: 7rem;
  --ds-space-section-mobile: 4rem;
  --ds-gutter: clamp(1.5rem, 6vw, 9rem);
}

.ds-display-xl {
  font-family: var(--ds-font-display);
  font-size: clamp(4rem, 12.5vw, 11.3125rem);
  font-weight: 300;
  line-height: .93;
}

.ds-display-lg {
  font-family: var(--ds-font-display);
  font-size: clamp(3.5rem, 8vw, 8rem);
  font-weight: 300;
  line-height: .93;
}

.ds-display-md {
  font-family: var(--ds-font-display);
  font-size: clamp(3rem, 5.5vw, 5rem);
  font-weight: 300;
  line-height: .93;
}

.ds-body {
  font-family: var(--ds-font-main);
  font-size: 1.13rem;
  font-weight: 300;
  line-height: 1.3;
}

.ds-label {
  font-family: var(--ds-font-mono);
  font-size: .69rem;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}
```

## 15. Local Capture Files

Files created by the Playwright extraction in the project root:

```text
function-ai-homepage.png
function-ai-snapshot.md
```

The screenshot is a full-page visual reference of the inspected live site.
