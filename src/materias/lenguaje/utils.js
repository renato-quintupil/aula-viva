import { TEXTOS } from './data/textos';
import { JUEGOS } from './data/juegos';

// Generador pseudoaleatorio con semilla: mezcla siempre igual para una misma pregunta.
function rng(semilla) {
  let h = 2166136261;
  for (const ch of semilla) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function mezclar(arr, semilla) {
  const r = semilla ? rng(semilla) : Math.random;
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Mezcla garantizando que el resultado no quede en el orden original.
export function mezclarDistinto(arr, semilla) {
  if (arr.length < 2) return [...arr];
  let a = mezclar(arr, semilla);
  if (a.every((x, i) => x === arr[i])) a = [...a.slice(1), a[0]];
  return a;
}

// Escala chilena 1,0 a 7,0 con 60 % de exigencia (4,0 = 60 % de logro).
export function notaChilena(logro) {
  const n = logro < 0.6 ? 1 + (logro / 0.6) * 3 : 4 + ((logro - 0.6) / 0.4) * 3;
  return Math.round(n * 10) / 10;
}

export const formatoNota = (n) => n.toFixed(1).replace('.', ',');

export const HAB_NOMBRE = {
  localizar: 'Localizar',
  interpretar: 'Interpretar',
  relacionar: 'Relacionar',
  reflexionar: 'Reflexionar',
  estructura: 'Estructura y propósito',
};

// Todas las preguntas de los textos y juegos, con su origen.
export function todasLasPreguntas() {
  const out = [];
  TEXTOS.forEach((t) => t.preguntas.forEach((p) => out.push({ ...p, textoId: t.id, tipoTexto: t.tipo })));
  JUEGOS.forEach((j) => j.preguntas.forEach((p) => out.push({ ...p, juegoId: j.id, tipoTexto: 'general' })));
  return out;
}

export function diasHasta(fechaISO) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const [y, m, d] = fechaISO.split('-').map(Number);
  const meta = new Date(y, m - 1, d);
  return Math.round((meta - hoy) / 86400000);
}

export const ir = (ruta) => {
  window.location.hash = ruta;
};
