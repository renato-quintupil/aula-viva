import { useEffect, useState } from 'react';
import Menu from './Menu';
import Lenguaje from './materias/lenguaje/Lenguaje';
import Matematica from './materias/matematica/Matematica';
import Historia from './materias/historia/Historia';

// Enrutador mínimo basado en el hash (#/materia/...): funciona abriendo el archivo con doble clic.
function useRuta() {
  const leer = () => (window.location.hash.replace(/^#/, '') || '/').split('/').filter(Boolean);
  const [ruta, setRuta] = useState(leer);
  useEffect(() => {
    const f = () => {
      setRuta(leer());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return ruta;
}

// Componente raíz de cada materia disponible. Recibe la ruta sin el id de la materia.
const MATERIAS = {
  lenguaje: Lenguaje,
  matematica: Matematica,
  historia: Historia,
};

export default function App() {
  const [materia, ...resto] = useRuta();
  const Materia = MATERIAS[materia];
  return Materia ? <Materia ruta={resto} /> : <Menu />;
}
