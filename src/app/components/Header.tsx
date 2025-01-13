// components/Header.tsx
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = ({ scrolledPastFirst = false, isHome = false }) => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  const showTitleInHeader = !isHome || (isHome && scrolledPastFirst);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {showTitleInHeader && (
            <div className="text-center transition-all duration-500 ease-in-out">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Ernesto Rivera
              </h1>
              <p className="text-lg italic tracking-tight text-white opacity-90">
                Bridging Tech and Industry: Innovating Solutions, Inspiring Change.
              </p>
            </div>
          )}
          
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-lg text-white hover:text-white/70 transition-colors ${
                  pathname === item.path ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;