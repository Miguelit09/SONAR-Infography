import { SITE } from '../../data/content';
import { useScrollProgress } from '../../hooks/useActiveSection';

export function Header() {
  const progress = useScrollProgress();

  return (
    <header className="site-header">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="site-header__inner">
        <p className="site-header__eyebrow">{SITE.subtitle}</p>
        <h1 className="site-header__title">{SITE.title}</h1>
      </div>
    </header>
  );
}
