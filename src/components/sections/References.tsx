import { REFERENCES } from '../../data/content';
import { ExternalLink } from '../ui/ExternalLink';
import { Section } from '../ui/Section';

export function References() {
  return (
    <Section
      id="referencias"
      title={REFERENCES.title}
      subtitle={REFERENCES.subtitle}
      className="view-section--references"
    >
      <ul className="references-list">
        {REFERENCES.sources.map((source) => (
          <li key={source.url}>
            <ExternalLink href={source.url}>{source.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
