import { getImage } from '../../config/images';
import { VIEW06 } from '../../data/content';
import { ExternalLink } from '../ui/ExternalLink';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Section } from '../ui/Section';

export function View06Examples() {
  return (
    <Section id="vista-6" viewNumber={6} title={VIEW06.title}>
      <div className="media-row">
        <ImagePlaceholder slot={getImage('view06_noaa')} />
        <ImagePlaceholder slot={getImage('view06_archaeology')} />
      </div>

      <div className="example-grid">
        {VIEW06.examples.map((example) => (
          <article key={example.title} className="example-card info-card--hover">
            <h3>{example.title}</h3>
            <p>{example.description}</p>
            {'link' in example && example.link && (
              <p className="example-card__link">
                <ExternalLink href={example.link}>
                  {example.linkLabel}
                </ExternalLink>
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
