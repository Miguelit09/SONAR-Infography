type FormulaVariable = {
  symbol: string;
  meaning: string;
};

type FormulaBlockProps = {
  title?: string;
  variables: readonly FormulaVariable[];
};

export function FormulaBlock({ title, variables }: FormulaBlockProps) {
  return (
    <div className="formula-block">
      {title && <h3 className="formula-block__title">{title}</h3>}
      <div className="formula-block__equation" aria-label="d igual a v por t dividido 2">
        <span className="formula-block__var">d</span>
        <span className="formula-block__eq">=</span>
        <span className="formula-block__fraction">
          <span className="formula-block__num">
            <span className="formula-block__var">v</span>
            <span className="formula-block__op">·</span>
            <span className="formula-block__var">t</span>
          </span>
          <span className="formula-block__den">2</span>
        </span>
      </div>
      <dl className="formula-block__legend">
        {variables.map((v) => (
          <div key={v.symbol} className="formula-block__legend-item">
            <dt>{v.symbol}</dt>
            <dd>{v.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
