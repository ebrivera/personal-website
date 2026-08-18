"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ExpandableCard({ title, subtitle, children }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="surface-card rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer hover:border-amber/40"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h3 className="font-display font-semibold text-sm md:text-base text-paper">{title}</h3>
          {subtitle && <p className="font-mono text-paper/60 text-xs mt-0.5">{subtitle}</p>}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-amber transition-transform duration-300 flex-shrink-0 ml-2 ${expanded ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-paper/90">{children}</div>
      </div>
    </div>
  );
}
