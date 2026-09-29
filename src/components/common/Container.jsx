import React from 'react';

export default function Container({ children, className = '', ...props }) {
  return (
    <div className={`container-default ${className}`} {...props}>
      {children}
    </div>
  );
}
