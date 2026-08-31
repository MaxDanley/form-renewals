# [FORM] renewal — Image & Infographic Prompt Library

Every image slot on the site, what's in it today, what's missing, and a copy-paste
generation prompt for each. Reference codes (H1, P-SH-3, etc.) map to the code
locations listed in each section.

---

## 0. How to use this

### 0.1 Master style block (prepend or append to EVERY prompt)

> **STYLE:** Editorial clinical-calm beauty photography. Warm neutral palette only —
> bone/paper `#F4F2EB`, oat `#FFFCF7`, brand mist `#E7E4D8`, olive-taupe `#8A8664`,
> muted sage-olive `#7B7869`, deep olive-ink `#2F2E24`; single cool accent of
> soft cornflower blue `#7FA8DC` (the capsule blue) and brushed champagne-gold.
> Soft diffused north-facing daylight, large window, gentle shadow falloff, no harsh
> speculars, no colored gels. Shot on a 85mm at f/2.8, full-frame, shallow but
> controlled depth of field. Matte finish, fine natural grain, true-to-life color,
> no HDR, no glossy over-retouching. Quiet, uncluttered, expensive restraint —
> Aesop meets a Korean derm lab. Generous negative space for type.

### 0.2 Master negative prompt

> **AVOID:** text, logos, watermarks, labels, packaging copy, brand marks, lettering,
> plastic clutter, saturated colors, teal-orange grade, harsh flash, lens flare,
> busy backgrounds, stock-photo smiles, over-smoothed skin, extra fingers, warped
> hands, mismatched reflections, 3D-render plastic look.

### 0.3 The three rules that matter most

1. **Never let the model draw the packaging.** Image models garble `[FORM] renewal`,
   `5% GHK-Cu`, `Snap-8`, and the dot-cluster mark every time. For any shot where the
   real bottle/jar/syringe appears, use an **image-editing / reference model** (Nano
   Banana, Flux Kontext, Seedream, GPT-Image edit) and **attach the real packshot**:
   - Shampoo → `public/products/form-shampoo-studio.png`
   - Capsule Cream → `public/products/form-capsule-cream.png`
   - Lift Cream syringe + box → `public/products/form-facelift-cream-4.jpg`
   Prompts below marked **[REF]** require this. Prompts marked **[GEN]** are product-free
   and can be generated from scratch.
2. **Respect the crop.** The site uses `object-cover` with directional gradients.
   Each slot lists a *safe zone* — keep the subject there or the card eats it.
   `lib/images.ts` treats anything not in `SCENE_PATHS` as a packshot and insets it on
   mist, so add new full-bleed scene photos to `SCENE_PATHS` or they'll float in a box.
3. **Text-heavy infographics are built in code, not generated.** Section 9 gives
   build specs for those, plus prompts for the *background art* they sit on.

### 0.4 Suggested file layout

```
public/
  images/
    home/        hero, tech, science, bookend, ugc
    people/      model + hands library (reusable everywhere)
    ingredients/ Blueprint-style actives library
    texture/     macro swatches
    ritual/      how-to-use step photography
    lab/         manufacturing / standards
    quiz/        option tiles
  products/      existing packshots (unchanged)
```

---

## 1. Home page — existing slots

Code: `components/home/HomePageClient.tsx`

### H1 — Hero *(replaces `/hero.jpg`)* **[REF]**
`HomePageClient.tsx:52` · 21:9 → renders `min-h-[92svh]`, `object-[68%_center]`
**Safe zone:** product must sit in the right 45%. Left half is covered by a
`#f4f2eb/92 → transparent` gradient carrying the headline.

> Wide cinematic still life of a three-piece skincare lineup arranged on a warm walnut
> console table beside a bright window — a tall greige pump bottle, a frosted glass jar
> of pale blue capsules, and a slim clear glass applicator — all clustered in the RIGHT
> third of the frame. The left two-thirds is soft, empty, out-of-focus bone-white room:
> linen curtain, a sliver of sofa, morning light. Late-morning sun rakes across the
> tabletop creating one long soft shadow. Airy, calm, almost silent. Copy space left.
> Aspect 21:9. + STYLE + AVOID

### H1-alt — Hero, human variant **[GEN]**
Second hero option for A/B, closer to AG1's grid energy.

> A woman in her late 30s, natural texture curls, bare shoulders, plain oat-colored
> tank, standing at a bathroom mirror pressing a fingertip of cream along her jawline.
> Shot from behind-and-side so we see both her and her reflection. Warm bone tile,
> brushed champagne fixtures, one small potted olive branch. Soft window light from
> camera left. She is positioned right-of-center; the left third is empty wall for
> headline type. Serene, unposed, mid-ritual, not smiling at camera. Aspect 21:9.
> + STYLE + AVOID

### H2 / H3 / H4 — Lineup cards (ProductSection, on olive `#7b7869`)
`HomePageClient.tsx:141` · 4:5 each · currently `product.cardImage`
The three cards read inconsistently right now (shampoo = bathroom scene, capsule =
white packshot, lift = grey studio box). Generate **one matched set** so the row locks up.

**H2 — Copper Growth Shampoo card** **[REF]**
> The greige pump bottle standing alone on a warm-bone plaster ledge, three-quarter
> view, slightly below eye level so it reads tall and monumental. Background is a
> seamless warm oat wall in soft gradient. A single soft shadow pooling to the right.
> Nothing else in frame. Vertical 4:5. + STYLE + AVOID

**H3 — Capsule Cream card** **[REF]**
> The frosted glass jar of pale blue capsules on the same warm-bone plaster ledge, lid
> off and resting flat beside it, capsules visible and catching light. Same seamless oat
> wall, same soft right-falling shadow, same eye level as the companion shampoo image.
> Vertical 4:5. + STYLE + AVOID

**H4 — Lift Cream card** **[REF]**
> The slim clear glass applicator of blue peptide gel lying at a slight diagonal on the
> same warm-bone plaster ledge, its taupe carton standing upright just behind it. Same
> seamless oat wall and lighting as the companion shampoo and jar images. Vertical 4:5.
> + STYLE + AVOID

### H5 / H6 — Highlight split tile (bundle)
`HomePageClient.tsx:213` & `:227` · two half-tiles inside one 5:4 card
Use **H2** and **H3** — they're already built as a matched pair. No new asset needed.

### H7 / H8 / H9 — Highlight thumbnail row
`HomePageClient.tsx:243` · three 1:1 tiles, currently repeats of the above
These should be *detail* shots, not repeats.

**H7 — Wet-scalp detail** **[GEN]**
> Extreme close-up of fingertips massaging pale lather into wet dark hair at the crown,
> water beading on strands, steam-soft background. Warm bone tiles far out of focus.
> Skin-forward, hygienic, no product visible. Square 1:1. + STYLE + AVOID

**H8 — Capsule in palm** **[GEN]**
> Macro of a single translucent pale-blue gel capsule sitting in the center of an open
> palm, the capsule catching a small crisp highlight, skin texture visible and real.
> Warm oat background falling out of focus. Square 1:1. + STYLE + AVOID

**H9 — Cream swatch** **[GEN]**
> Overhead macro of a single dollop of pearlescent white gel-cream on a warm bone
> plaster surface, one finger having just dragged a thin smooth swipe through it,
> showing slip and translucency. Soft raking side light to reveal texture.
> Square 1:1. + STYLE + AVOID

### H10 — Tech section backdrop (blurred, 30% opacity, behind glass panel)
`HomePageClient.tsx:295` · full-bleed, will be `blur-2xl scale-110`
Currently a blurred packshot — replace with abstract art so it stops reading as a smudge.

> Abstract macro of copper-blue peptide fluid: viscous translucent gel with suspended
> micro-spheres, backlit so the copper-teal and cornflower tones glow against a deep
> olive-black ground. Organic flowing shapes, liquid caustics, no recognizable object.
> Very dark overall so white type sits on top cleanly. Aspect 16:9. + STYLE + AVOID

### H11 — Tech section feature square
`HomePageClient.tsx:337` · 1:1, inside a glass panel on dark olive **[REF]**
> Dramatic low-key product portrait: the greige pump bottle lit by a single soft edge
> light from the right against a near-black olive backdrop, wet reflective surface below
> giving one clean reflection. Moody, clinical, laboratory-quiet. Square 1:1.
> + STYLE + AVOID

### H12 — Science section lead image
`HomePageClient.tsx:441` · 4:5 mobile / 1:1 desktop **[GEN]**
> A woman's hands in a bright bathroom, one hand tipping a pale blue capsule out of a
> frosted jar held in the other, jar deliberately turned so no label faces camera.
> Shallow focus on the capsule. Warm bone counter, brushed gold tap edge, folded linen.
> Calm and procedural, like a measured dose. Square 1:1. + STYLE + AVOID

### H13 / H14 / H15 — Peptide primer cards *(NEW — currently text-only)*
`HomePageClient.tsx:466` · square, sits on `#fffcf7` cards
This is the Blueprint "Clinically-backed ingredients" move. See §5 for the full
ingredient library — use **I-01 (GHK-Cu)**, **I-02 (AHK-Cu)**, **I-03 (Snap-8)**.

### H16–H21 — Supporting actives grid *(NEW — currently text-only)*
`HomePageClient.tsx:495` · six items, small squares
Use **I-04 … I-09** from §5: Biotin, Niacinamide, Caffeine, Squalane, Centella,
Hyaluronic acid.

### H22 / H23 / H24 — "Three products, one peptide system" cards
`HomePageClient.tsx:536` · 4:5 · currently repeats `cardImage`
Reuse H2/H3/H4, **or** differentiate with application-context shots:

**H22 — Scalp, first** **[GEN]**
> Over-the-shoulder view of a person in a walk-in shower massaging lather into their
> scalp, eyes closed, warm bone tile, brushed gold fixture, steam softening the light.
> Cropped tight so it reads as a moment, not a portrait. Vertical 4:5. + STYLE + AVOID

**H23 — Skin, daily** **[GEN]**
> Close crop of a woman's face at three-quarter angle, eyes lowered, pressing a melted
> capsule of cream into her cheek with two flat fingertips. Natural dewy skin with
> visible pores and fine texture, no makeup. Warm bone wall behind. Vertical 4:5.
> + STYLE + AVOID

**H24 — Lift, where movement shows** **[GEN]**
> Tight macro of the outer corner of a woman's eye and temple as a fingertip smooths a
> thin layer of clear gel across the crow's-foot area. Skin real and textured, soft
> window catchlight in the eye. Vertical 4:5. + STYLE + AVOID

### H25 / H26 / H27 — Member stories carousel *(currently product photos — biggest gap)*
`HomePageClient.tsx:32-45` (the `stories` array) · 16:10, dark gradient bottom-left
These are quotes from Maya, Jordan and Avery illustrated with bottles. They need people.
**Safe zone:** subject right of center; bottom-left 45% goes under a `#2f2e24/75` gradient.

**H25 — Maya** **[GEN]**
> Environmental portrait of a Black woman in her early 30s with dense natural coils,
> sitting on the edge of a bathtub in a bright bone-toned bathroom, towel around her
> shoulders, running her fingers through damp hair and looking off-camera with a calm
> half-smile. She sits in the right half of the frame; left half is soft empty tile and
> light. Documentary, unstyled, real skin. Aspect 16:10. + STYLE + AVOID

**H26 — Jordan** **[GEN]**
> Environmental portrait of an East Asian man in his late 30s in a plain oat t-shirt,
> standing at a bathroom counter, one hand pressing cream along his jaw, looking down
> and away. Positioned right of center, left third is empty warm wall. Morning light,
> real skin texture, unposed. Aspect 16:10. + STYLE + AVOID

**H27 — Avery** **[GEN]**
> Environmental portrait of a woman in her late 40s with silver-streaked cropped hair,
> in a linen robe, seated by a window in warm morning light, mid-ritual, fingertips at
> her temple, gaze soft and inward. Right of center; left side is blown-out window and
> curtain. Confident, quiet, age visible and unretouched. Aspect 16:10. + STYLE + AVOID

### H28–H33 — UGC / lineup rail
`HomePageClient.tsx:625` · six tiles at 2:3 (240×360, 280×420)
Currently six product repeats. Mix scenes, texture, and people:

| Tile | Use |
|---|---|
| H28 | H2 (shampoo ledge) |
| H29 | **New:** shelfie — *see prompt below* |
| H30 | Existing `form-shampoo-packaging.jpg` |
| H31 | H3 (capsule jar ledge) |
| H32 | **New:** flat lay — *see prompt below* |
| H33 | H4 (lift cream ledge) |

**H29 — Shelfie** **[REF]**
> A narrow bone-plaster bathroom shelf styled with the greige pump bottle, the frosted
> capsule jar, a small ceramic dish holding a clear applicator, a folded oat washcloth,
> and one sprig of eucalyptus in a bud vase. Shot straight on, slight vignette, morning
> light from the left. Lived-in but immaculate. Vertical 2:3. + STYLE + AVOID

**H32 — Flat lay** **[REF]**
> Overhead flat lay on warm bone linen: the frosted capsule jar open with capsules
> spilling in a loose arc, the taupe lift-cream carton, a bone-handled comb, and a
> single olive leaf. Composed on a diagonal with generous empty linen at top. Soft
> overhead diffused light. Vertical 2:3. + STYLE + AVOID

### H34 — Bookend, Purgo panel background
`HomePageClient.tsx:665` · tall, rendered at 40% opacity over dark shell **[GEN]**
> Abstract dark editorial texture: warm bone plaster wall in deep shadow with one
> diagonal shaft of light crossing it, minimal and almost monochrome, deep olive-black
> tones. Nothing recognizable — purely a tonal surface for white type. Aspect 4:5.
> + STYLE + AVOID

### H35 — Bookend, "Start with Copper Growth" panel
`HomePageClient.tsx:696` · tall, `#7b7869 → transparent` gradient from LEFT **[REF]**
**Safe zone:** bottle must sit in the right 40%.
> The greige pump bottle standing on a wet bone-tile shower ledge, water droplets on the
> shoulder of the bottle, positioned in the right third of a vertical frame. Left two
> thirds is soft steam and out-of-focus olive-toned tile. Aspect 4:5. + STYLE + AVOID

---

## 2. Home page — new sections worth adding

These don't exist yet. Each is a section spec plus its images.

### N1 — "What to expect" timeline *(after ScienceSection)*
Four cards: Week 1 / Week 4 / Week 8 / Week 12. Four 1:1 images.
> **N1a (Week 1)** Macro of a scalp part-line in soft daylight, clean and calm, skin
> visible between strands, no flaking or shine. Square 1:1.
> **N1b (Week 4)** Macro of a hairbrush bristle bed, nearly empty, on a bone counter.
> Square 1:1.
> **N1c (Week 8)** Close crop of a temple and hairline with fine baby hairs catching
> backlight. Square 1:1.
> **N1d (Week 12)** Three-quarter back view of dense healthy hair falling over a
> shoulder, backlit so individual strands separate. Square 1:1.
> All + STYLE + AVOID. Keep the same model and same lighting across all four so the row
> reads as one progression.

### N2 — "How copper peptides work" *(the AG1 Science moment)*
Two hero diagrams — build the labels in code (§9), generate the art beneath:
> **N2a — Scalp** Stylized cross-section illustration of a hair follicle in skin,
> rendered as a soft matte 3D form in bone and olive-taupe with a single cornflower-blue
> peptide molecule cluster travelling down toward the bulb. Scientific but beautiful,
> flat lighting, no text, no arrows. Aspect 4:3.
> **N2b — Skin** Stylized cross-section of the skin's layers as soft matte 3D bands in
> bone and taupe, with a lattice of blue collagen fibers thickening in the dermal layer.
> No text, no labels, no arrows. Aspect 4:3. + STYLE + AVOID

### N3 — "Our standards" row *(Blueprint's "Our Standards")*
Four to six square tiles, each an object not an icon:
> **N3a** Macro of a raw copper-blue peptide powder mound on a lab weighing paper,
> under clean overhead light. Square 1:1.
> **N3b** A gloved hand holding a clear glass vial of blue solution up to a bright
> window, no label. Square 1:1.
> **N3c** Close-up of a stainless steel compounding vessel rim with pale cream inside,
> soft industrial light. Square 1:1.
> **N3d** A printed certificate-of-analysis page on bone paper photographed at an angle,
> the text deliberately out of focus and unreadable. Square 1:1. + STYLE + AVOID

### N4 — Lab / manufacturing strip
> Wide shot of a small clean cosmetic lab: bone-white surfaces, stainless equipment, one
> technician in a white coat and gloves working with their back three-quarters to camera,
> soft even overhead light, no branding anywhere. Calm and precise, not sterile-sci-fi.
> Aspect 21:9. + STYLE + AVOID

### N5 — Founder / brand story
> Portrait of a founder in their 40s in a simple oat crewneck, seated at a plain
> workbench with a few unlabeled glass vials, hands loosely clasped, looking directly at
> camera with quiet confidence. Warm window light from the left. Editorial, not corporate.
> Aspect 4:5. + STYLE + AVOID

### N6 — Texture macro trio *(great as a full-bleed 3-up band)*
> **N6a** Macro of pale shampoo lather being pulled apart between two fingers, airy
> bubbles, backlit. **N6b** Macro of a burst capsule releasing clear gel onto skin,
> the shell membrane still visible. **N6c** Macro of a bead of blue-tinted lift gel
> being pressed flat, going from opaque to sheer. All 1:1. + STYLE + AVOID

### N7 — Refill / subscription
> Overhead of a plain bone shipping box, opened, with the three products nested in
> molded pulp packaging and a small folded card on top, on a warm oak floor. Soft
> daylight from a doorway. Aspect 3:2. + STYLE + AVOID

### N8 — Editorial / "Learn" thumbnails (3)
> **N8a** "What is GHK-Cu?" — macro of blue crystalline powder in a glass petri dish.
> **N8b** "How often should you wash?" — a folded oat towel and a wet comb on bone tile.
> **N8c** "Peptides vs. retinol" — two unlabeled glass vials side by side, one warm one
> cool, on a bone plaster block. All 3:2. + STYLE + AVOID

---

## 3. Shop page

Code: `components/products/ProductsPageClient.tsx`

### S1 — Shop hero banner *(NEW — page currently opens on bare type)*
`ProductsPageClient.tsx:135` · full-bleed 21:9 above "Excellence. Made effortless."
**[REF]**
> All three products arranged in a loose horizontal row on a long bone-plaster shelf,
> evenly spaced with generous air between them, shot straight on at product eye level.
> Seamless warm oat background, one soft shared shadow. Museum-vitrine calm.
> Aspect 21:9. + STYLE + AVOID

### S2 / S3 / S4 — Grid cards
`ProductsPageClient.tsx:22` · 4:5 · reuse **H2 / H3 / H4**.

### S5 — Bundle promo tall card
`ProductsPageClient.tsx:76` · 4:5+, dark bottom gradient, text bottom-left **[REF]**
**Safe zone:** keep products in the upper 55%.
> All three products clustered close together in the upper half of a vertical frame on a
> dark olive stone surface, low warm key light from the right, deep shadow filling the
> bottom of the frame. Rich and quiet, like a set photographed at dusk. Aspect 4:5.
> + STYLE + AVOID

### S6 — Duo split section image
`ProductsPageClient.tsx:174` · 1:1–4:5, `object-[72%_center]` **[REF]**
> The greige pump bottle and the frosted capsule jar together on a bone bathroom
> counter, positioned right of center, with a folded oat towel and a glass of water
> softly out of focus at left. Morning light. Aspect 1:1. + STYLE + AVOID

### S7 — Category tiles *(NEW, if you add Hair / Skin filters)*
> **S7a "Hair & scalp"** Back-of-head crop, dense healthy hair, backlit, warm bone
> background. **S7b "Face & neck"** Profile crop of a jaw and neck in soft light, skin
> texture visible. Both 3:2. + STYLE + AVOID

---

## 4. Product detail pages

Code: `components/products/ProductPageClient.tsx` · data in `lib/products.ts`

Every PDP needs the same six-slot gallery. Shampoo has 3 images, Capsule Cream has 2,
Lift Cream has 4 — all thin. Target gallery order: **scene → packshot front →
packshot detail → in-hand/scale → texture macro → in-use human**.

### 4.1 Copper Growth Shampoo (`copper-growth-shampoo`)

- **P-SH-1 scene** — use existing `form-shampoo-lifestyle.png` ✔
- **P-SH-2 packshot** — use existing `form-shampoo-studio.png` ✔
- **P-SH-3 packshot + box** — use existing `form-shampoo-packaging.jpg` ✔
- **P-SH-4 in-hand / scale** **[REF]** 3:4
  > A hand holding the greige pump bottle upright at chest height against a plain warm
  > oat wall, thumb resting on the pump, so the viewer can judge its real size. Sleeve
  > of an oat knit visible. Soft daylight from the left. Aspect 3:4. + STYLE + AVOID
- **P-SH-5 texture macro** **[GEN]** 3:4
  > Macro of a pump-dose of pearlescent shampoo sitting in a wet palm, just starting to
  > break into lather at the edges, water on the skin. Aspect 3:4. + STYLE + AVOID
- **P-SH-6 in use** **[GEN]** 3:4
  > A person under a warm-lit shower, head tipped forward, both hands working lather
  > through the scalp at the crown. Shot from above and behind, face not visible, steam
  > and water motion. Aspect 3:4. + STYLE + AVOID
- **P-SH-BEN benefits split scene** (`ProductPageClient.tsx:373`, right half of a 2-col
  band, `object-cover`) **[GEN]**
  > Close crop of a scalp part-line in bright daylight, hair pushed to either side,
  > calm clear skin, dense healthy roots, no flaking. Vertical, subject centered.
  > Aspect 1:1. + STYLE + AVOID

**Featured ingredients** (`lib/products.ts` `featuredIngredients`, 3:4, currently reusing
packshots — replace with §5 library):
GHK-Cu → **I-01** · AHK-Cu → **I-02** · Biotin + Caffeine → **I-04 / I-06**

**Ritual step photos** (`#how-to-use` — currently type only, add a 3-up image row):
> **R-SH-1** Wet hair being sectioned at the crown by two fingers under shower light.
> **R-SH-2** A small hourglass or a wet wristwatch on a bone tile ledge, steam rising —
> the 3–5 minute wait. **R-SH-3** Water running clear off dark hair, close crop.
> All 4:5. + STYLE + AVOID

### 4.2 Capsule Cream (`capsule-cream`)

- **P-CC-1 packshot** — existing `form-capsule-cream.png` ✔
- **P-CC-2 box** — existing `form-capsule-cream-box.png` ✔
- **P-CC-3 scene** **[REF]** 3:4 *(missing — the PDP has no lifestyle shot at all)*
  > The frosted capsule jar open on a bone bathroom counter, lid resting beside it,
  > capsules visible, morning light casting a soft shadow, a folded linen cloth and a
  > brushed gold tap edge softly out of focus behind. Aspect 3:4. + STYLE + AVOID
- **P-CC-4 in-hand / scale** **[REF]** 3:4
  > A hand cupping the frosted jar from below, fingers wrapped around it, against a warm
  > oat wall, showing its small palm-sized scale. Aspect 3:4. + STYLE + AVOID
- **P-CC-5 texture macro** **[GEN]** 3:4
  > Extreme macro of a single blue capsule crushed between two fingertips, the shell
  > splitting and clear gel spreading across the skin, glistening. Aspect 3:4.
  > + STYLE + AVOID
- **P-CC-6 in use** **[GEN]** 3:4
  > A woman pressing melted cream into her cheek and jaw with flat fingertips, eyes
  > closed, three-quarter angle, bare shoulders, no makeup, real dewy skin texture.
  > Aspect 3:4. + STYLE + AVOID
- **P-CC-BEN benefits split scene** **[GEN]** 1:1
  > Close crop of a cheekbone and under-eye in soft daylight, skin looking hydrated and
  > smooth with visible natural texture and pores, a faint sheen of freshly absorbed
  > cream. Aspect 1:1. + STYLE + AVOID

**Featured ingredients:** GHK-Cu → **I-01** · Niacinamide → **I-05** ·
Squalane + Centella → **I-07 / I-08**

**Ritual steps:**
> **R-CC-1** Fingertips lifting one capsule from the open jar. **R-CC-2** The capsule
> warming and melting between two fingertips, gel emerging. **R-CC-3** Flat fingertips
> pressing along the jawline and down the neck. All 4:5. + STYLE + AVOID

### 4.3 Lift Cream (`lift-cream`)

- **P-LC-1 to P-LC-4** — existing four studio shots ✔ (keep, they're strong)
- **P-LC-5 scene** **[REF]** 3:4 *(missing — no lifestyle shot)*
  > The slim clear applicator lying on a bone marble vanity tray beside a small folded
  > linen cloth, warm morning light from a window at the left, the taupe carton standing
  > softly out of focus behind. Aspect 3:4. + STYLE + AVOID
- **P-LC-6 in-hand / scale** **[REF]** 3:4
  > A hand holding the slim clear applicator horizontally between thumb and forefinger
  > against a warm oat wall, the small 10ml scale obvious against the fingers.
  > Aspect 3:4. + STYLE + AVOID
- **P-LC-7 texture macro** **[GEN]** 3:4
  > Macro of a thin bead of pale blue-tinted gel dispensed onto a fingertip, catching a
  > single highlight, about to be spread. Aspect 3:4. + STYLE + AVOID
- **P-LC-8 in use** **[GEN]** 3:4
  > Tight crop of a forehead and brow as two fingertips smooth a sheer layer of gel
  > across expression lines, eyes just visible at the bottom of frame, skin real and
  > lined. Aspect 3:4. + STYLE + AVOID
- **P-LC-BEN benefits split scene** **[GEN]** 1:1
  > Profile crop of a jaw, cheek and temple in directional daylight, skin looking firm
  > and refined with natural fine lines still visible — honest, not erased.
  > Aspect 1:1. + STYLE + AVOID

**Featured ingredients:** 5% GHK-Cu → **I-01** · 5% Snap-8 → **I-03** ·
Hyaluronic complex → **I-09**

**Ritual steps:**
> **R-LC-1** A thin bead of gel dispensed onto a fingertip. **R-LC-2** Fingertips
> tracing the outer eye corner. **R-LC-3** A palm pressed flat against the jaw and neck
> to finish. All 4:5. + STYLE + AVOID

---

## 5. Ingredient library — the Blueprint move

Nine reusable square renders. These power the home Science cards (H13–H21) and all
nine PDP `featuredIngredients` slots, which currently just repeat packshots.

**Shared recipe:** *Single ingredient rendered as a beautiful isolated object on a
seamless warm-bone background, centered, soft top-left key light with one gentle
shadow, macro detail, no container, no text. Square 1:1 (or 3:4 for PDP cards).*
Keep the light identical across all nine so the grid reads as one system.

| ID | Ingredient | Prompt subject |
|---|---|---|
| **I-01** | GHK-Cu | A precise conical mound of fine copper-blue crystalline powder, deep teal-cobalt with metallic micro-glints, its peak sharp and its base perfectly circular, on seamless warm bone. |
| **I-02** | AHK-Cu | A shallow swirl of pale copper-turquoise powder drawn into a spiral by a fine tool, lighter and greener than I-01, on seamless warm bone. |
| **I-03** | Snap-8 | A cluster of translucent glass-like peptide spheres in soft pearl-white with faint blue refraction, stacked in a loose pyramid, on seamless warm bone. |
| **I-04** | Biotin | A small heap of fine ivory-white crystalline needles catching light like sugar, with a few larger crystals fallen at the base, on seamless warm bone. |
| **I-05** | Niacinamide | A flat disc of pressed chalk-white powder with a fingertip impression at its center, matte and dry, on seamless warm bone. |
| **I-06** | Caffeine | A dense pile of fine espresso-brown powder with three whole coffee beans resting at its base, on seamless warm bone. |
| **I-07** | Squalane | A single perfect droplet of clear golden oil suspended mid-fall above a shallow pool of the same oil, with concentric ripples, on seamless warm bone. |
| **I-08** | Centella | Three fresh centella asiatica leaves — round, scalloped, deep green — arranged in a loose fan, one leaf raised, on seamless warm bone. |
| **I-09** | Hyaluronic acid | A clear viscous gel dome holding its own shape, glass-like and light-bending, with a single stretched thread of gel lifting from its peak, on seamless warm bone. |

Optional extras if you build out the actives page: **Hydrolyzed keratin** (pale golden
protein flakes), **Panthenol** (a viscous clear ribbon folding on itself),
**Aloe** (a cut aloe leaf weeping clear gel), **Green tea** (loose green leaves and a
shallow dish of infusion), **Collagen** (a fine white protein powder with one soft
peak), **Chamomile** (three dried flower heads).

---

## 6. Quiz page

Code: `components/quiz/QuizPageClient.tsx` · **zero images today** — it's the least
finished surface on the site.

### Q1 — Quiz entry / background **[GEN]** 21:9
> Soft abstract gradient field in bone, oat and pale olive with a faint out-of-focus
> suggestion of morning window light, extremely minimal, almost empty. Built to sit
> behind centered type without competing. Aspect 21:9. + STYLE + AVOID

### Q2–Q7 — Concern tiles (1:1, small, sit inside `min-h-[140px]` cards)
Match `lib/quiz.ts:38-45`:
> **Q2 Hair fullness** — macro of a scalp part-line with dense roots.
> **Q3 Fine lines** — macro of an under-eye area in soft light.
> **Q4 Expression lines** — macro of a forehead and brow, mid-expression.
> **Q5 Acne-prone skin** — macro of a cheek with real, unretouched texture and a
> healing blemish. Honest, non-shaming, softly lit.
> **Q6 Firmness & bounce** — macro of a cheekbone and jaw catching directional light.
> **Q7 A bit of everything** — a three-quarter face and hairline crop containing all
> of the above. All 1:1, same model where possible. + STYLE + AVOID

### Q8–Q10 — Scope tiles (`lib/quiz.ts:48-52`) 1:1
> **Q8 Hair and scalp** — back-of-head crop, backlit hair. **Q9 Face and neck** —
> profile of jaw and neck. **Q10 Both** — a full three-quarter portrait at a distance.
> + STYLE + AVOID

### Q11 — Result screen hero **[REF]** 3:2
> The recommended products arranged neatly on a bone plaster surface with a folded card
> beside them, shot slightly overhead, celebratory but calm — like a prescription filled.
> Aspect 3:2. + STYLE + AVOID

---

## 7. Reusable people library

Shoot/generate these once and reuse across home, PDP, quiz, and social. Lock **four
recurring faces** so the site reads as one brand, not a stock bin. Ages 28 / 35 / 42 /
55, mixed ethnicity, at least one man, natural hair textures, visible pores and lines.

For every portrait, append:
> Real unretouched skin with visible pores, fine lines and natural asymmetry. No
> makeup or minimal makeup. Not smiling at the camera. Mid-action or mid-thought.
> Documentary editorial, not commercial stock. + STYLE + AVOID

**Core shot list per model:** ① three-quarter beauty portrait, bone background, 4:5.
② mirror ritual, 16:10 with copy space. ③ hands-only application macro, 1:1.
④ shower/scalp moment, 4:5. ⑤ wide bathroom environmental, 21:9. ⑥ back-of-head
hair detail, 3:4.

**Consistency trick:** generate ① first, then feed it as a reference image for ②–⑥
so the same person carries through.

---

## 8. Nav, social & OG

- **Mega-menu thumbs** (`SiteHeader.tsx:156`) — reuse H2/H3/H4 at 1:1.
- **OG / share card** 1200×630 **[REF]** — all three products on bone, right of center,
  left third empty for the wordmark overlay (add the wordmark in code, not the image).
- **Email header** 1200×400 — H1 crop.
- **Instagram set** 4:5 — H29, H32, N6a–c, and the I-01…I-09 ingredient grid post well
  as a nine-square carousel.

---

## 9. Infographics — build these in code, not in an image model

Image models cannot render `5% GHK-Cu` or `Snap-8` legibly. Build these as React + SVG
(or Figma → SVG export) using the existing tokens: `--brand #8a8664`,
`--brand-mist #e7e4d8`, `--shell #2f2e24`, `--paper-strong #fffcf7`, `font-renewal`
for numerals. Generate only the *background art* with the prompts noted.

### G1 — Peptide concentration bar chart *(home Science section)*
Horizontal bars comparing the doses you actually publish: GHK-Cu 5% (shampoo),
AHK-Cu 1% (shampoo), GHK-Cu 5% (lift), Snap-8 5% (lift). Olive fill on mist track,
percentage in `font-renewal` at the bar end. Do not chart competitors unless you can
substantiate the claim.

### G2 — "Which formula, where" body map
A simple line-drawn head-and-shoulders silhouette with three labelled anchors: scalp →
Copper Growth Shampoo, full face → Capsule Cream, expression zones → Lift Cream.
Background art prompt: *a soft matte bone plaster relief of an abstract head profile,
extremely minimal, no features, no text. Aspect 4:3.*

### G3 — Ritual timeline
A horizontal 3-step rail: Wash day (3–4×/week) → Daily AM/PM (capsule) → As needed
(lift). Reuse the R-SH / R-CC / R-LC step photos above as the illustrations.

### G4 — Ingredient sourcing / standards row
Four to six statements with the N3 tiles as imagery. Only claim what you can back —
"sulfate free", "paraben free", "cruelty free", "recyclable packaging" are already
printed on the Lift Cream carton, so those are safe to mirror.

### G5 — Full formula breakdown
Turn the `ingredients` string in `lib/products.ts` into a grouped, expandable list
(Actives / Humectants / Conditioning / Preservation) with the ingredient count as a
large `font-renewal` numeral. Pairs with the I-01…I-09 renders.

### G6 — Capsule delivery diagram
Three frames: intact capsule → warming between fingers → gel absorbing into skin.
Best as the R-CC photo sequence with a thin olive connector line drawn in SVG over it.

---

## 10. Priority order

If you only generate 12 images, do these:

1. **H25 / H26 / H27** — real people in the stories carousel (biggest credibility gap)
2. **H2 / H3 / H4** — the matched lineup card set (fixes the inconsistent home row)
3. **I-01 / I-02 / I-03** — the three peptide renders for the Science cards
4. **P-CC-3** — Capsule Cream has no lifestyle shot at all
5. **P-LC-5** — Lift Cream has no lifestyle shot at all
6. **H1** — the hero, reshot with the safe zone respected

Then: the I-04…I-09 actives grid, the ritual step rows, and S1.

---

## 11. Wiring new images in

After adding files, two code touches are needed:

1. `lib/products.ts` — extend each product's `gallery`, and swap
   `featuredIngredients[].image` to the new `/images/ingredients/*` paths.
2. `lib/images.ts` — add every new **full-bleed scene** path to `SCENE_PATHS`.
   Anything not listed there is treated as a packshot and gets inset on mist with
   padding, which will make a lifestyle photo look like a mistake.

Claims language: keep every caption in the existing "supports the look of / appearance
of" register used throughout `lib/products.ts`. Don't let a new image caption drift
into a stronger claim than the product copy already makes.
