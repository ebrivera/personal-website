// components/ScrollIndicator.tsx
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  visible: boolean;
}

const ScrollIndicator = ({ visible }: ScrollIndicatorProps) => {
  return visible ? (
    <div className="absolute bottom-8 w-full flex justify-center text-white text-center">
      <div className="flex flex-col items-center space-y-2 animate-bounce">
        <p className="text-sm font-light tracking-wider">Keep scrolling for more</p>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  ) : null;
};

export default ScrollIndicator;