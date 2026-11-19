import { useState } from 'react';
import { fmt, leerNumero, iguales } from '../utils';
import { UNIDADES } from '../data/teoria';
import { BarrasDobles, Tabla, Caja } from './Graficos';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

export function ChipUnidad({ u }) {
  const d = UNIDADES[u];
  return d ? <span className={`chip chip-unidad u-${u}`}>{d.icono} {d.nombre}</span> : null;
}

// Material de apoyo de una pregunta: tabla, gráfico o cuerpo geométrico.
export function Apoyo({ p }) {
  return (
    <>
      {p.tabla && <Tabla t={p.tabla} />}
      {p.grafico && <BarrasDobles g={p.grafico} />}
      {p.caja && <div className="apoyo-caja"><Caja {...p.caja} /></div>}
    </>
  );
}

export const respuestaTexto = (p) => (p.t === 'num' ? `${fmt(p.r)}${p.u ? ' ' + p.u : ''}` : p.t === 'vf' ? (p.c ? 'Verdadero' : 'Falso') : p.o[p.c]);

function Feedback({ ok, p, onReintentar }) {
  return (
    <div className={`feedback ${ok ? 'feedback-ok' : 'feedback-mal'}`} role="status">
      <strong>{ok ? '¡Correcto! 🎉' : `Casi… la respuesta es ${respuestaTexto(p)} 💪`}</strong>
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

function Numerica({ p, onResultado, reintentar }) {
  const [txt, setTxt] = useState('');
  const [ok, setOk] = useState(null);
  const valor = leerNumero(txt);
  const comprobar = (e) => {
    e.preventDefault();
    if (valor == null || ok !== null) return;
    const bien = iguales(valor, p.r);
    setOk(bien);
    onResultado?.(p.id, bien);
  };
  return (
    <>
      <form className="respuesta-num" onSubmit={comprobar}>
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          disabled={ok !== null}
          placeholder="Tu respuesta"
          aria-label="Tu respuesta"
          className={ok === null ? '' : ok ? 'input-ok' : 'input-mal'}
        />
        {p.u && <span className="unidad-txt">{p.u}</span>}
        {ok === null && (
          <button type="submit" className="btn" disabled={valor == null}>Comprobar</button>
        )}
      </form>
      {ok === null && <p className="ayuda">Usa coma para los decimales (ej.: 2,5).</p>}
      {ok !== null && <Feedback ok={ok} p={p} onReintentar={!ok ? reintentar : null} />}
    </>
  );
}

const INSTRUCCION = { vf: 'Verdadero o falso', num: 'Escribe el resultado', mc: 'Elige una alternativa' };

export default function Pregunta({ p, numero, onResultado, estadoPrevio }) {
  const [intento, setIntento] = useState(0);
  const reintentar = () => setIntento((n) => n + 1);
  const props = { p, onResultado, reintentar };

  let cuerpo;
  if (p.t === 'mc') cuerpo = <Alternativas key={intento} {...props} opciones={p.o} correcta={p.c} />;
  else if (p.t === 'vf') cuerpo = <Alternativas key={intento} {...props} opciones={['Verdadero', 'Falso']} correcta={p.c ? 0 : 1} />;
  else cuerpo = <Numerica key={intento} {...props} />;

  return (
    <section className={`pregunta ${estadoPrevio === true ? 'pregunta-hecha' : ''}`}>
      <header className="pregunta-head">
        {numero != null && <span className="pregunta-num">{numero}</span>}
        <span className="chip chip-tipo">{INSTRUCCION[p.t]}</span>
        {estadoPrevio === true && <span className="chip chip-hecha" title="Ya la respondiste bien">★</span>}
      </header>
      <Apoyo p={p} />
      <p className="pregunta-q">{p.t === 'vf' ? `«${p.q}»` : p.q}</p>
      {cuerpo}
    </section>
  );
}
