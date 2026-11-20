import { useState } from 'react';
import { UNIDADES } from '../data/teoria';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

export function ChipUnidad({ u }) {
  const d = UNIDADES[u];
  return d ? <span className={`chip chip-unidad u-${u}`}>{d.icono} {d.nombre}</span> : null;
}

// Fragmento de fuente histórica que acompaña a una pregunta.
export function Apoyo({ p }) {
  if (!p.fuente) return null;
  return (
    <blockquote className="fuente-hist">
      <p>“{p.fuente.texto}”</p>
      <cite>{p.fuente.autor}</cite>
    </blockquote>
  );
}

export const respuestaTexto = (p) => (p.t === 'vf' ? (p.c ? 'Verdadero' : 'Falso') : p.o[p.c]);

function Feedback({ ok, p, onReintentar }) {
  return (
    <div className={`feedback ${ok ? 'feedback-ok' : 'feedback-mal'}`} role="status">
      <strong>{ok ? '¡Correcto! 🎉' : `Casi… la respuesta es: ${respuestaTexto(p)} 💪`}</strong>
      {p.e && <p>{p.e}</p>}
      {onReintentar && (
        <button type="button" className="btn btn-ghost btn-sm" onClick={onReintentar}>
          ↺ Intentar de nuevo
        </button>
      )}
    </div>
  );
}

function Alternativas({ p, opciones, correcta, onResultado, reintentar }) {
  const [sel, setSel] = useState(null);
  const responder = (i) => {
    if (sel !== null) return;
    setSel(i);
    onResultado?.(p.id, i === correcta);
  };
  return (
    <>
      <div className={`opciones ${opciones.length === 2 ? 'opciones-2' : ''}`}>
        {opciones.map((o, i) => {
          let cls = 'opcion';
          if (sel !== null && i === correcta) cls += ' opcion-ok';
          else if (sel === i) cls += ' opcion-mal';
          return (
            <button key={i} type="button" className={cls} onClick={() => responder(i)} disabled={sel !== null}>
              <span className="opcion-letra">{opciones.length === 2 ? (i === 0 ? '✓' : '✗') : LETRAS[i]}</span>
              <span>{o}</span>
            </button>
          );
        })}
      </div>
      {sel !== null && <Feedback ok={sel === correcta} p={p} onReintentar={sel !== correcta ? reintentar : null} />}
    </>
  );
}

export default function Pregunta({ p, numero, onResultado, estadoPrevio }) {
  const [intento, setIntento] = useState(0);
  const reintentar = () => setIntento((n) => n + 1);
  const opciones = p.t === 'vf' ? ['Verdadero', 'Falso'] : p.o;
  const correcta = p.t === 'vf' ? (p.c ? 0 : 1) : p.c;

  return (
    <section className={`pregunta ${estadoPrevio === true ? 'pregunta-hecha' : ''}`}>
      <header className="pregunta-head">
        {numero != null && <span className="pregunta-num">{numero}</span>}
        <span className="chip chip-tipo">{p.t === 'vf' ? 'Verdadero o falso' : 'Elige una alternativa'}</span>
        {estadoPrevio === true && <span className="chip chip-hecha" title="Ya la respondiste bien">★</span>}
      </header>
      <Apoyo p={p} />
      <p className="pregunta-q">{p.t === 'vf' ? `«${p.q}»` : p.q}</p>
      <Alternativas key={intento} p={p} opciones={opciones} correcta={correcta} onResultado={onResultado} reintentar={reintentar} />
    </section>
  );
}
