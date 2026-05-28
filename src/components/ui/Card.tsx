import React from 'react';
import { cn } from './Section';

export function Card({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn("bg-surface border border-border rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-card)] flex flex-col", className)}>
      {children}
    </div>
  );
}
