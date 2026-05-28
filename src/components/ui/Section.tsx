import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Section({ 
  children, 
  className, 
  id,
  variant = 'canvas'
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  variant?: 'canvas' | 'surface' | 'deep' 
}) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full py-20 lg:py-28 relative overflow-hidden",
        {
          'bg-canvas': variant === 'canvas',
          'bg-surface border-t border-border': variant === 'surface',
          'bg-deep text-surface': variant === 'deep',
        },
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        {children}
      </div>
    </section>
  );
}
