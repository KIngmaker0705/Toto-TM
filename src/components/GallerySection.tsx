import React, { useState } from 'react';
import { Camera, X, Image as ImageIcon, Maximize2, Shield } from 'lucide-react';
import { galleryImages, artist } from '../data/config';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'portraits', label: 'Artist Portraits' },
    { id: 'performance', label: 'DJ Performances' },
    { id: 'studio', label: 'Studio' },
    { id: 'events', label: 'Events' },
    { id: 'bts', label: 'Behind The Scenes' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c10] relative border-t border-zinc-900"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40">
            Visual Archive
          </span>
          <h2
            id="gallery-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            ARTIST GALLERY
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Original artist photographs, live DJ sets, studio sessions, and event snapshots.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative aspect-[4/3] rounded-2xl bg-[#121217] border border-zinc-800/90 overflow-hidden cursor-pointer hover:border-purple-500/50 transition-all shadow-lg hover:-translate-y-1"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={`${artist.name} - ${item.categoryLabel}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Authentic Dignified Placeholder (Section 29) */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0d0d12]">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                    <Camera className="w-7 h-7" />
                  </div>
                  <span className="font-syne font-bold text-sm tracking-wider uppercase text-zinc-300">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mt-1">
                    {item.placeholderText}
                  </span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
                <div className="self-end p-2 rounded-lg bg-black/60 backdrop-blur-sm text-zinc-200">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400">
                    {item.categoryLabel}
                  </span>
                  <p className="font-syne font-bold text-white text-base mt-0.5">
                    {artist.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Guarantee Notice */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
          <Shield className="w-3.5 h-3.5 text-purple-400" />
          <span>Strict artist policy: Only genuine photographs from DJ TOTO TM are published.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[#121217] border border-zinc-800 p-6 sm:p-8 flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-[16/9] rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
              {activeLightboxItem.src ? (
                <img
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.categoryLabel}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4">
                    <Camera className="w-10 h-10" />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white">
                    {activeLightboxItem.categoryLabel}
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mt-2">
                    {activeLightboxItem.placeholderText}
                  </p>
                  <p className="text-xs text-zinc-500 mt-4 max-w-sm">
                    High-resolution official photography provided by DJ TOTO TM will be displayed here.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase">
                  {activeLightboxItem.categoryLabel}
                </span>
                <p className="font-syne font-bold text-white text-lg">
                  {artist.name}
                </p>
              </div>

              <span className="text-xs font-mono text-zinc-500">
                Official Photography
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
