// components/Header.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = ({ scrolledPastFirst = false, isHome = false }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // On the home hero, SnapHeroTitle already carries the full name + tagline
  // centered on screen, so the header stays silent until that scrolls away.
  const showFullTitle = !isHome && !scrolledPastFirst;
  const showCompactTitle = scrolledPastFirst;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-transparent pointer-events-none" />
      <div
        className={`relative container mx-auto px-4 transition-[padding] duration-500 ease-in-out ${
          scrolledPastFirst ? 'py-3' : 'py-6'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {showFullTitle && (
            <div className="text-center transition-all duration-500 ease-in-out">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-paper">
                Ernesto Rivera
              </h1>
              <p className="hidden sm:block font-mono text-xs tracking-[0.15em] uppercase text-paper/70 mt-1">
                Bridging Tech and Industry: Innovating Solutions, Inspiring Change
              </p>
            </div>
          )}

          {showCompactTitle && (
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.2em] uppercase text-paper/80 hover:text-amber transition-colors"
            >
              Ernesto Rivera
            </Link>
          )}

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-mono text-sm tracking-wide uppercase text-paper hover:text-amber transition-colors ${
                  pathname === item.path ? 'border-b border-amber text-amber' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-paper"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-ink/95 flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 text-paper"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-xl tracking-wide uppercase text-paper hover:text-amber transition-colors ${
                  pathname === item.path ? 'border-b border-amber text-amber' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
