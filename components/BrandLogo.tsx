import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string | null;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
};

const sizeMap = {
  sm: { width: 132, height: 40, className: "h-8 w-auto md:h-9" },
  md: { width: 168, height: 50, className: "h-10 w-auto" },
  lg: { width: 220, height: 66, className: "h-12 w-auto md:h-14" },
  hero: { width: 340, height: 102, className: "h-16 w-auto md:h-24" },
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
