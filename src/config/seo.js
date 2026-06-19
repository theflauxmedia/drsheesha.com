import { SITE } from './site';

const defaultDescription =
  'Dr. Sheesha — premium flavours lounge in Al Karama, Dubai. Premium flavours & table reservations. Open daily 12 PM – 6 AM.';

/** Per-route SEO metadata */
export const PAGE_SEO = {
  '/': {
    title: 'Dr. Sheesha Dubai | Premium Flavours Lounge',
    description: defaultDescription,
    keywords:
      'shisha lounge Dubai, hookah bar Al Karama, Dr Sheesha, premium flavours Dubai, shisha restaurant UAE',
  },
  '/about': {
    title: 'Our Story | Dr. Sheesha Dubai',
    description:
      'Discover Dr. Sheesha — a premium flavours lounge in Dubai blending traditional craftsmanship with modern ambience in Al Karama.',
    keywords: 'about Dr Sheesha, shisha lounge story Dubai, premium hookah Dubai',
  },
  '/events': {
    title: 'Events & Nights | Dr. Sheesha Dubai',
    description:
      'Birthdays & private events at Dr. Sheesha — Dubai\'s premium flavours lounge in Al Karama.',
    keywords:
      'shisha lounge events Dubai, private lounge events, Al Karama',
  },
  '/gallery': {
    title: 'Gallery | Dr. Sheesha Dubai',
    description:
      'Browse photos of Dr. Sheesha — lounge ambience, premium flavours, cocktails, food, and unforgettable nights in Dubai.',
    keywords: 'Dr Sheesha photos, shisha lounge gallery Dubai, lounge images',
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
    title: `${SITE.name} Dubai | Premium Flavours Lounge`,
    description: defaultDescription,
    keywords: 'shisha lounge Dubai, Dr Sheesha',
  };

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;

export const absoluteImage = (path) => absoluteUrl(path);
