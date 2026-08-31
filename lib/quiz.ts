import { bundles, type FormBundle } from "@/lib/catalog";
import { products, type FormProduct } from "@/lib/products";

export type QuizConcern =
  | "hair"
  | "wrinkles"
  | "expression"
  | "acne"
  | "collagen"
  | "everything";

export type QuizScope = "hair" | "skin" | "both";
export type QuizStyle = "single" | "stack";

export type QuizAnswers = {
  concern: QuizConcern | null;
  scope: QuizScope | null;
  style: QuizStyle | null;
};

export type QuizResult = {
  kind: "product" | "bundle";
  title: string;
  eyebrow: string;
  reason: string;
  why: string[];
  product?: FormProduct;
  bundle?: FormBundle;
  extras: FormProduct[];
};

const shampoo = products[0];
const capsule = products[1];
const lift = products[2];

export const quizConcerns: {
  id: QuizConcern;
  label: string;
  hint: string;
  image: string;
}[] = [
  { id: "hair", label: "Hair fullness", hint: "Thinning, density, scalp", image: "/images/quiz/q2-hair.jpg" },
  { id: "wrinkles", label: "Fine lines", hint: "Soft wrinkles, texture", image: "/images/quiz/q3-fine-lines.jpg" },
  { id: "expression", label: "Expression lines", hint: "Forehead, smile lines", image: "/images/quiz/q4-expression.jpg" },
  { id: "acne", label: "Acne-prone skin", hint: "Congestion, uneven texture", image: "/images/quiz/q5-acne.jpg" },
  { id: "collagen", label: "Firmness & bounce", hint: "Collagen look, smoothness", image: "/images/quiz/q6-firmness.jpg" },
  { id: "everything", label: "A bit of everything", hint: "Scalp and skin together", image: "/images/quiz/q7-everything.jpg" },
];

export const quizScopes: { id: QuizScope; label: string; hint: string; image: string }[] = [
  { id: "hair", label: "Hair and scalp", hint: "Wash-day care", image: "/images/quiz/q8-hair.jpg" },
  { id: "skin", label: "Face and neck", hint: "Leave-on treatments", image: "/images/quiz/q9-face.jpg" },
  { id: "both", label: "Both", hint: "A full ritual", image: "/images/quiz/q10-both.jpg" },
];

export const quizStyles: { id: QuizStyle; label: string; hint: string }[] = [
  { id: "single", label: "One formula", hint: "Start with a single product" },
  { id: "stack", label: "A stack", hint: "Pair formulas and save" },
];

function productResult(
  product: FormProduct,
  eyebrow: string,
  reason: string,
  why: string[],
  extras: FormProduct[] = []
): QuizResult {
  return {
    kind: "product",
    title: product.name,
    eyebrow,
    reason,
    why,
    product,
    extras,
  };
}

function bundleResult(
  bundle: FormBundle,
  eyebrow: string,
  reason: string,
  why: string[],
  extras: FormProduct[] = []
): QuizResult {
  return {
    kind: "bundle",
    title: bundle.name,
    eyebrow,
    reason,
    why,
    bundle,
    extras,
  };
}

export function scoreQuiz(answers: QuizAnswers): QuizResult {
  const concern = answers.concern ?? "everything";
  const scope = answers.scope;
  const style = answers.style ?? "single";
  const wantsStack = style === "stack";
  const wantsBoth = scope === "both" || concern === "everything";

  if (wantsBoth && wantsStack) {
    return bundleResult(
      bundles[1],
      "Your protocol",
      "Hair, smoothness, and expression lines showed up together — the full [FORM] lineup covers scalp cleanse, melt-on capsules, and a focused lift cream.",
      [
        "Copper Growth Shampoo uses 5% GHK-Cu, 1% AHK-Cu, biotin, and caffeine for the look of fuller hair.",
        "Capsule Cream melts GHK-Cu with niacinamide and centella for smoother, calmer-looking skin.",
        "Lift Cream pairs 5% GHK-Cu with 5% Snap-8 for the appearance of expression lines.",
      ]
    );
  }

  if (
    (concern === "hair" && scope === "skin") ||
    (concern !== "hair" && scope === "hair") ||
    (concern === "hair" && wantsStack) ||
    (scope === "both" && concern === "hair")
  ) {
    return bundleResult(
      bundles[0],
      "Your protocol",
      "You want scalp care and a face ritual. Copper Growth Shampoo plus Capsule Cream is the simplest peptide pair.",
      [
        "The shampoo’s copper peptides and biotin stay on scalp for 3–5 minutes before rinse.",
        "Capsule Cream’s GHK-Cu, niacinamide, and squalane support firmer, smoother-looking skin.",
      ],
      [lift]
    );
  }

  if (concern === "hair" || scope === "hair") {
    return productResult(
      shampoo,
      "Start here",
      "Copper Growth Shampoo is the hair formula in the lineup — a copper peptide cleanse for the look of denser, stronger hair.",
      [
        "5% GHK-Cu and 1% AHK-Cu are dosed for scalp-first care.",
        "Biotin, caffeine, and hydrolyzed keratin support the look of strength and shine.",
        "Use up to 3–4 times weekly with a short leave-on window.",
      ],
      wantsStack ? [capsule] : [capsule, lift]
    );
  }

  if (concern === "expression") {
    return productResult(
      lift,
      "Start here",
      "Lift Cream is the expression-line formula: 5% Snap-8 with 5% GHK-Cu in a focused 10ml treatment.",
      [
        "Snap-8 (Acetyl Hexapeptide-8) is included for the appearance of movement lines.",
        "5% GHK-Cu supports the look of firmness in the same step.",
        "Apply a thin layer to forehead, smile lines, or crow’s feet.",
      ],
      wantsStack ? [capsule] : [capsule, shampoo]
    );
  }

  if (concern === "acne") {
    return productResult(
      capsule,
      "Start here",
      "Capsule Cream is the gentlest face match for congestion-prone or uneven texture — niacinamide, centella, and a calming gel-cream base.",
      [
        "Niacinamide is used for the look of smoother texture and a more even tone.",
        "Centella, aloe, and chamomile help skin look calmer after application.",
        "GHK-Cu still sits in the formula for firmness, without a heavy occlusive feel.",
      ],
      wantsStack ? [lift] : [lift, shampoo]
    );
  }

  if (concern === "wrinkles" && wantsStack) {
    return bundleResult(
      bundles[1],
      "Your protocol",
      "Fine lines plus a complete ritual: Capsule Cream for all-over smoothness and Lift Cream for expression-line zones, with shampoo if hair is also on the list.",
      [
        "Capsule Cream’s melt-on GHK-Cu and hyaluronic acid help skin look plumper.",
        "Lift Cream’s Snap-8 is the expression-line specialist in the lineup.",
      ],
      []
    );
  }

  if (concern === "wrinkles") {
    return productResult(
      lift,
      "Start here",
      "For visible lines, Lift Cream is the most concentrated option — copper peptide plus Snap-8 in one thin layer.",
      [
        "5% GHK-Cu and 5% Snap-8 are the two actives to know.",
        "A multi-weight hyaluronic complex helps the finish look smooth, not tight.",
        "Capsule Cream is the softer daily alternative if you want melt-on capsules instead.",
      ],
      [capsule]
    );
  }

  return productResult(
    capsule,
    "Start here",
    "Capsule Cream is the all-over skin formula for firmness, collagen look, and smoothness — melt-on GHK-Cu capsules with niacinamide and squalane.",
    [
      "GHK-Cu supports the look of elasticity and bounce.",
      "Niacinamide and hyaluronic acid help texture look refined and plump.",
      "Squalane keeps the finish comfortable enough for morning or evening.",
    ],
    wantsStack ? [lift] : [lift, shampoo]
  );
}
