import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  visible: boolean;
}

const ScrollIndicator = ({ visible }: ScrollIndicatorProps) => {
  return visible ? (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm font-light tracking-wider">Keep scrolling for more</p>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  ) : null;
};

export default ScrollIndicator;