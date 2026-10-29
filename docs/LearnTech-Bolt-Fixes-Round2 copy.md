# LearnTech Website — Bolt Fixes, Round 2

_Paste this whole document into the same Bolt project. Six fixes covering illustrations, card shadows, metric counters, client logo strip, and the decorative divider. Do all six._

---

## 1. Replace all hero illustrations with a uniform brand-consistent visual language

Right now each page hero has a different generic tech illustration (dashboards, phones, video players, calendars). Replace every one of them with abstract geometric compositions that share a single visual language, echoing the LearnTech deck cover.

**Rules — apply to every hero illustration on the site:**

- Build each composition from 3-4 overlapping rectangles.
- Use only the brand palette: crimson `#D8315B`, sky `#3AA5D4`, moss `#647439`, navy `#0F2A5F`. Paper background `#FAFAF7`.
- Every shape has a 3px solid navy border.
- Every shape has a slight rotation, between -8deg and +6deg, no shape upright.
- Shapes overlap each other, don't sit apart.
- No text inside shapes. No icons. No fake charts. No dashboards. No mockups of products. No labels. No numbers.
- Vary the composition per page (different shape counts, different colour dominance, different rotation) so pages feel distinct, but the visual grammar is identical.

**Suggested composition per page:**

- **Home** — 3 shapes: crimson big rectangle top-left rotated -8deg, sky rectangle bottom-right rotated +4deg, moss small rectangle bottom-centre rotated -4deg. (This is the exact composition in the original design mockup — use that.)
- **Consulting** — 4 shapes: navy square, crimson thin vertical, sky wide horizontal, moss small square. Weighted crimson.
- **Content** — 4 shapes: layered rectangles cascading diagonally, sky-heavy.
- **Platforms** — 3 stacked rectangles like screens, navy-heavy.
- **Blog** — 2 large rectangles overlapping like open pages, moss-heavy.
- **About** — 3 rectangles arranged like a small cluster, crimson-heavy.
- **Contact** — 2 large overlapping rectangles, sky-heavy.
- **Program detail pages** — reuse the Home composition (crimson-sky-moss trio).

**Specific removals:**

- Remove the current "L&D Consulting Strategy Dashboard" illustration wherever it appears (currently on Consulting page and mistakenly on the High Stakes Presentation program page).
- Remove the fake chart on the TVS case study page — it contains a typo ("Text noerlier") and made-up numbers.
- Remove every illustration that contains text or numbers.

---

## 2. Card shadows must be hard offset colour shadows, not thin bottom underlines

Apply `box-shadow: 10px 10px 0 <colour>` to these card groups. Alternate the shadow colour by card position.

**Cards to fix:**

- **Home Section 3 pillar cards** (Consulting / Content / Platforms) → shadows `#D8315B`, `#3AA5D4`, `#647439` respectively
- **Home Section 4 Why LearnTech cards** (all 4) → shadows `#D8315B`, `#3AA5D4`, `#647439`, `#0F2A5F`
- **About Founder cards** (all 3) → shadows `#D8315B`, `#3AA5D4`, `#647439`
- **Content page "Three offerings" cards** → shadows `#D8315B`, `#3AA5D4`, `#647439`
- **Platforms page "The other four" cards** → shadows `#D8315B`, `#3AA5D4`, `#647439`, `#0F2A5F`
- **Consulting "What we consult on" cards** → shadows `#D8315B`, `#3AA5D4`, `#647439`, `#0F2A5F`

The case study block on Home and the CTA band already have the correct offset shadow treatment — extend the same visual pattern to the cards above. Remove the current thin coloured bottom-line accents.

---

## 3. Fix the TVS metric counter target on Home

The counter animation on the Home page case study block currently animates up to `4,038` and stops. The H3 heading says "Learning360 across 4,060 dealers". Update the counter target value to `4060`.

---

## 4. Fix the TVS metric counters on the Consulting page (they currently show 0/0/0)

The counter animation only fires on page load. When the block sits below the fold — as it does on the Consulting page — it never triggers.

Rewrite the counter to use an IntersectionObserver so the count-up starts when the metric card enters the viewport. Apply the same fix to every reused instance of the metric block across the site (Home, Consulting, and anywhere else it appears).

---

## 5. Client logo strip: make it static, remove the marquee animation

Remove the auto-scroll animation on the client logo strip on Home (and anywhere else the strip appears).

Render the 6 logos in a single static row across the full width of the navy band, with the crimson dot separators between them. Centre the row horizontally.

Order: `TVS · Tata Motors · Tata.EV · Citroën · Tanishq · Mia`

---

## 6. Remove the zigzag divider under Why LearnTech

Replace the decorative zigzag line below the Why LearnTech section with a straight horizontal line in sky blue (`#3AA5D4`), matching the same divider style used elsewhere across the site.

---

_End of fixes. Do all six in one round. Ping me when done and I'll re-review._
