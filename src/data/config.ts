import {
  ArtistInfo,
  Release,
  YouTubeVideoItem,
  GalleryItem,
  InstagramItem,
  WorkAreaItem
} from '../types';

/*
 * GitHub Pages / Vite asset helper.
 *
 * Local:
 *   /assets/...
 *
 * GitHub Pages:
 *   /Toto-TM/assets/...
 *
 * Using BASE_URL makes the same code work in both environments.
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;


export const artist: ArtistInfo = {
  name: "DJ TOTO TM",

  title: "DJ • MUSIC PRODUCER",

  supportingText:
    "Marathi DJ Remix Artist • Music Producer • Audio Visual Creator",

  roles: [
    "DJ",
    "Music Producer",
    "Marathi DJ Remix Artist",
    "Audio Visual Creator"
  ],

  youtube: "https://www.youtube.com/@djtototm",

  instagram: "https://www.instagram.com/its_shashi_tm",

  email: "shashikantmhankale@gmail.com",

  phone: "+91 9834768016",

  heroPhoto: asset("assets/artist/artist-photo.jpg")
};


export const releases: Release[] = [
  {
    id: "aaika-dajiba",

    title: "AAIKA DAJIBA",

    artist: "DJ TOTO TM",

    preview: asset(
      "assets/music/AAIKA_DAJIBA_PREVIEW_60s.mp3"
    ),

    youtube:
      "https://www.youtube.com/watch?v=XWBz2ktFGfA",

    youtubeId: "XWBz2ktFGfA",

    duration: 60,

    category: "Marathi DJ Remix",

    artwork: asset(
      "assets/artist/remix-artwork.jpg"
    )
  },

  {
    id: "aag-bay-halgi",

    title: "AAG BAY HALGI",

    artist: "DJ TOTO TM",

    preview: asset(
      "assets/music/AAG_BAY_HALGI_PREVIEW_60s.mp3"
    ),

    youtube:
      "https://www.youtube.com/watch?v=hMLp9BnlAzo",

    youtubeId: "hMLp9BnlAzo",

    duration: 60,

    category: "Marathi DJ Remix",

    artwork: asset(
      "assets/artist/remix-artwork.jpg"
    )
  },

  {
    id: "yedai",

    title: "YEDAI",

    artist: "DJ TOTO TM",

    preview: asset(
      "assets/music/YEDAI_PREVIEW_60s.mp3"
    ),

    youtube:
      "https://www.youtube.com/watch?v=yF6AQy8vr8c",

    youtubeId: "yF6AQy8vr8c",

    duration: 60,

    category: "Marathi DJ Remix",

    artwork: asset(
      "assets/artist/remix-artwork.jpg"
    )
  }
];


export const youtubeVideos: YouTubeVideoItem[] = [
  {
    id: "video-1",

    title: "AAIKA DAJIBA",

    url:
      "https://www.youtube.com/watch?v=XWBz2ktFGfA",

    youtubeId: "XWBz2ktFGfA"
  },

  {
    id: "video-2",

    title: "AAG BAY HALGI",

    url:
      "https://www.youtube.com/watch?v=hMLp9BnlAzo",

    youtubeId: "hMLp9BnlAzo"
  },

  {
    id: "video-3",

    title: "YEDAI",

    url:
      "https://www.youtube.com/watch?v=yF6AQy8vr8c",

    youtubeId: "yF6AQy8vr8c"
  }
];


export const galleryImages: GalleryItem[] = [
  {
    id: "gallery-1",

    category: "portraits",

    categoryLabel: "Artist Portrait",

    src: asset(
      "assets/artist/artist-photo.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  },

  {
    id: "gallery-2",

    category: "performance",

    categoryLabel: "DJ Performance",

    src: asset(
      "assets/artist/hero-background.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  },

  {
    id: "gallery-3",

    category: "studio",

    categoryLabel: "Studio Session",

    src: asset(
      "assets/artist/hero-background.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  },

  {
    id: "gallery-4",

    category: "events",

    categoryLabel: "Live Event",

    src: asset(
      "assets/artist/hero-background.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  },

  {
    id: "gallery-5",

    category: "bts",

    categoryLabel: "Behind The Scenes",

    src: asset(
      "assets/artist/artist-photo.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  },

  {
    id: "gallery-6",

    category: "performance",

    categoryLabel: "Stage & Crowd",

    src: asset(
      "assets/artist/remix-artwork.jpg"
    ),

    placeholderText:
      "OFFICIAL ARTIST PHOTO COMING SOON"
  }
];


export const instagramPosts: InstagramItem[] = [
  {
    id: "ig-1",

    url:
      "https://www.instagram.com/its_shashi_tm",

    placeholderText:
      "OFFICIAL INSTAGRAM POST COMING SOON"
  },

  {
    id: "ig-2",

    url:
      "https://www.instagram.com/its_shashi_tm",

    placeholderText:
      "OFFICIAL INSTAGRAM POST COMING SOON"
  },

  {
    id: "ig-3",

    url:
      "https://www.instagram.com/its_shashi_tm",

    placeholderText:
      "OFFICIAL INSTAGRAM POST COMING SOON"
  },

  {
    id: "ig-4",

    url:
      "https://www.instagram.com/its_shashi_tm",

    placeholderText:
      "OFFICIAL INSTAGRAM POST COMING SOON"
  }
];


export const artistWorkAreas: WorkAreaItem[] = [
  {
    id: "dj",

    title: "DJ",

    role: "Performance",

    description:
      "Live DJ performance and music experience."
  },

  {
    id: "music-producer",

    title: "MUSIC PRODUCER",

    role: "Production",

    description:
      "Original music and production."
  },

  {
    id: "marathi-remix",

    title: "MARATHI DJ REMIX ARTIST",

    role: "Remixes",

    description:
      "Marathi DJ/remix-focused work."
  },

  {
    id: "audio-visual",

    title: "AUDIO VISUAL CREATOR",

    role: "Visuals",

    description:
      "Music and visual experiences."
  }
];


export const musicProductionPillars = [
  {
    id: "remix-prod",

    title: "DJ REMIX PRODUCTION",

    description:
      "Creating club-ready Marathi DJ remixes engineered for high-energy dancefloor sets."
  },

  {
    id: "marathi-music",

    title: "MARATHI MUSIC",

    description:
      "Infusing authentic Marathi folk melodies and regional percussion into modern electronic grooves."
  },

  {
    id: "beat-production",

    title: "BEAT PRODUCTION",

    description:
      "Crafting impactful rhythm structures, dynamic drop arrangements, and driving low-end frequencies."
  },

  {
    id: "audio-visuals",

    title: "AUDIO VISUALS",

    description:
      "Developing synchronized visual presentation and motion content to complement audio tracks."
  }
];


export const contactConfig = {
  email: "shashikantmhankale@gmail.com",

  phone: "+91 9834768016",

  phoneDisplay: "+91 9834768016",

  instagram:
    "https://www.instagram.com/its_shashi_tm",

  instagramHandle: "@its_shashi_tm",

  youtube:
    "https://www.youtube.com/@djtototm",

  youtubeHandle: "@djtototm"
};
