import { CURSO, MATERIAS } from './materias';

function diasHasta(fechaISO) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const [y, m, d] = fechaISO.split('-').map(Number);
  return Math.round((new Date(y, m - 1, d) - hoy) / 86400000);
}

function Cuenta({ fecha }) {
  const d = diasHasta(fecha);
  if (d > 1) return <span className="mat-cuenta">en {d} días</span>;
  if (d === 1) return <span className="mat-cuenta mat-pronto">¡mañana!</span>;
  if (d === 0) return <span className="mat-cuenta mat-pronto">¡hoy!</span>;
  return <span className="mat-cuenta mat-pasada">ya fue</span>;
}

function Tarjeta({ m }) {
  const contenido = (
    <>
      <div className="mat-cabeza">
        <span className="mat-ico" aria-hidden>{m.icono}</span>
        {!m.disponible && <span className="mat-etiqueta">Próximamente</span>}
      </div>
      <h2 className="mat-nombre">{m.nombre}</h2>
      <p className="mat-fecha">
        📅 {m.fechaTexto} · <Cuenta fecha={m.fecha} />
      </p>
      <ul className="mat-temas">
        {m.temas.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {m.disponible && <span className="mat-entrar">Entrar →</span>}
    </>
  );

  const estilo = { '--mat': m.color };
  return m.disponible ? (
    <a href={`#/${m.id}`} className="mat-tarjeta" style={estilo}>
      {contenido}
    </a>
  ) : (
    <div className="mat-tarjeta mat-off" style={estilo} aria-disabled="true">
      {contenido}
    </div>
  );
}

export default function Menu() {
  // Ordenadas por fecha de prueba: la más cercana primero.
  const materias = [...MATERIAS].sort((a, b) => a.fecha.localeCompare(b.fecha));
  return (
    <div className="app">
      <header className="topbar">
        <a className="marca" href="#/">
          <span className="marca-ico">🎓</span>
          <span className="marca-txt">Aula <b>Viva</b> <small>{CURSO}</small></span>
        </a>
      </header>
      <main>
        <div className="pagina">
          <section className="menu-intro">
            <p className="menu-kicker">Pruebas de Síntesis</p>
            <h1>¿Qué quieres estudiar hoy?</h1>
            <p className="menu-sub">Elige una materia para repasar, practicar y hacer ensayos.</p>
          </section>
          <section className="mat-grid" aria-label="Materias">
            {materias.map((m) => (
              <Tarjeta key={m.id} m={m} />
            ))}
          </section>
        </div>
      </main>
      <footer className="pie">Aula Viva · Material de estudio para las Pruebas de Síntesis · {CURSO}.</footer>
    </div>
  );
}
