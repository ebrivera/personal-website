import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';

export default function Home() {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolledPastFirst(scrollPosition > window.innerHeight * 0.3);

      // Snap scrolling logic
      const scrollPercent = (scrollPosition % window.innerHeight) / window.innerHeight;
      if (scrollPercent > 0.3) {
        window.scrollTo({
          top: Math.ceil(scrollPosition / window.innerHeight) * window.innerHeight,
          behavior: 'smooth'
        });
      } else if (scrollPercent < -0.3) {
        window.scrollTo({
          top: Math.floor(scrollPosition / window.innerHeight) * window.innerHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your images array
  const images = [
    '/photos/home/image1.jpg',
    '/photos/home/image2.jpg',
    // Add more images...
  ];

  return (
    <main ref={containerRef} className="relative">
      <Header showTitle={scrolledPastFirst} />
      
      {/* Initial landing section */}
      <div className="grid grid-cols-1 items-center bg-[#e8d6b1] min-h-screen sm:p-10 lg:p-20 font-[var(--font-roboto)]">
        <div className="p-4">
          <h1 className="text-2xl sm:text-4xl lg:text-9xl font-bold tracking-tight">
            Ernesto Rivera
          </h1>
          <h2 className="text-2xl lg:text-4xl pl-1 tracking-tight italic">
            Bridging Tech and Industry: Innovating Solutions, Inspiring Change.
          </h2>
        </div>
      </div>

      {/* Gallery sections */}
      {images.map((src, index) => (
        <div 
          key={index}
          className="relative h-screen w-full"
          style={{ scrollSnapAlign: 'start' }}
        >
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}
    </main>
  );
}