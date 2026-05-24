import { VIEW05 } from '../../data/content';
import { ProsConsGrid } from '../ui/ProsConsGrid';
import { Section } from '../ui/Section';

export function View05ProsCons() {
  return (
    <Section id="vista-5" viewNumber={5} title={VIEW05.title}>
      <ProsConsGrid
        advantages={VIEW05.advantages}
        disadvantages={VIEW05.disadvantages}
      />
    </Section>
  );
}
