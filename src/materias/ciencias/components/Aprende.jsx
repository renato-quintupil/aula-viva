import { useState } from 'react';
import { UNIDADES, ORDEN_UNIDADES, BLOQUES } from '../data/teoria';
import { guiasDe } from '../data/ejercicios';
import { JUEGOS } from '../data/juegos';
import Widget from './Widgets';

export function Aprende() {
  return (
    <div className="pagina">
      <h1 className="titulo-pag">📚 Aprende</h1>
      <p className="lead-pag">Elige un tema para repasarlo con resúmenes, esquemas, simuladores y tarjetas de repaso.</p>
      {BLOQUES.map((bq) => (
        <section key={bq.id}>
          <h2 className="subtitulo-juegos">{bq.nombre}</h2>
          <div className="tarjetas-unidad">
            {bq.unidades.map((k) => {
              const u = UNIDADES[k];
              return (
                <a key={k} href={`#/ciencias/unidad/${k}`} className={`tarjeta-tipo u-${k}`}>
                  <span className="tt-ico">{u.icono}</span>
                  <strong>{u.nombre}</strong>
                  <span className="tt-lema">{u.lema}</span>
                  <ul className="tt-lista">{u.contenidos.map((c) => <li key={c}>{c}</li>)}</ul>
                  <span className="tt-ir">Ver tema →</span>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function Flashcard({ p, r }) {
  const [vuelta, setVuelta] = useState(false);
  return (
    <button type="button" className={`flash ${vuelta ? 'flash-on' : ''}`} onClick={() => setVuelta(!vuelta)} aria-pressed={vuelta}>
      <span className="flash-cara flash-frente"><span className="flash-q">?</span>{p}<small>Toca para ver la respuesta</small></span>
      <span className="flash-cara flash-atras">{r}</span>
    </button>
  );
}

function Tema({ t, abierto, onToggle }) {
  return (
    <article className={`tema ${abierto ? 'tema-on' : ''}`}>
      <button type="button" className="tema-head" onClick={onToggle} aria-expanded={abierto}>
        <strong>{t.titulo}</strong>
        <span className="fuente">📗 {t.pag}</span>
        <span className="tema-flecha" aria-hidden>{abierto ? '▲' : '▼'}</span>
      </button>
      {abierto && (
        <div className="tema-cuerpo">
          <p className="tema-idea">{t.idea}</p>
          {t.tabla && (
            <div className="tabla-wrap">
              <table className="tabla-datos tabla-lenguaje tabla-hist">
                <tbody>
                  {t.tabla.map((f) => (
                    <tr key={f[0]}><th scope="row">{f[0]}</th><td>{f[1]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <ul className="check">{t.claves.map((c) => <li key={c}>{c}</li>)}</ul>
          {t.dato && <p className="dato-cien">🔎 <b>¿Sabías que…?</b> {t.dato}</p>}
        </div>
      )}
    </article>
  );
}

export function FichaUnidad({ id }) {
  const u = UNIDADES[id];
  const [abierto, setAbierto] = useState(0);
  if (!u) return <p className="pagina">Tema no encontrado.</p>;
  const idx = ORDEN_UNIDADES.indexOf(id);
  const sig = ORDEN_UNIDADES[(idx + 1) % ORDEN_UNIDADES.length];
  const guias = guiasDe(id);
  const juegos = JUEGOS.filter((j) => j.unidad === id || (!j.unidad && j.grupo === u.bloque));

  return (
    <div className={`pagina ficha u-${id}`}>
      <a className="volver" href="#/ciencias/aprende">← Aprende</a>
      <header className="ficha-hero">
        <span className="ficha-ico">{u.icono}</span>
        <div>
          <p className="hero-kicker">Tema de la prueba</p>
          <h1>{u.nombre}</h1>
          <p className="ficha-lema">{u.lema}</p>
        </div>
      </header>

      <div className="proposito">
        <span className="proposito-lbl">📋 Entra en la prueba</span>
        <ul className="contenidos-prueba">{u.contenidos.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>

      <section className="bloque">
        <h2>Contenidos</h2>
        <p className="ayuda">Toca cada tema para abrirlo.</p>
        <div className="temas">
          {u.temas.map((t, i) => (
            <Tema key={t.id} t={t} abierto={abierto === i} onToggle={() => setAbierto(abierto === i ? -1 : i)} />
          ))}
        </div>
      </section>

      <Widget id={u.widget} />

      <div className="dos-col">
        <section className="bloque libro">
          <h2>📗 En tu libro</h2>
          <p>{u.libro}</p>
          <p className="ayuda">Revisa también las páginas de <b>Síntesis</b> de cada unidad: La Tierra y los seres vivos, p. 105 · La materia que nos rodea, p. 191.</p>
        </section>
        <section className="bloque errores">
          <h2>⚠️ Ojo, no confundas</h2>
          <ul>{u.errores.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
      </div>

      <section className="bloque">
        <h2>Repaso rápido</h2>
        <div className="flashes">
          {u.flash.map((q) => <Flashcard key={q.p} p={q.p} r={q.r} />)}
        </div>
      </section>

      <div className="ficha-acciones">
        {guias.map((g) => (
          <a key={g.id} className="btn btn-grande" href={`#/ciencias/practica/${g.id}`}>✏️ {g.titulo}</a>
        ))}
        {juegos.map((j) => (
          <a key={j.id} className="btn btn-grande btn-ghost" href={`#/ciencias/juegos/${j.id}`}>{j.icono} {j.titulo}</a>
        ))}
      </div>
      <div className="ficha-acciones">
        <a className="btn btn-ghost" href={`#/ciencias/unidad/${sig}`}>Siguiente: {UNIDADES[sig].icono} {UNIDADES[sig].nombre} →</a>
      </div>
    </div>
  );
}
