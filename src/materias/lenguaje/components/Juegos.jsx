import { useState } from 'react';
import { JUEGOS, juegoPorId } from '../data/juegos';
import { useProgreso, resumen } from '../progreso';
import Pregunta from './Pregunta';

export function ListaJuegos() {
  const { res } = useProgreso();
  return (
    <div className="pagina">
      <h1 className="titulo-pag">🎮 Juegos de repaso</h1>
      <p className="lead-pag">Desafíos cortos para repasar los tipos de texto, el vocabulario y las habilidades. ¡Intenta conseguir las 3 estrellas!</p>
      <div className="tarjetas-juego">
        {JUEGOS.map((j) => {
          const r = resumen(res, j.preguntas);
          return (
            <a key={j.id} href={`#/lenguaje/juegos/${j.id}`} className="tarjeta-juego">
              <span className="tj-ico">{j.icono}</span>
              <strong>{j.titulo}</strong>
              <span>{j.desc}</span>
              <span className="tj-meta">{j.preguntas.length} desafíos · {r.correctas} logrados</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function estrellas(pct) {
  if (pct >= 0.9) return 3;
  if (pct >= 0.6) return 2;
  if (pct > 0) return 1;
  return 0;
}

export function Juego({ id }) {
  const juego = juegoPorId(id);
  const { registrar } = useProgreso();
  const [paso, setPaso] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [respondida, setRespondida] = useState(false);
  const [partida, setPartida] = useState(0);
  if (!juego) return <p className="pagina">Juego no encontrado.</p>;

  const total = juego.preguntas.length;
  const fin = paso >= total;

  const onResultado = (qid, ok) => {
    registrar(qid, ok);
    if (!respondida && ok) setAciertos((a) => a + 1);
    setRespondida(true);
  };
  const siguiente = () => {
    setPaso((p) => p + 1);
    setRespondida(false);
  };
  const otraVez = () => {
    setPaso(0);
    setAciertos(0);
    setRespondida(false);
    setPartida((n) => n + 1);
  };

  const idx = JUEGOS.indexOf(juego);
  const sig = JUEGOS[idx + 1];

  return (
    <div className="pagina pagina-juego">
      <a className="volver" href="#/lenguaje/juegos">← Juegos</a>
      <header className="juego-head">
        <h1>{juego.icono} {juego.titulo}</h1>
        <p>{juego.desc}</p>
      </header>

      {!fin ? (
        <>
          <div className="juego-barra">
            <span>Desafío {paso + 1} de {total}</span>
            <span className="progreso"><span className="progreso-fill" style={{ width: `${(paso / total) * 100}%` }} /></span>
            <span className="marcador">✔ {aciertos}</span>
          </div>
          {juego.texto && <blockquote className="texto-base">{juego.texto}</blockquote>}
          <Pregunta key={`${partida}-${paso}`} p={juego.preguntas[paso]} onResultado={onResultado} />
          {respondida && (
            <button type="button" className="btn btn-grande btn-siguiente" onClick={siguiente}>
              {paso + 1 < total ? 'Siguiente →' : 'Ver resultado'}
            </button>
          )}
        </>
      ) : (
        <div className="resultado-juego">
          <div className="estrellas" aria-label={`${estrellas(aciertos / total)} de 3 estrellas`}>
            {[1, 2, 3].map((n) => (
              <span key={n} className={n <= estrellas(aciertos / total) ? 'estrella-on' : 'estrella-off'}>★</span>
            ))}
          </div>
          <p className="resultado-num">{aciertos} de {total} correctas al primer intento</p>
          <p>{aciertos / total >= 0.9 ? '¡Excelente! Dominas este tema.' : aciertos / total >= 0.6 ? '¡Bien! Repasa los que fallaste.' : 'Sigue practicando: vuelve a la ficha de teoría y reinténtalo.'}</p>
          <div className="ficha-acciones">
            <button type="button" className="btn btn-grande" onClick={otraVez}>↺ Jugar otra vez</button>
            {sig && <a className="btn btn-grande btn-ghost" href={`#/lenguaje/juegos/${sig.id}`}>Siguiente juego: {sig.icono} {sig.titulo}</a>}
          </div>
        </div>
      )}
    </div>
  );
}
