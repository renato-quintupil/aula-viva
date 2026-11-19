import { useEffect, useMemo, useRef, useState } from 'react';
import { JUEGOS, juegoPorId, NIVELES, ORDEN_OPS, nombreOp, iconoOp, genOperacion, lista, preguntasTablas } from '../data/juegos';
import { UNIDADES } from '../data/teoria';
import { useProgreso } from '../progreso';
import { fmt, leerNumero, iguales, estrellas, mezclar } from '../utils';

// ───────── Lista ─────────
export function ListaJuegos() {
  const { records } = useProgreso();
  const grupo = (g) => JUEGOS.filter((j) => j.grupo === g);
  const Tarjeta = ({ j }) => (
    <a href={`#/matematica/juegos/${j.id}`} className="tarjeta-juego">
      <span className="tj-ico">{j.icono}</span>
      <strong>{j.titulo}</strong>
      <span>{j.desc}</span>
      {j.unidad && <span className="tj-meta">{UNIDADES[j.unidad].icono} {UNIDADES[j.unidad].nombre}</span>}
      {j.id === 'reloj' && records['reloj-mezcla-2'] != null && <span className="tj-meta">🏆 Récord (mezcla, medio): {records['reloj-mezcla-2']}</span>}
    </a>
  );
  return (
    <div className="pagina">
      <h1 className="titulo-pag">🎮 Juegos de matemática</h1>
      <p className="lead-pag">Repasa las tablas de multiplicar, sumas, restas y divisiones, y practica los temas de la prueba. Cada partida es distinta: ¡juega todas las veces que quieras!</p>
      <h2 className="subtitulo-juegos">🧠 Cálculo mental: tablas y operaciones</h2>
      <div className="tarjetas-juego">{grupo('calculo').map((j) => <Tarjeta key={j.id} j={j} />)}</div>
      <h2 className="subtitulo-juegos">🎯 Temas de la prueba</h2>
      <div className="tarjetas-juego">{grupo('prueba').map((j) => <Tarjeta key={j.id} j={j} />)}</div>
    </div>
  );
}

// ───────── Piezas comunes ─────────
function Selector({ opciones, valor, onCambio, etiqueta }) {
  return (
    <fieldset className="selector">
      <legend>{etiqueta}</legend>
      <div className="filtros">
        {opciones.map((o) => (
          <button key={o.id} type="button" className={`filtro ${valor === o.id ? 'filtro-on' : ''}`} onClick={() => onCambio(o.id)} aria-pressed={valor === o.id}>
            {o.icono} {o.nombre}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

const OPS_SELECTOR = ORDEN_OPS.map((id) => ({ id, nombre: nombreOp(id), icono: iconoOp(id) }));

function Estrellas({ n }) {
  return (
    <div className="estrellas" aria-label={`${n} de 3 estrellas`}>
      {[1, 2, 3].map((k) => <span key={k} className={k <= n ? 'estrella-on' : 'estrella-off'}>★</span>)}
    </div>
  );
}

// Campo de respuesta numérica grande. Acepta automáticamente cuando lo escrito ya es la respuesta correcta.
function CampoNumero({ valor, onCambio, onEnviar, correcta, onAuto, deshabilitado, estado }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!deshabilitado) ref.current?.focus();
  }, [deshabilitado, correcta]);
  return (
    <form className="campo-juego" onSubmit={(e) => { e.preventDefault(); onEnviar(); }}>
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={valor}
        disabled={deshabilitado}
        className={estado ? `campo-${estado}` : ''}
        aria-label="Tu respuesta"
        onChange={(e) => {
          onCambio(e.target.value);
          if (onAuto && iguales(leerNumero(e.target.value), correcta)) onAuto();
        }}
      />
      <button type="submit" className="btn btn-grande" disabled={deshabilitado || leerNumero(valor) == null}>OK</button>
    </form>
  );
}

// ───────── Motor de rondas ─────────
// Recorre una lista de preguntas ({ q, r, u?, e? } o { q, o, c, e? }).
// Con `repetirErrores`, cada pregunta fallada vuelve al final de la fila.
function Rondas({ crear, repetirErrores = false, onSalir, etiqueta }) {
  const [partida, setPartida] = useState(0);
  const inicial = useMemo(() => crear(), [crear, partida]); // eslint-disable-line react-hooks/exhaustive-deps
  const [cola, setCola] = useState(inicial);
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [estado, setEstado] = useState(null); // null | 'ok' | 'mal'
  const [elegida, setElegida] = useState(null);
  const [fallados, setFallados] = useState([]);
  const [aciertos, setAciertos] = useState(0);
  const sigRef = useRef(null);

  useEffect(() => {
    setCola(inicial);
    setIdx(0);
    setTxt('');
    setEstado(null);
    setElegida(null);
    setFallados([]);
    setAciertos(0);
  }, [inicial]);

  const p = cola[idx];
  const fin = idx >= cola.length;

  const siguiente = () => {
    setIdx((i) => i + 1);
    setTxt('');
    setEstado(null);
    setElegida(null);
  };

  useEffect(() => {
    if (estado === 'ok') {
      const t = setTimeout(siguiente, 650);
      return () => clearTimeout(t);
    }
    if (estado === 'mal') sigRef.current?.focus();
  }, [estado]);

  const resolver = (ok) => {
    if (estado) return;
    setEstado(ok ? 'ok' : 'mal');
    const yaFallada = fallados.some((f) => f.q === p.q);
    if (ok && !yaFallada) setAciertos((a) => a + 1);
    if (!ok) {
      if (!yaFallada) setFallados((f) => [...f, p]);
      if (repetirErrores) setCola((c) => [...c, p]);
    }
  };

  const total = inicial.length;
  if (fin) {
    const n = estrellas(aciertos / total);
    return (
      <div className="resultado-juego">
        <Estrellas n={n} />
        <p className="resultado-num">{aciertos} de {total} correctas al primer intento</p>
        <p>{n === 3 ? '¡Excelente! Lo dominas. 🌟' : n === 2 ? '¡Bien! Repasa los que fallaste. 💪' : 'Sigue practicando, ¡cada vez te saldrá mejor! 📚'}</p>
        {fallados.length > 0 && (
          <div className="repaso-fallos">
            <strong>Para repasar:</strong>
            <ul>{fallados.map((f) => <li key={f.q}><code>{f.q}</code> → <b>{f.o ? f.o[f.c] : `${fmt(f.r)}${f.u ? ' ' + f.u : ''}`}</b></li>)}</ul>
          </div>
        )}
        <div className="ficha-acciones">
          <button type="button" className="btn btn-grande" onClick={() => setPartida((n) => n + 1)}>↺ Jugar otra vez</button>
          <button type="button" className="btn btn-grande btn-ghost" onClick={onSalir}>Cambiar opciones</button>
        </div>
      </div>
    );
  }

  const correctoTxt = p.o ? p.o[p.c] : `${fmt(p.r)}${p.u ? ' ' + p.u : ''}`;
  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span>{etiqueta} · {Math.min(idx + 1, cola.length)} / {cola.length}</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(idx / cola.length) * 100}%` }} /></span>
        <span className="marcador">✔ {aciertos}</span>
      </div>
      <div className={`tarjeta-calculo ${estado ? 'calc-' + estado : ''}`} key={idx}>
        <p className="calculo">{p.o || /[=?]/.test(p.q) ? p.q : `${p.q} = ?`}</p>
        {p.o ? (
          <div className={`opciones-juego ${p.o.length === 2 ? 'opciones-juego-2' : ''}`}>
            {p.o.map((o, i) => {
              let cls = 'opcion-juego';
              if (estado && i === p.c) cls += ' oj-ok';
              else if (estado && i === elegida) cls += ' oj-mal';
              return (
                <button key={o} type="button" className={cls} disabled={!!estado} onClick={() => { setElegida(i); resolver(i === p.c); }}>
                  {o}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <CampoNumero
              valor={txt}
              onCambio={setTxt}
              correcta={p.r}
              deshabilitado={!!estado}
              estado={estado}
              onAuto={() => resolver(true)}
              onEnviar={() => resolver(iguales(leerNumero(txt), p.r))}
            />
            {p.u && <p className="ayuda">Respuesta en {p.u}</p>}
          </>
        )}
        {estado === 'ok' && <p className="juego-ok">¡Bien! ✔</p>}
        {estado === 'mal' && (
          <div className="juego-mal">
            <p>La respuesta es <b>{correctoTxt}</b>{repetirErrores && ' · volverá a aparecer al final'}</p>
            {p.e && <p className="ayuda">{p.e}</p>}
            <button ref={sigRef} type="button" className="btn" onClick={siguiente}>Siguiente →</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ───────── Tablas de multiplicar ─────────
function TablaEstudio({ t }) {
  return (
    <div className="tabla-estudio">
      <strong>Tabla del {t}</strong>
      <ul>{Array.from({ length: 10 }, (_, i) => <li key={i}>{t} • {i + 1} = <b>{t * (i + 1)}</b></li>)}</ul>
    </div>
  );
}

function JuegoTablas() {
  const [tablas, setTablas] = useState([2, 3, 4, 5]);
  const [orden, setOrden] = useState('azar');
  const [jugando, setJugando] = useState(false);
  const [estudiar, setEstudiar] = useState(false);
  const toggle = (t) => setTablas((ts) => (ts.includes(t) ? ts.filter((x) => x !== t) : [...ts, t].sort((a, b) => a - b)));
  const crear = useMemo(() => () => preguntasTablas(tablas, orden), [tablas, orden]);

  if (jugando) return <Rondas crear={crear} repetirErrores etiqueta={`Tabla${tablas.length > 1 ? 's' : ''} del ${tablas.join(', ')}`} onSalir={() => setJugando(false)} />;

  return (
    <div className="ensayo-config">
      <fieldset className="selector">
        <legend>¿Qué tablas quieres practicar?</legend>
        <div className="tablas-chips">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((t) => (
            <button key={t} type="button" className={`chip-tabla ${tablas.includes(t) ? 'chip-tabla-on' : ''}`} onClick={() => toggle(t)} aria-pressed={tablas.includes(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="filtros">
          <button type="button" className="filtro" onClick={() => setTablas([2, 3, 4, 5, 6, 7, 8, 9, 10])}>Del 2 al 10</button>
          <button type="button" className="filtro" onClick={() => setTablas([6, 7, 8, 9])}>Las difíciles (6 a 9)</button>
          <button type="button" className="filtro" onClick={() => setTablas([])}>Limpiar</button>
        </div>
      </fieldset>
      <Selector
        etiqueta="Modo"
        valor={orden}
        onCambio={setOrden}
        opciones={[
          { id: 'orden', nombre: 'En orden (× 1 al × 10)', icono: '🔢' },
          { id: 'azar', nombre: 'Salteadas', icono: '🎲' },
        ]}
      />
      <div className="ficha-acciones">
        <button type="button" className="btn btn-grande" disabled={!tablas.length} onClick={() => setJugando(true)}>¡Jugar!</button>
        <button type="button" className="btn btn-grande btn-ghost" disabled={!tablas.length} onClick={() => setEstudiar(!estudiar)}>{estudiar ? 'Ocultar tablas' : '👀 Ver las tablas'}</button>
      </div>
      {estudiar && <div className="tablas-estudio">{tablas.map((t) => <TablaEstudio key={t} t={t} />)}</div>}
    </div>
  );
}

// ───────── Juegos de rondas con operación / nivel ─────────
function JuegoRondas({ juego }) {
  const [op, setOp] = useState('mezcla');
  const [nivel, setNivel] = useState(1);
  const [jugando, setJugando] = useState(false);
  const crear = useMemo(
    () => () => lista(() => (juego.ops ? juego.gen(op, nivel) : juego.gen(nivel)), juego.cantidad),
    [juego, op, nivel],
  );
  if (jugando) {
    const etiqueta = juego.ops ? `${nombreOp(op)} · ${NIVELES[nivel - 1].nombre}` : NIVELES[nivel - 1].nombre;
    return <Rondas crear={crear} etiqueta={etiqueta} onSalir={() => setJugando(false)} />;
  }
  return (
    <div className="ensayo-config">
      {juego.ops && <Selector etiqueta="Operación" valor={op} onCambio={setOp} opciones={OPS_SELECTOR} />}
      <Selector etiqueta="Nivel" valor={nivel} onCambio={setNivel} opciones={NIVELES} />
      <button type="button" className="btn btn-grande" onClick={() => setJugando(true)}>¡Jugar!</button>
    </div>
  );
}

// ───────── Contrarreloj ─────────
const DURACION = 60;

function Contrarreloj() {
  const { records, guardarRecord } = useProgreso();
  const [op, setOp] = useState('mezcla');
  const [nivel, setNivel] = useState(2);
  const [fase, setFase] = useState('config'); // config | juego | fin
  const [p, setP] = useState(null);
  const [txt, setTxt] = useState('');
  const [puntos, setPuntos] = useState(0);
  const [errores, setErrores] = useState([]);
  const [fallo, setFallo] = useState(null);
  const [restante, setRestante] = useState(DURACION);
  const [nuevoRecord, setNuevoRecord] = useState(false);
  const finRef = useRef(0);
  const clave = `reloj-${op}-${nivel}`;

  const nueva = () => {
    let q;
    do q = genOperacion(op, nivel);
    while (p && q.q === p.q);
    setP(q);
    setTxt('');
  };

  const empezar = () => {
    setPuntos(0);
    setErrores([]);
    setFallo(null);
    setRestante(DURACION);
    finRef.current = Date.now() + DURACION * 1000;
    nueva();
    setFase('juego');
  };

  useEffect(() => {
    if (fase !== 'juego') return undefined;
    const t = setInterval(() => {
      const r = Math.max(0, Math.ceil((finRef.current - Date.now()) / 1000));
      setRestante(r);
      if (r === 0) setFase('fin');
    }, 200);
    return () => clearInterval(t);
  }, [fase]);

  useEffect(() => {
    if (fase === 'fin') setNuevoRecord(puntos > 0 && guardarRecord(clave, puntos));
  }, [fase]); // eslint-disable-line react-hooks/exhaustive-deps

  const acierto = () => {
    setPuntos((n) => n + 1);
    setFallo(null);
    nueva();
  };
  const enviar = () => {
    if (iguales(leerNumero(txt), p.r)) return acierto();
    setErrores((e) => [...e, p]);
    setFallo(`${p.q} = ${fmt(p.r)}`);
    nueva();
  };

  if (fase === 'config') {
    return (
      <div className="ensayo-config">
        <Selector etiqueta="Operación" valor={op} onCambio={setOp} opciones={OPS_SELECTOR} />
        <Selector etiqueta="Nivel" valor={nivel} onCambio={setNivel} opciones={NIVELES} />
        {records[clave] != null && <p>🏆 Tu récord en este modo: <b>{records[clave]}</b> correctas</p>}
        <button type="button" className="btn btn-grande" onClick={empezar}>▶ Empezar (60 s)</button>
      </div>
    );
  }

  if (fase === 'fin') {
    return (
      <div className="resultado-juego">
        <p className="reloj-final">⏰ ¡Tiempo!</p>
        <p className="resultado-num">{puntos} correctas en 60 segundos</p>
        {nuevoRecord ? <p className="record-nuevo">🏆 ¡Nuevo récord!</p> : records[clave] != null && <p>Tu récord: <b>{records[clave]}</b></p>}
        {errores.length > 0 && (
          <div className="repaso-fallos">
            <strong>Para repasar:</strong>
            <ul>{errores.map((f, i) => <li key={i}><code>{f.q}</code> = <b>{fmt(f.r)}</b></li>)}</ul>
          </div>
        )}
        <div className="ficha-acciones">
          <button type="button" className="btn btn-grande" onClick={empezar}>↺ Otra vez</button>
          <button type="button" className="btn btn-grande btn-ghost" onClick={() => setFase('config')}>Cambiar opciones</button>
        </div>
      </div>
    );
  }

  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span className={`reloj-juego ${restante <= 10 ? 'reloj-urgente' : ''}`}>⏱ {restante} s</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(restante / DURACION) * 100}%` }} /></span>
        <span className="marcador">✔ {puntos}</span>
      </div>
      <div className="tarjeta-calculo">
        <p className="calculo">{p.q} =</p>
        <CampoNumero valor={txt} onCambio={setTxt} correcta={p.r} onAuto={acierto} onEnviar={enviar} />
        {fallo ? <p className="juego-mal-mini">✗ {fallo}</p> : <p className="ayuda">Escribe el resultado: si es correcto, avanza solo.</p>}
      </div>
    </div>
  );
}

// ───────── Memorice ─────────
function crearCartas(op, nivel) {
  const pares = [];
  const resultados = new Set();
  for (let i = 0; pares.length < 6 && i < 200; i++) {
    const q = genOperacion(op, nivel);
    if (resultados.has(q.r)) continue;
    resultados.add(q.r);
    pares.push(q);
  }
  return mezclar(pares.flatMap((q, i) => [
    { id: `o${i}`, par: i, txt: q.q, tipo: 'op' },
    { id: `r${i}`, par: i, txt: fmt(q.r), tipo: 'res' },
  ]));
}

function Memorice() {
  const { records, guardarRecord } = useProgreso();
  const [op, setOp] = useState('multi');
  const [nivel, setNivel] = useState(2);
  const [cartas, setCartas] = useState(null);
  const [abiertas, setAbiertas] = useState([]);
  const [hechas, setHechas] = useState([]);
  const [jugadas, setJugadas] = useState(0);
  const [nuevoRecord, setNuevoRecord] = useState(false);
  const clave = `memorice-${op}-${nivel}`;

  const empezar = () => {
    setCartas(crearCartas(op, nivel));
    setAbiertas([]);
    setHechas([]);
    setJugadas(0);
    setNuevoRecord(false);
  };

  const fin = cartas && hechas.length === cartas.length / 2;
  useEffect(() => {
    if (fin) setNuevoRecord(guardarRecord(clave, jugadas, true));
  }, [fin]); // eslint-disable-line react-hooks/exhaustive-deps

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
        setTimeout(() => setAbiertas([]), 950);
      }
    }
  };

  if (!cartas) {
    return (
      <div className="ensayo-config">
        <Selector etiqueta="Operación" valor={op} onCambio={setOp} opciones={OPS_SELECTOR} />
        <Selector etiqueta="Nivel" valor={nivel} onCambio={setNivel} opciones={NIVELES} />
        {records[clave] != null && <p>🏆 Tu récord en este modo: <b>{records[clave]}</b> jugadas</p>}
        <button type="button" className="btn btn-grande" onClick={empezar}>¡Repartir cartas!</button>
      </div>
    );
  }

  return (
    <div className="juego-zona">
      <div className="juego-barra">
        <span>{nombreOp(op)} · {NIVELES[nivel - 1].nombre}</span>
        <span className="progreso"><span className="progreso-fill" style={{ width: `${(hechas.length / 6) * 100}%` }} /></span>
        <span className="marcador">Jugadas: {jugadas}</span>
      </div>
      {fin ? (
        <div className="resultado-juego">
          <Estrellas n={jugadas <= 9 ? 3 : jugadas <= 13 ? 2 : 1} />
          <p className="resultado-num">¡Lo lograste en {jugadas} jugadas!</p>
          {nuevoRecord ? <p className="record-nuevo">🏆 ¡Nuevo récord!</p> : <p>Tu récord: <b>{records[clave]}</b> jugadas</p>}
          <div className="ficha-acciones">
            <button type="button" className="btn btn-grande" onClick={empezar}>↺ Otra vez</button>
            <button type="button" className="btn btn-grande btn-ghost" onClick={() => setCartas(null)}>Cambiar opciones</button>
          </div>
        </div>
      ) : (
        <div className="memorice">
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
      )}
    </div>
  );
}

// ───────── Página de un juego ─────────
export function Juego({ id }) {
  const juego = juegoPorId(id);
  if (!juego) return <p className="pagina">Juego no encontrado.</p>;
  let cuerpo;
  if (juego.tipo === 'tablas') cuerpo = <JuegoTablas />;
  else if (juego.tipo === 'reloj') cuerpo = <Contrarreloj />;
  else if (juego.tipo === 'memorice') cuerpo = <Memorice />;
  else cuerpo = <JuegoRondas key={id} juego={juego} />;

  return (
    <div className="pagina pagina-juego">
      <a className="volver" href="#/matematica/juegos">← Juegos</a>
      <header className="juego-head">
        <h1>{juego.icono} {juego.titulo}</h1>
        <p>{juego.desc}</p>
      </header>
      {cuerpo}
      {juego.unidad && (
        <p className="ayuda centrado">¿Necesitas repasar? <a href={`#/matematica/unidad/${juego.unidad}`}>Ver la unidad {UNIDADES[juego.unidad].nombre} →</a></p>
      )}
    </div>
  );
}
