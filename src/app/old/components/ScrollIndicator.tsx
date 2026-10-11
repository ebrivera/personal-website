// components/ScrollIndicator.tsx
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  visible: boolean;
}

const ScrollIndicator = ({ visible }: ScrollIndicatorProps) => {
  return visible ? (
    <div className="absolute bottom-8 w-full flex justify-center text-paper text-center">
      <div className="flex flex-col items-center space-y-2 animate-bounce">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70">Keep scrolling</p>
        <ChevronDown className="w-5 h-5 text-amber" />
      </div>
    </div>
  ) : null;
};

export default ScrollIndicator;