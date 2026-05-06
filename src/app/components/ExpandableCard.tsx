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
      className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:border-white/40"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h3 className="font-bold text-sm md:text-base">{title}</h3>
          {subtitle && <p className="text-white/60 text-xs">{subtitle}</p>}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white/60 transition-transform duration-300 flex-shrink-0 ml-2 ${expanded ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-white/90">{children}</div>
      </div>
    </div>
  );
}
