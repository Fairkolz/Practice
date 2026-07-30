interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const colors = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-secondary",
  };

  return (
    <span
      className={`inline-block rounded-sm px-3 py-1 text-label-large uppercase ${colors[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
