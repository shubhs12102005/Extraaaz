import React from 'react';

export const ExtraaazLogo = ({ className = "h-8", variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Extraaaz stylized icon mark */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 shadow-md shadow-amber-500/20">
        <span className="font-black text-black text-xl italic tracking-tighter">E</span>
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-white animate-pulse" />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
          <span className={isWhite ? "text-white" : "text-gray-900"}>extra</span>
          <span className="text-amber-500 font-black">aaz</span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 leading-tight">
          Operating Ecosystem
        </span>
      </div>
    </div>
  );
};

export default ExtraaazLogo;
