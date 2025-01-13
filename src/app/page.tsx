// app/page.tsx
"use client"
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
import Image from 'next/image'

export default function Home() {
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
    '/photos/home/home1.jpg',
    '/photos/home/home2.jpg',
  ];

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth" ref={containerRef}>
      <Header scrolledPastFirst={scrolledPastFirst} isHome={true} />
      
      {/* First section - Welcome */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[0]}
          alt="Hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        {/* Only show centered title when NOT scrolled past first */}
        {!scrolledPastFirst && (
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
        )}
        <ScrollIndicator visible={!scrolledPastFirst} />
      </div>

      {/* Second section - About/Welcome */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[1]}
          alt="Secondary image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-4xl bg-[#999f9f] bg-opacity-25">
            <h2 className="text-4xl font-bold mb-6">Welcome</h2>
            <p className="text-xl text-justify w-3/4 mx-auto">
              I&apos;m Ernesto Rivera, a third-year studying Computer Science with a minor in Data Science 
              at Boston University. Thank you for taking the time to explore my website! Please checkout the different
              pages in the navigation bar to learn more about the work I&apos;ve done, my passions, and me!
            </p>
          </div>
        </div>
      </div>

      {/* Additional sections as needed */}
    </div>
  );
}