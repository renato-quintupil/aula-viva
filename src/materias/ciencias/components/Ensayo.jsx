import { useEffect, useState } from 'react';
import { todasLasPreguntas } from '../data/ejercicios';
import { UNIDADES, ORDEN_UNIDADES } from '../data/teoria';
import { useProgreso } from '../progreso';
import { mezclar, notaChilena, formatoNota } from '../utils';
import { ChipUnidad, Apoyo, respuestaTexto } from './Pregunta';

const LETRAS = ['A', 'B', 'C', 'D'];
const opcionesDe = (p) => (p.t === 'vf' ? ['Verdadero', 'Falso'] : p.o);

function esCorrecta(p, r) {
  if (r == null) return false;
  return r === (p.t === 'vf' ? (p.c ? 0 : 1) : p.c);
}

const textoRespuesta = (p, r) => {
  if (r == null) return 'Sin responder';
  return opcionesDe(p)[r];
};

// Arma la prueba: preguntas al azar de las unidades elegidas, ordenadas por unidad como en una prueba real.
function armarPrueba(cantidad, unidades) {
  const pool = todasLasPreguntas().filter((p) => unidades.includes(p.unidad));
  const elegidas = mezclar(pool).slice(0, cantidad);
  return elegidas.sort((a, b) => ORDEN_UNIDADES.indexOf(a.unidad) - ORDEN_UNIDADES.indexOf(b.unidad));
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
  const [unidades, setUnidades] = useState(ORDEN_UNIDADES);
  const toggle = (k) => setUnidades((t) => (t.includes(k) ? t.filter((x) => x !== k) : [...t, k]));
  return (
    <div className="ensayo-config">
      <p>Responde como en la prueba real: <b>no verás si acertaste hasta que entregues</b>. Lee con atención las fuentes. Al final obtendrás tu nota (escala 1,0 a 7,0 con 60 % de exigencia) y la explicación de cada pregunta.</p>
      <fieldset>
        <legend>¿Cuántas preguntas?</legend>
        <div className="filtros">
          {[10, 20, 30, 40].map((n) => (
            <button key={n} type="button" className={`filtro ${cantidad === n ? 'filtro-on' : ''}`} onClick={() => setCantidad(n)}>{n}</button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Unidades</legend>
        <div className="filtros">
          {ORDEN_UNIDADES.map((k) => (
            <button key={k} type="button" className={`filtro ${unidades.includes(k) ? 'filtro-on' : ''}`} onClick={() => toggle(k)} aria-pressed={unidades.includes(k)}>
              {UNIDADES[k].icono} {UNIDADES[k].nombre}
            </button>
          ))}
        </div>
      </fieldset>
      <button type="button" className="btn btn-grande" disabled={!unidades.length} onClick={() => onComenzar(cantidad, unidades)}>
        Comenzar ensayo
      </button>
    </div>
  );
}

function Resultados({ preguntas, resp, segundos, onOtra }) {
  const [soloMalas, setSoloMalas] = useState(false);
  const ok = preguntas.filter((p, i) => esCorrecta(p, resp[i])).length;
  const logro = ok / preguntas.length;
  const nota = notaChilena(logro);

  const porUnidad = {};
  preguntas.forEach((p, i) => {
    const g = (porUnidad[p.unidad] = porUnidad[p.unidad] || { ok: 0, total: 0 });
    g.total++;
    if (esCorrecta(p, resp[i])) g.ok++;
  });

  return (
    <div className="ensayo-res">
      <div className={`nota-grande ${nota >= 4 ? 'nota-azul' : 'nota-roja'}`}>
        <span className="nota-num">{formatoNota(nota)}</span>
        <span>{ok} de {preguntas.length} correctas ({Math.round(logro * 100)} %) · {Math.floor(segundos / 60)} min {segundos % 60} s</span>
        <span className="nota-msg">
          {nota >= 6 ? '¡Excelente! Estás muy bien preparada/o. 🌟' : nota >= 4 ? '¡Vas bien! Revisa tus errores para subir la nota. 💪' : 'Repasa las unidades en Aprende y vuelve a intentarlo. ¡Tú puedes! 📚'}
        </span>
      </div>

      <section className="bloque">
        <h2>Por unidad</h2>
        <ul className="desglose">
          {ORDEN_UNIDADES.filter((k) => porUnidad[k]).map((k) => {
            const d = porUnidad[k];
            return (
              <li key={k}>
                <a href={`#/ciencias/unidad/${k}`}>{UNIDADES[k].icono} {UNIDADES[k].nombre}</a>
                <span className="progreso"><span className={`progreso-fill ${d.ok / d.total < 0.6 ? 'fill-bajo' : ''}`} style={{ width: `${(d.ok / d.total) * 100}%` }} /></span>
                <span className="avance-num">{d.ok}/{d.total}</span>
              </li>
            );
          })}
        </ul>
      </section>

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
            const bien = esCorrecta(p, resp[i]);
            if (soloMalas && bien) return null;
            return (
              <li key={p.id} className={bien ? 'rev-ok' : 'rev-mal'}>
                <div className="rev-head"><span className="pregunta-num">{i + 1}</span><ChipUnidad u={p.unidad} />{bien ? '✅' : '❌'}</div>
                <p className="rev-q">{p.t === 'vf' ? `Verdadero o falso: «${p.q}»` : p.q}</p>
                {!bien && <p className="rev-tu">Tu respuesta: {textoRespuesta(p, resp[i])}</p>}
                <p className="rev-correcta">Respuesta correcta: <b>{respuestaTexto(p)}</b></p>
                <p className="rev-e">{p.e}</p>
                <a href={`#/ciencias/practica/${p.guia}`} className="rev-link">Practicar esta guía →</a>
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

  const comenzar = (cantidad, unidades) => {
    setPreguntas(armarPrueba(cantidad, unidades));
    setResp({});
    setActual(0);
    setInicio(Date.now());
    setFin(null);
    window.scrollTo(0, 0);
  };

  const respondida = (i) => resp[i] != null;
  const nRespondidas = preguntas ? preguntas.filter((_, i) => respondida(i)).length : 0;

  const entregar = () => {
    const sin = preguntas.length - nRespondidas;
    if (sin > 0 && !window.confirm(`Tienes ${sin} pregunta(s) sin responder. ¿Entregar de todos modos?`)) return;
    const segundos = Math.round((Date.now() - inicio) / 1000);
    const ok = preguntas.filter((p, i) => esCorrecta(p, resp[i])).length;
    guardarEnsayo({ fecha: new Date().toISOString(), nota: notaChilena(ok / preguntas.length), ok, total: preguntas.length });
    setFin(segundos);
    window.scrollTo(0, 0);
  };

  const p = preguntas?.[actual];

  return (
    <div className="pagina">
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
            <span>{nRespondidas} respondidas</span>
          </div>
          <section className="pregunta">
            <header className="pregunta-head">
              <span className="pregunta-num">{actual + 1}</span>
              <ChipUnidad u={p.unidad} />
            </header>
            <Apoyo p={p} />
            <p className="pregunta-q">{p.t === 'vf' ? `Verdadero o falso: «${p.q}»` : p.q}</p>
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
              <button key={i} type="button" className={`mp ${i === actual ? 'mp-actual' : ''} ${respondida(i) ? 'mp-resp' : ''}`} onClick={() => setActual(i)}>
                {i + 1}
              </button>
            ))}
          </div>
          <button type="button" className="btn btn-ghost btn-sm entregar-ya" onClick={entregar}>Entregar ahora</button>
        </>
      )}

      {preguntas && fin != null && <Resultados preguntas={preguntas} resp={resp} segundos={fin} onOtra={() => setPreguntas(null)} />}
    </div>
  );
}
