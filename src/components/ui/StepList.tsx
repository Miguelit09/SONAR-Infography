type StepListProps = {
  steps: readonly string[];
};

export function StepList({ steps }: StepListProps) {
  return (
    <ol className="step-list">
      {steps.map((step, index) => (
        <li key={index} className="step-list__item">
          <span className="step-list__number" aria-hidden="true">
            {index + 1}
          </span>
          <span className="step-list__text">{step}</span>
        </li>
      ))}
    </ol>
  );
}
