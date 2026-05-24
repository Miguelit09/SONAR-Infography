import { getImage } from '../../config/images';
import { VIEW02 } from '../../data/content';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Section } from '../ui/Section';
import { StepList } from '../ui/StepList';

export function View02Transducer() {
  return (
    <Section
      id="vista-2"
      viewNumber={2}
      title={VIEW02.title}
      subtitle={VIEW02.subtitle}
    >
      <div className="transducer-block">
        <h3 className="subsection-title">{VIEW02.transducer.title}</h3>
        <p>{VIEW02.transducer.intro}</p>

        <div className="role-flow">
          {VIEW02.transducer.roles.map((role) => (
            <div key={role.role} className="role-flow__item">
              <span className="role-flow__role">{role.role}</span>
              <span className="role-flow__arrow" aria-hidden="true">
                →
              </span>
              <span>{role.action}</span>
            </div>
          ))}
        </div>

        <div className="conversion-grid">
          {VIEW02.transducer.conversions.map((conv) => (
            <div key={conv.from} className="conversion-card">
              <span>{conv.from}</span>
              <span className="conversion-card__arrow" aria-hidden="true">
                ⇄
              </span>
              <span>{conv.to}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="media-row">
        <ImagePlaceholder slot={getImage('view02_transducer')} />
        <ImagePlaceholder slot={getImage('view02_signalChain')} />
      </div>

      <article className="info-card info-card--accent">
        <h3>{VIEW02.hydrophones.title}</h3>
        <p>{VIEW02.hydrophones.description}</p>
      </article>

      <h3 className="subsection-title">{VIEW02.digitalTitle}</h3>
      <StepList steps={VIEW02.digitalSteps} />
    </Section>
  );
}
