import { useEffect, useMemo, useRef, useState } from 'react';
import { JUEGOS, juegoPorId, cartasConceptos } from '../data/juegos';
import { UNIDADES } from '../data/teoria';
import { useProgreso } from '../progreso';
import { estrellas, mezclar } from '../utils';

const GRUPOS = [
  { id: 'u3', titulo: '⏳ Chile en el siglo XX' },
  { id: 'u4', titulo: '🗺️ Geografía de Chile' },
  { id: 'mix', titulo: '⚡ Toda la prueba' },
];

// ───────── Lista ─────────
export function ListaJuegos() {
  const { records } = useProgreso();
  return (
    <div className="pagina">
      <h1 className="titulo-pag">🎮 Juegos de historia y geografía</h1>
      <p className="lead-pag">Repasa fechas, personajes, conceptos, regiones y zonas naturales jugando. Cada partida es distinta: ¡juega todas las veces que quieras!</p>
      {GRUPOS.map((g) => (
        <section key={g.id}>
          <h2 className="subtitulo-juegos">{g.titulo}</h2>
          <div className="tarjetas-juego">
            {JUEGOS.filter((j) => j.grupo === g.id).map((j) => (
              <a key={j.id} href={`#/historia/juegos/${j.id}`} className="tarjeta-juego">
                <span className="tj-ico">{j.icono}</span>
                <strong>{j.titulo}</strong>
                <span>{j.desc}</span>
                {records[j.id] != null && <span className="tj-meta">🏆 Récord: {records[j.id]}{j.tipo === 'memorice' ? ' jugadas' : ' pts'}</span>}
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Estrellas({ n }) {
  return (
    <div className="estrellas" aria-label={`${n} de 3 estrellas`}>
      {[1, 2, 3].map((k) => <span key={k} className={k <= n ? 'estrella-on' : 'estrella-off'}>★</span>)}
    </div>
  );
}

function Final({ n, texto, record, onOtra }) {
  return (
    <div className="resultado-juego">
      <Estrellas n={n} />
      <p className="resultado-num">{texto}</p>
      <p>{n === 3 ? '¡Excelente! Lo dominas. 🌟' : n === 2 ? '¡Bien! Repasa lo que fallaste. 💪' : 'Sigue practicando, ¡cada vez te saldrá mejor! 📚'}</p>
      {record && <p className="record-nuevo">🏆 ¡Nuevo récord!</p>}
      <div className="ficha-acciones">
        <button type="button" className="btn btn-grande" onClick={onOtra}>↺ Jugar otra vez</button>
        <a className="btn btn-grande btn-ghost" href="#/historia/juegos">Otros juegos</a>
      </div>
    </div>
  );
}

// ───────── Rondas de alternativas ─────────
function Rondas({ juego }) {
  const { guardarRecord } = useProgreso();
  const [partida, setPartida] = useState(0);
  const preguntas = useMemo(() => juego.gen(), [juego, partida]); // eslint-disable-line react-hooks/exhaustive-deps
  const [idx, setIdx] = useState(0);
  const [elegida, setElegida] = useState(null);
  const [aciertos, setAciertos] = useState(0);
  const [fallados, setFallados] = useState([]);
  const [record, setRecord] = useState(false);
  const sigRef = useRef(null);

  useEffect(() => {
    setIdx(0);
    setElegida(null);
    setAciertos(0);
    setFallados([]);
    setRecord(false);
  }, [preguntas]);

  const p = preguntas[idx];
  const fin = idx >= preguntas.length;
  const estado = elegida == null ? null : elegida === p?.c ? 'ok' : 'mal';

  useEffect(() => {
    if (fin) setRecord(guardarRecord(juego.id, aciertos));
  }, [fin]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (estado === 'ok') {
      const t = setTimeout(() => { setIdx((i) => i + 1); setElegida(null); }, 750);
      return () => clearTimeout(t);
    }
    if (estado === 'mal') sigRef.current?.focus();
  }, [estado]);

  const elegir = (i) => {
    if (elegida != null) return;
    setElegida(i);
    if (i === p.c) setAciertos((a) => a + 1);
    else setFallados((f) => [...f, p]);
  };

  if (fin) {
    return (
      <>
        <Final n={estrellas(aciertos / preguntas.length)} texto={`${aciertos} de ${preguntas.length} correctas`} record={record} onOtra={() => setPartida((n) => n + 1)} />
        {fallados.length > 0 && (
          <div className="repaso-fallos">
            <strong>Para repasar:</strong>
            <ul>{fallados.map((f) => <li key={f.q}>{f.q} → <b>{f.o[f.c]}</b></li>)}</ul>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span>{idx + 1} / {preguntas.length}</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(idx / preguntas.length) * 100}%` }} /></span>
        <span className="marcador">✔ {aciertos}</span>
      </div>
      <div className={`tarjeta-calculo tarjeta-hist ${estado ? 'calc-' + estado : ''}`} key={idx}>
        <p className="calculo calculo-txt">{p.q}</p>
        <div className={`opciones-juego ${p.o.length === 2 ? 'opciones-juego-2' : ''}`}>
          {p.o.map((o, i) => {
            let cls = 'opcion-juego opcion-juego-txt';
            if (estado && i === p.c) cls += ' oj-ok';
            else if (estado && i === elegida) cls += ' oj-mal';
            return <button key={o} type="button" className={cls} disabled={!!estado} onClick={() => elegir(i)}>{o}</button>;
          })}
        </div>
        {estado === 'ok' && <p className="juego-ok">¡Bien! ✔</p>}
        {estado === 'mal' && (
          <div className="juego-mal">
            <p>La respuesta es <b>{p.o[p.c]}</b></p>
            {p.e && <p className="ayuda">{p.e}</p>}
            <button ref={sigRef} type="button" className="btn" onClick={() => { setIdx((i) => i + 1); setElegida(null); }}>Siguiente →</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ───────── Ordenar (línea de tiempo / norte a sur) ─────────
// Se tocan las tarjetas en orden. Cada ronda da hasta 5 puntos (1 por tarjeta bien puesta al primer intento).
function Ordenar({ juego }) {
  const { guardarRecord } = useProgreso();
  const [ronda, setRonda] = useState(0);
  const [partida, setPartida] = useState(0);
  const items = useMemo(() => juego.ronda(), [juego, ronda, partida]); // eslint-disable-line react-hooks/exhaustive-deps
  const orden = useMemo(() => [...items].sort((a, b) => a.valor - b.valor), [items]);
  const mostrados = useMemo(() => mezclar(items), [items]);
  const [puestos, setPuestos] = useState([]);
  const [error, setError] = useState(null);
  const [fallosRonda, setFallosRonda] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [record, setRecord] = useState(false);
  const total = juego.rondas * 5;
  const fin = ronda >= juego.rondas;
  const completa = puestos.length === items.length;

  useEffect(() => {
    setPuestos([]);
    setError(null);
    setFallosRonda(0);
  }, [items]);

  useEffect(() => {
    if (fin) setRecord(guardarRecord(juego.id, puntos));
  }, [fin]); // eslint-disable-line react-hooks/exhaustive-deps

  const tocar = (it) => {
    if (completa || puestos.includes(it.id)) return;
    if (it.id === orden[puestos.length].id) {
      setPuestos((p) => [...p, it.id]);
      setError(null);
    } else {
      setError(it.id);
      setFallosRonda((f) => f + 1);
      setTimeout(() => setError(null), 600);
    }
  };

  useEffect(() => {
    if (completa) setPuntos((p) => p + Math.max(0, items.length - fallosRonda));
  }, [completa]); // eslint-disable-line react-hooks/exhaustive-deps

  if (fin) {
    return <Final n={estrellas(puntos / total)} texto={`${puntos} de ${total} puntos`} record={record} onOtra={() => { setPuntos(0); setRonda(0); setPartida((n) => n + 1); }} />;
  }

  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span>Ronda {ronda + 1} / {juego.rondas}</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(ronda / juego.rondas) * 100}%` }} /></span>
        <span className="marcador">⭐ {puntos}</span>
      </div>
      <p className="orden-pista">👉 {juego.pista}</p>
      <ol className="orden-slots">
        {orden.map((it, i) => (
          <li key={it.id} className={i < puestos.length ? 'slot-on' : ''}>
            <span className="slot-n">{i + 1}</span>
            {i < puestos.length ? <span><b>{it.etiqueta}</b> · {it.txt}</span> : <span className="slot-vacio">…</span>}
          </li>
        ))}
      </ol>
      {!completa ? (
        <div className="orden-cartas">
          {mostrados.filter((it) => !puestos.includes(it.id)).map((it) => (
            <button key={it.id} type="button" className={`orden-carta ${error === it.id ? 'orden-mal' : ''}`} onClick={() => tocar(it)}>
              {it.txt}
            </button>
          ))}
        </div>
      ) : (
        <div className="resultado-ronda">
          <p className="juego-ok">{fallosRonda === 0 ? '¡Perfecto! ✔' : `¡Listo! Te equivocaste ${fallosRonda} ${fallosRonda === 1 ? 'vez' : 'veces'}.`}</p>
          <button type="button" className="btn btn-grande" onClick={() => setRonda((r) => r + 1)} autoFocus>
            {ronda + 1 < juego.rondas ? 'Siguiente ronda →' : 'Ver resultado'}
          </button>
        </div>
      )}
    </div>
  );
}

// ───────── Memorice de conceptos ─────────
function Memorice({ juego }) {
  const { records, guardarRecord } = useProgreso();
  const [cartas, setCartas] = useState(() => cartasConceptos(6));
  const [abiertas, setAbiertas] = useState([]);
  const [hechas, setHechas] = useState([]);
  const [jugadas, setJugadas] = useState(0);
  const [record, setRecord] = useState(false);
  const fin = hechas.length === cartas.length / 2;

  useEffect(() => {
    if (fin) setRecord(guardarRecord(juego.id, jugadas, true));
  }, [fin]); // eslint-disable-line react-hooks/exhaustive-deps

  const otra = () => {
    setCartas(cartasConceptos(6));
    setAbiertas([]);
    setHechas([]);
    setJugadas(0);
    setRecord(false);
  };

  const tocar = (c) => {
    if (abiertas.length === 2 || abiertas.includes(c.id) || hechas.includes(c.par)) return;
    const nuevas = [...abiertas, c.id];
    setAbiertas(nuevas);
    if (nuevas.length === 2) {
      setJugadas((j) => j + 1);
      const [a, b] = nuevas.map((id) => cartas.find((x) => x.id === id));
      if (a.par === b.par) {
        setHechas((h) => [...h, a.par]);
        setAbiertas([]);
      } else {
        setTimeout(() => setAbiertas([]), 1300);
      }
    }
  };

  if (fin) {
    return (
      <>
        <Final n={jugadas <= 9 ? 3 : jugadas <= 13 ? 2 : 1} texto={`¡Lo lograste en ${jugadas} jugadas!`} record={record} onOtra={otra} />
        {!record && records[juego.id] != null && <p className="centrado">Tu récord: <b>{records[juego.id]}</b> jugadas</p>}
      </>
    );
  }

  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span>Concepto ↔ definición</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(hechas.length / 6) * 100}%` }} /></span>
        <span className="marcador">Jugadas: {jugadas}</span>
      </div>
      <div className="memorice memorice-hist">
        {cartas.map((c) => {
          const visible = abiertas.includes(c.id) || hechas.includes(c.par);
          return (
            <button
              key={c.id}
              type="button"
              className={`carta ${visible ? 'carta-on' : ''} ${hechas.includes(c.par) ? 'carta-hecha' : ''} carta-${c.tipo}`}
              onClick={() => tocar(c)}
              aria-label={visible ? c.txt : 'Carta boca abajo'}
            >
              <span className="carta-cara carta-dorso" aria-hidden>?</span>
              <span className="carta-cara carta-frente">{c.txt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ───────── Página de un juego ─────────
export function Juego({ id }) {
  const juego = juegoPorId(id);
  if (!juego) return <p className="pagina">Juego no encontrado.</p>;
  let cuerpo;
  if (juego.tipo === 'ordenar') cuerpo = <Ordenar key={id} juego={juego} />;
  else if (juego.tipo === 'memorice') cuerpo = <Memorice key={id} juego={juego} />;
  else cuerpo = <Rondas key={id} juego={juego} />;

  return (
    <div className="pagina pagina-juego">
      <a className="volver" href="#/historia/juegos">← Juegos</a>
      <header className="juego-head">
        <h1>{juego.icono} {juego.titulo}</h1>
        <p>{juego.desc}</p>
      </header>
      {cuerpo}
      {juego.unidad && (
        <p className="ayuda centrado">¿Necesitas repasar? <a href={`#/historia/unidad/${juego.unidad}`}>Ver el tema {UNIDADES[juego.unidad].nombre} →</a></p>
      )}
    </div>
  );
}
