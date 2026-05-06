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
        <div className="absolute inset-0 bg-black bg-opacity-30" />
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
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-center text-white p-4 max-w-4xl bg-[#999f9f] bg-opacity-25 overflow-y-auto max-h-[80vh] md:max-h-none">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Welcome</h2>
            <p className="text-base md:text-xl text-justify w-3/4 mx-auto">
              I&apos;m Ernesto Rivera, a third-year studying Computer Science with a minor in Data Science
              at Boston University. Thank you for taking the time to explore my website! Please checkout the different
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
