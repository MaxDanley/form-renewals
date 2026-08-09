import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  showWordmark?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { width: 120, height: 43, form: "text-[1.05rem]", renewal: "text-[0.72rem]" },
  md: { width: 152, height: 55, form: "text-[1.35rem]", renewal: "text-[0.88rem]" },
  lg: { width: 210, height: 76, form: "text-[1.9rem]", renewal: "text-[1.15rem]" },
  hero: { width: 320, height: 115, form: "text-[2.8rem] md:text-[3.6rem]", renewal: "text-[1.35rem] md:text-[1.7rem]" },
};

export default function BrandLogo({
  href = "/",
  tone = "dark",
  size = "md",
  showWordmark = true,
  className = "",
}: BrandLogoProps) {
  const dims = sizeMap[size];
  const isLight = tone === "light";

  const mark = showWordmark ? (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span
        className={`font-form uppercase ${dims.form} ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        [FORM]
      </span>
      <span
        className={`font-renewal -mt-1 self-end pr-1 ${dims.renewal} ${
          isLight ? "text-white/90" : "text-brand-deep"
        }`}
      >
        renewal
      </span>
    </span>
  ) : (
    <Image
      src={isLight ? "/logo-white.png" : "/logo-dark.png"}
      alt="[FORM] renewal"
      width={dims.width}
      height={dims.height}
      className={`h-auto w-auto ${className}`}
      priority={size === "hero" || size === "lg"}
    />
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="[FORM] renewal home" className="inline-flex">
      {mark}
    </Link>
  );
}
