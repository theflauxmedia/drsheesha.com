import { SITE } from './site';

/** Primary navigation — Menu opens digital menu (external) */
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  {
    label: 'Menu',
    href: SITE.menuUrl,
    external: true,
  },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];
