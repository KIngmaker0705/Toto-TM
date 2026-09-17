import React from 'react';
import { Youtube, Instagram, Mail, Phone, Music, ArrowUp } from 'lucide-react';
import { artist, contactConfig } from '../data/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#070709] border-t border-zinc-900 text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 relative pb-28 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-800/80">
          {/* Brand & Identity Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white">
                <Music className="w-4 h-4" />
              </div>
              <span className="font-syne font-extrabold text-2xl text-white tracking-wider">
                {artist.name}
              </span>
            </div>

            <p className="font-syne font-bold text-sm text-purple-400 uppercase tracking-widest mb-3">
              {artist.title}
            </p>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed font-normal">
              {artist.supportingText}. Official digital presence for authentic music releases, Marathi DJ remixes, and audiovisual creative works.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-syne font-bold text-sm text-zinc-200 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Artist
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-white transition-colors">
                  Music Releases
                </a>
              </li>
              <li>
                <a href="#production" className="hover:text-white transition-colors">
                  Music Production
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-white transition-colors">
                  Watch on YouTube
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Booking & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels & Contact */}
          <div className="md:col-span-3">
            <h4 className="font-syne font-bold text-sm text-zinc-200 uppercase tracking-wider mb-4">
              Official Channels
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={contactConfig.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500 fill-current" />
                  <span>YouTube: @djtototm</span>
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: @its_shashi_tm</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactConfig.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Current Year Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-400 text-center sm:text-left">
            © {currentYear} {artist.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
