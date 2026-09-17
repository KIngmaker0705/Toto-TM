import React from 'react';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { MusicProductionSection } from './components/MusicProductionSection';
import { YouTubeSection } from './components/YouTubeSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { StickyPlayer } from './components/StickyPlayer';

export default function App() {
  const scrollToMusic = () => {
    const el = document.getElementById('music');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AudioPlayerProvider>
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-purple-600 selection:text-white relative">
        {/* Navigation Bar */}
        <Navbar onListenNowClick={scrollToMusic} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onExploreMusic={scrollToMusic} />
          <AboutSection />
          <MusicSection />
          <MusicProductionSection />
          <YouTubeSection />
          <GallerySection />
          <InstagramSection />
          <BookingSection />
        </main>

        {/* Sticky Mini Player (Appears when a track is active) */}
        <StickyPlayer />

        {/* Footer */}
        <Footer />
      </div>
    </AudioPlayerProvider>
  );
}
