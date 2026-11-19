import { PRUEBA, TIPOS, ORDEN_TIPOS } from '../data/teoria';
import { TEXTOS } from '../data/textos';
import { JUEGOS } from '../data/juegos';
import { useProgreso, resumen } from '../progreso';
import { diasHasta, formatoNota } from '../utils';

function Cuenta() {
  const d = diasHasta(PRUEBA.fecha);
  let txt;
  if (d > 1) txt = <><b>{d}</b> días para la prueba</>;
  else if (d === 1) txt = <>¡La prueba es <b>mañana</b>!</>;
  else if (d === 0) txt = <>¡La prueba es <b>hoy</b>! Tú puedes 💪</>;
  else txt = <>La prueba ya fue: sigue repasando</>;
  return <div className="cuenta">⏳ {txt}</div>;
}

function Barra({ pct, color }) {
  return (
    <span className="progreso" aria-hidden>
      <span className="progreso-fill" style={{ width: `${pct}%`, background: color }} />
    </span>
  );
}

const PASOS = [
  { n: 1, ico: '📚', t: 'Aprende', d: 'Lee las fichas de cada tipo de texto y las habilidades.', href: '#/lenguaje/aprende' },
  { n: 2, ico: '✏️', t: 'Practica', d: 'Lee textos y responde preguntas con corrección inmediata.', href: '#/lenguaje/practica' },
  { n: 3, ico: '🎮', t: 'Juega', d: 'Repasa rápido con juegos de clasificación y vocabulario.', href: '#/lenguaje/juegos' },
  { n: 4, ico: '📝', t: 'Ensayo', d: 'Haz una prueba simulada con nota de 1,0 a 7,0.', href: '#/lenguaje/ensayo' },
];

export default function Inicio() {
  const { res, ensayos, reiniciarTodo } = useProgreso();
  const todas = TEXTOS.flatMap((t) => t.preguntas);
  const global = resumen(res, [...todas, ...JUEGOS.flatMap((j) => j.preguntas)]);
  const mejor = ensayos.length ? Math.max(...ensayos.map((e) => e.nota)) : null;

  return (
    <div className="pagina">
      <section className="hero">
        <div className="hero-txt">
          <p className="hero-kicker">{PRUEBA.curso} · Prueba de Síntesis</p>
          <h1>Lenguaje y Comunicación</h1>
          <p className="hero-fecha">📅 {PRUEBA.fechaTexto[0].toUpperCase() + PRUEBA.fechaTexto.slice(1)}</p>
          <Cuenta />
          <div className="hero-acciones">
            <a className="btn btn-grande" href="#/lenguaje/aprende">Empezar a estudiar</a>
            <a className="btn btn-grande btn-ghost" href="#/lenguaje/ensayo">Hacer un ensayo</a>
          </div>
        </div>
        <div className="hero-tipos" aria-hidden>
          {ORDEN_TIPOS.map((k) => (
            <span key={k} className={`hero-tipo t-${k}`}>{TIPOS[k].icono}</span>
          ))}
        </div>
      </section>

      <section className="bloque">
        <h2>¿Qué entra en la prueba?</h2>
        <div className="temario">
          <div className="temario-col">
            <h3>Habilidades</h3>
            <ul className="check">
              {PRUEBA.habilidades.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div className="temario-col">
            <h3>Tipos de texto</h3>
            <div className="tipos-mini">
              {ORDEN_TIPOS.map((k) => (
                <a key={k} href={`#/lenguaje/tipo/${k}`} className={`tipo-mini t-${k}`}>
                  <span>{TIPOS[k].icono}</span> {TIPOS[k].nombre}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bloque">
        <h2>Tu plan de estudio</h2>
        <div className="pasos">
          {PASOS.map((p) => (
            <a key={p.n} href={p.href} className="paso">
              <span className="paso-n">{p.n}</span>
              <span className="paso-ico">{p.ico}</span>
              <strong>{p.t}</strong>
              <span>{p.d}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bloque">
        <div className="bloque-head">
          <h2>Tu avance</h2>
          {global.respondidas > 0 && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => { if (window.confirm('¿Borrar todo tu avance?')) reiniciarTodo(); }}>
              Reiniciar avance
            </button>
          )}
        </div>
        <div className="avance">
          <div className="avance-global">
            <span className="avance-pct">{global.pct}%</span>
            <span>{global.correctas} de {global.total} ejercicios logrados</span>
            {mejor != null && <span className="avance-nota">Mejor nota en ensayo: <b>{formatoNota(mejor)}</b></span>}
          </div>
          <ul className="avance-tipos">
            {ORDEN_TIPOS.map((k) => {
              const r = resumen(res, TEXTOS.filter((t) => t.tipo === k).flatMap((t) => t.preguntas));
              return (
                <li key={k}>
                  <span>{TIPOS[k].icono} {TIPOS[k].nombre}</span>
                  <Barra pct={r.pct} color={TIPOS[k].color} />
                  <span className="avance-num">{r.correctas}/{r.total}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
