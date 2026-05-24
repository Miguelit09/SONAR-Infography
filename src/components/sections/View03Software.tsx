import { getImage } from '../../config/images';
import { VIEW03 } from '../../data/content';
import { DepthCalculator } from '../ui/DepthCalculator';
import { FormulaBlock } from '../ui/FormulaBlock';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Section } from '../ui/Section';

export function View03Software() {
  return (
    <Section id="vista-3" viewNumber={3} title={VIEW03.title}>
      <div className="task-list">
        {VIEW03.tasks.map((task) => (
          <article key={task.title} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {'items' in task && task.items && (
              <ul>
                {task.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="software-tools">
        <FormulaBlock
          title={VIEW03.formula.title}
          variables={VIEW03.formula.variables}
        />
        <DepthCalculator />
      </div>

      <div className="media-row">
        <ImagePlaceholder slot={getImage('view03_bathymetryMap')} />
        <ImagePlaceholder slot={getImage('view03_3dModel')} />
      </div>
    </Section>
  );
}
