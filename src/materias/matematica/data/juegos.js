// Juegos de matemática: generadores de ejercicios al azar.
// Cada generador devuelve { q, r } (respuesta numérica) o { q, o, c } (alternativas),
// y opcionalmente `e` con una explicación corta.

import { azar, elegir, fmt, limpio, mezclar } from '../utils';

export const NIVELES = [
  { id: 1, nombre: 'Fácil', icono: '🌱' },
  { id: 2, nombre: 'Medio', icono: '🌿' },
  { id: 3, nombre: 'Difícil', icono: '🌳' },
];

// ───────── Operaciones básicas ─────────
export const OPERACIONES = {
  suma: {
    nombre: 'Sumas',
    icono: '➕',
    gen(n) {
      const [a, b] = n === 1 ? [azar(1, 10), azar(1, 10)] : n === 2 ? [azar(10, 99), azar(5, 99)] : [azar(100, 999), azar(100, 999)];
      return { q: `${fmt(a)} + ${fmt(b)}`, r: a + b };
    },
  },
  resta: {
    nombre: 'Restas',
    icono: '➖',
    gen(n) {
      const a = n === 1 ? azar(5, 20) : n === 2 ? azar(20, 99) : azar(100, 999);
      const b = n === 1 ? azar(1, a) : n === 2 ? azar(5, a) : azar(10, a);
      return { q: `${fmt(a)} − ${fmt(b)}`, r: a - b };
    },
  },
  multi: {
    nombre: 'Multiplicaciones',
    icono: '✖️',
    gen(n) {
      const a = n === 1 ? azar(1, 5) : n === 2 ? azar(2, 10) : azar(2, 12);
      const b = n === 3 ? azar(2, 12) : azar(1, 10);
      return { q: `${a} • ${b}`, r: a * b };
    },
  },
  divi: {
    nombre: 'Divisiones',
    icono: '➗',
    gen(n) {
      const b = n === 1 ? azar(2, 5) : n === 2 ? azar(2, 10) : azar(3, 12);
      const r = n === 3 ? azar(2, 12) : azar(1, 10);
      return { q: `${b * r} : ${b}`, r };
    },
  },
};

export const ORDEN_OPS = ['suma', 'resta', 'multi', 'divi', 'mezcla'];
export const nombreOp = (op) => (op === 'mezcla' ? 'Todas mezcladas' : OPERACIONES[op].nombre);
export const iconoOp = (op) => (op === 'mezcla' ? '🔀' : OPERACIONES[op].icono);

export function genOperacion(op, nivel) {
  const real = op === 'mezcla' ? elegir(['suma', 'resta', 'multi', 'divi']) : op;
  return OPERACIONES[real].gen(nivel);
}

// Crea una lista de ejercicios sin repetir enunciados (si se puede).
export function lista(gen, cantidad) {
  const out = [];
  const vistos = new Set();
  for (let intento = 0; out.length < cantidad && intento < cantidad * 30; intento++) {
    const p = gen();
    if (vistos.has(p.q)) continue;
    vistos.add(p.q);
    out.push(p);
  }
  return out;
}

// ───────── Tablas de multiplicar ─────────
export function preguntasTablas(tablas, orden) {
  const ps = [];
  tablas.forEach((t) => {
    for (let i = 1; i <= 10; i++) ps.push({ q: `${t} • ${i}`, r: t * i });
  });
  if (orden === 'orden') return ps;
  return mezclar(ps).slice(0, Math.max(10, Math.min(20, ps.length)));
}

// ───────── ¿Verdadero o falso? ─────────
export function genVF(op, nivel) {
  const { q, r } = genOperacion(op, nivel);
  const verdadero = Math.random() < 0.5;
  let mostrado = r;
  if (!verdadero) {
    const desvios = [1, -1, 2, -2, 10, -10];
    const m = q.match(/^(\d+) • (\d+)$/);
    if (m) desvios.push(Number(m[1]), -Number(m[1]));
    do mostrado = r + elegir(desvios);
    while (mostrado < 0 || mostrado === r);
  }
  return {
    q: `${q} = ${fmt(mostrado)}`,
    o: ['Verdadero', 'Falso'],
    c: verdadero ? 0 : 1,
    e: `${q} = ${fmt(r)}`,
  };
}

// ───────── Temas de la prueba ─────────

// Corre la coma de un número decimal: × o : por 10, 100, 1 000.
function genComa(nivel) {
  const pot = elegir(nivel === 1 ? [10, 100] : [10, 100, 1000]);
  const base = elegir([azar(1, 99) / 10, azar(1, 999) / 100, azar(1, 99) / 100, azar(10, 999) / 10]);
  const multiplica = Math.random() < 0.5;
  const r = limpio(multiplica ? base * pot : base / pot);
  const candidatos = [r * 10, r / 10, r * 100, r / 100, r * 1000, r / 1000].map(limpio).filter((x) => x !== r && x >= 0.0001 && x < 1e6);
  const o = mezclar([r, ...mezclar([...new Set(candidatos)]).slice(0, 3)]);
  const ceros = String(pot).length - 1;
  return {
    q: `${fmt(base)} ${multiplica ? '•' : ':'} ${fmt(pot)}`,
    o: o.map(fmt),
    c: o.indexOf(r),
    e: `${multiplica ? 'Multiplicar' : 'Dividir'} por ${fmt(pot)} corre la coma ${ceros} lugar${ceros > 1 ? 'es' : ''} a la ${multiplica ? 'derecha' : 'izquierda'}: ${fmt(r)}.`,
  };
}

// Decimal por natural o entre decimales (resultado exacto).
function genDecimalPorNatural(nivel) {
  if (nivel === 3) {
    const a = azar(2, 9) / 10 + azar(1, 9);
    const b = azar(1, 9) / 10;
    const r = limpio(a * b);
    return { q: `${fmt(limpio(a))} • ${fmt(b)}`, r, e: `Multiplica sin comas y cuenta las cifras decimales: ${fmt(r)}.` };
  }
  if (Math.random() < 0.5) {
    const a = nivel === 1 ? azar(11, 99) / 10 : azar(101, 999) / 100;
    const b = azar(2, 9);
    const r = limpio(a * b);
    return { q: `${fmt(a)} • ${b}`, r, e: `Multiplica como naturales y ubica la coma: ${fmt(r)}.` };
  }
  const b = azar(2, 9);
  const c = nivel === 1 ? azar(11, 99) / 10 : azar(101, 999) / 100;
  const a = limpio(b * c);
  return { q: `${fmt(a)} : ${b}`, r: c, e: `${fmt(a)} : ${b} = ${fmt(c)}. La coma del cociente va en el mismo lugar que en el dividendo.` };
}

function genPorcentaje(nivel) {
  const opciones = nivel === 1 ? [10, 50] : nivel === 2 ? [10, 25, 50, 20] : [1, 5, 10, 20, 25, 30, 75];
  const p = elegir(opciones);
  const multiplo = { 1: 100, 5: 20, 10: 10, 20: 5, 25: 4, 30: 10, 50: 2, 75: 4 }[p];
  const tope = nivel === 1 ? 30 : nivel === 2 ? 60 : 120;
  const n = multiplo * azar(2, tope);
  const r = (n * p) / 100;
  const pista = {
    1: 'dividir por 100',
    5: 'la mitad del 10 %',
    10: 'dividir por 10',
    20: 'dos veces el 10 %',
    25: 'dividir por 4',
    30: 'tres veces el 10 %',
    50: 'la mitad',
    75: 'tres veces el 25 %',
  }[p];
  return { q: `${p} % de ${fmt(n)}`, r, e: `El ${p} % es ${pista}: ${fmt(r)}.` };
}

function genEcuacion(nivel) {
  const x = azar(2, nivel === 1 ? 15 : 25);
  if (nivel === 1 || (nivel === 2 && Math.random() < 0.4)) {
    const t = elegir(['suma', 'resta', 'multi']);
    if (t === 'suma') {
      const b = azar(3, 60);
      return { q: `x + ${b} = ${x + b}`, r: x, e: `x = ${x + b} − ${b} = ${x}` };
    }
    if (t === 'resta') {
      const b = azar(2, 30);
      return { q: `x − ${b} = ${x - b}`, r: x, e: `x = ${x - b} + ${b} = ${x}` };
    }
    const a = azar(2, 9);
    return { q: `${a} • x = ${a * x}`, r: x, e: `x = ${a * x} : ${a} = ${x}` };
  }
  const a = azar(2, 9);
  const b = azar(1, 40);
  if (Math.random() < 0.5) {
    return { q: `${a} • x + ${b} = ${a * x + b}`, r: x, e: `${a} • x = ${a * x + b} − ${b} = ${a * x} → x = ${a * x} : ${a} = ${x}` };
  }
  return { q: `${a} • x − ${b} = ${a * x - b}`, r: x, e: `${a} • x = ${a * x - b} + ${b} = ${a * x} → x = ${a * x} : ${a} = ${x}` };
}

function genValorizar(nivel) {
  const x = nivel === 3 ? azar(2, 9) + elegir([0, 0.5]) : azar(2, nivel === 1 ? 10 : 15);
  const a = azar(2, 9);
  const b = azar(1, 20);
  const forma = elegir(nivel === 1 ? ['ax+b', 'ax'] : ['ax+b', 'ax-b', 'b+ax']);
  const ax = limpio(a * x);
  if (forma === 'ax') return { q: `${a} • x, con x = ${fmt(x)}`, r: ax, e: `${a} • ${fmt(x)} = ${fmt(ax)}` };
  if (forma === 'ax-b' && ax - b >= 0) return { q: `${a} • x − ${b}, con x = ${fmt(x)}`, r: limpio(ax - b), e: `${a} • ${fmt(x)} − ${b} = ${fmt(ax)} − ${b} = ${fmt(limpio(ax - b))}` };
  if (forma === 'b+ax') return { q: `${b} + ${a} • x, con x = ${fmt(x)}`, r: limpio(ax + b), e: `Primero la multiplicación: ${b} + ${fmt(ax)} = ${fmt(limpio(ax + b))}` };
  return { q: `${a} • x + ${b}, con x = ${fmt(x)}`, r: limpio(ax + b), e: `${a} • ${fmt(x)} + ${b} = ${fmt(ax)} + ${b} = ${fmt(limpio(ax + b))}` };
}

function genRazon(nivel) {
  const a = azar(1, 9);
  const b = azar(1, 9);
  const k = azar(2, nivel === 1 ? 5 : 12);
  if (Math.random() < 0.5) return { q: `${a} : ${b} = ${a * k} : ?`, r: b * k, e: `Se multiplicó por ${k}: ${b} • ${k} = ${b * k}` };
  return { q: `${a} : ${b} = ? : ${b * k}`, r: a * k, e: `Se multiplicó por ${k}: ${a} • ${k} = ${a * k}` };
}

function genCuerpo(nivel) {
  const max = nivel === 1 ? 6 : nivel === 2 ? 10 : 15;
  const cubo = Math.random() < 0.35;
  const l = azar(2, max);
  const a = cubo ? l : azar(2, max);
  const h = cubo ? l : azar(2, max);
  const pideArea = nivel > 1 && Math.random() < 0.5;
  const fig = cubo ? `cubo de arista ${l} cm` : `paralelepípedo de ${l} × ${a} × ${h} cm`;
  if (pideArea) {
    const r = 2 * (l * a + l * h + a * h);
    return { q: `Área del ${fig}`, r, u: 'cm²', e: cubo ? `6 • ${l} • ${l} = ${fmt(r)} cm²` : `2 • (${l * a} + ${l * h} + ${a * h}) = ${fmt(r)} cm²` };
  }
  const r = l * a * h;
  return { q: `Volumen del ${fig}`, r, u: 'cm³', e: `${l} • ${a} • ${h} = ${fmt(r)} cm³` };
}

// ───────── Catálogo ─────────
// tipo: 'tablas' | 'reloj' | 'rondas' | 'memorice'
//   rondas: `gen(nivel)` y `ops` = true si se elige operación (usa genOperacion / genVF).
export const JUEGOS = [
  { id: 'tablas', grupo: 'calculo', tipo: 'tablas', titulo: 'Tablas de multiplicar', icono: '✖️', desc: 'Elige las tablas que quieres repasar. Si te equivocas, la pregunta vuelve al final hasta que la domines.' },
  { id: 'reloj', grupo: 'calculo', tipo: 'reloj', titulo: 'Contrarreloj', icono: '⏱️', desc: '¿Cuántos ejercicios resuelves en 60 segundos? Sumas, restas, multiplicaciones, divisiones o todas mezcladas.' },
  { id: 'vf', grupo: 'calculo', tipo: 'rondas', ops: true, titulo: '¿Verdadero o falso?', icono: '⚡', desc: 'Decide rápido si el resultado es correcto. ¡Ojo con las trampas!', gen: genVF, cantidad: 15 },
  { id: 'memorice', grupo: 'calculo', tipo: 'memorice', titulo: 'Memorice', icono: '🃏', desc: 'Da vuelta las cartas y une cada operación con su resultado en la menor cantidad de jugadas.' },
  { id: 'operaciones', grupo: 'calculo', tipo: 'rondas', ops: true, titulo: 'Práctica libre', icono: '🧮', desc: 'Diez ejercicios tranquilos, sin reloj, de la operación y el nivel que elijas.', gen: genOperacion, cantidad: 10 },
  { id: 'coma', grupo: 'prueba', tipo: 'rondas', titulo: '¿Dónde va la coma?', icono: '🔟', desc: 'Multiplica y divide por 10, 100 y 1 000 corriendo la coma.', gen: genComa, cantidad: 10, unidad: 'decimales' },
  { id: 'decimal', grupo: 'prueba', tipo: 'rondas', titulo: 'Decimales al toque', icono: '🔢', desc: 'Multiplica y divide números decimales por naturales (y entre decimales en nivel difícil).', gen: genDecimalPorNatural, cantidad: 10, unidad: 'decimales' },
  { id: 'porcentaje', grupo: 'prueba', tipo: 'rondas', titulo: 'Porcentajes mentales', icono: '💯', desc: 'Calcula el 10 %, 25 %, 50 % y más, usando mitades, cuartos y décimos.', gen: genPorcentaje, cantidad: 10, unidad: 'razones' },
  { id: 'razon', grupo: 'prueba', tipo: 'rondas', titulo: 'Razones equivalentes', icono: '⚖️', desc: 'Encuentra el número que falta para que las razones sean equivalentes.', gen: genRazon, cantidad: 10, unidad: 'razones' },
  { id: 'ecuacion', grupo: 'prueba', tipo: 'rondas', titulo: 'Encuentra la x', icono: '🔍', desc: 'Resuelve ecuaciones de uno y dos pasos.', gen: genEcuacion, cantidad: 10, unidad: 'algebra' },
  { id: 'valorizar', grupo: 'prueba', tipo: 'rondas', titulo: 'Valoriza la expresión', icono: '🔣', desc: 'Reemplaza la x por su valor y calcula respetando el orden de las operaciones.', gen: genValorizar, cantidad: 10, unidad: 'algebra' },
  { id: 'cuerpos', grupo: 'prueba', tipo: 'rondas', titulo: 'Área y volumen exprés', icono: '📦', desc: 'Calcula el volumen o el área de cubos y paralelepípedos.', gen: genCuerpo, cantidad: 8, unidad: 'area' },
];

export const juegoPorId = (id) => JUEGOS.find((j) => j.id === id);
