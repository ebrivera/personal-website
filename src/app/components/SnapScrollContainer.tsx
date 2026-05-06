"use client"
import { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import PageIndicator from './PageIndicator';

interface ScrollContextType {
  scrolledPastFirst: boolean;
  currentPage: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrolledPastFirst: false,
  currentPage: 0,
});

export function useScrollContext() {
  return useContext(ScrollContext);
}

interface SnapScrollContainerProps {
  children: ReactNode;
  isHome?: boolean;
}

export default function SnapScrollContainer({ children, isHome = false }: SnapScrollContainerProps) {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrolledPastFirst(scrollPosition > container.clientHeight * 0.3);

      const page = Math.round(scrollPosition / container.clientHeight);
      setCurrentPage(page);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolledPastFirst, currentPage }}>
      <div
        className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth"
        ref={containerRef}
      >
        <Header scrolledPastFirst={scrolledPastFirst} isHome={isHome} />
        {children}
      </div>
    </ScrollContext.Provider>
  );
}

// Client sub-components that consume scroll state
export function SnapScrollIndicator() {
  const { scrolledPastFirst } = useScrollContext();
  return <ScrollIndicator visible={!scrolledPastFirst} />;
}

export function SnapPageIndicator({ totalPages }: { totalPages: number }) {
  const { currentPage } = useScrollContext();
  return <PageIndicator currentPage={currentPage} totalPages={totalPages} visible={true} />;
}

export function SnapHeroTitle() {
  const { scrolledPastFirst } = useScrollContext();
  if (scrolledPastFirst) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white p-4">
        <h1 className="text-2xl sm:text-4xl lg:text-9xl font-bold tracking-tight">
          Ernesto Rivera
        </h1>
        <h2 className="text-2xl lg:text-4xl pl-1 tracking-tight italic">
          Bridging Tech and Industry: Innovating Solutions, Inspiring Change.
        </h2>
      </div>
    </div>
  );
}
