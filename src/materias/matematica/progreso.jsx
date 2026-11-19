import { createContext, useContext, useState, useCallback } from 'react';

const CLAVE = 'aula-viva-matematica-6b-v1';
const VACIO = { res: {}, ensayos: [], records: {} };
const Ctx = createContext(null);

function cargar() {
  try {
    const raw = localStorage.getItem(CLAVE);
    return raw ? { ...VACIO, ...JSON.parse(raw) } : VACIO;
  } catch {
    return VACIO;
  }
}

function guardar(estado) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
  } catch {
    /* sin almacenamiento disponible: el progreso dura solo esta sesión */
  }
}

export function ProgresoProvider({ children }) {
  const [estado, setEstado] = useState(cargar);

  const actualizar = useCallback((fn) => {
    setEstado((prev) => {
      const nuevo = fn(prev);
      guardar(nuevo);
      return nuevo;
    });
  }, []);

  const registrar = useCallback(
    (id, ok) => actualizar((prev) => ({ ...prev, res: { ...prev.res, [id]: ok } })),
    [actualizar],
  );

  const olvidar = useCallback(
    (ids) =>
      actualizar((prev) => {
        const res = { ...prev.res };
        ids.forEach((id) => delete res[id]);
        return { ...prev, res };
      }),
    [actualizar],
  );

  const guardarEnsayo = useCallback(
    (resultado) => actualizar((prev) => ({ ...prev, ensayos: [...prev.ensayos, resultado].slice(-20) })),
    [actualizar],
  );

  // Guarda el mejor puntaje de cada juego (clave = juego + modo). Devuelve si es récord nuevo.
  // `menorEsMejor` sirve para juegos que cuentan jugadas (memorice).
  const guardarRecord = useCallback(
    (clave, puntos, menorEsMejor = false) => {
      const previo = estado.records[clave];
      const mejora = previo == null || (menorEsMejor ? puntos < previo : puntos > previo);
      if (!mejora) return false;
      actualizar((prev) => ({ ...prev, records: { ...prev.records, [clave]: puntos } }));
      return true;
    },
    [actualizar, estado.records],
  );

  const reiniciarTodo = useCallback(() => actualizar(() => VACIO), [actualizar]);

  return (
    <Ctx.Provider value={{ ...estado, registrar, olvidar, guardarEnsayo, guardarRecord, reiniciarTodo }}>
      {children}
    </Ctx.Provider>
  );
}

export const useProgreso = () => useContext(Ctx);

export function resumen(res, preguntas) {
  const total = preguntas.length;
  const respondidas = preguntas.filter((p) => p.id in res).length;
  const correctas = preguntas.filter((p) => res[p.id] === true).length;
  return { total, respondidas, correctas, pct: total ? Math.round((correctas / total) * 100) : 0 };
}
