// Utilidades de la materia Ciencias Naturales: azar, nota y cuenta regresiva.

export const elegir = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Escala chilena 1,0 a 7,0 con 60 % de exigencia (4,0 = 60 % de logro).
export function notaChilena(logro) {
  const n = logro < 0.6 ? 1 + (logro / 0.6) * 3 : 4 + ((logro - 0.6) / 0.4) * 3;
  return Math.round(n * 10) / 10;
}

export const formatoNota = (n) => n.toFixed(1).replace('.', ',');

export function diasHasta(fechaISO) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const [y, m, d] = fechaISO.split('-').map(Number);
  return Math.round((new Date(y, m - 1, d) - hoy) / 86400000);
}

export function estrellas(pct) {
  if (pct >= 0.9) return 3;
  if (pct >= 0.6) return 2;
  if (pct > 0) return 1;
  return 0;
}

// Arma una pregunta de alternativas: la correcta + distractores al azar (sin repetir).
export function alternativas(correcta, pool, n = 4) {
  const otras = mezclar([...new Set(pool)].filter((x) => x !== correcta)).slice(0, n - 1);
  const o = mezclar([correcta, ...otras]);
  return { o, c: o.indexOf(correcta) };
}
