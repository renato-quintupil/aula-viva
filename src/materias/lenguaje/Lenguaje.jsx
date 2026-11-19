import Inicio from './components/Inicio';
import { Aprende, FichaTipo, Habilidades, Comparar } from './components/Aprende';
import { ListaPractica, VistaTexto } from './components/Practica';
import { ListaJuegos, Juego } from './components/Juegos';
import Ensayo from './components/Ensayo';
import { ProgresoProvider } from './progreso';
import './styles/componentes.css';
import './styles/textos.css';

// Todas las rutas de esta materia cuelgan de #/lenguaje/...
const BASE = '#/lenguaje';

const NAV = [
  { id: 'inicio', href: `${BASE}`, ico: '🏠', txt: 'Inicio', match: [undefined] },
  { id: 'aprende', href: `${BASE}/aprende`, ico: '📚', txt: 'Aprende', match: ['aprende', 'tipo', 'habilidades', 'comparar'] },
  { id: 'practica', href: `${BASE}/practica`, ico: '✏️', txt: 'Practica', match: ['practica'] },
  { id: 'juegos', href: `${BASE}/juegos`, ico: '🎮', txt: 'Juegos', match: ['juegos'] },
  { id: 'ensayo', href: `${BASE}/ensayo`, ico: '📝', txt: 'Ensayo', match: ['ensayo'] },
];

function Pagina({ ruta }) {
  const [a, b, c] = ruta;
  switch (a) {
    case undefined:
      return <Inicio />;
    case 'aprende':
      return <Aprende />;
    case 'tipo':
      return <FichaTipo key={b} tipo={b} />;
    case 'habilidades':
      return <Habilidades />;
    case 'comparar':
      return <Comparar />;
    case 'practica':
      if (b === 'f') return <ListaPractica key={c} filtro={c} />;
      return b ? <VistaTexto key={b} id={b} /> : <ListaPractica />;
    case 'juegos':
      return b ? <Juego key={b} id={b} /> : <ListaJuegos />;
    case 'ensayo':
      return <Ensayo />;
    default:
      return <Inicio />;
  }
}

// `ruta` llega sin el segmento "lenguaje" (p. ej. ['practica', 'n1']).
export default function Lenguaje({ ruta }) {
  return (
    <ProgresoProvider>
      <div className="app">
        <header className="topbar">
          <div className="topbar-izq">
            <a className="volver-menu" href="#/" title="Volver al menú de materias" aria-label="Volver al menú de materias">←</a>
            <a className="marca" href={BASE}>
              <span className="marca-ico">📚</span>
              <span className="marca-txt">Síntesis <b>Lenguaje</b> <small>6º Básico</small></span>
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
          Síntesis basada en el Texto del Estudiante de Lenguaje y Comunicación 6º Básico y en el temario de la Prueba de Síntesis · 2º semestre 2026.
        </footer>
      </div>
    </ProgresoProvider>
  );
}
