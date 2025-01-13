// app/about/page.tsx
"use client"
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollIndicator from '../components/ScrollIndicator';

export default function About() {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrolledPastFirst(scrollPosition > container.clientHeight * 0.3);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    '/photos/about/about1.jpg',
    '/photos/about/about2.jpg',
  ];

  return (
    <div 
      className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth" 
      ref={containerRef}
    >
      <Header scrolledPastFirst={scrolledPastFirst} isHome={false} />
      
      {/* First section */}
      <div className="snap-start relative h-screen w-full">
        <img
          src={images[0]}
          alt="About hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-xl">Your about content here...</p>
          </div>
        </div>
        <ScrollIndicator visible={!scrolledPastFirst} />
      </div>

      {/* Additional sections */}
      {/* ... */}
    </div>
  );
}