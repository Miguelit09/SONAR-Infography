import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  viewNumber?: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  viewNumber,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={`view-section ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <div className="view-section__header">
        {viewNumber !== undefined && (
          <span className="view-section__badge">Vista {viewNumber}</span>
        )}
        <h2 id={titleId} className="view-section__title">
          {title}
        </h2>
        {subtitle && <p className="view-section__subtitle">{subtitle}</p>}
      </div>
      <div className="view-section__body">{children}</div>
    </section>
  );
}
