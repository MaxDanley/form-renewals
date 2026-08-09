type PlaceholderImageProps = {
  label: string;
  caption?: string;
  aspect?: "square" | "portrait" | "wide" | "hero";
  tone?: "brand" | "mist" | "deep";
  className?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  hero: "aspect-[4/5] md:aspect-[5/4]",
};

const toneClass = {
  brand: "bg-brand text-white",
  mist: "bg-brand-mist text-ink",
  deep: "bg-brand-deep text-white",
};

export default function PlaceholderImage({
  label,
  caption = "Photo placeholder",
  aspect = "square",
  tone = "brand",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspectClass[aspect]} ${toneClass[tone]} ${className}`}
      role="img"
      aria-label={`${label} — ${caption}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-soft-pulse" />
        <div className="absolute -right-1/5 bottom-0 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="font-form text-[0.7rem] uppercase tracking-[0.28em] opacity-70">
          {caption}
        </p>
        <p className="font-form max-w-[14ch] text-2xl uppercase tracking-[0.08em] md:text-3xl">
          {label}
        </p>
        <p className="font-renewal text-lg opacity-80">renewal</p>
      </div>
    </div>
  );
}
