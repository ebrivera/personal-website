import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = ({ showTitle = true }) => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {showTitle && (
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Ernesto Rivera
              </h1>
              <p className="text-lg italic tracking-tight opacity-90">
                Bridging Tech and Industry: Innovating Solutions, Inspiring Change.
              </p>
            </div>
          )}
          
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`hover:text-black/70 transition-colors ${
                  pathname === item.path ? 'border-b-2 border-black' : ''
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