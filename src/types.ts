export interface Release {
  id: string;
  title: string;
  artist: string;
  preview: string;
  youtube: string;
  youtubeId: string;
  artwork?: string;
  duration: number; // 60 seconds preview
  category?: string;
}

export interface ArtistInfo {
  name: string;
  title: string;
  supportingText: string;
  roles: string[];
  youtube: string;
  instagram: string;
  email: string;
  phone: string;
  heroPhoto?: string;
}

export interface YouTubeVideoItem {
  id: string;
  title: string;
  url: string;
  youtubeId: string;
}

export interface GalleryItem {
  id: string;
  category: 'portraits' | 'performance' | 'studio' | 'events' | 'bts';
  categoryLabel: string;
  src?: string;
  placeholderText: string;
}

export interface InstagramItem {
  id: string;
  url: string;
  src?: string;
  placeholderText: string;
}

export interface WorkAreaItem {
  id: string;
  title: string;
  role: string;
  description: string;
}

export interface BookingFormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}
