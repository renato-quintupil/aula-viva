import { PRUEBA, UNIDADES, ORDEN_UNIDADES, BLOQUES } from '../data/teoria';
import { GUIAS, guiasDe } from '../data/ejercicios';
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

const PASOS = [
  { n: 1, ico: '📚', t: 'Aprende', d: 'Repasa cada tema con resúmenes, líneas de tiempo y fuentes.', href: '#/historia/aprende' },
  { n: 2, ico: '✏️', t: 'Practica', d: 'Responde guías de preguntas con corrección inmediata.', href: '#/historia/practica' },
  { n: 3, ico: '🎮', t: 'Juega', d: 'Línea de tiempo, capitales regionales, personajes y más.', href: '#/historia/juegos' },
  { n: 4, ico: '📝', t: 'Ensayo', d: 'Haz una prueba simulada con nota de 1,0 a 7,0.', href: '#/historia/ensayo' },
];

export default function Inicio() {
  const { res, ensayos, reiniciarTodo } = useProgreso();
  const global = resumen(res, GUIAS.flatMap((g) => g.preguntas));
  const mejor = ensayos.length ? Math.max(...ensayos.map((e) => e.nota)) : null;

  return (
    <div className="pagina">
      <section className="hero">
        <div className="hero-txt">
          <p className="hero-kicker">{PRUEBA.curso} · Prueba de Síntesis</p>
          <h1>Historia, Geografía y Cs. Sociales</h1>
          <p className="hero-fecha">📅 {PRUEBA.fechaTexto[0].toUpperCase() + PRUEBA.fechaTexto.slice(1)}</p>
          <Cuenta />
          <div className="hero-acciones">
            <a className="btn btn-grande" href="#/historia/aprende">Empezar a estudiar</a>
            <a className="btn btn-grande btn-ghost" href="#/historia/juegos">Ir a los juegos</a>
          </div>
        </div>
        <div className="hero-tipos hero-mate" aria-hidden>
          {['1907', '1952', '1973', '1990'].map((s) => <span key={s} className="hero-tipo">{s}</span>)}
        </div>
      </section>

      <section className="bloque">
        <h2>¿Qué entra en la prueba?</h2>
        {BLOQUES.map((bq) => (
          <div key={bq.id} className="temario-bloque">
            <h3>{bq.nombre}</h3>
            <div className="temario-mate">
              {bq.unidades.map((k) => {
                const u = UNIDADES[k];
                return (
                  <a key={k} href={`#/historia/unidad/${k}`} className={`temario-unidad u-${k}`}>
                    <strong><span aria-hidden>{u.icono}</span> {u.nombre}</strong>
                    <ul>{u.contenidos.map((c) => <li key={c}>{c}</li>)}</ul>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
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
            <span>{global.correctas} de {global.total} preguntas logradas</span>
            {mejor != null && <span className="avance-nota">Mejor nota en ensayo: <b>{formatoNota(mejor)}</b></span>}
          </div>
          <ul className="avance-tipos">
            {ORDEN_UNIDADES.map((k) => {
              const r = resumen(res, guiasDe(k).flatMap((g) => g.preguntas));
              return (
                <li key={k} className={`u-${k}`}>
                  <span>{UNIDADES[k].icono} {UNIDADES[k].nombre}</span>
                  <span className="progreso" aria-hidden><span className="progreso-fill" style={{ width: `${r.pct}%` }} /></span>
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
