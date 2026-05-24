import { getImage } from '../../config/images';
import { VIEW04 } from '../../data/content';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Section } from '../ui/Section';

export function View04Results() {
  return (
    <Section id="vista-4" viewNumber={4} title={VIEW04.title}>
      <p className="lead">{VIEW04.intro}</p>

      <ImagePlaceholder
        slot={getImage('view04_userResults')}
        className="image-slot--hero"
      />

      <div className="card-grid card-grid--2">
        {VIEW04.cards.map((card) => (
          <article key={card.title} className="info-card info-card--hover">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {'items' in card && card.items && (
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <ImagePlaceholder slot={getImage('view04_submarineMap')} />
    </Section>
  );
}
