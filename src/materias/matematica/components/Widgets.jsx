import { useState } from 'react';
import { fmt, leerNumero, limpio } from '../utils';
import { LESIONES } from '../data/teoria';
import { BarrasDobles, Caja } from './Graficos';

// Barra de porcentaje: elige un total y un porcentaje y mira la parte.
function WPorcentaje() {
  const [total, setTotal] = useState('600');
  const [pct, setPct] = useState(25);
  const n = leerNumero(total) ?? 0;
  const parte = limpio((n * pct) / 100);
  const fraccion = { 10: '1/10', 20: '1/5', 25: '1/4', 50: '1/2', 75: '3/4', 100: '1 (el total)' }[pct];
  return (
    <div className="widget">
      <div className="widget-controles">
        <label>Total (100 %)
          <input type="text" inputMode="decimal" value={total} onChange={(e) => setTotal(e.target.value)} />
        </label>
        <label>Porcentaje: <b>{pct} %</b>
          <input type="range" min="0" max="150" step="5" value={pct} onChange={(e) => setPct(Number(e.target.value))} />
        </label>
      </div>
      <div className="barra-pct" aria-hidden>
        <span className="barra-pct-fill" style={{ width: `${Math.min(pct, 150) / 1.5}%` }} />
        {Array.from({ length: 15 }, (_, i) => <span key={i} className="barra-pct-div" style={{ left: `${((i + 1) / 15) * 100}%` }} />)}
        <span className="barra-pct-100" style={{ left: `${100 / 1.5}%` }}>100 %</span>
      </div>
      <p className="widget-resultado">
        El <b>{pct} %</b> de <b>{fmt(n)}</b> es <b>{fmt(parte)}</b>
      </p>
      <p className="widget-paso">
        ({fmt(n)} : 100) • {pct} = {fmt(limpio(n / 100))} • {pct} = {fmt(parte)}
        {fraccion && <> · {pct} % = {fraccion}</>}
        {pct > 100 && <> · ¡Más que el total!</>}
      </p>
    </div>
  );
}

const EXPRESIONES = [
  { txt: '5 • x + 4', f: (x) => 5 * x + 4, pasos: (x) => [`5 • ${fmt(x)} + 4`, `${fmt(5 * x)} + 4`] },
  { txt: '3 • x − 7', f: (x) => 3 * x - 7, pasos: (x) => [`3 • ${fmt(x)} − 7`, `${fmt(3 * x)} − 7`] },
  { txt: '1 + 3 • x', f: (x) => 1 + 3 * x, pasos: (x) => [`1 + 3 • ${fmt(x)}`, `1 + ${fmt(3 * x)}`] },
  { txt: '2 • x + 3 • x', f: (x) => 5 * x, pasos: (x) => [`2 • ${fmt(x)} + 3 • ${fmt(x)}`, `${fmt(2 * x)} + ${fmt(3 * x)}`] },
  { txt: '5 000 + 2 000 • x', f: (x) => 5000 + 2000 * x, pasos: (x) => [`5 000 + 2 000 • ${fmt(x)}`, `5 000 + ${fmt(2000 * x)}`] },
];

function WValorizar() {
  const [i, setI] = useState(0);
  const [x, setX] = useState(7);
  const e = EXPRESIONES[i];
  return (
    <div className="widget">
      <div className="filtros">
        {EXPRESIONES.map((ex, k) => (
          <button key={ex.txt} type="button" className={`filtro ${k === i ? 'filtro-on' : ''}`} onClick={() => setI(k)}>{ex.txt}</button>
        ))}
      </div>
      <label className="widget-slider">Valor de x: <b>{x}</b>
        <input type="range" min="0" max="20" value={x} onChange={(ev) => setX(Number(ev.target.value))} />
      </label>
      <ol className="widget-pasos">
        <li>Reemplazo x por {x}: <code>{e.pasos(x)[0]}</code></li>
        <li>Primero la multiplicación: <code>{e.pasos(x)[1]}</code></li>
        <li>Resultado: <code className="destacado">{fmt(limpio(e.f(x)))}</code></li>
      </ol>
    </div>
  );
}

// Corre la coma: multiplica o divide por 10, 100 y 1 000.
function WComa() {
  const [txt, setTxt] = useState('3,45');
  const [hist, setHist] = useState([]);
  const n = leerNumero(txt);
  const aplicar = (op, pot) => {
    if (n == null) return;
    const r = limpio(op === '•' ? n * pot : n / pot);
    setHist((h) => [{ de: n, op, pot, r }, ...h].slice(0, 5));
    setTxt(fmt(r).replace(/ /g, ''));
  };
  return (
    <div className="widget">
      <label className="widget-num">Número
        <input type="text" inputMode="decimal" value={txt} onChange={(e) => setTxt(e.target.value)} />
      </label>
      <div className="coma-botones">
        {[10, 100, 1000].map((p) => (
          <button key={`m${p}`} type="button" className="btn btn-sm" onClick={() => aplicar('•', p)} disabled={n == null}>• {fmt(p)} →</button>
        ))}
        {[10, 100, 1000].map((p) => (
          <button key={`d${p}`} type="button" className="btn btn-sm btn-ghost" onClick={() => aplicar(':', p)} disabled={n == null}>← : {fmt(p)}</button>
        ))}
      </div>
      {hist.length > 0 && (
        <ul className="coma-hist">
          {hist.map((h, i) => {
            const ceros = String(h.pot).length - 1;
            return (
              <li key={hist.length - i}>
                <code>{fmt(h.de)} {h.op} {fmt(h.pot)} = <b>{fmt(h.r)}</b></code>
                <span>coma {ceros} lugar{ceros > 1 ? 'es' : ''} a la {h.op === '•' ? 'derecha →' : '← izquierda'}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function WCaja() {
  const [m, setM] = useState({ l: 4, a: 3, h: 2 });
  const { l, a, h } = m;
  const set = (k) => (e) => setM({ ...m, [k]: Number(e.target.value) });
  const area = 2 * (l * a + l * h + a * h);
  return (
    <div className="widget widget-caja">
      <div className="widget-controles">
        {[['l', 'Largo'], ['a', 'Ancho'], ['h', 'Altura']].map(([k, t]) => (
          <label key={k}>{t}: <b>{m[k]} cm</b>
            <input type="range" min="1" max="10" value={m[k]} onChange={set(k)} />
          </label>
        ))}
        <button type="button" className="btn btn-sm btn-ghost" onClick={() => setM({ l: m.l, a: m.l, h: m.l })}>Hacerlo cubo</button>
      </div>
      <Caja l={l} a={a} h={h} cuadricula />
      <div className="widget-cuentas">
        <p><b>Volumen</b> = {l} • {a} • {h} = <b>{fmt(l * a * h)} cm³</b> <small>({l * a} cubitos por capa × {h} capas)</small></p>
        <p><b>Área</b> = 2 • ({l * a} + {l * h} + {a * h}) = <b>{fmt(area)} cm²</b></p>
        {l === a && a === h && <p className="widget-paso">¡Es un cubo! Área = 6 • {l} • {l} · Volumen = {l} • {l} • {l}</p>}
      </div>
    </div>
  );
}

function WBarras() {
  const [ver, setVer] = useState(false);
  return (
    <div className="widget">
      <label className="switch">
        <input type="checkbox" checked={ver} onChange={(e) => setVer(e.target.checked)} />
        <span className="switch-ui" aria-hidden /> Mostrar valores sobre las barras
      </label>
      <BarrasDobles g={LESIONES} valores={ver} />
      <p className="widget-paso">Toca o pasa el mouse sobre una barra para ver su valor. Compara cada par: ¿dónde bajaron las lesiones? ¿dónde subieron?</p>
    </div>
  );
}

const WIDGETS = {
  porcentaje: { titulo: '🧪 Laboratorio de porcentajes', C: WPorcentaje },
  valorizar: { titulo: '🧪 Valoriza moviendo la x', C: WValorizar },
  coma: { titulo: '🧪 Mueve la coma', C: WComa },
  caja: { titulo: '🧪 Arma tu paralelepípedo', C: WCaja },
  barras: { titulo: '🧪 Explora un gráfico de barras dobles', C: WBarras },
};

export default function Widget({ id }) {
  const w = WIDGETS[id];
  if (!w) return null;
  const { C } = w;
  return (
    <section className="bloque">
      <h2>{w.titulo}</h2>
      <C />
    </section>
  );
}
