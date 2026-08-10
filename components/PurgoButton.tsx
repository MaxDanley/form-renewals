import Link from "next/link";

type PurgoButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "dark";
  className?: string;
  external?: boolean;
};

export default function PurgoButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
}: PurgoButtonProps) {
  const styles = {
    primary: "bg-shell text-white hover:bg-shell-soft",
    dark: "bg-ink text-white hover:bg-shell",
    secondary: "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
    light: "bg-white text-ink hover:bg-paper",
  };

  const classes = `seed-pill inline-flex items-center justify-center px-6 py-3.5 text-[0.95rem] font-medium transition ${styles[variant]} ${className}`;

  if (!external) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
}
