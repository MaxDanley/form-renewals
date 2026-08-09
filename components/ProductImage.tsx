import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
  aspect?: "square" | "portrait" | "hero" | "auto";
  priority?: boolean;
  className?: string;
  sizes?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  hero: "aspect-[4/5] md:aspect-[5/4]",
  auto: "",
};

export default function ProductImage({
  src,
  alt,
  aspect = "square",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 40vw",
}: ProductImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-brand-mist ${aspectClass[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-center p-4 md:p-6"
      />
    </div>
  );
}
