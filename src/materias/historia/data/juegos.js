// Generadores de preguntas para los juegos de Historia.
// Cada pregunta de alternativas tiene la forma { q, o, c, e? }.

import { HITOS, REGIONES } from './teoria';
import { todasLasPreguntas } from './ejercicios';
import { mezclar, alternativas } from '../utils';

const nombreRegion = (r) => (r.n.startsWith('Metropolitana') ? 'Región Metropolitana' : `Región de ${r.n}`);

// ¿En qué año ocurrió? (hitos de la Unidad 3)
export function preguntasAnios(n = 10) {
  const anios = HITOS.map((h) => String(h.a));
  return mezclar(HITOS).slice(0, n).map((h) => {
    const cercanos = anios.filter((a) => Math.abs(Number(a) - h.a) <= 25);
    return { q: h.t, ...alternativas(String(h.a), cercanos.length >= 4 ? cercanos : anios), e: `${h.t}: ${h.a}.` };
  });
}

// Capitales regionales (en ambos sentidos).
export function preguntasCapitales(n = 10) {
  return mezclar(REGIONES).slice(0, n).map((r) => {
    if (Math.random() < 0.6) {
      return { q: `¿Cuál es la capital de la ${nombreRegion(r)}?`, ...alternativas(r.cap, REGIONES.map((x) => x.cap)), e: `${r.cap} es la capital de la ${nombreRegion(r)}.` };
    }
    return { q: `${r.cap} es la capital de la…`, ...alternativas(nombreRegion(r), REGIONES.map(nombreRegion)), e: `${r.cap} es la capital de la ${nombreRegion(r)} (${r.zona}).` };
  });
}

// ¿En qué zona natural está cada región? + pistas de zonas y ambientes.
const PISTAS_ZONA = [
  ['Desierto de Atacama, camanchaca y minería del cobre y del litio.', 'Norte Grande'],
  ['Valles transversales, uva pisquera y observatorios astronómicos.', 'Norte Chico'],
  ['Clima mediterráneo, viñedos y la mayor parte de la población.', 'Zona central'],
  ['Lagos, volcanes, bosques nativos y mucha lluvia.', 'Zona sur'],
  ['Fiordos, campos de hielo, viento y ganadería ovina.', 'Zona austral'],
];
const ZONAS_N = ['Norte Grande', 'Norte Chico', 'Zona central', 'Zona sur', 'Zona austral'];

const PISTAS_AMBIENTE = [
  ['Escasa lluvia, días calurosos, noches frías, cactus y oasis.', 'Desértico'],
  ['Planicie a más de 3 500 m, alpacas y lluvias de verano.', 'Altiplánico'],
  ['Lluvia en invierno, verano seco, frutas, cereales y vino.', 'Mediterráneo'],
  ['Lluvias casi todo el año, nieblas y bosques muy altos.', 'Lluvioso'],
  ['Frío, fuertes vientos, matorrales bajos y ovejas.', 'Patagónico'],
  ['Temperaturas bajísimas, hielo y bases científicas.', 'Polar'],
  ['Influencia del mar, pesca, moluscos y algas.', 'Costero'],
  ['Cumbres nevadas y ríos de deshielo que generan energía.', 'Andino'],
];
const AMBIENTES = PISTAS_AMBIENTE.map((p) => p[1]);

export function preguntasZonas(n = 10) {
  const banco = [
    ...REGIONES.map((r) => () => ({ q: `¿En qué zona natural está la ${nombreRegion(r)}?`, ...alternativas(r.zona, ZONAS_N), e: `La ${nombreRegion(r)} (capital ${r.cap}) está en: ${r.zona}.` })),
    ...PISTAS_ZONA.map(([pista, z]) => () => ({ q: `¿Qué zona natural es? ${pista}`, ...alternativas(z, ZONAS_N), e: `Corresponde a: ${z}.` })),
    ...PISTAS_AMBIENTE.map(([pista, a]) => () => ({ q: `¿Qué ambiente natural es? ${pista}`, ...alternativas(a, AMBIENTES), e: `Es el ambiente ${a.toLowerCase()}.` })),
  ];
  return mezclar(banco).slice(0, n).map((f) => f());
}

// ¿Quién fue?
const PERSONAJES = [
  ['Dirigente obrero que fundó el Partido Obrero Socialista en 1912.', 'Luis Emilio Recabarren'],
  ['Médico que usó el término “cuestión social” en 1884.', 'Augusto Orrego Luco'],
  ['Poetisa y profesora, Premio Nobel de Literatura en 1945.', 'Gabriela Mistral'],
  ['Primera mujer diputada de Chile (1951).', 'Inés Enríquez'],
  ['Primera mujer senadora de Chile (1953).', 'María de la Cruz'],
  ['Presidente de derecha entre 1958 y 1964.', 'Jorge Alessandri'],
  ['Presidente demócratacristiano (1964–1970); chilenizó el cobre.', 'Eduardo Frei Montalva'],
  ['Presidente de la Unidad Popular, derrocado en 1973.', 'Salvador Allende'],
  ['General que encabezó la Junta Militar y la dictadura.', 'Augusto Pinochet'],
  ['Cantautor asesinado en el Estadio Chile en 1973.', 'Víctor Jara'],
  ['Primer presidente tras la dictadura (1990).', 'Patricio Aylwin'],
  ['Presidente que prologó el Informe Valech: “nunca más”.', 'Ricardo Lagos'],
  ['Autora de Papelucho (1947).', 'Marcela Paz'],
  ['Poeta chileno, Premio Nobel de Literatura en 1971.', 'Pablo Neruda'],
];

export function preguntasPersonajes(n = 10) {
  const nombres = PERSONAJES.map((p) => p[1]);
  return mezclar(PERSONAJES).slice(0, n).map(([d, nom]) => ({ q: d, ...alternativas(nom, nombres), e: `${nom}: ${d}` }));
}

// Verdadero o falso con las preguntas de las guías.
export function preguntasVF(n = 12) {
  return mezclar(todasLasPreguntas().filter((p) => p.t === 'vf')).slice(0, n).map((p) => ({ q: p.q, o: ['Verdadero', 'Falso'], c: p.c ? 0 : 1, e: p.e }));
}

// Línea de tiempo: elige `n` hitos con años distintos.
export function rondaLinea(n = 5, unidad = 'todas') {
  const pool = mezclar(unidad === 'todas' ? HITOS : HITOS.filter((h) => h.unidad === unidad));
  const vistos = new Set();
  const elegidos = [];
  for (const h of pool) {
    if (vistos.has(h.a)) continue;
    vistos.add(h.a);
    elegidos.push(h);
    if (elegidos.length === n) break;
  }
  return elegidos.map((h) => ({ id: `${h.a}-${h.t}`, txt: h.t, valor: h.a, etiqueta: String(h.a) }));
}

// Regiones de norte a sur.
export function rondaRegiones(n = 5) {
  return mezclar(REGIONES.map((r, i) => ({ id: r.n, txt: nombreRegion(r), valor: i, etiqueta: r.cap }))).slice(0, n);
}

// Pares concepto ↔ definición para el memorice (tomados de las tarjetas de repaso).
const CONCEPTOS = [
  ['Cuestión social', 'Problemas sociales y protesta obrera (fines s. XIX)'],
  ['Hacinamiento', 'Mucha gente en poco espacio'],
  ['Mutual', 'Ahorro común para ayudarse'],
  ['Huelga', 'Dejar de trabajar para exigir mejoras'],
  ['Oligarquía', 'Aristocracia + burguesía'],
  ['Democratización', 'Más grupos con derechos y participación'],
  ['Estado benefactor', 'Estado que vela por salud, vivienda y educación'],
  ['Cohecho', 'Compra de votos'],
  ['MEMCh', 'Movimiento por el voto femenino (1935)'],
  ['Golpe de Estado', 'Tomar el poder por la fuerza'],
  ['Dictadura', 'Poder concentrado con violencia y miedo'],
  ['Polarización', 'Sociedad dividida en extremos'],
  ['Privatización', 'Empresas del Estado pasan a privados'],
  ['Plebiscito 1988', 'Ganó el NO'],
  ['Estado unitario', 'Un gobierno y una Constitución para todo el país'],
  ['Comuna', 'La gobierna un alcalde'],
  ['Tricontinental', 'América, Oceanía y Antártica'],
  ['Valles transversales', 'Norte Chico'],
  ['Clima mediterráneo', 'Zona central'],
  ['Xerófita', 'Vegetación de poca agua'],
];

export function cartasConceptos(pares = 6) {
  return mezclar(mezclar(CONCEPTOS).slice(0, pares).flatMap(([a, b], i) => [
    { id: `c${i}`, par: i, txt: a, tipo: 'op' },
    { id: `d${i}`, par: i, txt: b, tipo: 'res' },
  ]));
}

// tipo: 'rondas' (gen) | 'ordenar' (ronda) | 'memorice'
export const JUEGOS = [
  { id: 'linea', grupo: 'u3', tipo: 'ordenar', titulo: 'Línea de tiempo', icono: '⏳', desc: 'Ordena los hechos del más antiguo al más reciente. ¡Toca las tarjetas en orden!', ronda: () => rondaLinea(5), pista: 'Del más antiguo al más reciente', rondas: 5 },
  { id: 'anios', grupo: 'u3', tipo: 'rondas', titulo: '¿En qué año?', icono: '📅', desc: 'Elige el año correcto de cada hecho de la Unidad 3.', gen: preguntasAnios },
  { id: 'personajes', grupo: 'u3', tipo: 'rondas', titulo: '¿Quién fue?', icono: '🧑‍🏫', desc: 'Reconoce a los personajes del siglo XX chileno.', gen: preguntasPersonajes },
  { id: 'conceptos', grupo: 'u3', tipo: 'memorice', titulo: 'Memorice de conceptos', icono: '🃏', desc: 'Une cada concepto con su definición en la menor cantidad de jugadas.' },
  { id: 'capitales', grupo: 'u4', tipo: 'rondas', titulo: 'Capitales regionales', icono: '🏙️', desc: 'Relaciona cada región con su capital.', gen: preguntasCapitales, unidad: 'regiones' },
  { id: 'norte-sur', grupo: 'u4', tipo: 'ordenar', titulo: 'De norte a sur', icono: '🧭', desc: 'Ordena las regiones de norte a sur. ¡Toca primero la que está más al norte!', ronda: () => rondaRegiones(5), pista: 'De norte a sur', rondas: 5, unidad: 'regiones' },
  { id: 'zonas', grupo: 'u4', tipo: 'rondas', titulo: 'Zonas y ambientes', icono: '🏔️', desc: '¿En qué zona natural está cada región? ¿Qué ambiente describe cada pista?', gen: preguntasZonas, unidad: 'zonas' },
  { id: 'vf', grupo: 'mix', tipo: 'rondas', titulo: 'Verdadero o falso', icono: '⚡', desc: 'Afirmaciones de toda la prueba: decide rápido si son verdaderas o falsas.', gen: preguntasVF },
];

export const juegoPorId = (id) => JUEGOS.find((j) => j.id === id);
