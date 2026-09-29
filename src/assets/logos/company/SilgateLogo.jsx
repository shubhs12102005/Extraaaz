import React from 'react';

export const SilgateLogo = ({ className = "h-8" }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/silgate-logo-latest.png"
        alt="Silgate Solutions"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default SilgateLogo;
