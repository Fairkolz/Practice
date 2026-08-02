import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "white" | "white-outline";
export type ButtonSize = "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-2 border-primary bg-primary text-on-primary hover:bg-primary/90",
  secondary:
    "border-2 border-outline-variant text-primary hover:border-primary hover:bg-primary/5",
  white:
    "border-2 border-on-primary bg-on-primary text-primary hover:bg-transparent hover:text-on-primary",
  "white-outline":
    "border-2 border-on-primary bg-transparent text-on-primary hover:bg-on-primary hover:text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 rounded-lg text-body-medium",
  lg: "px-8 py-4 rounded-lg text-body-large",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 font-medium transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-elevation-2 active:scale-[0.97] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
