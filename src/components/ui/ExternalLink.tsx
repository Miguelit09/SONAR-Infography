import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="external-link">
      {children}
      <span className="external-link__icon" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
