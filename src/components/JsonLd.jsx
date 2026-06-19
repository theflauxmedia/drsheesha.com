import { SITE } from '../config/site';
import { absoluteImage, absoluteUrl } from '../config/seo';

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE.url}/#restaurant`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description:
    'Premium flavours lounge in Al Karama, Dubai — premium flavours, events, and table reservations.',
  url: SITE.url,
  image: absoluteImage(SITE.defaultOgImage),
  logo: absoluteImage('/Dr_Sheesha_Dubai_Logo.png'),
  telephone: SITE.phoneHref.replace('tel:', ''),
  email: SITE.email,
  priceRange: '$$',
  servesCuisine: ['Middle Eastern', 'International', 'Lounge'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: SITE.openingHoursSpecification.dayOfWeek.map(
    (day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: SITE.openingHoursSpecification.opens,
      closes: SITE.openingHoursSpecification.closes,
    }),
  ),
  sameAs: Object.values(SITE.social),
  hasMenu: SITE.menuUrl,
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: absoluteUrl('/contact'),
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Table Reservation',
    },
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description: restaurantSchema.description,
  publisher: { '@id': `${SITE.url}/#restaurant` },
  inLanguage: SITE.language,
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([websiteSchema, restaurantSchema]),
    }}
  />
);

export default JsonLd;
