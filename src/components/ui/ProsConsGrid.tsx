type ListItem = {
  title: string;
  description: string;
};

type ProsConsGridProps = {
  advantages: readonly ListItem[];
  disadvantages: readonly ListItem[];
};

export function ProsConsGrid({ advantages, disadvantages }: ProsConsGridProps) {
  return (
    <div className="pros-cons">
      <div className="pros-cons__column pros-cons__column--pro">
        <h3 className="pros-cons__heading">Ventajas</h3>
        <ul className="pros-cons__list">
          {advantages.map((item) => (
            <li key={item.title} className="pros-cons__item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="pros-cons__column pros-cons__column--con">
        <h3 className="pros-cons__heading">Desventajas</h3>
        <ul className="pros-cons__list">
          {disadvantages.map((item) => (
            <li key={item.title} className="pros-cons__item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
