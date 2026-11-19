import { useMemo, useState } from 'react';
import { mezclar, mezclarDistinto, HAB_NOMBRE } from '../utils';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

export function ChipHabilidad({ h }) {
  return <span className={`chip chip-${h}`}>{HAB_NOMBRE[h] || h}</span>;
}

function Feedback({ ok, e, onReintentar }) {
  return (
    <div className={`feedback ${ok ? 'feedback-ok' : 'feedback-mal'}`} role="status">
      <strong>{ok ? '¡Correcto! 🎉' : 'Casi… revisa la explicación 💪'}</strong>
      {e && <p>{e}</p>}
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
      {sel !== null && <Feedback ok={sel === correcta} e={p.e} onReintentar={sel !== correcta ? reintentar : null} />}
    </>
  );
}

function Unir({ p, onResultado, reintentar }) {
  const derechas = useMemo(() => mezclar(p.pares.map((x) => x[1]), p.id), [p]);
  const [sel, setSel] = useState({});
  const [revisado, setRevisado] = useState(false);
  const completo = p.pares.every((_, i) => sel[i]);
  const ok = p.pares.every((par, i) => sel[i] === par[1]);
  const comprobar = () => {
    setRevisado(true);
    onResultado?.(p.id, ok);
  };
  return (
    <>
      <div className="unir">
        {p.pares.map((par, i) => {
          const estado = revisado ? (sel[i] === par[1] ? 'ok' : 'mal') : '';
          return (
            <div key={i} className={`unir-fila ${estado && 'unir-' + estado}`}>
              <span className="unir-izq">{par[0]}</span>
              <span className="unir-flecha" aria-hidden>→</span>
              <select
                value={sel[i] || ''}
                disabled={revisado}
                onChange={(ev) => setSel({ ...sel, [i]: ev.target.value })}
                aria-label={`Pareja para ${par[0]}`}
              >
                <option value="">Elige…</option>
                {derechas.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {revisado && estado === 'mal' && <span className="unir-sol">✔ {par[1]}</span>}
            </div>
          );
        })}
      </div>
      {!revisado ? (
        <button type="button" className="btn" disabled={!completo} onClick={comprobar}>
          Comprobar
        </button>
      ) : (
        <Feedback ok={ok} e={p.e} onReintentar={!ok ? reintentar : null} />
      )}
    </>
  );
}

function Ordenar({ p, onResultado, reintentar }) {
  const [orden, setOrden] = useState(() => mezclarDistinto(p.items, p.id));
  const [revisado, setRevisado] = useState(false);
  const mover = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= orden.length) return;
    const n = [...orden];
    [n[i], n[j]] = [n[j], n[i]];
    setOrden(n);
  };
  const ok = orden.every((x, i) => x === p.items[i]);
  const comprobar = () => {
    setRevisado(true);
    onResultado?.(p.id, ok);
  };
  return (
    <>
      <ol className="ordenar">
        {orden.map((item, i) => {
          const estado = revisado ? (item === p.items[i] ? 'ok' : 'mal') : '';
          return (
            <li key={item} className={`ordenar-item ${estado && 'ordenar-' + estado}`}>
              <span className="ordenar-num">{i + 1}</span>
              <span className="ordenar-txt">{item}</span>
              {!revisado && (
                <span className="ordenar-btns">
                  <button type="button" onClick={() => mover(i, -1)} disabled={i === 0} aria-label="Subir">
                    ▲
                  </button>
                  <button type="button" onClick={() => mover(i, 1)} disabled={i === orden.length - 1} aria-label="Bajar">
                    ▼
                  </button>
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {!revisado ? (
        <button type="button" className="btn" onClick={comprobar}>
          Comprobar orden
        </button>
      ) : (
        <>
          {!ok && (
            <div className="solucion">
              <strong>Orden correcto:</strong>
              <ol>
                {p.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>
          )}
          <Feedback ok={ok} e={p.e} onReintentar={!ok ? reintentar : null} />
        </>
      )}
    </>
  );
}

function Abierta({ p, onResultado }) {
  const [txt, setTxt] = useState('');
  const [ver, setVer] = useState(false);
  const [auto, setAuto] = useState(null);
  return (
    <div className="abierta">
      <textarea
        rows={4}
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        placeholder="Escribe tu respuesta aquí. Recuerda: opinión + argumento + evidencia del texto."
      />
      {!ver ? (
        <button type="button" className="btn" onClick={() => setVer(true)} disabled={txt.trim().length < 10}>
          Ver respuesta modelo
        </button>
      ) : (
        <div className="pauta">
          <strong>✍️ Pauta de corrección</strong>
          <p>{p.pauta}</p>
          {auto === null ? (
            <div className="pauta-auto">
              <span>¿Tu respuesta cumple con la pauta?</span>
              <button type="button" className="btn btn-sm btn-ok" onClick={() => { setAuto(true); onResultado?.(p.id, true); }}>
                ✅ Sí, lo logré
              </button>
              <button type="button" className="btn btn-sm btn-ghost" onClick={() => { setAuto(false); onResultado?.(p.id, false); }}>
                🔁 Me faltó algo
              </button>
            </div>
          ) : (
            <p className="pauta-ok">{auto ? '¡Muy bien! Sigue así.' : 'Vuelve a escribirla incorporando lo que falta.'}</p>
          )}
        </div>
      )}
    </div>
  );
}

const INSTRUCCION = {
  vf: 'Verdadero o falso',
  unir: 'Une las columnas',
  ordenar: 'Ordena con las flechas',
  abierta: 'Respuesta escrita',
};

export default function Pregunta({ p, numero, onResultado, estadoPrevio }) {
  const [intento, setIntento] = useState(0);
  const reintentar = () => setIntento((n) => n + 1);
  const props = { p, onResultado, reintentar };

  let cuerpo;
  if (p.t === 'mc') cuerpo = <Alternativas key={intento} {...props} opciones={p.o} correcta={p.c} />;
  else if (p.t === 'vf') cuerpo = <Alternativas key={intento} {...props} opciones={['Verdadero', 'Falso']} correcta={p.c ? 0 : 1} />;
  else if (p.t === 'unir') cuerpo = <Unir key={intento} {...props} />;
  else if (p.t === 'ordenar') cuerpo = <Ordenar key={intento} {...props} />;
  else cuerpo = <Abierta key={intento} {...props} />;

  return (
    <section className={`pregunta ${estadoPrevio === true ? 'pregunta-hecha' : ''}`}>
      <header className="pregunta-head">
        {numero != null && <span className="pregunta-num">{numero}</span>}
        <ChipHabilidad h={p.h} />
        {INSTRUCCION[p.t] && <span className="chip chip-tipo">{INSTRUCCION[p.t]}</span>}
        {estadoPrevio === true && <span className="chip chip-hecha" title="Ya la respondiste bien">★</span>}
      </header>
      {p.fragmento ? (
        <>
          <blockquote className="fragmento">{p.q}</blockquote>
          <p className="pregunta-q">¿Qué tipo de texto es?</p>
        </>
      ) : (
        <p className="pregunta-q">{p.t === 'vf' ? `«${p.q}»` : p.q}</p>
      )}
      {cuerpo}
    </section>
  );
}
