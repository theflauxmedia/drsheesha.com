/** Hero background slides — /public/HERO/{###}.webp */

const HERO_COUNT = 8;

export const HERO_SLIDES = Array.from({ length: HERO_COUNT }, (_, i) => ({
  id: `hero-${i + 1}`,
  src: `/HERO/${String(i + 1).padStart(3, '0')}.webp`,
  alt: `Dr. Sheesha Dubai rooftop lounge — ${i + 1}`,
}));

export const HERO_SLIDE_INTERVAL_MS = 4000;
