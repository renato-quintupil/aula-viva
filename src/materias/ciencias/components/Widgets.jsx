import { Fragment, useEffect, useMemo, useState } from 'react';
import { CADENAS } from '../data/teoria';

// ───────── Simulador de partículas del agua ─────────
const N = 30;

function estadoDe(t) {
  if (t < 0) return 'solido';
  if (t === 0) return 'fusion';
  if (t < 100) return 'liquido';
  if (t === 100) return 'ebullicion';
  return 'gas';
}

const TEXTO = {
  solido: { nombre: 'Sólido (hielo)', d: 'Partículas muy juntas y ordenadas. La fuerza de atracción es intensa: solo vibran en su lugar.' },
  fusion: { nombre: '0 °C: fusión o solidificación', d: 'Punto de fusión: hay hielo y agua líquida a la vez. La temperatura no cambia mientras ocurre el cambio de estado.' },
  liquido: { nombre: 'Líquido (agua)', d: 'Las partículas están cerca, pero se deslizan unas sobre otras. La fuerza de atracción es más débil.' },
  ebullicion: { nombre: '100 °C: ebullición o condensación', d: 'Punto de ebullición: hay agua líquida y vapor a la vez. La temperatura no cambia mientras ocurre el cambio.' },
  gas: { nombre: 'Gas (vapor de agua)', d: 'Partículas muy separadas que se mueven rápido y libres. La fuerza de atracción es casi nula.' },
};

// Posición de cada partícula según el estado (sólido: rejilla; líquido: abajo y desordenado; gas: todo el recipiente).
function posiciones(estado, semilla) {
  const r = (i, k) => {
    const x = Math.sin((i + 1) * 12.9898 * (k + 1) + semilla) * 43758.5453;
    return x - Math.floor(x);
  };
  return Array.from({ length: N }, (_, i) => {
    if (estado === 'solido') return { x: 40 + (i % 6) * 24, y: 110 + Math.floor(i / 6) * 22 };
    if (estado === 'gas') return { x: 20 + r(i, 1) * 180, y: 15 + r(i, 2) * 180 };
    const mitad = estado === 'liquido' || i % 2 === 0;
    if (estado === 'ebullicion' && !mitad) return { x: 20 + r(i, 1) * 180, y: 15 + r(i, 2) * 90 };
    if (estado === 'fusion' && i < 15) return { x: 40 + (i % 5) * 24, y: 150 + Math.floor(i / 5) * 18 };
    return { x: 25 + r(i, 1) * 170, y: 130 + r(i, 2) * 65 };
  });
}

function Particulas() {
  const [t, setT] = useState(-10);
  const [tick, setTick] = useState(0);
  const estado = estadoDe(t);
  const movil = estado !== 'solido';
  useEffect(() => {
    if (!movil) return undefined;
    const id = setInterval(() => setTick((k) => k + 1), estado === 'gas' ? 450 : 900);
    return () => clearInterval(id);
  }, [movil, estado]);
  const pts = useMemo(() => posiciones(estado, movil ? tick : 0), [estado, tick, movil]);

  return (
    <section className="bloque">
      <h2>🔬 Simulador: las partículas del agua</h2>
      <p className="ayuda">Mueve la temperatura y observa qué les pasa a las partículas.</p>
      <div className="sim">
        <svg viewBox="0 0 220 210" className={`sim-caja sim-${estado}`} role="img" aria-label={TEXTO[estado].nombre}>
          <rect x="6" y="6" width="208" height="198" rx="10" className="sim-recipiente" />
          {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="8" className="sim-part" style={{ transitionDuration: estado === 'gas' ? '0.45s' : '0.9s' }} />)}
        </svg>
        <div className="sim-panel">
          <label className="sim-temp">
            Temperatura: <b>{t} °C</b>
            <input type="range" min="-20" max="120" step="10" value={t} onChange={(e) => setT(Number(e.target.value))} />
          </label>
          <div className="filtros">
            {[-10, 0, 50, 100, 110].map((v) => (
              <button key={v} type="button" className={`filtro ${t === v ? 'filtro-on' : ''}`} onClick={() => setT(v)}>{v} °C</button>
            ))}
          </div>
          <p className="sim-estado">{TEXTO[estado].nombre}</p>
          <p>{TEXTO[estado].d}</p>
        </div>
      </div>
    </section>
  );
}

// ───────── Curva de calentamiento del agua ─────────
const TRAMOS = [
  { id: 'A–B', x1: 30, y1: 190, x2: 80, y2: 150, d: 'El hielo absorbe calor y su temperatura sube hasta 0 °C.', e: 'Sólido' },
  { id: 'B–C', x1: 80, y1: 150, x2: 140, y2: 150, d: 'Fusión a 0 °C: la temperatura se mantiene constante.', e: 'Sólido y líquido' },
  { id: 'C–D', x1: 140, y1: 150, x2: 210, y2: 70, d: 'El agua líquida se calienta de 0 °C a 100 °C.', e: 'Líquido' },
  { id: 'D–E', x1: 210, y1: 70, x2: 290, y2: 70, d: 'Ebullición a 100 °C: la temperatura se mantiene constante.', e: 'Líquido y vapor' },
  { id: 'E–F', x1: 290, y1: 70, x2: 330, y2: 30, d: 'Solo hay vapor, que sigue calentándose.', e: 'Gas' },
];

function Curva() {
  const [sel, setSel] = useState(1);
  const t = TRAMOS[sel];
  return (
    <section className="bloque">
      <h2>📈 Curva de calentamiento del agua</h2>
      <p className="ayuda">Toca cada tramo del gráfico. Los tramos planos son los cambios de estado.</p>
      <div className="curva">
        <svg viewBox="0 0 350 220" role="img" aria-label="Curva de calentamiento del agua">
          <line x1="30" y1="200" x2="340" y2="200" className="eje" />
          <line x1="30" y1="200" x2="30" y2="15" className="eje" />
          <text x="185" y="216" className="eje-txt" textAnchor="middle">Tiempo</text>
          <text x="12" y="20" className="eje-txt">°C</text>
          {[{ v: '0', y: 150 }, { v: '100', y: 70 }].map((m) => (
            <g key={m.v}>
              <line x1="30" y1={m.y} x2="340" y2={m.y} className="guia" />
              <text x="26" y={m.y + 4} textAnchor="end" className="tick">{m.v}</text>
            </g>
          ))}
          {TRAMOS.map((tr, i) => (
            <g key={tr.id} className={`tramo ${sel === i ? 'tramo-on' : ''}`} onClick={() => setSel(i)} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && setSel(i)}>
              <line x1={tr.x1} y1={tr.y1} x2={tr.x2} y2={tr.y2} className="tramo-hit" />
              <line x1={tr.x1} y1={tr.y1} x2={tr.x2} y2={tr.y2} className="tramo-linea" />
              <text x={(tr.x1 + tr.x2) / 2} y={Math.min(tr.y1, tr.y2) - 8} textAnchor="middle" className="tramo-txt">{tr.id}</text>
            </g>
          ))}
        </svg>
        <div className="curva-info">
          <strong>Tramo {t.id} · {t.e}</strong>
          <p>{t.d}</p>
          <p className="ayuda">En la curva de enfriamiento se recorre al revés: condensación a 100 °C y solidificación a 0 °C.</p>
        </div>
      </div>
    </section>
  );
}

// ───────── Capas de la atmósfera ─────────
const CAPAS_ATM = [
  { n: 'Exósfera', alt: 'más de 600 km', d: 'La capa más externa.' },
  { n: 'Termósfera', alt: '80 – 600 km', d: 'Permite el viaje de las ondas de radio.' },
  { n: 'Mesósfera', alt: '50 – 80 km', d: 'La capa más fría.' },
  { n: 'Estratósfera', alt: '12 – 50 km', d: 'Tiene la capa de ozono, que filtra la radiación ultravioleta.' },
  { n: 'Tropósfera', alt: '0 – 12 km', d: 'Aquí vivimos y ocurren la lluvia, el viento y las nubes.' },
];

function Atmosfera() {
  return (
    <section className="bloque">
      <h2>🌤️ Capas de la atmósfera (de arriba hacia abajo)</h2>
      <ol className="atm">
        {CAPAS_ATM.map((c, i) => (
          <li key={c.n} className={`atm-${i}`}>
            <strong>{c.n}</strong>
            <span className="atm-alt">{c.alt}</span>
            <span>{c.d}</span>
          </li>
        ))}
        <li className="atm-suelo">🌍 Superficie de la Tierra</li>
      </ol>
      <p className="ayuda">Truco para recordar el orden de abajo hacia arriba: <b>T</b>ropósfera, <b>E</b>stratósfera, <b>M</b>esósfera, <b>T</b>ermósfera, <b>E</b>xósfera.</p>
    </section>
  );
}

// ───────── Ecuación de la fotosíntesis ─────────
function Fotosintesis() {
  const [ver, setVer] = useState(false);
  return (
    <section className="bloque">
      <h2>🌱 La fotosíntesis en un esquema</h2>
      <div className="ecuacion">
        <span className="ec-item">☀️ Luz</span>
        <span className="ec-op">+</span>
        <span className="ec-item">💧 Agua<small>(por las raíces)</small></span>
        <span className="ec-op">+</span>
        <span className="ec-item">💨 CO₂<small>(por los estomas)</small></span>
        <span className="ec-op">→</span>
        <span className={`ec-item ec-prod ${ver ? '' : 'ec-oculto'}`}>🍬 Glucosa<small>(alimento, se guarda como almidón)</small></span>
        <span className="ec-op">+</span>
        <span className={`ec-item ec-prod ${ver ? '' : 'ec-oculto'}`}>🫧 Oxígeno<small>(sale por los estomas)</small></span>
      </div>
      <div className="ficha-acciones">
        <button type="button" className="btn btn-sm" onClick={() => setVer(!ver)}>{ver ? 'Ocultar productos' : '¿Qué se produce? Ver productos'}</button>
      </div>
      <p className="ayuda">Ocurre en los <b>cloroplastos</b>, que tienen <b>clorofila</b> (pigmento verde que capta la luz).</p>
    </section>
  );
}

// ───────── Cadenas alimentarias ─────────
const NIVELES = ['Productor', 'Consumidor primario', 'Consumidor secundario', 'Consumidor terciario', 'Consumidor cuaternario'];

function Red() {
  const [i, setI] = useState(0);
  const c = CADENAS[i];
  return (
    <section className="bloque">
      <h2>🦊 Explora cadenas alimentarias</h2>
      <div className="filtros">
        {CADENAS.map((cad, k) => (
          <button key={cad.join()} type="button" className={`filtro ${i === k ? 'filtro-on' : ''}`} onClick={() => setI(k)}>{cad[0]} → {cad[cad.length - 1]}</button>
        ))}
      </div>
      <div className="cadena">
        {c.map((o, k) => (
          <Fragment key={o}>
            {k > 0 && <span className="cadena-flecha" aria-hidden>→</span>}
            <div className="cadena-ser">
              <strong>{o}</strong>
              <small>{NIVELES[k]}{k === 0 ? ' (autótrofo)' : k === 1 ? ' · herbívoro' : ' · carnívoro'}</small>
            </div>
          </Fragment>
        ))}
      </div>
      <p className="ayuda">Las flechas van desde el alimento hacia quien lo come. Los <b>descomponedores</b> (hongos y bacterias) actúan sobre los restos de todos los niveles.</p>
    </section>
  );
}

const WIDGETS = { particulas: Particulas, curva: Curva, atmosfera: Atmosfera, fotosintesis: Fotosintesis, red: Red };

export default function Widget({ id }) {
  const W = WIDGETS[id];
  return W ? <W /> : null;
}
