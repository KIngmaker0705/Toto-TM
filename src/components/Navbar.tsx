import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Music } from 'lucide-react';
import { artist } from '../data/config';

interface NavbarProps {
  onListenNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onListenNowClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Music', href: '#music' },
    { label: 'Production', href: '#production' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Booking', href: '#booking' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md"
            aria-label="DJ TOTO TM Official Website Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-purple-900/30 group-hover:scale-105 transition-transform">
              <Music className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold tracking-wider text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                {artist.name}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium -mt-1">
                Official Artist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-listen-now-button"
              type="button"
              onClick={onListenNowClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Listen Now
            </button>
            <a
              id="nav-book-button"
              href="#booking"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all border border-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              Book Artist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-8 shadow-2xl transition-all"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-medium text-zinc-200 hover:text-purple-400 transition-colors py-2 border-b border-zinc-800/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                id="mobile-listen-now-btn"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onListenNowClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-medium text-sm hover:bg-purple-700 transition-colors"
              >
                <Play className="w-4 h-4 fill-current" />
                Listen to Music
              </button>
              <a
                id="mobile-booking-btn"
                href="#booking"
                onClick={handleLinkClick}
                className="w-full text-center py-3 rounded-xl bg-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-700 transition-colors"
              >
                Book DJ TOTO TM
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
