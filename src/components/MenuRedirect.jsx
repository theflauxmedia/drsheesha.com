import { useEffect } from 'react';
import { SITE } from '../config/site';

/** /menu — forwards visitors to the digital menu */
const MenuRedirect = () => {
  useEffect(() => {
    window.location.replace(SITE.menuUrl);
  }, []);

  return null;
};

export default MenuRedirect;
