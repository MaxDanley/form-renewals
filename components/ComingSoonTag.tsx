import { Clock } from "lucide-react";

/**
 * Stands in for the Shop Now button on products that have no Purgo link yet.
 * Matches PurgoButton geometry so card footers stay aligned.
 */
export default function ComingSoonTag({
  className = "",
  tone = "light",
  children = "Coming soon",
}: {
  className?: string;
  tone?: "light" | "onDark";
  children?: React.ReactNode;
}) {
  const styles =
    tone === "onDark"
      ? "bg-white/15 text-white/85"
      : "bg-[#ebe8df] text-shell/70";

  return (
    <span
      className={`seed-pill inline-flex cursor-default items-center justify-center gap-2 px-6 py-3.5 text-[0.95rem] font-medium ${styles} ${className}`}
    >
      <Clock className="h-4 w-4" strokeWidth={1.75} />
      <span>{children}</span>
    </span>
  );
}
