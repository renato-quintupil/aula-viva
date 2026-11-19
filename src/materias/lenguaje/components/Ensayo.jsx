import { useEffect, useMemo, useState } from 'react';
import { TEXTOS, textoPorId } from '../data/textos';
import { TIPOS, ORDEN_TIPOS } from '../data/teoria';
import { useProgreso } from '../progreso';
import { mezclar, notaChilena, formatoNota, todasLasPreguntas, HAB_NOMBRE } from '../utils';
import TextoRender from './TextoRender';
import { ChipHabilidad } from './Pregunta';

const LETRAS = ['A', 'B', 'C', 'D'];
const opcionesDe = (p) => (p.t === 'vf' ? ['Verdadero', 'Falso'] : p.o);
const correctaDe = (p) => (p.t === 'vf' ? (p.c ? 0 : 1) : p.c);

// Arma la prueba: elige preguntas al azar y las agrupa por texto, como en una prueba real.
function armarPrueba(cantidad, tipos) {
  const pool = todasLasPreguntas().filter(
    (p) => (p.t === 'mc' || p.t === 'vf') && (tipos.includes(p.tipoTexto) || (p.tipoTexto === 'general' && p.juegoId !== 'g2') || (p.tipoTexto === 'comparacion' && tipos.length === 4)),
  );
  const elegidas = mezclar(pool).slice(0, cantidad);
  const orden = (p) => (p.textoId ? TEXTOS.findIndex((t) => t.id === p.textoId) : 99);
  return elegidas.sort((a, b) => orden(a) - orden(b));
}

function Reloj({ inicio }) {
  const [ahora, setAhora] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setAhora(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.floor((ahora - inicio) / 1000);
  return <span className="reloj">⏱ {String(Math.floor(s / 60)).padStart(2, '0')}:{String(s % 60).padStart(2, '0')}</span>;
}

function Config({ onComenzar }) {
  const [cantidad, setCantidad] = useState(20);
  const [tipos, setTipos] = useState(ORDEN_TIPOS);
  const toggle = (k) => setTipos((t) => (t.includes(k) ? t.filter((x) => x !== k) : [...t, k]));
  return (
    <div className="ensayo-config">
      <p>Responde como en la prueba real: <b>no verás si acertaste hasta que entregues</b>. Al final obtendrás tu nota (escala 1,0 a 7,0 con 60 % de exigencia) y la explicación de cada respuesta.</p>
      <fieldset>
        <legend>¿Cuántas preguntas?</legend>
        <div className="filtros">
          {[10, 20, 30, 40].map((n) => (
            <button key={n} type="button" className={`filtro ${cantidad === n ? 'filtro-on' : ''}`} onClick={() => setCantidad(n)}>{n}</button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Tipos de texto</legend>
        <div className="filtros">
          {ORDEN_TIPOS.map((k) => (
            <button key={k} type="button" className={`filtro ${tipos.includes(k) ? 'filtro-on' : ''}`} onClick={() => toggle(k)} aria-pressed={tipos.includes(k)}>
              {TIPOS[k].icono} {TIPOS[k].nombre}
            </button>
          ))}
        </div>
      </fieldset>
      <button type="button" className="btn btn-grande" disabled={!tipos.length} onClick={() => onComenzar(cantidad, tipos)}>
        Comenzar ensayo
      </button>
    </div>
  );
}

function Resultados({ preguntas, resp, segundos, onOtra }) {
  const [soloMalas, setSoloMalas] = useState(false);
  const ok = preguntas.filter((p, i) => resp[i] === correctaDe(p)).length;
  const logro = ok / preguntas.length;
  const nota = notaChilena(logro);

  const por = (clave, nombres) => {
    const g = {};
    preguntas.forEach((p, i) => {
      const k = p[clave];
      g[k] = g[k] || { ok: 0, total: 0 };
      g[k].total++;
      if (resp[i] === correctaDe(p)) g[k].ok++;
    });
    return Object.entries(g).map(([k, v]) => ({ k, nombre: nombres(k), ...v }));
  };
  const porHab = por('h', (k) => HAB_NOMBRE[k]);
  const porTipo = por('tipoTexto', (k) => (TIPOS[k] ? `${TIPOS[k].icono} ${TIPOS[k].nombre}` : k === 'comparacion' ? '⚖️ Comparar textos' : '🎯 Teoría general'));

  return (
    <div className="ensayo-res">
      <div className={`nota-grande ${nota >= 4 ? 'nota-azul' : 'nota-roja'}`}>
        <span className="nota-num">{formatoNota(nota)}</span>
        <span>{ok} de {preguntas.length} correctas ({Math.round(logro * 100)} %) · {Math.floor(segundos / 60)} min {segundos % 60} s</span>
        <span className="nota-msg">
          {nota >= 6 ? '¡Excelente! Estás muy bien preparada/o. 🌟' : nota >= 4 ? '¡Vas bien! Revisa tus errores para subir la nota. 💪' : 'Repasa las fichas de teoría y vuelve a intentarlo. ¡Tú puedes! 📚'}
        </span>
      </div>

      <div className="dos-col">
        {[['Por habilidad', porHab], ['Por tipo de texto', porTipo]].map(([titulo, datos]) => (
          <section key={titulo} className="bloque">
            <h2>{titulo}</h2>
            <ul className="desglose">
              {datos.map((d) => (
                <li key={d.k}>
                  <span>{d.nombre}</span>
                  <span className="progreso"><span className={`progreso-fill ${d.ok / d.total < 0.6 ? 'fill-bajo' : ''}`} style={{ width: `${(d.ok / d.total) * 100}%` }} /></span>
                  <span className="avance-num">{d.ok}/{d.total}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="bloque">
        <div className="bloque-head">
          <h2>Revisión</h2>
          <label className="switch">
            <input type="checkbox" checked={soloMalas} onChange={(e) => setSoloMalas(e.target.checked)} />
            <span className="switch-ui" aria-hidden /> Solo incorrectas
          </label>
        </div>
        <ol className="revision">
          {preguntas.map((p, i) => {
            const bien = resp[i] === correctaDe(p);
            if (soloMalas && bien) return null;
            const ops = opcionesDe(p);
            return (
              <li key={p.id} className={bien ? 'rev-ok' : 'rev-mal'}>
                <div className="rev-head"><span className="pregunta-num">{i + 1}</span><ChipHabilidad h={p.h} />{bien ? '✅' : '❌'}</div>
                <p className="rev-q">{p.fragmento ? `«${p.q}» ¿Qué tipo de texto es?` : p.q}</p>
                {!bien && <p className="rev-tu">Tu respuesta: {resp[i] != null ? ops[resp[i]] : 'Sin responder'}</p>}
                <p className="rev-correcta">Respuesta correcta: <b>{ops[correctaDe(p)]}</b></p>
                <p className="rev-e">{p.e}</p>
                {p.textoId && <a href={`#/lenguaje/practica/${p.textoId}`} className="rev-link">Ver texto y practicar →</a>}
              </li>
            );
          })}
        </ol>
      </section>
      <div className="ficha-acciones">
        <button type="button" className="btn btn-grande" onClick={onOtra}>↺ Hacer otro ensayo</button>
      </div>
    </div>
  );
}

export default function Ensayo() {
  const { guardarEnsayo, ensayos } = useProgreso();
  const [preguntas, setPreguntas] = useState(null);
  const [resp, setResp] = useState({});
  const [actual, setActual] = useState(0);
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(null);

  const comenzar = (cantidad, tipos) => {
    setPreguntas(armarPrueba(cantidad, tipos));
    setResp({});
    setActual(0);
    setInicio(Date.now());
    setFin(null);
    window.scrollTo(0, 0);
  };

  const entregar = () => {
    const sin = preguntas.length - Object.keys(resp).length;
    if (sin > 0 && !window.confirm(`Tienes ${sin} pregunta(s) sin responder. ¿Entregar de todos modos?`)) return;
    const segundos = Math.round((Date.now() - inicio) / 1000);
    const ok = preguntas.filter((p, i) => resp[i] === correctaDe(p)).length;
    guardarEnsayo({ fecha: new Date().toISOString(), nota: notaChilena(ok / preguntas.length), ok, total: preguntas.length });
    setFin(segundos);
    window.scrollTo(0, 0);
  };

  const p = preguntas?.[actual];
  const texto = useMemo(() => (p?.textoId ? textoPorId(p.textoId) : null), [p]);

  return (
    <div className="pagina pagina-ancha">
      <h1 className="titulo-pag">📝 Ensayo de prueba</h1>

      {!preguntas && (
        <>
          <Config onComenzar={comenzar} />
          {ensayos.length > 0 && (
            <section className="bloque">
              <h2>Tus ensayos anteriores</h2>
              <ul className="historial">
                {[...ensayos].reverse().slice(0, 8).map((e) => (
                  <li key={e.fecha}>
                    <span>{new Date(e.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                    <span>{e.ok}/{e.total}</span>
                    <b className={e.nota >= 4 ? 'nota-azul' : 'nota-roja'}>{formatoNota(e.nota)}</b>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      {preguntas && fin == null && (
        <>
          <div className="ensayo-barra">
            <span>Pregunta {actual + 1} de {preguntas.length}</span>
            <Reloj inicio={inicio} />
            <span>{Object.keys(resp).length} respondidas</span>
          </div>
          <div className={`vista ${texto ? '' : 'vista-sola'}`}>
            {texto && (
              <details className="vista-texto ensayo-texto" open>
                <summary>📄 Lee el texto: {texto.titulo}</summary>
                <TextoRender texto={texto} ver={false} />
              </details>
            )}
            <div className="vista-preguntas">
              <section className="pregunta">
                <header className="pregunta-head">
                  <span className="pregunta-num">{actual + 1}</span>
                  <ChipHabilidad h={p.h} />
                </header>
                {p.fragmento ? (
                  <>
                    <blockquote className="fragmento">{p.q}</blockquote>
                    <p className="pregunta-q">¿Qué tipo de texto es?</p>
                  </>
                ) : (
                  <p className="pregunta-q">{p.t === 'vf' ? `Verdadero o falso: «${p.q}»` : p.q}</p>
                )}
                <div className={`opciones ${p.t === 'vf' ? 'opciones-2' : ''}`}>
                  {opcionesDe(p).map((o, i) => (
                    <button key={i} type="button" className={`opcion ${resp[actual] === i ? 'opcion-sel' : ''}`} onClick={() => setResp({ ...resp, [actual]: i })} aria-pressed={resp[actual] === i}>
                      <span className="opcion-letra">{LETRAS[i]}</span>
                      <span>{o}</span>
                    </button>
                  ))}
                </div>
              </section>
              <div className="ensayo-nav">
                <button type="button" className="btn btn-ghost" disabled={actual === 0} onClick={() => setActual(actual - 1)}>← Anterior</button>
                {actual < preguntas.length - 1 ? (
                  <button type="button" className="btn" onClick={() => setActual(actual + 1)}>Siguiente →</button>
                ) : (
                  <button type="button" className="btn btn-ok" onClick={entregar}>Entregar prueba ✔</button>
                )}
              </div>
              <div className="mapa-preguntas" aria-label="Ir a pregunta">
                {preguntas.map((_, i) => (
                  <button key={i} type="button" className={`mp ${i === actual ? 'mp-actual' : ''} ${resp[i] != null ? 'mp-resp' : ''}`} onClick={() => setActual(i)}>
                    {i + 1}
                  </button>
                ))}
              </div>
              <button type="button" className="btn btn-ghost btn-sm entregar-ya" onClick={entregar}>Entregar ahora</button>
            </div>
          </div>
        </>
      )}

      {preguntas && fin != null && <Resultados preguntas={preguntas} resp={resp} segundos={fin} onOtra={() => setPreguntas(null)} />}
    </div>
  );
}
