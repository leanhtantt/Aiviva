import React from 'react';
import { cn } from './Section';

export function Badge({ 
  children, 
  className,
  variant = 'mist'
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: 'mist' | 'surface' | 'accent' | 'primary'
}) {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
      {
        'bg-mist text-deep': variant === 'mist',
        'bg-surface/90 backdrop-blur text-deep border border-border shadow-sm': variant === 'surface',
        'bg-accent text-white shadow-sm': variant === 'accent',
        'bg-primary/10 text-primary': variant === 'primary'
      },
      className
    )}>
      {children}
    </span>
  );
}
