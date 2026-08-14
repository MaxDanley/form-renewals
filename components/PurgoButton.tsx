import Link from "next/link";
import type { ReactNode } from "react";

type PurgoButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "dark";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
};

export default function PurgoButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
  icon,
  iconRight,
}: PurgoButtonProps) {
  const styles = {
    primary: "bg-[#2f2e24] text-white hover:bg-[#3d3c31]",
    dark: "bg-[#1f2118] text-white hover:bg-[#2f2e24]",
    secondary:
      "bg-transparent text-[#1f2118] border border-[#1f2118]/25 hover:border-[#1f2118]/55",
    light: "bg-white text-[#1f2118] hover:bg-[#f4f2eb]",
  };

  const classes = `seed-pill inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.95rem] font-medium transition ${styles[variant]} ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (!external) {
    return (
      <Link href={href} className={classes}>
        {content}
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
      {content}
    </a>
  );
}
