import { SITE } from './site';

const defaultDescription =
  'Dr. Sheesha — premium shisha rooftop lounge in Al Karama, Dubai. Signature flavours, skyline views, DJ nights & table reservations. Open daily 12 PM – 6 AM.';

/** Per-route SEO metadata */
export const PAGE_SEO = {
  '/': {
    title: 'Dr. Sheesha Dubai | Premium Shisha Rooftop Lounge',
    description: defaultDescription,
    keywords:
      'shisha lounge Dubai, hookah bar Al Karama, rooftop lounge Dubai, Dr Sheesha, premium shisha Dubai, shisha restaurant UAE',
  },
  '/about': {
    title: 'Our Story | Dr. Sheesha Dubai',
    description:
      'Discover Dr. Sheesha — a premium rooftop shisha lounge in Dubai blending traditional craftsmanship with modern ambience above Al Karama.',
    keywords: 'about Dr Sheesha, shisha lounge story Dubai, premium hookah Dubai',
  },
  '/events': {
    title: 'Events & Nights | Dr. Sheesha Dubai',
    description:
      'DJ nights, ladies nights, birthdays & private events at Dr. Sheesha — Dubai\'s premium rooftop shisha lounge in Al Karama.',
    keywords:
      'shisha lounge events Dubai, ladies night Dubai, private rooftop events, DJ nights Al Karama',
  },
  '/gallery': {
    title: 'Gallery | Dr. Sheesha Dubai',
    description:
      'Browse photos of Dr. Sheesha — rooftop ambience, signature shisha, cocktails, food, and unforgettable nights in Dubai.',
    keywords: 'Dr Sheesha photos, shisha lounge gallery Dubai, rooftop lounge images',
  },
  '/contact': {
    title: 'Reserve a Table | Contact | Dr. Sheesha Dubai',
    description:
      'Book your table at Dr. Sheesha, Al Karama, Dubai. Call +971 56 671 1730. Open daily 12:00 PM – 6:00 AM.',
    keywords:
      'reserve shisha lounge Dubai, Dr Sheesha booking, Al Karama shisha contact',
  },
};

export const getPageSeo = (pathname) =>
  PAGE_SEO[pathname] ?? {
    title: `${SITE.name} Dubai | Premium Shisha Rooftop Lounge`,
    description: defaultDescription,
    keywords: 'shisha lounge Dubai, Dr Sheesha',
  };

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;

export const absoluteImage = (path) => absoluteUrl(path);
