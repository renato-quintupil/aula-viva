// Generadores de preguntas para los juegos de Ciencias Naturales.
// Cada pregunta de alternativas tiene la forma { q, o, c, e? }.

import { CADENAS } from './teoria';
import { todasLasPreguntas } from './ejercicios';
import { mezclar, alternativas } from '../utils';

// Toma `n` pistas al azar de una lista [pista, respuesta] y arma preguntas con las respuestas posibles.
function desdePistas(pistas, opciones, n, pregunta = (p) => p, explicar = (p, r) => `${r}.`) {
  return mezclar(pistas).slice(0, n).map(([p, r]) => ({ q: pregunta(p), ...alternativas(r, opciones), e: explicar(p, r) }));
}

// ¿Sólido, líquido o gas?
const ESTADOS = ['Sólido', 'Líquido', 'Gaseoso'];
const PISTAS_ESTADO = [
  ['Partículas muy juntas y ordenadas que solo vibran en su lugar.', 'Sólido'],
  ['Partículas muy separadas que se mueven libremente.', 'Gaseoso'],
  ['Partículas cercanas que se deslizan unas sobre otras.', 'Líquido'],
  ['Tiene forma y volumen propios.', 'Sólido'],
  ['Tiene volumen propio, pero toma la forma del recipiente.', 'Líquido'],
  ['No tiene forma ni volumen propios: ocupa todo el espacio.', 'Gaseoso'],
  ['La fuerza de atracción entre partículas es muy intensa.', 'Sólido'],
  ['La fuerza de atracción entre partículas es casi nula.', 'Gaseoso'],
  ['Se puede comprimir fácilmente.', 'Gaseoso'],
  ['Un cubo de hielo.', 'Sólido'],
  ['El aire de un globo.', 'Gaseoso'],
  ['El aceite de cocina.', 'Líquido'],
  ['El vapor que sale de una tetera.', 'Gaseoso'],
  ['Una piedra.', 'Sólido'],
  ['La leche.', 'Líquido'],
  ['El agua a 50 °C.', 'Líquido'],
  ['El agua a −5 °C.', 'Sólido'],
  ['El agua a 110 °C.', 'Gaseoso'],
];
export const preguntasEstados = (n = 10) => desdePistas(PISTAS_ESTADO, ESTADOS, n, (p) => `¿Qué estado es? ${p}`, (p, r) => `Estado ${r.toLowerCase()}.`);

// Nombre del cambio de estado.
const CAMBIOS = ['Fusión', 'Vaporización', 'Sublimación', 'Solidificación', 'Condensación', 'Sublimación inversa'];
const PISTAS_CAMBIO = [
  ['Sólido → líquido', 'Fusión'],
  ['Líquido → gas', 'Vaporización'],
  ['Sólido → gas', 'Sublimación'],
  ['Líquido → sólido', 'Solidificación'],
  ['Gas → líquido', 'Condensación'],
  ['Gas → sólido', 'Sublimación inversa'],
  ['Un helado se derrite al sol.', 'Fusión'],
  ['La ropa mojada se seca colgada.', 'Vaporización'],
  ['El agua hierve en la tetera.', 'Vaporización'],
  ['La naftalina desaparece en el clóset sin mojar.', 'Sublimación'],
  ['El agua se congela en una cubeta.', 'Solidificación'],
  ['El espejo se empaña después de la ducha.', 'Condensación'],
  ['Se forman gotitas en un vaso con bebida helada.', 'Condensación'],
  ['Se forman las nubes en el cielo.', 'Condensación'],
  ['Aparece escarcha en el parabrisas en una mañana helada.', 'Sublimación inversa'],
  ['La lava se enfría y se vuelve roca.', 'Solidificación'],
  ['Una vela se derrite al encenderla.', 'Fusión'],
  ['Los glaciares se derriten por el calentamiento global.', 'Fusión'],
];
export const preguntasCambios = (n = 10) => desdePistas(PISTAS_CAMBIO, CAMBIOS, n, (p) => `¿Qué cambio de estado es? ${p}`, (p, r) => `Es ${r.toLowerCase()}.`);

// ¿Progresivo o regresivo?
const PISTAS_PR = [
  ['Fusión', 'Progresivo'], ['Vaporización', 'Progresivo'], ['Sublimación', 'Progresivo'], ['Evaporación', 'Progresivo'], ['Ebullición', 'Progresivo'],
  ['Solidificación', 'Regresivo'], ['Condensación', 'Regresivo'], ['Sublimación inversa', 'Regresivo'],
  ['Un chocolate que se derrite en la mano.', 'Progresivo'], ['Agua que se congela.', 'Regresivo'], ['La formación de la escarcha.', 'Regresivo'],
  ['El espejo que se empaña.', 'Regresivo'], ['Un charco que se seca al sol.', 'Progresivo'],
];
export function preguntasProgresivo(n = 12) {
  return mezclar(PISTAS_PR).slice(0, n).map(([p, r]) => ({
    q: `${p} ¿Es un cambio progresivo o regresivo?`,
    o: ['Progresivo', 'Regresivo'],
    c: r === 'Progresivo' ? 0 : 1,
    e: r === 'Progresivo' ? 'Progresivo: absorbe calor; las partículas se separan.' : 'Regresivo: libera calor; las partículas se acercan.',
  }));
}

// Capas de la Tierra y de la atmósfera.
const CAPAS = ['Atmósfera', 'Hidrosfera', 'Litósfera', 'Biosfera'];
const PISTAS_CAPA = [
  ['Capa de gases que rodea la Tierra.', 'Atmósfera'],
  ['Toda el agua del planeta en sus tres estados.', 'Hidrosfera'],
  ['La corteza y la parte superior del manto.', 'Litósfera'],
  ['La parte del planeta donde hay vida.', 'Biosfera'],
  ['Los océanos, ríos, lagos y glaciares.', 'Hidrosfera'],
  ['Allí está la capa de ozono.', 'Atmósfera'],
  ['Está dividida en placas tectónicas.', 'Litósfera'],
  ['El suelo es su capa más superficial.', 'Litósfera'],
  ['La contaminan el smog y la lluvia ácida.', 'Atmósfera'],
  ['La contaminan las aguas servidas y los plásticos en el mar.', 'Hidrosfera'],
  ['Allí se extraen el cobre y el carbón.', 'Litósfera'],
  ['78 % nitrógeno y 21 % oxígeno.', 'Atmósfera'],
];
const ATM = ['Tropósfera', 'Estratósfera', 'Mesósfera', 'Termósfera', 'Exósfera'];
const PISTAS_ATM = [
  ['Ocurren la lluvia, las nubes y el viento.', 'Tropósfera'],
  ['Tiene la capa de ozono.', 'Estratósfera'],
  ['Es la capa más fría.', 'Mesósfera'],
  ['Permite el viaje de las ondas de radio.', 'Termósfera'],
  ['Es la capa más externa.', 'Exósfera'],
  ['Es la capa donde vivimos.', 'Tropósfera'],
];
export function preguntasCapas(n = 10) {
  const a = desdePistas(PISTAS_CAPA, CAPAS, 6, (p) => `¿Qué capa de la Tierra es? ${p}`, (p, r) => `Es la ${r.toLowerCase()}.`);
  const b = desdePistas(PISTAS_ATM, ATM, 4, (p) => `¿Qué capa de la atmósfera es? ${p}`, (p, r) => `Es la ${r.toLowerCase()}.`);
  return mezclar([...a, ...b]).slice(0, n);
}

// Tipos de erosión.
const EROSION = ['Eólica', 'Pluvial', 'Fluvial', 'Antrópica'];
const PISTAS_EROSION = [
  ['El viento levanta polvo y desgasta las rocas.', 'Eólica'],
  ['Las gotas de lluvia arrastran partículas del suelo.', 'Pluvial'],
  ['Un río arrastra materiales hacia el mar.', 'Fluvial'],
  ['Se talan bosques para construir.', 'Antrópica'],
  ['Un incendio forestal deja el suelo sin vegetación.', 'Antrópica'],
  ['Demasiados animales pastan en el mismo lugar (sobrepastoreo).', 'Antrópica'],
  ['El río Colorado formó el Gran Cañón.', 'Fluvial'],
  ['El viento formó el Árbol de Piedra en el desierto.', 'Eólica'],
  ['Un aguacero forma surcos en un cerro sin plantas.', 'Pluvial'],
];
export const preguntasErosion = (n = 9) => desdePistas(PISTAS_EROSION, EROSION, n, (p) => `¿Qué tipo de erosión es? ${p}`, (p, r) => `Erosión ${r.toLowerCase()}.`);

// Rol en la cadena alimentaria.
const ROLES = ['Productor', 'Consumidor primario', 'Consumidor secundario', 'Descomponedor'];
const PISTAS_ROL = [
  ['Festuca (pasto)', 'Productor'], ['Algas', 'Productor'], ['Fitoplancton', 'Productor'], ['Árbol', 'Productor'],
  ['Guanaco (come pasto)', 'Consumidor primario'], ['Conejo (come pasto)', 'Consumidor primario'], ['Pudú (come hojas)', 'Consumidor primario'], ['Ratón (come semillas)', 'Consumidor primario'],
  ['Culebra (come ratones)', 'Consumidor secundario'], ['Zorro (come conejos)', 'Consumidor secundario'], ['Merluza (come langostinos)', 'Consumidor secundario'],
  ['Hongos que degradan hojas muertas', 'Descomponedor'], ['Bacterias que degradan restos de animales', 'Descomponedor'],
];
export function preguntasRoles(n = 10) {
  const a = desdePistas(PISTAS_ROL, ROLES, n - 3, (p) => `En la cadena alimentaria, ¿qué es? ${p}`, (p, r) => `${p}: ${r.toLowerCase()}.`);
  const b = [
    { q: '¿Qué necesita una planta para hacer fotosíntesis?', ...alternativas('Luz, agua y CO₂', ['Luz, agua y CO₂', 'Glucosa y oxígeno', 'Tierra y oxígeno', 'Solo agua']), e: 'Y produce glucosa y oxígeno.' },
    { q: '¿Qué produce la fotosíntesis?', ...alternativas('Glucosa y oxígeno', ['Glucosa y oxígeno', 'Agua y CO₂', 'Tierra y luz', 'Nitrógeno']), e: 'La glucosa es el alimento de la planta.' },
    { q: '¿Por dónde entra el CO₂ a la hoja?', ...alternativas('Por los estomas', ['Por los estomas', 'Por las raíces', 'Por las flores', 'Por la clorofila']), e: 'Por los estomas también sale el oxígeno.' },
  ];
  return mezclar([...a, ...b]);
}

// Ordenar una cadena alimentaria (del productor al último consumidor).
export function rondaCadena() {
  const largas = CADENAS.filter((c) => c.length >= 3);
  const c = largas[Math.floor(Math.random() * largas.length)];
  return c.map((o, i) => ({ id: o, txt: o, valor: i, etiqueta: i === 0 ? 'Productor' : `Consumidor ${['', 'primario', 'secundario', 'terciario', 'cuaternario'][i]}` }));
}

// Pares concepto ↔ definición para el memorice.
const CONCEPTOS = [
  ['Materia', 'Tiene masa y volumen'],
  ['Sólido', 'Partículas que solo vibran'],
  ['Gas', 'Partículas muy separadas y libres'],
  ['Fusión', 'Sólido → líquido'],
  ['Condensación', 'Gas → líquido'],
  ['Solidificación', 'Líquido → sólido'],
  ['Sublimación', 'Sólido → gas'],
  ['Punto de ebullición del agua', '100 °C'],
  ['Hidrosfera', 'Toda el agua del planeta'],
  ['Litósfera', 'Corteza + manto superior'],
  ['Tropósfera', 'Donde ocurre el clima'],
  ['Capa de ozono', 'Filtra la radiación UV'],
  ['Erosión eólica', 'Causada por el viento'],
  ['Erosión antrópica', 'Causada por el ser humano'],
  ['Clorofila', 'Pigmento verde que capta luz'],
  ['Estomas', 'Por donde entra el CO₂'],
  ['Productor', 'Fabrica su alimento'],
  ['Descomponedor', 'Recicla restos de seres vivos'],
  ['Herbívoro', 'Consumidor primario'],
  ['Red trófica', 'Varias cadenas que se cruzan'],
];

export function cartasConceptos(pares = 6) {
  return mezclar(mezclar(CONCEPTOS).slice(0, pares).flatMap(([a, b], i) => [
    { id: `c${i}`, par: i, txt: a, tipo: 'op' },
    { id: `d${i}`, par: i, txt: b, tipo: 'res' },
  ]));
}

// Verdadero o falso con las preguntas de las guías.
export function preguntasVF(n = 12) {
  return mezclar(todasLasPreguntas().filter((p) => p.t === 'vf')).slice(0, n).map((p) => ({ q: p.q, o: ['Verdadero', 'Falso'], c: p.c ? 0 : 1, e: p.e }));
}

// tipo: 'rondas' (gen) | 'ordenar' (ronda) | 'memorice'
export const JUEGOS = [
  { id: 'estados', grupo: 'u3', tipo: 'rondas', titulo: '¿Sólido, líquido o gas?', icono: '🧊', desc: 'Reconoce el estado de la materia por sus partículas o por ejemplos.', gen: preguntasEstados, unidad: 'particulas' },
  { id: 'cambios', grupo: 'u3', tipo: 'rondas', titulo: '¿Qué cambio de estado es?', icono: '💧', desc: 'Fusión, vaporización, condensación… ¡nómbralos en situaciones de la vida diaria!', gen: preguntasCambios, unidad: 'cambios' },
  { id: 'progresivo', grupo: 'u3', tipo: 'rondas', titulo: '¿Progresivo o regresivo?', icono: '🔥', desc: '¿El cambio absorbe calor o lo libera? Decide rápido.', gen: preguntasProgresivo, unidad: 'cambios' },
  { id: 'capas', grupo: 'u4', tipo: 'rondas', titulo: 'Capas de la Tierra', icono: '🌍', desc: 'Atmósfera, hidrosfera, litósfera, biosfera y las capas de la atmósfera.', gen: preguntasCapas, unidad: 'capas' },
  { id: 'erosion', grupo: 'u4', tipo: 'rondas', titulo: 'Detective de la erosión', icono: '🪨', desc: '¿Eólica, pluvial, fluvial o antrópica? Descubre al responsable.', gen: preguntasErosion, unidad: 'suelo' },
  { id: 'cadena', grupo: 'u4', tipo: 'ordenar', titulo: 'Arma la cadena alimentaria', icono: '🦊', desc: 'Ordena los seres vivos desde el productor hasta el último consumidor.', ronda: rondaCadena, pista: 'Del productor al último consumidor', rondas: 5, unidad: 'redes' },
  { id: 'roles', grupo: 'u4', tipo: 'rondas', titulo: 'Productores y consumidores', icono: '🌱', desc: '¿Productor, herbívoro, carnívoro o descomponedor? Y preguntas de fotosíntesis.', gen: preguntasRoles, unidad: 'fotosintesis' },
  { id: 'conceptos', grupo: 'mix', tipo: 'memorice', titulo: 'Memorice de conceptos', icono: '🃏', desc: 'Une cada concepto con su definición en la menor cantidad de jugadas.' },
  { id: 'vf', grupo: 'mix', tipo: 'rondas', titulo: 'Verdadero o falso', icono: '⚡', desc: 'Afirmaciones de toda la prueba: decide si son verdaderas o falsas.', gen: preguntasVF },
];

export const juegoPorId = (id) => JUEGOS.find((j) => j.id === id);
