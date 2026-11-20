import { useState } from 'react';
import { GUIAS, guiaPorId } from '../data/ejercicios';
import { UNIDADES, ORDEN_UNIDADES } from '../data/teoria';
import { useProgreso, resumen } from '../progreso';
import Pregunta from './Pregunta';

export function ListaPractica() {
  const { res } = useProgreso();
  const [f, setF] = useState('todas');
  const lista = f === 'todas' ? GUIAS : GUIAS.filter((g) => g.unidad === f);

  return (
    <div className="pagina">
      <h1 className="titulo-pag">✏️ Practica con guías</h1>
      <p className="lead-pag">Cada guía tiene preguntas de alternativas y de verdadero o falso, algunas con fuentes históricas. Se corrigen al instante y te explican la respuesta.</p>
      <div className="filtros" role="group" aria-label="Filtrar por unidad">
        <button type="button" className={`filtro ${f === 'todas' ? 'filtro-on' : ''}`} onClick={() => setF('todas')}>Todas</button>
        {ORDEN_UNIDADES.map((k) => (
          <button key={k} type="button" className={`filtro ${f === k ? 'filtro-on' : ''}`} onClick={() => setF(k)}>
            {UNIDADES[k].icono} {UNIDADES[k].nombre}
          </button>
        ))}
      </div>
      <div className="tarjetas-texto">
        {lista.map((g) => {
          const r = resumen(res, g.preguntas);
          const u = UNIDADES[g.unidad];
          return (
            <a key={g.id} href={`#/historia/practica/${g.id}`} className={`tarjeta-texto u-${g.unidad}`}>
              <span className="tx-tipo">{u.icono} {u.nombre}</span>
              <strong>{g.titulo}</strong>
              <span className="tx-meta">
                <span className={`nivel nivel-${g.nivel}`}>{g.nivel}</span>
                <span>{g.preguntas.length} ejercicios</span>
              </span>
              <span className="progreso"><span className="progreso-fill" style={{ width: `${r.pct}%` }} /></span>
              <span className="tx-avance">{r.correctas === r.total ? '⭐ ¡Completada!' : `${r.correctas} de ${r.total} logrados`}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function VistaGuia({ id }) {
  const guia = guiaPorId(id);
  const { res, registrar, olvidar } = useProgreso();
  const [ronda, setRonda] = useState(0);
  if (!guia) return <p className="pagina">Guía no encontrada.</p>;

  const r = resumen(res, guia.preguntas);
  const u = UNIDADES[guia.unidad];
  const pos = GUIAS.indexOf(guia);
  const sig = GUIAS[pos + 1];

  const reiniciar = () => {
    olvidar(guia.preguntas.map((p) => p.id));
    setRonda((n) => n + 1);
  };

  return (
    <div className={`pagina u-${guia.unidad}`}>
      <a className="volver" href="#/historia/practica">← Todas las guías</a>
      <header className="vista-head">
        <div>
          <span className="tx-tipo">{u.icono} {u.nombre}</span>
          <h1>{guia.titulo}</h1>
        </div>
        <a className="btn btn-ghost btn-sm" href={`#/historia/unidad/${guia.unidad}`}>📚 Repasar la teoría</a>
      </header>
      <div className="vista-preguntas-head">
        <span className="ayuda">Lee con calma cada pregunta y las fuentes antes de responder.</span>
        <span className="marcador">{r.correctas}/{r.total} ⭐</span>
      </div>
      <div className="progreso progreso-grande"><span className="progreso-fill" style={{ width: `${r.pct}%` }} /></div>
      <div className="lista-preguntas" key={ronda}>
        {guia.preguntas.map((p, n) => (
          <Pregunta key={p.id} p={p} numero={n + 1} onResultado={registrar} estadoPrevio={res[p.id]} />
        ))}
      </div>
      <div className="vista-fin">
        {r.correctas === r.total && <p className="felicitacion">🏆 ¡Completaste todos los ejercicios de esta guía!</p>}
        <button type="button" className="btn btn-ghost" onClick={reiniciar}>↺ Reiniciar esta guía</button>
        {sig && <a className="btn" href={`#/historia/practica/${sig.id}`}>Siguiente guía →</a>}
      </div>
    </div>
  );
}
