import { PURGO_ORIGIN } from "@/lib/brand";

export type FormProduct = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  actives: string;
  badge?: string;
  image: string;
  secondImage: string;
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
      "A daily scalp cleanse powered by copper peptides. Formulated to support thicker-looking hair, elasticity, and shine while clearing excess oil and leaving the scalp balanced.",
    price: 69.99,
    size: "300ml / 10.14oz",
    actives: "5% GHK-CU + 3% AHK-CU + BIOTIN",
    badge: "Bestseller",
    image: "/products/form-shampoo.png",
    secondImage: "/products/form-shampoo-box.png",
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
          "Use a maximum of 3–4 times weekly. Massage into wet hair and scalp, leave on for 3–5 minutes, then rinse.",
      },
      {
        question: "What makes this a [FORM] formula?",
        answer:
          "It is a finished copper peptide hair care preparation by [FORM] renewal, available for purchase through Purgo Labs while our storefront checkout is prepared.",
      },
      {
        question: "Where do I buy it today?",
        answer:
          "Purchase is fulfilled on Purgo Labs. Use Shop at Purgo Labs on this page to go directly to the product listing.",
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
      "Capsule-gel fusion copper peptide capsules melt on contact, delivering sustained-release actives that help reduce the look of fine lines and leave skin feeling firmer and plumper.",
    price: 69.99,
    size: "50g / 1.76 fl.oz · 50000 MG",
    actives: "GHK-Cu Copper Peptide Capsules",
    badge: "New",
    image: "/products/form-capsule-cream.png",
    secondImage: "/products/form-capsule-cream-box.png",
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
          "Each capsule melts on contact with skin, releasing copper peptide actives in a gel-cream texture meant for face and neck application.",
      },
      {
        question: "Can I layer it with other products?",
        answer:
          "Yes. Use after cleansing and before richer occlusives or sunscreen as part of your morning or evening routine.",
      },
      {
        question: "Where do I complete purchase?",
        answer:
          "Checkout currently runs through Purgo Labs. The Shop at Purgo Labs button takes you to the live product page.",
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
    tagline: "5% GHK-Cu + 5% Snap-8 for expression-line appearance support.",
    description:
      "A concentrated copper peptide face cream formulated with 5% GHK-Cu and 5% Snap-8 (Acetyl Hexapeptide-8) to support firmer-looking skin and the appearance of expression lines.",
    price: 69.99,
    size: "10ml / 0.3 fl.oz",
    actives: "5% GHK-CU + 5% Snap-8",
    badge: "New",
    image: "/products/ghkcu-facelift-cream.png",
    secondImage: "/products/ghkcu-facelift-box.png",
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
        question: "Is checkout on this site yet?",
        answer:
          "Not yet. Purchase links take you to Purgo Labs for fulfillment while the [FORM] renewal storefront is completed.",
      },
    ],
    features: [
      {
        title: "Dual peptide focus",
        body: "GHK-Cu and Snap-8 are dosed together for a concentrated face cream aimed at firmness and expression-line appearance.",
      },
      {
        title: "Precision jar",
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
