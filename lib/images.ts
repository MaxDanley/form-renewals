/** Photos that already include a background should fill their card, not sit inset. */
const SCENE_PATHS = new Set([
  "/products/form-shampoo.png",
  "/products/form-capsule-cream.png",
  "/products/ghkcu-facelift-cream.png",
  "/products/form-shampoo-studio.png",
  "/products/form-shampoo-lifestyle.png",
  "/hero.jpg",
]);

export function isScenePhoto(src: string): boolean {
  const path = src.split("?")[0].toLowerCase();
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return true;
  if (/(lifestyle|studio|packaging|hero)/.test(path)) return true;
  return SCENE_PATHS.has(path);
}

export function productImageClass(src: string): string {
  return isScenePhoto(src)
    ? "object-cover object-center"
    : "object-contain object-center p-6 md:p-8";
}
