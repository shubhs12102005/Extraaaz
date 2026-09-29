import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
  className = ''
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <div className="mb-3">
          <span className="chip-brand shimmer inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide">
            {badge}
          </span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
