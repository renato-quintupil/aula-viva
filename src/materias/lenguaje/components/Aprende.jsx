import { useState } from 'react';
import { TIPOS, ORDEN_TIPOS, HABILIDADES, ESTRATEGIAS, COMPARACION } from '../data/teoria';
import { juegoPorId } from '../data/juegos';
import Pregunta from './Pregunta';
import { useProgreso } from '../progreso';

export function Aprende() {
  return (
    <div className="pagina">
      <h1 className="titulo-pag">📚 Aprende</h1>
      <p className="lead-pag">Elige un tipo de texto para ver su propósito, sus características y su estructura. Luego revisa las habilidades de lectura que se evalúan.</p>
      <div className="tarjetas-tipo">
        {ORDEN_TIPOS.map((k) => {
          const t = TIPOS[k];
          return (
            <a key={k} href={`#/lenguaje/tipo/${k}`} className={`tarjeta-tipo t-${k}`}>
              <span className="tt-ico">{t.icono}</span>
              <strong>{t.nombre}</strong>
              <span className="tt-lema">{t.lema}</span>
              <span className="tt-prop">{t.proposito}</span>
              <span className="tt-ir">Ver ficha →</span>
            </a>
          );
        })}
      </div>
      <div className="tarjetas-extra">
        <a href="#/lenguaje/habilidades" className="tarjeta-extra">
          <span className="tt-ico">🧠</span>
          <div><strong>Habilidades y estrategias</strong><span>Localizar, interpretar, relacionar y reflexionar. Estrategias del libro.</span></div>
        </a>
        <a href="#/lenguaje/comparar" className="tarjeta-extra">
          <span className="tt-ico">⚖️</span>
          <div><strong>Cuadro comparativo</strong><span>Diferencias y semejanzas entre los cuatro tipos de texto.</span></div>
        </a>
      </div>
    </div>
  );
}

// Maqueta visual de la estructura: cada bloque se ilumina al elegir su parte.
function Maqueta({ tipo, activa, setActiva }) {
  const partes = TIPOS[tipo].estructura;
  return (
    <div className={`maqueta maqueta-${tipo}`} aria-hidden>
      {partes.map((p, i) => (
        <div
          key={p.parte}
          className={`mq mq-${i} ${activa === i ? 'mq-on' : ''}`}
          onMouseEnter={() => setActiva(i)}
          onClick={() => setActiva(i)}
        >
          <span>{p.parte}</span>
        </div>
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

export function FichaTipo({ tipo }) {
  const t = TIPOS[tipo];
  const [activa, setActiva] = useState(0);
  if (!t) return <p className="pagina">Tipo de texto no encontrado.</p>;
  const idx = ORDEN_TIPOS.indexOf(tipo);
  const sig = ORDEN_TIPOS[(idx + 1) % ORDEN_TIPOS.length];

  return (
    <div className={`pagina ficha t-${tipo}`}>
      <a className="volver" href="#/lenguaje/aprende">← Aprende</a>
      <header className="ficha-hero">
        <span className="ficha-ico">{t.icono}</span>
        <div>
          <p className="hero-kicker">Texto informativo</p>
          <h1>{t.nombre}</h1>
          <p className="ficha-lema">{t.lema}</p>
        </div>
      </header>

      <div className="proposito">
        <span className="proposito-lbl">🎯 Propósito</span>
        <p>{t.proposito}</p>
      </div>

      <section className="bloque">
        <h2>¿Qué es?</h2>
        <p>{t.definicion}</p>
      </section>

      <section className="bloque">
        <h2>Características</h2>
        <ul className="check check-grid">
          {t.caracteristicas.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <section className="bloque">
        <h2>Estructura</h2>
        <p className="ayuda">Toca cada parte para ver dónde va y para qué sirve.</p>
        <div className="estructura">
          <Maqueta tipo={tipo} activa={activa} setActiva={setActiva} />
          <ol className="partes">
            {t.estructura.map((p, i) => (
              <li key={p.parte}>
                <button type="button" className={`parte-btn ${activa === i ? 'parte-btn-on' : ''}`} onClick={() => setActiva(i)} aria-expanded={activa === i}>
                  <span className="parte-n">{i + 1}</span>
                  <strong>{p.parte}</strong>
                </button>
                {activa === i && <p className="parte-desc">{p.desc}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {t.recursos && (
        <section className="bloque">
          <h2>¿Qué aporta cada recurso gráfico?</h2>
          <div className="recursos">
            {t.recursos.map((r) => (
              <div key={r.recurso} className="recurso"><strong>{r.recurso}</strong><span>{r.ej}</span></div>
            ))}
          </div>
        </section>
      )}

      <section className="bloque libro">
        <h2>📗 En tu libro</h2>
        <ul>{t.delLibro.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>

      <div className="dos-col">
        <section className="bloque pistas">
          <h2>🔎 Pistas para reconocerla</h2>
          <ul>{t.pistas.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section className="bloque errores">
          <h2>⚠️ Errores comunes</h2>
          <ul>{t.errores.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
      </div>

      <section className="bloque">
        <h2>Preguntas típicas de prueba</h2>
        <div className="flashes">
          {t.preguntasTipicas.map((q) => <Flashcard key={q.p} p={q.p} r={q.r} />)}
        </div>
      </section>

      <div className="ficha-acciones">
        <a className="btn btn-grande" href={`#/lenguaje/practica/f/${tipo}`}>✏️ Practicar con textos de este tipo</a>
        <a className="btn btn-grande btn-ghost" href={`#/lenguaje/tipo/${sig}`}>Siguiente: {TIPOS[sig].icono} {TIPOS[sig].nombre} →</a>
      </div>
    </div>
  );
}

export function Habilidades() {
  const { res, registrar } = useProgreso();
  const juego = juegoPorId('g2');
  return (
    <div className="pagina">
      <a className="volver" href="#/lenguaje/aprende">← Aprende</a>
      <h1 className="titulo-pag">🧠 Habilidades de lectura</h1>
      <p className="lead-pag">La prueba evalúa si puedes <b>leer, comprender, relacionar, interpretar y reflexionar</b>. Cada pregunta trabaja una de estas habilidades.</p>
      <div className="habilidades">
        {HABILIDADES.map((h) => (
          <article key={h.id} className={`habilidad hab-${h.id}`}>
            <h2><span>{h.icono}</span> {h.nombre}</h2>
            <p>{h.desc}</p>
            <div className="hab-preg">
              <span>Así se pregunta:</span>
              {h.pregunta.map((q) => <span key={q} className="chip">{q}</span>)}
            </div>
            <p className="hab-tip">💡 {h.tip}</p>
          </article>
        ))}
      </div>

      <section className="bloque">
        <h2>Estrategias del libro</h2>
        <div className="acordeon">
          {ESTRATEGIAS.map((e, i) => (
            <details key={e.id} open={i === 0}>
              <summary><strong>{e.titulo}</strong><span className="fuente">{e.fuente}</span></summary>
              <ol>{e.pasos.map((p) => <li key={p}>{p}</li>)}</ol>
              <p className="ejemplo"><b>Ejemplo:</b> {e.ejemplo}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bloque">
        <h2>Desafío rápido: ¿explícita o implícita?</h2>
        <blockquote className="texto-base">{juego.texto}</blockquote>
        <div className="lista-preguntas">
          {juego.preguntas.slice(0, 4).map((p, i) => (
            <Pregunta key={p.id} p={p} numero={i + 1} onResultado={registrar} estadoPrevio={res[p.id]} />
          ))}
        </div>
        <a className="btn" href="#/lenguaje/juegos/g2">Jugar el desafío completo →</a>
      </section>
    </div>
  );
}

export function Comparar() {
  return (
    <div className="pagina">
      <a className="volver" href="#/lenguaje/aprende">← Aprende</a>
      <h1 className="titulo-pag">⚖️ Cuadro comparativo</h1>
      <p className="lead-pag">Los cuatro son <b>textos informativos</b>: tratan sobre hechos o personas <b>reales</b>. Lo que cambia es su propósito específico, su forma y sus recursos.</p>
      <div className="tabla-wrap">
        <table className="tabla-comp">
          <thead>
            <tr>
              <th scope="col">Criterio</th>
              {ORDEN_TIPOS.map((k) => (
                <th key={k} scope="col" className={`t-${k}`}>{TIPOS[k].icono} {TIPOS[k].nombre}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARACION.criterios.map((c, i) => (
              <tr key={c}>
                <th scope="row">{c}</th>
                {ORDEN_TIPOS.map((k) => (
                  <td key={k} data-tipo={`${TIPOS[k].icono} ${TIPOS[k].nombre}`}>{COMPARACION.filas[k][i]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dos-col">
        <section className="bloque">
          <h2>📰 Noticia vs. 🔎 Reportaje</h2>
          <ul className="check">
            <li><b>Noticia:</b> un hecho puntual y reciente, breve, pirámide invertida, objetiva.</li>
            <li><b>Reportaje:</b> un tema investigado a fondo, extenso, con subtítulos, entrevistas y testimonios.</li>
            <li><b>Ambos:</b> informan hechos reales, usan citas, fotografías y tienen título y bajada.</li>
          </ul>
        </section>
        <section className="bloque">
          <h2>👤 Biografía vs. 📊 Infografía biográfica</h2>
          <ul className="check">
            <li><b>Biografía:</b> párrafos narrativos, orden cronológico, más detalles.</li>
            <li><b>Infografía:</b> frases cortas, íconos, línea de tiempo y cifras; se lee rápido.</li>
            <li>El libro compara así la infografía y el reportaje sobre Greta Thunberg (p. 220).</li>
          </ul>
        </section>
      </div>

      <div className="ficha-acciones">
        <a className="btn btn-grande" href="#/lenguaje/practica/c1">✏️ Practicar: comparar dos textos</a>
        <a className="btn btn-grande btn-ghost" href="#/lenguaje/juegos/g5">🎯 Juego de propósitos</a>
      </div>
    </div>
  );
}
