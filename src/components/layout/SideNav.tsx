import { useState } from 'react';
import { NAV_ITEMS } from '../../data/content';

type SideNavProps = {
  activeId: string;
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  el.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function SideNav({ activeId }: SideNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  const navList = (
    <ul className="side-nav__list" role="list">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`side-nav__link${activeId === item.id ? ' is-active' : ''}`}
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.number !== null && (
              <span className="side-nav__number">{item.number}</span>
            )}
            <span className="side-nav__label">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <button
        type="button"
        className="side-nav__toggle"
        aria-expanded={mobileOpen}
        aria-controls="side-nav-panel"
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? 'Cerrar menú' : 'Menú'}
      </button>

      {mobileOpen && (
        <button
          type="button"
          className="side-nav__backdrop"
          aria-label="Cerrar menú"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <nav
        id="side-nav-panel"
        className={`side-nav${mobileOpen ? ' is-open' : ''}`}
        aria-label="Navegación de secciones"
      >
        <p className="side-nav__heading">Secciones</p>
        {navList}
      </nav>
    </>
  );
}
