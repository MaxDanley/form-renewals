import { PURGO_ORIGIN } from "@/lib/brand";

export type KeyActive = {
  name: string;
  percent?: string;
};

export type BenefitGroup = {
  title: string;
  items: string[];
};

export type FeaturedIngredient = {
  name: string;
  why: string;
  image: string;
};

export type FormProduct = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  story: string[];
  /** Omitted while a product is `comingSoon` — nothing is priced until launch. */
  price?: number;
  size: string;
  actives: string;
  keyActives: KeyActive[];
  greatFor: string[];
  benefitTags: string[];
  concerns: string[];
  badge?: string;
  image: string;
  cardImage: string;
  secondImage: string;
  gallery: string[];
  videoSrc?: string;
  ritualLabel: string;
  ritualTitle: string;
  ritualSteps: string[];
  ritualImages?: string[];
  benefitImage?: string;
  formulaBlurb: string;
  ingredientCount: number;
  benefits: string[];
  benefitGroups: BenefitGroup[];
  featuredIngredients: FeaturedIngredient[];
  directions: string;
  ingredients: string;
  /** Absent until the product is live on Purgo. Pair with `comingSoon`. */
  purgoUrl?: string;
  comingSoon?: boolean;
  faqs: { question: string; answer: string }[];
  features: { title: string; body: string }[];
};

export const products: FormProduct[] = [
  {
    slug: "copper-growth-shampoo",
    name: "Copper Growth Shampoo",
    shortName: "Copper Growth Shampoo",
    tagline: "Copper peptide scalp care for fuller-looking hair.",
    description:
      "A performance-driven cleanse designed to support fuller, stronger, and healthier-looking hair—powered by copper peptides at meaningful concentrations.",
    story: [
      "A performance-driven formula designed to support fuller, stronger, and healthier-looking hair. Powered by GHK-Cu and AHK-Cu copper peptides, this advanced shampoo helps fortify hair at the root, support scalp balance, and improve overall hair vitality.",
      "Infused with biotin, niacinamide, and caffeine, it works to energize the scalp, strengthen the look of follicles, and promote thicker-looking hair over time. Gentle yet effective cleansers remove buildup without stripping, while conditioning agents help maintain softness and manageability.",
      "Balanced for repeated weekly use, this formula cleanses, revitalizes, and supports a healthier scalp environment—creating the foundation for stronger, denser-looking hair.",
    ],
    price: 69.99,
    size: "300ml / 10.14oz",
    actives: "5% GHK-CU + 1% AHK-CU + BIOTIN",
    keyActives: [
      { name: "GHK-Cu", percent: "5%" },
      { name: "AHK-Cu", percent: "1%" },
      { name: "Biotin" },
    ],
    greatFor: ["Thinning hair", "Scalp health", "Strength"],
    benefitTags: ["Strength", "Vitality", "Scalp"],
    concerns: ["hair", "thinning", "scalp"],
    badge: "Bestseller",
    image: "/products/form-shampoo-lifestyle.png",
    cardImage: "/images/home/h2-shampoo-ledge.jpg",
    secondImage: "/products/form-shampoo-packaging.jpg",
    gallery: [
      "/products/form-shampoo-lifestyle.png",
      "/products/form-shampoo-studio.png",
      "/products/form-shampoo-packaging.jpg",
      "/images/people/p-sh-4-hand.jpg",
      "/images/texture/p-sh-5-texture.jpg",
      "/images/people/p-sh-6-inuse.jpg",
    ],
    ritualLabel: "How to use · Shampoo",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Massage into wet scalp and hair.",
      "Leave on for 3–5 minutes, then rinse.",
      "Use up to 3–4 times weekly.",
    ],
    ritualImages: [
      "/images/ritual/r-sh-1.jpg",
      "/images/ritual/r-sh-2.jpg",
      "/images/ritual/r-sh-3.jpg",
    ],
    benefitImage: "/images/people/p-sh-ben.jpg",
    formulaBlurb:
      "A scalp-focused shampoo with copper peptides, biotin, niacinamide, caffeine, and conditioning botanicals.",
    ingredientCount: 26,
    benefits: [
      "Supports thicker, fuller-looking hair",
      "Helps improve elasticity, resilience, and shine",
      "Deeply cleanses the scalp and removes excess oil",
      "Copper peptide + biotin actives for daily scalp care",
    ],
    benefitGroups: [
      {
        title: "Volume",
        items: [
          "Helps hair look denser and more resilient at the root.",
          "Supports the appearance of thicker, fuller strands over consistent use.",
          "Leaves hair with a cleaner, more polished shine after rinse.",
        ],
      },
      {
        title: "Scalp",
        items: [
          "GHK-Cu and AHK-Cu are paired for a scalp-first cleanse.",
          "Caffeine and niacinamide help refresh the look of a balanced scalp.",
          "A short 3–5 minute leave-on window before rinse.",
        ],
      },
      {
        title: "Strength",
        items: [
          "Biotin and hydrolyzed keratin support the look of stronger hair.",
          "Conditioning botanicals keep the formula from feeling stripped.",
          "Built for repeated weekly use, not a one-wash stunt.",
        ],
      },
    ],
    featuredIngredients: [
      {
        name: "GHK-Cu",
        why: "Copper tripeptide-1 is the core signaling peptide here, used at 5% to support a healthier-looking scalp environment and stronger-looking hair.",
        image: "/images/ingredients/i01-ghk-cu.jpg",
      },
      {
        name: "AHK-Cu",
        why: "A companion copper peptide at 1%, included to complement GHK-Cu in a cleanse designed for thinning or fine-looking hair.",
        image: "/images/ingredients/i02-ahk-cu.jpg",
      },
      {
        name: "Biotin + Caffeine",
        why: "Biotin supports the look of keratin-rich hair. Caffeine is included to energize the scalp during the leave-on window.",
        image: "/images/ingredients/i04-biotin.jpg",
      },
    ],
    directions:
      "Apply to wet hair and scalp. Massage thoroughly and leave on for 3–5 minutes before rinsing. Use a maximum of 3–4 times weekly.",
    ingredients:
      "Water, GHK-Cu (Copper Tripeptide-1), AHK-Cu (Copper Tripeptide-3), Panthenol (Vitamin B5), Biotin, Cocamidopropyl Betaine, Cocamide MEA, Camellia Sinensis Leaf Water, Simmondsia Chinensis (Jojoba) Seed Oil, Citric Acid, Niacinamide, Caffeine, Hydrolyzed Keratin, Sodium Lauroyl Sarcosinate, Allantoin, Sodium Benzoate, P-Hydroxyacetophenone, Glutamic Acid, Aloe Barbadensis Leaf Extract, Nelumbo Nucifera Seed Extract, Butylene Glycol, Chondrus Crispus Extract, Yeast Ferment Filtrate, Perfume.",
    purgoUrl: `${PURGO_ORIGIN}/products/ghk-cu-copper-peptide-shampoo`,
    faqs: [
      {
        question: "How often should I use Copper Growth Shampoo?",
        answer:
          "Use up to 3–4 times a week. Massage into wet hair and scalp, leave on for 3–5 minutes, then rinse.",
      },
      {
        question: "What makes this a [FORM] formula?",
        answer:
          "It’s a finished copper peptide hair care formula from [FORM] renewal—clear actives, quiet packaging, and a ritual built for consistency.",
      },
      {
        question: "Where do I buy it?",
        answer:
          "Checkout currently runs through Purgo Labs. Use Shop Now to open the live product page.",
      },
    ],
    features: [
      {
        title: "Copper peptide cleanse",
        body: "GHK-Cu and AHK-Cu are paired with biotin in a scalp-first shampoo base designed for repeated weekly use.",
      },
      {
        title: "Leave-on window",
        body: "A short 3–5 minute contact time helps the formula work before rinse-out—without turning wash day into a ritual.",
      },
      {
        title: "Clinical calm",
        body: "Minimal packaging language, precise actives, and a formula built for people who want peptide care without noise.",
      },
    ],
  },
  {
    slug: "capsule-cream",
    name: "Capsule Cream",
    shortName: "Capsule Cream",
    tagline: "Melt-on copper peptide capsules for firmer-looking skin.",
    description:
      "A next-level restorative treatment designed to firm, refine, and visibly transform the look of skin—delivered in melt-on copper peptide capsules.",
    story: [
      "A next-level anti-aging treatment designed to restore, firm, and visibly transform the skin. Powered by GHK-Cu copper peptides, this dual-phase capsule formula supports deep skin repair, enhances elasticity, and promotes a smoother, more refined complexion over time.",
      "As the concentrated capsules melt into the skin, they release a high-performance blend of copper peptides, niacinamide, and squalane to strengthen the skin barrier, improve firmness, and deliver lasting nourishment. The hydrating gel base—infused with centella asiatica, aloe, chamomile, and hyaluronic acid—calms, soothes, and replenishes moisture for a balanced, healthy glow.",
      "Advanced, restorative, and effortlessly luxurious—this cream elevates your routine with visible results and long-term skin resilience.",
    ],
    price: 69.99,
    size: "50g / 1.76 fl.oz · 50000 MG",
    actives: "GHK-Cu Copper Peptide Capsules",
    keyActives: [{ name: "GHK-Cu" }, { name: "Niacinamide" }, { name: "Squalane" }],
    greatFor: ["Fine lines", "Firmness", "Barrier support"],
    benefitTags: ["Smoother", "Firmer", "Bouncier"],
    concerns: ["wrinkles", "firmness", "smoothness", "acne", "collagen"],
    badge: "New",
    image: "/images/home/p-cc-3-scene.jpg",
    cardImage: "/images/home/h3-capsule-ledge.jpg",
    secondImage: "/products/form-capsule-cream-box.png",
    gallery: [
      "/images/home/p-cc-3-scene.jpg",
      "/products/form-capsule-cream.png",
      "/products/form-capsule-cream-box.png",
      "/images/people/p-cc-4-hand.jpg",
      "/images/texture/p-cc-5-texture.jpg",
      "/images/people/p-cc-6-inuse.jpg",
    ],
    ritualLabel: "How to use · Moisturizer",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Warm a capsule between fingertips until it melts.",
      "Press into clean face and neck until absorbed.",
      "Use morning or evening as your treatment step.",
    ],
    ritualImages: [
      "/images/ritual/r-cc-1.jpg",
      "/images/ritual/r-cc-2.jpg",
      "/images/ritual/r-cc-3.jpg",
    ],
    benefitImage: "/images/people/p-cc-ben.jpg",
    formulaBlurb:
      "Melt-on copper peptide capsules in a calming gel-cream base with niacinamide, squalane, and hyaluronic acid.",
    ingredientCount: 28,
    benefits: [
      "Melt-on capsules for targeted application",
      "Helps reduce the appearance of fine lines",
      "Supports elasticity for firmer-looking skin",
      "Leaves skin looking smoother and plumper",
    ],
    benefitGroups: [
      {
        title: "Firmness",
        items: [
          "GHK-Cu copper peptides support the look of elasticity and bounce.",
          "A measured capsule dose keeps the ritual precise.",
          "Designed for skin that wants to look firmer over consistent use.",
        ],
      },
      {
        title: "Smoothness",
        items: [
          "Niacinamide helps refine the look of texture and tone.",
          "Hyaluronic acid and squalane leave skin looking plumper and softer.",
          "A gel-cream finish that layers under the rest of a routine.",
        ],
      },
      {
        title: "Calm",
        items: [
          "Centella, aloe, and chamomile help soothe the look of stressed skin.",
          "A good match when barrier comfort and uneven texture are the goal.",
          "Melt, press, and move on — no extra steps required.",
        ],
      },
    ],
    featuredIngredients: [
      {
        name: "GHK-Cu",
        why: "Copper tripeptide-1 is used here for the look of firmer, more resilient skin — the same peptide family as the rest of the [FORM] lineup.",
        image: "/images/ingredients/i01-ghk-cu.jpg",
      },
      {
        name: "Niacinamide",
        why: "A well-studied vitamin B3 derivative for the look of smoother texture, more even tone, and a stronger-feeling barrier — including skin that gets congested.",
        image: "/images/ingredients/i05-niacinamide.jpg",
      },
      {
        name: "Squalane + Centella",
        why: "Squalane replenishes slip and moisture. Centella, aloe, and chamomile calm the look of irritation so the cream stays wearable daily.",
        image: "/images/ingredients/i08-centella.jpg",
      },
    ],
    directions:
      "Apply one capsule to clean skin morning or evening. Melt between fingertips and press into face and neck until absorbed.",
    ingredients:
      "Aqua, Glycerin, Hamamelis Virginiana Water, Niacinamide, Aloe Barbadensis Leaf Extract, Butylene Glycol, Propylene Glycol, Matricaria Recutita Flower Extract, Centella Asiatica Extract, Squalane, Portulaca Oleracea Extract, Trehalose, 1,2-Hexanediol, Panthenol, Vitis Vinifera (Grape) Seed Oil, Sodium DNA, Copper Tripeptide-1, Carbomer, Dendrobium Nobile Stem Extract, Sodium Hyaluronate, Tocopherol, Panax Ginseng Root Extract, Scutellaria Baicalensis Root Extract, Palmitoyl Tripeptide-1, Oligopeptide-3, Octapeptide-3, Arginine.",
    purgoUrl: `${PURGO_ORIGIN}/products/ghk-cu-copper-peptide-capsule-cream`,
    faqs: [
      {
        question: "How do the capsules work?",
        answer:
          "Each capsule melts on contact, releasing copper peptide actives in a gel-cream texture for face and neck.",
      },
      {
        question: "Can I layer it with other products?",
        answer:
          "Yes. Use after cleansing and before richer creams or sunscreen as part of your morning or evening routine.",
      },
      {
        question: "Where do I complete purchase?",
        answer:
          "Checkout currently runs through Purgo Labs. Shop Now opens the live product page.",
      },
    ],
    features: [
      {
        title: "Capsule-gel fusion",
        body: "A measured dose melts into skin—precise, clean, and built for a ritual that still feels efficient.",
      },
      {
        title: "Firmness focus",
        body: "Copper peptide delivery aimed at the look of fine lines, bounce, and elasticity over consistent use.",
      },
      {
        title: "Skin-first texture",
        body: "Absorbs into a soft finish designed for layering under the rest of your routine.",
      },
    ],
  },
  {
    slug: "lift-cream",
    name: "Lift Cream",
    shortName: "Lift Cream",
    tagline: "5% GHK-Cu + 5% Snap-8 for firmer-looking skin.",
    description:
      "A concentrated copper peptide lift cream with 5% GHK-Cu and 5% Snap-8, designed to firm, refine, and support the appearance of expression lines.",
    story: [
      "A concentrated anti-aging treatment designed to firm, refine, and visibly transform the look of skin. Powered by 5% GHK-Cu copper peptides and 5% Snap-8, this lift cream supports elasticity, smoothness, and a more lifted appearance over consistent use.",
      "The dual-peptide formula pairs copper peptide repair signaling with Snap-8 (Acetyl Hexapeptide-8) for expression-line appearance support, while a multi-weight hyaluronic acid complex helps replenish moisture and leave skin feeling soft and refined.",
      "Advanced, precise, and clinically calm—this 10ml format elevates your routine with high-strength actives and long-term skin resilience.",
    ],
    price: 69.99,
    size: "10ml / 0.3 fl.oz",
    actives: "5% GHK-CU + 5% Snap-8",
    keyActives: [
      { name: "GHK-Cu", percent: "5%" },
      { name: "Snap-8", percent: "5%" },
    ],
    greatFor: ["Expression lines", "Firmness", "Refined texture"],
    benefitTags: ["Lift", "Smooth", "Refine"],
    concerns: ["wrinkles", "expression", "firmness", "collagen"],
    badge: "New",
    image: "/images/home/p-lc-5-scene.jpg",
    cardImage: "/images/home/h4-lift-ledge.jpg",
    secondImage: "/products/form-facelift-cream.jpg",
    gallery: [
      "/images/home/p-lc-5-scene.jpg",
      "/products/form-facelift-cream-4.jpg",
      "/products/form-facelift-cream.jpg",
      "/images/people/p-lc-6-hand.jpg",
      "/images/texture/p-lc-7-texture.jpg",
      "/images/people/p-lc-8-inuse.jpg",
    ],
    videoSrc: "/products/form-facelift-cream.mp4",
    ritualLabel: "How to use · Lift cream",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Dispense a thin layer onto clean fingertips.",
      "Smooth over areas of concern on face and neck.",
      "Use morning and/or evening as your focused treatment.",
    ],
    ritualImages: [
      "/images/ritual/r-lc-1.jpg",
      "/images/ritual/r-lc-2.jpg",
      "/images/ritual/r-lc-3.jpg",
    ],
    benefitImage: "/images/people/p-lc-ben.jpg",
    formulaBlurb:
      "A high-strength lift cream with 5% GHK-Cu, 5% Snap-8, collagen, and multi-weight hyaluronic acids.",
    ingredientCount: 24,
    benefits: [
      "High-strength copper peptide concentration",
      "Snap-8 for expression-line appearance support",
      "Helps skin look firmer and more refined",
      "Compact 10ml format for focused application",
    ],
    benefitGroups: [
      {
        title: "Lift",
        items: [
          "5% GHK-Cu is dosed for the look of firmer, more lifted skin.",
          "A compact 10ml format keeps application focused on areas of concern.",
          "Built as a treatment step, not a heavy cream.",
        ],
      },
      {
        title: "Expression lines",
        items: [
          "5% Snap-8 (Acetyl Hexapeptide-8) is included for the appearance of expression lines.",
          "Use on forehead, crow’s feet, and smile lines where movement shows.",
          "Pairs with copper peptide repair signaling in one concentrated cream.",
        ],
      },
      {
        title: "Refinement",
        items: [
          "A multi-weight hyaluronic acid complex helps skin look smoother and more hydrated.",
          "Collagen in the formula supports a soft, refined finish.",
          "A little goes a long way — thin layer, then the rest of your ritual.",
        ],
      },
    ],
    featuredIngredients: [
      {
        name: "5% GHK-Cu",
        why: "A high-strength copper peptide dose aimed at the look of firmness, elasticity, and long-term skin resilience.",
        image: "/images/ingredients/i01-ghk-cu.jpg",
      },
      {
        name: "5% Snap-8",
        why: "Acetyl Hexapeptide-8 is used in topical formulas for the appearance of expression lines — forehead, smile lines, and crow’s feet.",
        image: "/images/ingredients/i03-snap-8.jpg",
      },
      {
        name: "Hyaluronic complex",
        why: "Multiple weights of hyaluronic acid plus collagen help skin look plumper, smoother, and more refined after application.",
        image: "/images/ingredients/i09-hyaluronic.jpg",
      },
    ],
    directions:
      "Apply a thin layer to clean skin on areas of concern morning and/or evening. Follow with moisturizer if needed.",
    ingredients:
      "Acetate, Sodium Ascorbate Phosphate, Allantoin, PEG-100 Stearic Acid Ester, Adansonia Digitata Fruit Pulp Extract, Tripeptide-1 Copper, Collagen, Acetyl Hexapeptide-8, Xylitol, Glucose, Sodium Hyaluronate, Chondrus Crispus Extract, Hydroxypropyl Trimethyl-ammonium Chloride Hyaluronic Acid, Hydrolyzed Hyaluronic Acid, Acetylated Sodium Hyaluronate, Hyaluronic Acid, Sodium Hyaluronate Cross-Linked Polymer, Hydrolyzed Sodium Hyaluronate, Potassium Hyaluronate, 1,2-Hexanediol, Ethylhexylglycerin, Octylglycerol, Phenoxyethanol.",
    purgoUrl: `${PURGO_ORIGIN}/products/ghk-cu-lift-cream`,
    faqs: [
      {
        question: "What is Snap-8?",
        answer:
          "Snap-8 (Acetyl Hexapeptide-8) is a peptide used in topical formulas for the appearance of expression lines. Here it is paired with 5% GHK-Cu.",
      },
      {
        question: "How should I apply Lift Cream?",
        answer:
          "Use a thin layer on clean skin, focusing on areas where expression lines appear. A little goes a long way in the 10ml format.",
      },
      {
        question: "Where do I buy it?",
        answer:
          "Checkout currently runs through Purgo Labs. Shop Now takes you to the live product page.",
      },
    ],
    features: [
      {
        title: "Dual peptide focus",
        body: "GHK-Cu and Snap-8 are dosed together for a concentrated face cream aimed at firmness and expression-line appearance.",
      },
      {
        title: "Precision format",
        body: "A compact 10ml format keeps the ritual focused—apply where you want visible refinement.",
      },
      {
        title: "Same brand system",
        body: "Part of the [FORM] renewal copper peptide lineup, consistent in language, finish, and clinical calm.",
      },
    ],
  },
  {
    slug: "hair-growth-scalp-serum",
    name: "Hair Growth & Scalp Serum",
    shortName: "Scalp Serum",
    tagline: "5% GHK-Cu leave-on serum for the scalp.",
    description:
      "A leave-on copper peptide serum dosed at 5% GHK-Cu and applied directly to the scalp\u2014the daily counterpart to the wash-day cleanse.",
    story: [
      "A leave-on scalp treatment built around the same copper peptide system as the rest of the [FORM] lineup, dosed at 5% GHK-Cu and paired with Copper Tripeptide-3. Where the shampoo works in a short rinse-off window, the serum stays on the scalp.",
      "Niacinamide, caffeine, and salicylic acid round out the formula\u2014niacinamide for the look of a balanced scalp, caffeine to energize, and salicylic acid to help keep the follicle area clear of buildup between washes.",
      "A 30ml dropper format for targeted application: two to three drops on the areas you want to treat, massaged in and left to absorb. Built to sit alongside Copper Growth Shampoo, not replace it.",
    ],
    size: "30ml / 1.01 fl.oz",
    actives: "5% GHK-CU + COPPER TRIPEPTIDE-3",
    keyActives: [
      { name: "GHK-Cu", percent: "5%" },
      { name: "Copper Tripeptide-3" },
      { name: "Caffeine" },
    ],
    greatFor: ["Thinning hair", "Scalp health", "Daily use"],
    benefitTags: ["Density", "Scalp", "Leave-on"],
    concerns: ["hair", "thinning", "scalp"],
    badge: "Coming soon",
    comingSoon: true,
    image: "/images/home/sr4-serum-scene.jpg",
    cardImage: "/images/home/sr1-serum-ledge.jpg",
    secondImage: "/images/home/sr2-serum-pack.jpg",
    gallery: [
      "/images/home/sr4-serum-scene.jpg",
      "/images/home/sr1-serum-ledge.jpg",
      "/images/home/sr2-serum-pack.jpg",
      "/images/people/sr6-serum-drop.jpg",
      "/images/texture/sr8-serum-drop-macro.jpg",
    ],
    ritualLabel: "How to use \u00b7 Scalp serum",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Apply 2\u20133 drops directly to the scalp in the area to be treated.",
      "Massage into the scalp with your fingers.",
      "Work through various parts of the scalp and hair until fully absorbed.",
    ],
    ritualImages: [
      "/images/people/sr6-serum-drop.jpg",
      "/images/people/p-sh-ben.jpg",
      "/images/texture/sr8-serum-drop-macro.jpg",
    ],
    benefitImage: "/images/people/sr6-serum-drop.jpg",
    formulaBlurb:
      "A leave-on scalp serum with 5% GHK-Cu, Copper Tripeptide-3, niacinamide, caffeine, and salicylic acid.",
    ingredientCount: 13,
    benefits: [
      "5% GHK-Cu in a leave-on scalp format",
      "Copper Tripeptide-3 alongside the core peptide",
      "Salicylic acid helps keep the follicle area clear",
      "A 30ml dropper for targeted daily application",
    ],
    benefitGroups: [
      {
        title: "Density",
        items: [
          "5% GHK-Cu is dosed for the look of fuller, denser hair at the root.",
          "Copper Tripeptide-3 carries the same scalp-first pairing as the shampoo.",
          "Built for daily use between wash days.",
        ],
      },
      {
        title: "Scalp",
        items: [
          "Salicylic acid helps keep buildup from collecting around the follicle.",
          "Niacinamide supports the look of a balanced, comfortable scalp.",
          "A leave-on format\u2014no rinse, no wait, no wash-day dependency.",
        ],
      },
      {
        title: "Precision",
        items: [
          "A dropper puts 2\u20133 drops exactly where you want them.",
          "30ml sized for a focused area, not a whole head of hair.",
          "Pairs with Copper Growth Shampoo rather than replacing it.",
        ],
      },
    ],
    featuredIngredients: [
      {
        name: "5% GHK-Cu",
        why: "Copper tripeptide-1 at 5%, the same core peptide that runs through the [FORM] lineup \u2014 here in a leave-on format that stays on the scalp instead of rinsing away.",
        image: "/images/ingredients/i01-ghk-cu.jpg",
      },
      {
        name: "Copper Tripeptide-3",
        why: "The companion copper peptide reserved for scalp care, included alongside GHK-Cu so the serum stays scalp-first rather than a general-purpose hair product.",
        image: "/images/ingredients/i02-ahk-cu.jpg",
      },
      {
        name: "Caffeine + Salicylic Acid",
        why: "Caffeine is included to energize the look of the scalp. Salicylic acid helps keep the follicle area clear of buildup between washes.",
        image: "/images/ingredients/i06-caffeine.jpg",
      },
    ],
    directions:
      "Apply 2\u20133 drops of serum directly to the scalp in the area to be treated. Massage into the scalp with your fingers, then gently massage various parts of the scalp and hair until fully absorbed.",
    ingredients:
      "Aqua, Propanediol, Copper Tripeptide-1, Copper Tripeptide-3, Sodium Citrate, Gluconolactone, Citric Acid, Sodium Hydroxide, Xanthan Gum, Sodium Benzoate, Niacinamide, Salicylic Acid, Caffeine.",
    faqs: [
      {
        question: "When does the Scalp Serum launch?",
        answer:
          "It\u2019s in production now. The formula and packaging are final \u2014 pricing and the checkout link go live at launch.",
      },
      {
        question: "How is this different from Copper Growth Shampoo?",
        answer:
          "The shampoo is a rinse-off cleanse with a 3\u20135 minute leave-on window, used 3\u20134 times weekly. The serum stays on the scalp and is applied directly to the areas you want to treat. They are built to be used together.",
      },
      {
        question: "Can I use it with the shampoo?",
        answer:
          "Yes. Wash with Copper Growth Shampoo, then apply the serum to a towel-dried scalp. On non-wash days, apply the serum on its own.",
      },
    ],
    features: [
      {
        title: "Leave-on delivery",
        body: "5% GHK-Cu stays on the scalp instead of rinsing away\u2014the daily counterpart to a wash-day cleanse.",
      },
      {
        title: "Dropper precision",
        body: "A 30ml dropper places 2\u20133 drops on the areas you actually want to treat.",
      },
      {
        title: "Same peptide system",
        body: "Copper Tripeptide-1 and -3, the same pairing as Copper Growth Shampoo, in a format built for daily use.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
