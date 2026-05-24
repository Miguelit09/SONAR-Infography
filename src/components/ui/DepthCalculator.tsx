import { useMemo, useState } from 'react';

const DEFAULT_VELOCITY = 1500;

export function DepthCalculator() {
  const [velocity, setVelocity] = useState(String(DEFAULT_VELOCITY));
  const [time, setTime] = useState('0.1');

  const result = useMemo(() => {
    const v = parseFloat(velocity);
    const t = parseFloat(time);
    if (!Number.isFinite(v) || !Number.isFinite(t) || v <= 0 || t <= 0) {
      return null;
    }
    return (v * t) / 2;
  }, [velocity, time]);

  return (
    <div className="depth-calculator">
      <h3 className="depth-calculator__title">Calculadora de profundidad</h3>
      <p className="depth-calculator__hint">
        Introduce velocidad del sonido (m/s) y tiempo de eco (s) para estimar la
        profundidad.
      </p>
      <div className="depth-calculator__fields">
        <label className="depth-calculator__field">
          <span>v — velocidad (m/s)</span>
          <input
            type="number"
            min="1"
            step="1"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
          />
        </label>
        <label className="depth-calculator__field">
          <span>t — tiempo de eco (s)</span>
          <input
            type="number"
            min="0.001"
            step="0.001"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>
      <output className="depth-calculator__result" htmlFor="depth-calc">
        {result !== null ? (
          <>
            Profundidad estimada:{' '}
            <strong>{result.toLocaleString('es', { maximumFractionDigits: 2 })} m</strong>
          </>
        ) : (
          <span className="depth-calculator__error">
            Introduce valores numéricos válidos mayores que cero.
          </span>
        )}
      </output>
    </div>
  );
}
