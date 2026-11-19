// Utilidades de la materia Matemática: azar, formato de números y nota.

export const azar = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
export const elegir = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Redondea para evitar errores de coma flotante (0,1 + 0,2 = 0,30000000000000004).
export const limpio = (n) => Math.round(n * 1e9) / 1e9;

// Formato chileno como en el libro: coma decimal y espacio para los miles (1 260,5).
export function fmt(n) {
  const v = limpio(n);
  // toFixed evita la notación exponencial (1e-7) en números muy pequeños.
  const [ent, dec] = Math.abs(v).toFixed(9).replace(/\.?0+$/, '').split('.');
  const miles = ent.length > 4 ? ent.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : ent;
  return (v < 0 ? '−' : '') + miles + (dec ? ',' + dec : '');
}

// Convierte lo que escribe el estudiante en número. Acepta coma o punto decimal
// y espacios o puntos como separador de miles («1 260», «1.260», «2,5», «2.5»).
export function leerNumero(txt) {
  let s = String(txt).trim().replace(/[\s $%]/g, '').replace('−', '-');
  if (!s) return null;
  if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export const iguales = (a, b) => a != null && Math.abs(a - b) < 1e-6;

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
