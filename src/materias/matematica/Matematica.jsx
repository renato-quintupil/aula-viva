import Inicio from './components/Inicio';
import { Aprende, FichaUnidad } from './components/Aprende';
import { ListaPractica, VistaGuia } from './components/Practica';
import { ListaJuegos, Juego } from './components/Juegos';
import Ensayo from './components/Ensayo';
import { ProgresoProvider } from './progreso';
// Botones, tarjetas, preguntas y ensayo comparten el estilo base definido en Lenguaje.
import '../lenguaje/styles/componentes.css';
import './styles/matematica.css';

// Todas las rutas de esta materia cuelgan de #/matematica/...
const BASE = '#/matematica';

const NAV = [
  { id: 'inicio', href: `${BASE}`, ico: '🏠', txt: 'Inicio', match: [undefined] },
  { id: 'aprende', href: `${BASE}/aprende`, ico: '📚', txt: 'Aprende', match: ['aprende', 'unidad'] },
  { id: 'practica', href: `${BASE}/practica`, ico: '✏️', txt: 'Practica', match: ['practica'] },
  { id: 'juegos', href: `${BASE}/juegos`, ico: '🎮', txt: 'Juegos', match: ['juegos'] },
  { id: 'ensayo', href: `${BASE}/ensayo`, ico: '📝', txt: 'Ensayo', match: ['ensayo'] },
];

function Pagina({ ruta }) {
  const [a, b] = ruta;
  switch (a) {
    case undefined:
      return <Inicio />;
    case 'aprende':
      return <Aprende />;
    case 'unidad':
      return <FichaUnidad key={b} id={b} />;
    case 'practica':
      return b ? <VistaGuia key={b} id={b} /> : <ListaPractica />;
    case 'juegos':
      return b ? <Juego key={b} id={b} /> : <ListaJuegos />;
    case 'ensayo':
      return <Ensayo />;
    default:
      return <Inicio />;
  }
}

// `ruta` llega sin el segmento "matematica" (p. ej. ['juegos', 'tablas']).
export default function Matematica({ ruta }) {
  return (
    <ProgresoProvider>
      <div className="app mate">
        <header className="topbar">
          <div className="topbar-izq">
            <a className="volver-menu" href="#/" title="Volver al menú de materias" aria-label="Volver al menú de materias">←</a>
            <a className="marca" href={BASE}>
              <span className="marca-ico">🔢</span>
              <span className="marca-txt">Síntesis <b>Matemática</b> <small>6º Básico</small></span>
            </a>
          </div>
          <nav className="nav" aria-label="Secciones">
            {NAV.map((n) => {
              const on = n.match.includes(ruta[0]);
              return (
                <a key={n.id} href={n.href} className={`nav-link ${on ? 'nav-on' : ''}`} aria-current={on ? 'page' : undefined}>
                  <span className="nav-ico" aria-hidden>{n.ico}</span>
                  <span className="nav-txt">{n.txt}</span>
                </a>
              );
            })}
          </nav>
        </header>
        <main>
          <Pagina ruta={ruta} />
        </main>
        <footer className="pie">
          Síntesis basada en el Texto del Estudiante de Matemática 6º Básico (Tomos 1 y 2) y en el temario de la Prueba de Síntesis · 2º semestre 2026.
        </footer>
      </div>
    </ProgresoProvider>
  );
}
