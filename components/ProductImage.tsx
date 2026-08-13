import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
  aspect?: "square" | "portrait" | "hero" | "wide" | "auto";
  priority?: boolean;
  className?: string;
  sizes?: string;
  rounded?: boolean;
  fit?: "contain" | "cover";
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  hero: "aspect-[4/5] md:aspect-[5/4]",
  wide: "aspect-[16/10]",
  auto: "",
};

export default function ProductImage({
  src,
  alt,
  aspect = "square",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 40vw",
  rounded = true,
  fit = "contain",
}: ProductImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#ebe8df] ${
        rounded ? "seed-card" : ""
      } ${aspectClass[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={
          fit === "cover"
            ? "object-cover object-center"
            : "object-contain object-center p-6 md:p-8"
        }
      />
    </div>
  );
}
