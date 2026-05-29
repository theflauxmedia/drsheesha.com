import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './SmoothScroll';

/** Smooth scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { lenis, reducedMotion } = useLenis();

  useEffect(() => {
    if (lenis?.current && !reducedMotion) {
      lenis.current.scrollTo(0, { duration: 1.1, easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)) });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis, reducedMotion]);

  return null;
};

export default ScrollToTop;
