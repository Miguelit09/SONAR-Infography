import { getImage } from '../../config/images';
import { VIEW01 } from '../../data/content';
import { Accordion } from '../ui/Accordion';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Section } from '../ui/Section';

export function View01Waves() {
  return (
    <Section
      id="vista-1"
      viewNumber={1}
      title={VIEW01.title}
      subtitle={VIEW01.subtitle}
    >
      <p className="lead">{VIEW01.intro}</p>

      <div className="card-grid card-grid--2">
        {VIEW01.waveTypes.map((wave) => (
          <article key={wave.title} className="info-card">
            <span className="info-card__icon" aria-hidden="true">
              {wave.icon}
            </span>
            <h3>{wave.title}</h3>
            <p>{wave.description}</p>
          </article>
        ))}
      </div>

      <div className="media-row">
        <ImagePlaceholder slot={getImage('view01_waveTypes')} />
        <ImagePlaceholder slot={getImage('view01_frequencyDiagram')} />
      </div>

      <h3 className="subsection-title">{VIEW01.propertiesTitle}</h3>

      <Accordion
        defaultOpenId="frequency"
        items={[
          {
            id: 'frequency',
            title: VIEW01.frequency.title,
            content: (
              <>
                <p>{VIEW01.frequency.description}</p>
                <div className="compare-grid">
                  <div className="compare-card compare-card--high">
                    <h4>{VIEW01.frequency.high.label}</h4>
                    <ul>
                      {VIEW01.frequency.high.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="compare-card compare-card--low">
                    <h4>{VIEW01.frequency.low.label}</h4>
                    <ul>
                      {VIEW01.frequency.low.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ),
          },
          {
            id: 'velocity',
            title: VIEW01.velocity.title,
            content: (
              <>
                <p className="velocity-highlight">
                  <span className="velocity-value">{VIEW01.velocity.value}</span>
                </p>
                <p>{VIEW01.velocity.description}</p>
                <p>Esta velocidad cambia según:</p>
                <div className="chip-row">
                  {VIEW01.velocity.factors.map((factor) => (
                    <span key={factor} className="chip">
                      {factor}
                    </span>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: 'reflection',
            title: VIEW01.reflection.title,
            content: <p>{VIEW01.reflection.description}</p>,
          },
          {
            id: 'return-time',
            title: VIEW01.returnTime.title,
            content: <p>{VIEW01.returnTime.description}</p>,
          },
        ]}
      />

      <aside className="callout">
        <h3>{VIEW01.simpleExplanation.title}</h3>
        <p>{VIEW01.simpleExplanation.text}</p>
      </aside>
    </Section>
  );
}
