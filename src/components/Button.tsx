import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button">;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
