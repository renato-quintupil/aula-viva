import { useState } from 'react';
import { TEXTOS, textoPorId } from '../data/textos';
import { TIPOS, ORDEN_TIPOS } from '../data/teoria';
import { useProgreso, resumen } from '../progreso';
import TextoRender from './TextoRender';
import Pregunta from './Pregunta';

const FILTROS = [...ORDEN_TIPOS, 'comparacion'];
const INFO_EXTRA = { comparacion: { nombre: 'Comparar textos', icono: '⚖️', color: 'var(--c-comparar)' } };
const info = (k) => TIPOS[k] || INFO_EXTRA[k];

export function ListaPractica({ filtro }) {
  const { res } = useProgreso();
  const [f, setF] = useState(filtro || 'todos');
  const lista = f === 'todos' ? TEXTOS : TEXTOS.filter((t) => t.tipo === f);

  return (
    <div className="pagina">
      <h1 className="titulo-pag">✏️ Practica con textos</h1>
      <p className="lead-pag">Lee cada texto y responde. Activa <b>🧩 Ver estructura</b> para ver sus partes marcadas. Las respuestas se corrigen al instante.</p>
      <div className="filtros" role="group" aria-label="Filtrar por tipo de texto">
        <button type="button" className={`filtro ${f === 'todos' ? 'filtro-on' : ''}`} onClick={() => setF('todos')}>Todos</button>
        {FILTROS.map((k) => (
          <button key={k} type="button" className={`filtro ${f === k ? 'filtro-on' : ''}`} onClick={() => setF(k)}>
            {info(k).icono} {info(k).nombre}
          </button>
        ))}
      </div>
      <div className="tarjetas-texto">
        {lista.map((t) => {
          const r = resumen(res, t.preguntas);
          const i = info(t.tipo);
          return (
            <a key={t.id} href={`#/lenguaje/practica/${t.id}`} className={`tarjeta-texto t-${t.tipo}`}>
              <span className="tx-tipo">{i.icono} {i.nombre}</span>
              <strong>{t.titulo}</strong>
              <span className="tx-meta">
                <span className={`nivel nivel-${t.nivel}`}>{t.nivel}</span>
                <span>{t.preguntas.length} preguntas</span>
              </span>
              <span className="progreso"><span className="progreso-fill" style={{ width: `${r.pct}%` }} /></span>
              <span className="tx-avance">{r.correctas === r.total ? '⭐ ¡Completado!' : `${r.correctas} de ${r.total} logradas`}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function VistaTexto({ id }) {
  const texto = textoPorId(id);
  const { res, registrar, olvidar } = useProgreso();
  const [ver, setVer] = useState(false);
  const [ronda, setRonda] = useState(0);
  if (!texto) return <p className="pagina">Texto no encontrado.</p>;

  const r = resumen(res, texto.preguntas);
  const i = info(texto.tipo);
  const pos = TEXTOS.indexOf(texto);
  const sig = TEXTOS[pos + 1];

  const reiniciar = () => {
    olvidar(texto.preguntas.map((p) => p.id));
    setRonda((n) => n + 1);
  };

  return (
    <div className={`pagina pagina-ancha t-${texto.tipo}`}>
      <a className="volver" href="#/lenguaje/practica">← Todos los textos</a>
      <header className="vista-head">
        <div>
          <span className="tx-tipo">{i.icono} {i.nombre}</span>
          <h1>{texto.titulo}</h1>
        </div>
        <label className="switch">
          <input type="checkbox" checked={ver} onChange={(e) => setVer(e.target.checked)} />
          <span className="switch-ui" aria-hidden />
          🧩 Ver estructura
        </label>
      </header>

      <div className="vista">
        <div className="vista-texto">
          {ver && (
            <p className="aviso-estructura">
              Cada parte aparece marcada con su nombre. Las <span className="cita cita-on">citas</span> y las <mark className="fecha">fechas</mark> también se destacan.
            </p>
          )}
          <TextoRender texto={texto} ver={ver} />
          {['noticia', 'reportaje'].includes(texto.tipo) && (
            <p className="nota-ficticio">Texto creado para practicar. Las personas entrevistadas son ficticias.</p>
          )}
        </div>

        <div className="vista-preguntas">
          <div className="vista-preguntas-head">
            <h2>Preguntas</h2>
            <span className="marcador">{r.correctas}/{r.total} ⭐</span>
          </div>
          <div className="progreso progreso-grande"><span className="progreso-fill" style={{ width: `${r.pct}%` }} /></div>
          <div className="lista-preguntas" key={ronda}>
            {texto.preguntas.map((p, n) => (
              <Pregunta key={p.id} p={p} numero={n + 1} onResultado={registrar} estadoPrevio={res[p.id]} />
            ))}
          </div>
          <div className="vista-fin">
            {r.correctas === r.total && <p className="felicitacion">🏆 ¡Completaste todas las preguntas de este texto!</p>}
            <button type="button" className="btn btn-ghost" onClick={reiniciar}>↺ Reiniciar este texto</button>
            {sig && <a className="btn" href={`#/lenguaje/practica/${sig.id}`}>Siguiente texto →</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
