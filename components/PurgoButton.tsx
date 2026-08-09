type PurgoButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export default function PurgoButton({
  href,
  children,
  variant = "primary",
  className = "",
}: PurgoButtonProps) {
  const styles = {
    primary:
      "bg-brand text-white hover:bg-brand-deep border border-transparent",
    secondary:
      "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
    light:
      "bg-white text-ink hover:bg-brand-mist border border-transparent",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 font-form text-[0.75rem] uppercase tracking-[0.16em] transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
