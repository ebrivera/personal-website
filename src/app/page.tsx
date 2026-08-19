// app/page.tsx
import Image from 'next/image';
import SnapScrollContainer, { SnapScrollIndicator, SnapPageIndicator, SnapHeroTitle } from './components/SnapScrollContainer';

export default function Home() {
  const images = [
    '/photos/home/home1.jpg',
    '/photos/home/home2.jpg',
  ];

  const totalPages = images.length;

  return (
    <SnapScrollContainer isHome={true}>
      {/* First section - Welcome */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[0]}
          alt="Hero image"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 photo-scrim" />
        {/* Only show centered title when NOT scrolled past first */}
        <SnapHeroTitle />
        <SnapScrollIndicator />
      </div>

      {/* Second section - About/Welcome */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[1]}
          alt="Secondary image"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 photo-scrim" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="surface-card rounded-xl text-paper p-6 md:p-8 max-w-2xl overflow-y-auto max-h-[80vh] md:max-h-none">
            <p className="eyebrow text-amber text-xs mb-3">Welcome</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Ernesto Rivera</h2>
            <p className="text-base md:text-lg leading-relaxed text-paper/90">
              I&apos;m a recent graduate of Boston University, where I studied Computer Science.
              Thank you for taking the time to explore my website! Please checkout the different
              pages in the navigation bar to learn more about the work I&apos;ve done, my passions, and me!
            </p>
          </div>
        </div>
        <SnapPageIndicator totalPages={totalPages} />
      </div>

      {/* Additional sections as needed */}

    </SnapScrollContainer>
  );
}
