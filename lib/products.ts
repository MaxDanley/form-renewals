import { PURGO_ORIGIN } from "@/lib/brand";

export type KeyActive = {
  name: string;
  percent?: string;
};

export type FormProduct = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  story: string[];
  price: number;
  size: string;
  actives: string;
  keyActives: KeyActive[];
  greatFor: string[];
  badge?: string;
  image: string;
  secondImage: string;
  gallery: string[];
  videoSrc?: string;
  ritualLabel: string;
  ritualTitle: string;
  ritualSteps: string[];
  formulaBlurb: string;
  ingredientCount: number;
  benefits: string[];
  directions: string;
  ingredients: string;
  purgoUrl: string;
  faqs: { question: string; answer: string }[];
  features: { title: string; body: string }[];
};

export const products: FormProduct[] = [
  {
    slug: "copper-growth-shampoo",
    code: "CG–01",
    name: "Copper Growth Shampoo",
    shortName: "Shampoo",
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
    badge: "Bestseller",
    image: "/products/form-shampoo.png",
    secondImage: "/products/form-shampoo-lifestyle.png",
    gallery: [
      "/products/form-shampoo.png",
      "/products/form-shampoo-studio.png",
      "/products/form-shampoo-lifestyle.png",
      "/products/form-shampoo-packaging.jpg",
    ],
    ritualLabel: "How to use · Shampoo",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Massage into wet scalp and hair.",
      "Leave on for 3–5 minutes, then rinse.",
      "Use up to 3–4 times weekly.",
    ],
    formulaBlurb:
      "A scalp-focused shampoo with copper peptides, biotin, niacinamide, caffeine, and conditioning botanicals.",
    ingredientCount: 26,
    benefits: [
      "Supports thicker, fuller-looking hair",
      "Helps improve elasticity, resilience, and shine",
      "Deeply cleanses the scalp and removes excess oil",
      "Copper peptide + biotin actives for daily scalp care",
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
    code: "CC–02",
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
    badge: "New",
    image: "/products/form-capsule-cream.png",
    secondImage: "/products/form-capsule-cream-box.png",
    gallery: [
      "/products/form-capsule-cream.png",
      "/products/form-capsule-cream-box.png",
    ],
    ritualLabel: "How to use · Moisturizer",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Warm a capsule between fingertips until it melts.",
      "Press into clean face and neck until absorbed.",
      "Use morning or evening as your treatment step.",
    ],
    formulaBlurb:
      "Melt-on copper peptide capsules in a calming gel-cream base with niacinamide, squalane, and hyaluronic acid.",
    ingredientCount: 28,
    benefits: [
      "Melt-on capsules for targeted application",
      "Helps reduce the appearance of fine lines",
      "Supports elasticity for firmer-looking skin",
      "Leaves skin looking smoother and plumper",
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
    code: "LC–03",
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
    badge: "New",
    image: "/products/ghkcu-facelift-cream.png",
    secondImage: "/products/form-facelift-cream-4.jpg",
    gallery: [
      "/products/form-facelift-cream.jpg",
      "/products/form-facelift-cream-2.jpg",
      "/products/form-facelift-cream-3.jpg",
      "/products/form-facelift-cream-4.jpg",
      "/products/ghkcu-facelift-cream.png",
    ],
    videoSrc: "/products/form-facelift-cream.mp4",
    ritualLabel: "How to use · Lift cream",
    ritualTitle: "The ritual",
    ritualSteps: [
      "Dispense a thin layer onto clean fingertips.",
      "Smooth over areas of concern on face and neck.",
      "Use morning and/or evening as your focused treatment.",
    ],
    formulaBlurb:
      "A high-strength lift cream with 5% GHK-Cu, 5% Snap-8, collagen, and multi-weight hyaluronic acids.",
    ingredientCount: 24,
    benefits: [
      "High-strength copper peptide concentration",
      "Snap-8 for expression-line appearance support",
      "Helps skin look firmer and more refined",
      "Compact 10ml format for focused application",
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
