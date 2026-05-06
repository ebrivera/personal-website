import Image from 'next/image';
import SnapScrollContainer from '../components/SnapScrollContainer';
import ExternalLinkButton from '../components/ExternalLinkButton';

export default function Contact() {
  return (
    <SnapScrollContainer isHome={false}>
      <div className="snap-start relative h-screen w-full">
        <Image
          src="/photos/1.jpg"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end md:items-center justify-start px-8 md:px-20 pb-24 md:pb-0">
          <div className="text-white max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">Contact</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-12">
              Let&apos;s<br />connect.
            </h2>

            <div className="space-y-6">
              <ExternalLinkButton
                href="mailto:ebrivera@bu.edu"
                className="group flex items-center gap-4 text-white w-full text-left"
              >
                <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
                <span className="text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">ebrivera@bu.edu</span>
              </ExternalLinkButton>

              <ExternalLinkButton
                href="https://github.com/ebrivera"
                className="group flex items-center gap-4 text-white w-full text-left"
              >
                <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
                <span className="text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">GitHub</span>
              </ExternalLinkButton>

              <ExternalLinkButton
                href="https://www.linkedin.com/in/ernestobrivera/"
                className="group flex items-center gap-4 text-white w-full text-left"
              >
                <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
                <span className="text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">LinkedIn</span>
              </ExternalLinkButton>

              <ExternalLinkButton
                href="/ErnestoRivera_Resume.pdf"
                className="group flex items-center gap-4 text-white w-full text-left"
              >
                <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
                <span className="text-sm tracking-wide group-hover:tracking-wider transition-all duration-300">Resume</span>
              </ExternalLinkButton>
            </div>
          </div>
        </div>
      </div>
    </SnapScrollContainer>
  );
}
