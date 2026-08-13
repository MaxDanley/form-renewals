import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string | null;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
};

const sizeMap = {
  sm: { width: 108, height: 32, className: "h-5 w-auto md:h-[1.35rem]" },
  md: { width: 140, height: 42, className: "h-7 w-auto" },
  lg: { width: 180, height: 54, className: "h-9 w-auto md:h-10" },
  hero: { width: 260, height: 78, className: "h-12 w-auto md:h-14" },
};

export default function BrandLogo({
  href = "/",
  tone = "dark",
  size = "md",
  className = "",
}: BrandLogoProps) {
  const dims = sizeMap[size];
  const src = tone === "light" ? "/logo-white.png" : "/logo-dark.png";

  const mark = (
    <Image
      src={src}
      alt="[FORM] renewal"
      width={dims.width}
      height={dims.height}
      className={`${dims.className} ${className}`}
      priority={size === "hero" || size === "sm"}
    />
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="[FORM] renewal home" className="inline-flex items-center">
      {mark}
    </Link>
  );
}
