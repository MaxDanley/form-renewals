/** Real scenes fill the card. Packshots sit inset on brand-mist. */
const SCENE_PATHS = new Set([
  "/products/form-shampoo-lifestyle.png",
  "/products/form-shampoo-packaging.jpg",
  "/products/form-facelift-cream-4.jpg",
  "/hero.jpg",
]);

export function isScenePhoto(src: string): boolean {
  const path = src.split("?")[0].toLowerCase();
  return path.startsWith("/images/") || SCENE_PATHS.has(path);
}

export function productImageClass(src: string, compact = false): string {
  if (isScenePhoto(src)) return "object-cover object-center";
  return compact
    ? "object-contain object-center p-1.5"
    : "object-contain object-center p-6 md:p-8";
}
