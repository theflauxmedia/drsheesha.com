import { SITE } from '../config/site';

/** /menu — instant forward to the digital menu */
const MenuRedirect = () => {
  window.location.replace(SITE.menuUrl);
  return null;
};

export default MenuRedirect;
