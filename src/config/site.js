/** Production site configuration — drsheesha.com */

export const SITE = {
  name: 'Dr. Sheesha',
  legalName: 'Dr. Sheesha Dubai',
  tagline: 'Premium Flavours • Shisha Lounge • Elevated Nights',
  url: 'https://drsheesha.com',
  locale: 'en_AE',
  language: 'en',
  phone: '+971 56 671 1730',
  phoneHref: 'tel:+971566711730',
  email: 'info@drsheesha.com',
  address: {
    street: "112 Za'abeel St — Al Karama",
    locality: 'Dubai',
    region: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
    formatted: "Dr Sheesha, 112 Za'abeel St — Al Karama, Dubai, UAE",
  },
  hours: 'Daily | 12:00 PM – 6:00 AM',
  openingHoursSpecification: {
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '12:00',
    closes: '06:00',
  },
  geo: {
    latitude: 25.2481,
    longitude: 55.3066,
  },
  menuUrl:
    'https://qr.mydigimenu.com/c2764751-64d6-4175-9d56-2d3b67d239d4',
  social: {
    instagram: 'https://www.instagram.com/drsheesha',
    tiktok: 'https://www.tiktok.com/@drsheesha',
    whatsapp: 'https://wa.me/971566711730',
    facebook: 'https://www.facebook.com/drsheesha',
  },
  defaultOgImage: '/HERO/001.webp',
  twitterHandle: '@drsheesha',
};

export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
];
