import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../config/navigation';
import { useLenis } from './SmoothScroll';

const PHONE = '+971 56 671 1730';
const PHONE_HREF = 'tel:+971566711730';

const NavItem = ({ link, onClick }) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      end={link.to === '/'}
      className={({ isActive }) => (isActive ? 'active' : '')}
      onClick={onClick}
    >
      {link.label}
    </NavLink>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { lenis } = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    if (lenis?.current) {
      if (drawerOpen) lenis.current.stop();
      else lenis.current.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.current?.start();
    };
  }, [drawerOpen, lenis]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeDrawer}>
            <img src="/Dr_Sheesha_Dubai_Logo.png" alt="Dr. Sheesha Dubai" />
          </Link>

          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <NavItem link={link} />
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Link to="/contact" className="btn btn-outline navbar__reserve">
              Reserve
            </Link>
            <a href={PHONE_HREF} className="navbar__phone">
              {PHONE}
            </a>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`navbar__drawer ${drawerOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          className="navbar__drawer-close"
          aria-label="Close menu"
          onClick={closeDrawer}
        >
          ×
        </button>
        {NAV_LINKS.map((link) => (
          <NavItem key={link.label} link={link} onClick={closeDrawer} />
        ))}
        <Link to="/contact" className="btn btn-outline" onClick={closeDrawer}>
          Reserve
        </Link>
        <a href={PHONE_HREF} className="navbar__phone" onClick={closeDrawer}>
          {PHONE}
        </a>
      </div>
    </>
  );
};

export default Navbar;
