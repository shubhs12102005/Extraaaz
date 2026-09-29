import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) {
  const base = "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const sizeClasses = {
    sm: "h-9 px-3.5 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  }[size] || "h-11 px-5 text-sm";

  const variantClasses = {
    primary: "bg-brand-600 text-foreground font-semibold shadow-[0_10px_30px_-8px_rgb(248_208_0_/_0.7)] hover:bg-brand-400 hover:shadow-[0_18px_45px_-10px_rgb(248_208_0_/_0.85)] hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    ghost: "bg-transparent text-foreground hover:bg-muted",
    outline: "bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-brand-50"
  }[variant] || "";

  return (
    <button className={`${base} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
