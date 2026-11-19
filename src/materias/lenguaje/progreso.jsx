import { createContext, useContext, useState, useCallback } from 'react';

const CLAVE = 'sintesis-lenguaje-6b-v1';
const Ctx = createContext(null);

function cargar() {
  try {
    const raw = localStorage.getItem(CLAVE);
    return raw ? JSON.parse(raw) : { res: {}, ensayos: [] };
  } catch {
    return { res: {}, ensayos: [] };
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

  const reiniciarTodo = useCallback(() => actualizar(() => ({ res: {}, ensayos: [] })), [actualizar]);

  return (
    <Ctx.Provider value={{ ...estado, registrar, olvidar, guardarEnsayo, reiniciarTodo }}>
      {children}
    </Ctx.Provider>
  );
}

export const useProgreso = () => useContext(Ctx);

// Resumen de logro para un conjunto de preguntas.
export function resumen(res, preguntas) {
  const total = preguntas.length;
  const respondidas = preguntas.filter((p) => p.id in res).length;
  const correctas = preguntas.filter((p) => res[p.id] === true).length;
  return { total, respondidas, correctas, pct: total ? Math.round((correctas / total) * 100) : 0 };
}
