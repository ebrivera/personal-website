import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface SnapGalleryProps {
  images: string[];
}

const SnapGallery = ({ images }: SnapGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const scrollPercent = (scrollTop % height) / height;

      if (scrollPercent > 0.3) {
        const nextSection = Math.ceil(scrollTop / height) * height;
        container.scrollTo({
          top: nextSection,
          behavior: 'smooth'
        });
      } else if (scrollPercent < -0.3) {
        const prevSection = Math.floor(scrollTop / height) * height;
        container.scrollTo({
          top: prevSection,
          behavior: 'smooth'
        });
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-auto scroll-smooth"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {images.map((src, index) => (
        <div 
          key={index}
          className="relative h-screen w-full"
          style={{ scrollSnapAlign: 'start' }}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}
    </div>
  );
};

export default SnapGallery;