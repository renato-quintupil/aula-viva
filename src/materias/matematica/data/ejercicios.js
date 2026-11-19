// Guías de práctica por unidad. Tipos de pregunta:
//   mc  → alternativas (o: opciones, c: índice correcto)
//   vf  → verdadero o falso (c: true/false)
//   num → respuesta numérica (r: número, u: unidad opcional)
// Campos opcionales: tabla { cab, filas }, grafico { titulo, ejeY, categorias, series }, caja { l, a, h, u }.

import { LESIONES } from './teoria';

const QUIOSCO = {
  titulo: 'Ventas del quiosco',
  ejeY: 'Unidades',
  categorias: ['Diarios', 'Revistas', 'Libros', 'Artículos'],
  series: [
    { nombre: 'Octubre', valores: [120, 60, 30, 80] },
    { nombre: 'Noviembre', valores: [100, 90, 40, 100] },
  ],
};

const TALLERES = {
  titulo: 'Elección de talleres por nivel',
  ejeY: 'N° de estudiantes',
  categorias: ['Karate', 'Serigrafía', 'Poesía', 'Atletismo', 'Dibujo'],
  series: [
    { nombre: '6° básicos', valores: [12, 6, 5, 18, 9] },
    { nombre: '7° básicos', valores: [8, 10, 5, 14, 13] },
  ],
};

const TABLA_LESIONES = {
  cab: ['Lugar', 'Antes', 'Después'],
  filas: LESIONES.categorias.map((c, i) => [c, LESIONES.series[0].valores[i], LESIONES.series[1].valores[i]]),
};

const TABLA_AJEDREZ = {
  titulo: 'Puntajes del torneo de ajedrez · Colegio A',
  cab: ['Puntaje', '0', '1', '2', '3', '4', '5', '6', '7'],
  filas: [['N° de estudiantes', 1, 2, 2, 4, 5, 3, 2, 1]],
};

export const GUIAS = [
  // ───────── Razones y porcentajes ─────────
  {
    id: 'r1',
    unidad: 'razones',
    titulo: 'Razones y medida unitaria',
    nivel: 'Básico',
    preguntas: [
      { id: 'r1-1', t: 'num', q: 'En una fiesta hay 75 niños y 15 son de 6° básico. ¿Cuál es la razón entre los niños de 6° básico y el total de niños? Escríbela como número decimal.', r: 0.2, e: '15 : 75 = 0,2. La cantidad referente es el total (75).' },
      { id: 'r1-2', t: 'mc', q: 'En el arenero A juegan 10 niños en 8 m². En el arenero B juegan 13 niños en 10 m². ¿Dónde hay más aglomeración?', o: ['Arenero A', 'Arenero B', 'Hay la misma aglomeración', 'No se puede comparar'], c: 1, e: 'Niños por m²: A → 10 : 8 = 1,25; B → 13 : 10 = 1,3. Como 1,3 > 1,25, hay más aglomeración en B.' },
      { id: 'r1-3', t: 'num', q: 'Una oferta trae 12 lápices por $6 000. ¿Cuánto cuesta cada lápiz?', r: 500, u: 'pesos', e: 'Precio de 1 lápiz: 6 000 : 12 = 500.' },
      { id: 'r1-4', t: 'mc', q: 'Oferta 1: 12 lápices por $6 000. Oferta 2: 8 lápices por $4 400. ¿En cuál es más barato cada lápiz?', o: ['En la oferta 1', 'En la oferta 2', 'Cuestan lo mismo', 'Faltan datos'], c: 0, e: 'Oferta 1: 6 000 : 12 = $500. Oferta 2: 4 400 : 8 = $550. Es más barato en la oferta 1.' },
      { id: 'r1-5', t: 'num', q: 'En 6° A hay 16 estudiantes y en 6° B hay 20. ¿Cuál es la razón entre 6° A y 6° B, tomando 6° B como referente?', r: 0.8, e: '16 : 20 = 0,8.' },
      { id: 'r1-6', t: 'num', q: 'Con los mismos cursos (6° A: 16, 6° B: 20), ¿cuál es la razón entre 6° B y 6° A, tomando 6° A como referente?', r: 1.25, e: '20 : 16 = 1,25. Al cambiar la cantidad referente, cambia la razón. Puede ser mayor que 1.' },
      { id: 'r1-7', t: 'mc', q: '¿Cuál de estas razones es equivalente a 3 : 1?', o: ['6 : 3', '1 : 3', '9 : 3', '13 : 10'], c: 2, e: '9 : 3 = (3 • 3) : (1 • 3). El valor de ambas razones es 3.' },
      { id: 'r1-8', t: 'mc', q: 'Loreto hizo 7 goles en 28 partidos. ¿Cuál es la forma más simple de esta razón?', o: ['1 : 4', '1 : 7', '4 : 1', '7 : 4'], c: 0, e: 'Dividimos ambos términos por 7: 7 : 28 = 1 : 4 (1 gol cada 4 partidos).' },
      { id: 'r1-9', t: 'num', q: 'Una impresora imprime 350 hojas en 5 minutos. ¿Cuántas hojas imprime en 8 minutos?', r: 560, u: 'hojas', e: 'En 1 minuto: 350 : 5 = 70 hojas. En 8 minutos: 70 • 8 = 560.' },
      { id: 'r1-10', t: 'num', q: 'Una ciudad tiene 22 100 habitantes y un área de 17 km². ¿Cuál es su densidad de población (habitantes por km²)?', r: 1300, u: 'hab/km²', e: 'Densidad = población : área = 22 100 : 17 = 1 300.' },
      { id: 'r1-11', t: 'vf', q: 'La razón 20 : 16 es mayor que 1.', c: true, e: '20 : 16 = 1,25, que es mayor que 1. Ocurre cuando la cantidad comparada es mayor que la referente.' },
      { id: 'r1-12', t: 'num', q: 'En una caja la razón entre bolas blancas y rojas es 3 : 4. Si hay 21 bolas blancas, ¿cuántas bolas rojas hay?', r: 28, u: 'bolas', e: '3 partes son 21 → 1 parte = 7. Las rojas son 4 partes: 4 • 7 = 28.' },
      { id: 'r1-13', t: 'num', q: 'En una bolsa la razón entre caramelos de fruta y de menta es 2 : 3. Si hay 20 de fruta, ¿cuántos caramelos hay en total?', r: 50, u: 'caramelos', e: '2 partes = 20 → 1 parte = 10. Menta: 3 • 10 = 30. Total: 20 + 30 = 50.' },
    ],
  },
  {
    id: 'r2',
    unidad: 'razones',
    titulo: 'Porcentajes',
    nivel: 'Intermedio',
    preguntas: [
      { id: 'r2-1', t: 'mc', q: '¿Qué porcentaje representa la razón 1 : 4?', o: ['14 %', '25 %', '40 %', '75 %'], c: 1, e: '1 : 4 = 0,25 → 0,25 • 100 = 25 %.' },
      { id: 'r2-2', t: 'num', q: 'Un bus tiene 50 asientos y van 40 pasajeros. ¿Cuál es el porcentaje de aglomeración?', r: 80, u: '%', e: '(40 : 50) • 100 = 0,8 • 100 = 80 %.' },
      { id: 'r2-3', t: 'num', q: 'Calcula el 10 % de 920.', r: 92, e: '10 % = la décima parte: 920 : 10 = 92.' },
      { id: 'r2-4', t: 'num', q: 'Calcula el 25 % de 400.', r: 100, e: '25 % = la cuarta parte: 400 : 4 = 100.' },
      { id: 'r2-5', t: 'num', q: 'Calcula el 75 % de 84.', r: 63, e: '25 % de 84 = 21. 75 % = 3 • 21 = 63.' },
      { id: 'r2-6', t: 'num', q: 'Calcula el 30 % de 60.', r: 18, e: '10 % de 60 = 6. 30 % = 3 • 6 = 18.' },
      { id: 'r2-7', t: 'mc', q: '¿Qué fracción corresponde al 20 %?', o: ['1/2', '1/4', '1/5', '1/20'], c: 2, e: '20 % = 20/100 = 1/5 (100 : 20 = 5).' },
      { id: 'r2-8', t: 'num', q: 'Un carro de tren tiene capacidad para 120 pasajeros y van 144. ¿Cuál es su porcentaje de aglomeración?', r: 120, u: '%', e: '(144 : 120) • 100 = 1,2 • 100 = 120 %. Supera el 100 % porque hay más pasajeros que la capacidad.' },
      { id: 'r2-9', t: 'num', q: 'De 300 huevos, el 4 % está quebrado. ¿Cuántos huevos NO están quebrados?', r: 288, u: 'huevos', e: '1 % de 300 = 3 → 4 % = 12 quebrados. No quebrados: 300 − 12 = 288.' },
      { id: 'r2-10', t: 'mc', q: 'Un libro vale $14 000. En la librería A le descuentan $1 700 y en la B un 12 %. ¿Dónde es más barato?', o: ['En la librería A', 'En la librería B', 'Cuesta lo mismo', 'Faltan datos'], c: 0, e: '12 % de 14 000 = 1 680. A: 14 000 − 1 700 = $12 300; B: 14 000 − 1 680 = $12 320. Es más barato en A.' },
      { id: 'r2-11', t: 'num', q: 'A un concierto asistieron 180 personas, que corresponden al 20 % de la capacidad del recinto. ¿Cuál es la capacidad?', r: 900, u: 'personas', e: '20 % es la quinta parte → el total es 5 • 180 = 900.' },
      { id: 'r2-12', t: 'mc', q: 'Una barra está dividida en 8 partes iguales y hay 2 pintadas. ¿Qué porcentaje está pintado?', o: ['2 %', '20 %', '25 %', '80 %'], c: 2, e: '2/8 = 1/4 = 25 %.' },
      { id: 'r2-13', t: 'vf', q: 'Raúl dice que el 49 % de 3 400 es 1 700.', c: false, e: '1 700 es la mitad de 3 400, es decir, el 50 %. El 49 % tiene que ser un poco menos (1 666).' },
      { id: 'r2-14', t: 'num', q: 'Florencia tiene 240 láminas. Regala el 50 % y vende el 10 % del total inicial. ¿Con cuántas láminas se queda?', r: 96, u: 'láminas', e: '50 % de 240 = 120; 10 % de 240 = 24. Le quedan 240 − 120 − 24 = 96.' },
      { id: 'r2-15', t: 'num', q: 'De 500 mujeres encuestadas, 400 dicen que les gusta el fútbol. ¿Qué porcentaje es?', r: 80, u: '%', e: '(400 : 500) • 100 = 80 %.' },
    ],
  },

  // ───────── Patrones y álgebra ─────────
  {
    id: 'a1',
    unidad: 'algebra',
    titulo: 'Lenguaje algebraico y valorización',
    nivel: 'Básico',
    preguntas: [
      { id: 'a1-1', t: 'mc', q: '¿Qué expresión representa “el triple de un número disminuido en 4”?', o: ['3 + x − 4', '3 • x − 4', '3 • (x + 4)', 'x − 3 • 4'], c: 1, e: 'El triple de un número: 3 • x. Disminuido en 4: − 4.' },
      { id: 'a1-2', t: 'mc', q: 'Un lápiz cuesta $x y una goma $600. ¿Qué expresión representa el precio de 5 lápices y una goma?', o: ['5 + x + 600', '5 • x + 600', '5 • 600 + x', '(x + 600) • 5'], c: 1, e: '5 lápices: 5 • x. Más una goma: + 600.' },
      { id: 'a1-3', t: 'mc', q: 'Las zanahorias cuestan $x cada una y los pimentones $250. ¿Qué representa 4 • x + 250?', o: ['4 zanahorias y 4 pimentones', '4 zanahorias y 1 pimentón', '1 zanahoria y 4 pimentones', '4 pimentones y 1 zanahoria'], c: 1, e: '4 • x son 4 zanahorias y 250 es el precio de 1 pimentón.' },
      { id: 'a1-4', t: 'num', q: 'Valoriza 5 • x + 4 cuando x = 8.', r: 44, e: '5 • 8 + 4 = 40 + 4 = 44.' },
      { id: 'a1-5', t: 'num', q: 'Valoriza 3 • x − 7 cuando x = 12.', r: 29, e: '3 • 12 − 7 = 36 − 7 = 29.' },
      { id: 'a1-6', t: 'num', q: 'Valoriza 2 • x + 3 • x cuando x = 1,5.', r: 7.5, e: '2 • 1,5 + 3 • 1,5 = 3 + 4,5 = 7,5.' },
      { id: 'a1-7', t: 'mc', q: 'Patrón de palos de helado: figura 1 → 4 palos, figura 2 → 7 palos, figura 3 → 10 palos. ¿Qué expresión da los palos de la figura n?', o: ['4 • n', '3 • n', '1 + 3 • n', 'n + 3'], c: 2, e: 'Aumenta de 3 en 3 y parte con 1 palo extra: 1 + 3 • n. Prueba: n = 3 → 1 + 9 = 10 ✔.' },
      { id: 'a1-8', t: 'num', q: 'Usando la expresión 1 + 3 • n, ¿cuántos palos de helado tiene la figura 50?', r: 151, u: 'palos', e: '1 + 3 • 50 = 1 + 150 = 151.' },
      { id: 'a1-9', t: 'mc', q: '¿Qué expresión representa el perímetro de un triángulo equilátero de lado x cm?', o: ['x + 3', '3 • x', 'x • x', 'x : 3'], c: 1, e: 'Tiene 3 lados iguales: x + x + x = 3 • x.' },
      { id: 'a1-10', t: 'num', q: 'Natalia ahorra según la expresión 5 000 + 2 000 • x, donde x es el número de meses. ¿Cuánto tiene a los 8 meses?', r: 21000, u: 'pesos', e: '5 000 + 2 000 • 8 = 5 000 + 16 000 = 21 000.' },
      { id: 'a1-11', t: 'mc', q: '“La mitad de un número, aumentada en 6” se escribe:', o: ['x : 2 + 6', '2 • x + 6', '(x + 6) : 2', '6 : 2 + x'], c: 0, e: 'La mitad de un número: x : 2. Aumentada en 6: + 6.' },
      { id: 'a1-12', t: 'mc', q: 'En una tabla, la figura 1 tiene 3 cuadrados, la 2 tiene 5, la 3 tiene 7 y la 4 tiene 9. ¿Qué expresión representa la figura n?', o: ['n + 2', '2 • n + 1', '3 • n', '2 • n + 3'], c: 1, e: 'Aumenta de 2 en 2: 2 • n + 1. Comprueba: n = 4 → 8 + 1 = 9 ✔.' },
      { id: 'a1-13', t: 'num', q: 'Se corta una cinta en p puntos y quedan p + 1 trozos. ¿Cuántos trozos quedan si se corta en 60 puntos?', r: 61, u: 'trozos', e: 'p + 1 = 60 + 1 = 61.' },
    ],
  },
  {
    id: 'a2',
    unidad: 'algebra',
    titulo: 'Ecuaciones y problemas',
    nivel: 'Intermedio',
    preguntas: [
      { id: 'a2-1', t: 'num', q: 'Resuelve: x + 45 = 70', r: 25, e: 'x = 70 − 45 = 25.' },
      { id: 'a2-2', t: 'num', q: 'Resuelve: x − 5 = 28', r: 33, e: 'x = 28 + 5 = 33.' },
      { id: 'a2-3', t: 'num', q: 'Resuelve: 6 • x = 96', r: 16, e: 'x = 96 : 6 = 16.' },
      { id: 'a2-4', t: 'num', q: 'Resuelve: 3 • x + 2 = 20', r: 6, e: '3 • x = 20 − 2 = 18 → x = 18 : 3 = 6.' },
      { id: 'a2-5', t: 'num', q: 'Resuelve: 5 • x − 8 = 92', r: 20, e: '5 • x = 92 + 8 = 100 → x = 100 : 5 = 20.' },
      { id: 'a2-6', t: 'num', q: 'Resuelve: 20 + 8 • x = 52', r: 4, e: '8 • x = 52 − 20 = 32 → x = 32 : 8 = 4.' },
      { id: 'a2-7', t: 'num', q: 'Resuelve: 4 • x − 12 = 26', r: 9.5, e: '4 • x = 26 + 12 = 38 → x = 38 : 4 = 9,5.' },
      { id: 'a2-8', t: 'mc', q: '¿En cuál ecuación x = 2 es la solución?', o: ['x + 12 = 15', '4 • x − 1 = 7', '3 • x = 5', 'x − 2 = 2'], c: 1, e: 'Reemplazamos x = 2: 4 • 2 − 1 = 8 − 1 = 7 ✔.' },
      { id: 'a2-9', t: 'vf', q: 'x = 8 es la solución de 4 • x − 5 = 26.', c: false, e: '4 • 8 − 5 = 32 − 5 = 27, no 26. No es solución.' },
      { id: 'a2-10', t: 'mc', q: 'Natalia compró 6 macarrones iguales, pagó con $10 000 y recibió $1 600 de vuelto. ¿Qué ecuación sirve para encontrar el precio x de cada macarrón?', o: ['6 • x = 10 000 + 1 600', '6 • x + 1 600 = 10 000', 'x + 6 = 8 400', '6 + x + 1 600 = 10 000'], c: 1, e: 'Lo gastado (6 • x) más el vuelto (1 600) es igual a lo que pagó (10 000).' },
      { id: 'a2-11', t: 'num', q: 'Resuelve el problema anterior: ¿cuánto cuesta cada macarrón?', r: 1400, u: 'pesos', e: '6 • x = 10 000 − 1 600 = 8 400 → x = 8 400 : 6 = 1 400.' },
      { id: 'a2-12', t: 'num', q: 'Si al triple de un número le restamos 10, se obtiene 71. ¿Cuál es el número?', r: 27, e: '3 • x − 10 = 71 → 3 • x = 81 → x = 27.' },
      { id: 'a2-13', t: 'num', q: 'Juan tenía $23 000. Compró 3 entradas al cine iguales y le quedaron $5 000. ¿Cuánto costó cada entrada?', r: 6000, u: 'pesos', e: '3 • x + 5 000 = 23 000 → 3 • x = 18 000 → x = 6 000.' },
      { id: 'a2-14', t: 'mc', q: 'Pablo resolvió: 4 • x − 12 = 28 → x − 12 = 7 → x = 19. ¿Cuál fue su error?', o: ['Debió sumar 12 primero: 4 • x = 40, x = 10', 'Debió restar 12: 4 • x = 16, x = 4', 'No hay error', 'Debió multiplicar 28 por 4'], c: 0, e: 'Primero se deshace la resta (sumando 12) y después la multiplicación: 4 • x = 40 → x = 10.' },
      { id: 'a2-15', t: 'num', q: 'Cuatro envases iguales y una botella de 3 L juntan 19 L en total. ¿Cuál es la capacidad de cada envase?', r: 4, u: 'L', e: '4 • x + 3 = 19 → 4 • x = 16 → x = 4.' },
      { id: 'a2-16', t: 'num', q: 'En un casino compraron 5 bandejas de huevos, 8 venían quebrados y con el resto hicieron 92 raciones de un huevo. ¿Cuántos huevos trae cada bandeja?', r: 20, u: 'huevos', e: '5 • x − 8 = 92 → 5 • x = 100 → x = 20.' },
    ],
  },

  // ───────── Decimales ─────────
  {
    id: 'd1',
    unidad: 'decimales',
    titulo: 'Por un natural y por 10, 100, 1 000',
    nivel: 'Básico',
    preguntas: [
      { id: 'd1-1', t: 'num', q: 'Calcula: 7,6 • 4', r: 30.4, e: '76 • 4 = 304 → 1 cifra decimal → 30,4.' },
      { id: 'd1-2', t: 'num', q: 'Calcula: 2,35 • 3', r: 7.05, e: '235 • 3 = 705 → 2 cifras decimales → 7,05.' },
      { id: 'd1-3', t: 'num', q: 'Hay 6 recipientes con 0,75 L de agua cada uno. ¿Cuántos litros hay en total?', r: 4.5, u: 'L', e: '0,75 • 6 = 4,50 = 4,5 L.' },
      { id: 'd1-4', t: 'num', q: 'Calcula: 5,7 : 3', r: 1.9, e: '57 décimos : 3 = 19 décimos = 1,9.' },
      { id: 'd1-5', t: 'num', q: 'Calcula: 4,5 : 9', r: 0.5, e: 'Como 4 < 9, se escribe 0 en las unidades. 45 décimos : 9 = 5 décimos = 0,5.' },
      { id: 'd1-6', t: 'num', q: 'Calcula: 7,3 : 5', r: 1.46, e: 'Agregamos un cero: 7,30 : 5 = 1,46.' },
      { id: 'd1-7', t: 'num', q: 'Calcula: 3,45 • 100', r: 345, e: '100 tiene 2 ceros → la coma se corre 2 lugares a la derecha.' },
      { id: 'd1-8', t: 'num', q: 'Calcula: 2,7 • 1 000', r: 2700, e: 'La coma se corre 3 lugares a la derecha y se completa con ceros: 2 700.' },
      { id: 'd1-9', t: 'num', q: 'Calcula: 45,6 : 10', r: 4.56, e: 'La coma se corre 1 lugar a la izquierda.' },
      { id: 'd1-10', t: 'num', q: 'Calcula: 3,2 : 100', r: 0.032, e: 'La coma se corre 2 lugares a la izquierda y se completa con ceros: 0,032.' },
      { id: 'd1-11', t: 'mc', q: '¿Cuál es el resultado de 0,08 • 1 000?', o: ['0,8', '8', '80', '800'], c: 2, e: 'La coma avanza 3 lugares: 0,080 → 80.' },
      { id: 'd1-12', t: 'mc', q: 'Ema tiene 13,5 m de cinta y cada adorno usa 2 m. ¿Cuántos adornos puede hacer y cuánto sobra?', o: ['6 adornos y sobran 1,5 m', '6 adornos y sobran 15 m', '6,75 adornos', '7 adornos y sobran 0,5 m'], c: 0, e: '13,5 : 2 = 6 y resto 1,5 (la coma del resto va en la misma posición que en el dividendo). Comprobación: 6 • 2 + 1,5 = 13,5.' },
      { id: 'd1-13', t: 'num', q: 'Una barra de 1 m tiene una masa de 1,75 kg. ¿Cuántos kilogramos tiene una barra de 4 m?', r: 7, u: 'kg', e: '1,75 • 4 = 7,00 = 7 kg.' },
      { id: 'd1-14', t: 'num', q: 'Se reparten 2,5 L de jugo entre 6 personas. Calcula hasta las centésimas y redondea a la décima más cercana.', r: 0.4, u: 'L', e: '2,5 : 6 = 0,41… → redondeado a la décima: 0,4 L.' },
    ],
  },
  {
    id: 'd2',
    unidad: 'decimales',
    titulo: 'Entre decimales y problemas',
    nivel: 'Avanzado',
    preguntas: [
      { id: 'd2-1', t: 'num', q: 'Calcula: 5,26 • 4,8', r: 25.248, e: '526 • 48 = 25 248 → 2 + 1 = 3 cifras decimales → 25,248.' },
      { id: 'd2-2', t: 'num', q: 'Calcula: 4,2 • 0,7', r: 2.94, e: '42 • 7 = 294 → 2 cifras decimales → 2,94.' },
      { id: 'd2-3', t: 'num', q: 'Calcula: 0,07 • 0,2', r: 0.014, e: '7 • 2 = 14 → 3 cifras decimales → 0,014 (se completa con ceros).' },
      { id: 'd2-4', t: 'num', q: 'Calcula: 9,68 : 0,8', r: 12.1, e: 'Multiplicamos ambos por 10: 96,8 : 8 = 12,1.' },
      { id: 'd2-5', t: 'num', q: 'Calcula: 2,7 : 0,3', r: 9, e: '• 10 → 27 : 3 = 9.' },
      { id: 'd2-6', t: 'num', q: 'Calcula: 12 : 0,5', r: 24, e: '• 10 → 120 : 5 = 24. Dividir por 0,5 es como multiplicar por 2.' },
      { id: 'd2-7', t: 'num', q: 'Calcula: 0,45 : 0,5', r: 0.9, e: '• 10 → 4,5 : 5 = 0,9.' },
      { id: 'd2-8', t: 'mc', q: 'Sin calcular: ¿cuál de estos productos es menor que 25?', o: ['25 • 1,2', '25 • 0,8', '25 • 1', '25 • 3,5'], c: 1, e: 'Si un factor es menor que 1 (0,8), el producto es menor que el otro factor.' },
      { id: 'd2-9', t: 'mc', q: 'Sin calcular: el resultado de 9,6 : 0,4 es…', o: ['menor que 9,6', 'igual a 9,6', 'mayor que 9,6', 'igual a 0'], c: 2, e: 'Al dividir por un número menor que 1, el cociente es mayor que el dividendo (9,6 : 0,4 = 24).' },
      { id: 'd2-10', t: 'num', q: 'Un metro de cinta cuesta $80. ¿Cuánto cuestan 2,4 m?', r: 192, u: 'pesos', e: '2,4 • 80 = 192.' },
      { id: 'd2-11', t: 'num', q: 'Un jardín rectangular tiene 30 m² de área y 2,5 m de ancho. ¿Cuál es su largo?', r: 12, u: 'm', e: 'Largo = 30 : 2,5 = 300 : 25 = 12.' },
      { id: 'd2-12', t: 'mc', q: 'Se reparten 3 L de leche en tazas de 0,4 L. ¿Cuántas tazas se llenan y cuánta leche sobra?', o: ['7 tazas y sobran 0,2 L', '7 tazas y sobran 2 L', '7,5 tazas', '8 tazas y sobran 0,2 L'], c: 0, e: '3 : 0,4 → 30 : 4 = 7 y resto 2 → el resto en litros es 0,2. Comprobación: 7 • 0,4 + 0,2 = 3.' },
      { id: 'd2-13', t: 'num', q: 'Usé 2 L de agua para regar 0,4 m². ¿Cuántos litros uso para regar 1 m²?', r: 5, u: 'L', e: 'Buscamos el valor de 1 → dividimos: 2 : 0,4 = 20 : 4 = 5.' },
      { id: 'd2-14', t: 'num', q: 'Riego 1 m² con 2,4 L. ¿Cuántos litros necesito para 1,5 m²?', r: 3.6, u: 'L', e: 'Conozco el valor de 1 → multiplico: 2,4 • 1,5 = 3,6.' },
      { id: 'd2-15', t: 'num', q: '0,8 m de un cable tiene una masa de 9,6 g. ¿Cuál es la masa de 1 m de cable?', r: 12, u: 'g', e: '9,6 : 0,8 = 96 : 8 = 12.' },
    ],
  },

  // ───────── Área y volumen ─────────
  {
    id: 'v1',
    unidad: 'area',
    titulo: 'Área de figuras y cuerpos',
    nivel: 'Básico',
    preguntas: [
      { id: 'v1-1', t: 'num', q: 'Calcula el área de un rectángulo de 8 cm de largo y 3,2 cm de ancho.', r: 25.6, u: 'cm²', e: '8 • 3,2 = 25,6 cm².' },
      { id: 'v1-2', t: 'num', q: 'Calcula el área de un cuadrado de 7 cm de lado.', r: 49, u: 'cm²', e: '7 • 7 = 49 cm².' },
      { id: 'v1-3', t: 'num', q: 'Un rectángulo tiene 54 cm² de área y 9 cm de largo. ¿Cuánto mide su ancho?', r: 6, u: 'cm', e: 'Ancho = 54 : 9 = 6 cm.' },
      { id: 'v1-4', t: 'num', q: 'Calcula el área total de este paralelepípedo.', caja: { l: 6, a: 5, h: 2, u: 'cm' }, r: 104, u: 'cm²', e: '2 • (6 • 5 + 6 • 2 + 5 • 2) = 2 • (30 + 12 + 10) = 2 • 52 = 104 cm².' },
      { id: 'v1-5', t: 'num', q: 'Calcula el área de un cubo de 4 cm de arista.', caja: { l: 4, a: 4, h: 4, u: 'cm' }, r: 96, u: 'cm²', e: '6 • 4 • 4 = 6 • 16 = 96 cm².' },
      { id: 'v1-6', t: 'num', q: 'Calcula el área de un cubo de 15 cm de arista.', r: 1350, u: 'cm²', e: '6 • 15 • 15 = 6 • 225 = 1 350 cm².' },
      { id: 'v1-7', t: 'num', q: 'El área de un cubo es 384 cm². ¿Cuánto mide su arista?', r: 8, u: 'cm', e: 'Una cara: 384 : 6 = 64 cm². Como 8 • 8 = 64, la arista mide 8 cm.' },
      { id: 'v1-8', t: 'num', q: '¿Cuánto papel se necesita como mínimo para forrar una caja de 8 cm de largo, 6 cm de ancho y 5 cm de alto?', caja: { l: 8, a: 6, h: 5, u: 'cm' }, r: 236, u: 'cm²', e: '2 • (8 • 6 + 8 • 5 + 6 • 5) = 2 • (48 + 40 + 30) = 236 cm².' },
      { id: 'v1-9', t: 'mc', q: '¿Cuántas caras tiene un paralelepípedo y cómo son?', o: ['4 caras, todas cuadradas', '6 caras: 3 pares de caras iguales', '8 caras rectangulares', '6 caras, todas distintas'], c: 1, e: 'Tiene 6 caras (rectángulos o cuadrados) y las caras opuestas son iguales.' },
      { id: 'v1-10', t: 'num', q: 'Una cara de un cubo tiene 54 cm² de área. ¿Cuál es el área total del cubo?', r: 324, u: 'cm²', e: 'El cubo tiene 6 caras iguales: 6 • 54 = 324 cm².' },
      { id: 'v1-11', t: 'mc', q: '¿Qué fórmula da el área de un cubo de arista a?', o: ['a • a • a', '6 • a • a', '4 • a', '12 • a'], c: 1, e: '6 caras cuadradas de área a • a. (a • a • a es el volumen).' },
      { id: 'v1-12', t: 'num', q: 'El área de un paralelepípedo es 126 cm². Su largo mide 6 cm y su ancho 5 cm. ¿Cuál es su altura?', r: 3, u: 'cm', e: '2 • (30 + 6 • h + 5 • h) = 126 → 30 + 11 • h = 63 → 11 • h = 33 → h = 3 cm.' },
      { id: 'v1-13', t: 'num', q: '¿Qué cantidad mínima de cartón se necesita para una caja cúbica de 0,8 m de lado? (en m²)', r: 3.84, u: 'm²', e: '6 • 0,8 • 0,8 = 6 • 0,64 = 3,84 m².' },
    ],
  },
  {
    id: 'v2',
    unidad: 'area',
    titulo: 'Volumen',
    nivel: 'Intermedio',
    preguntas: [
      { id: 'v2-1', t: 'num', q: 'Calcula el volumen de este paralelepípedo.', caja: { l: 3, a: 2, h: 4, u: 'cm' }, r: 24, u: 'cm³', e: '3 • 2 • 4 = 24 cm³.' },
      { id: 'v2-2', t: 'num', q: 'Calcula el volumen de un cubo de 5 cm de arista.', caja: { l: 5, a: 5, h: 5, u: 'cm' }, r: 125, u: 'cm³', e: '5 • 5 • 5 = 125 cm³.' },
      { id: 'v2-3', t: 'num', q: 'Calcula el volumen de un paralelepípedo de 9 cm de largo, 5 cm de ancho y 2 cm de alto.', r: 90, u: 'cm³', e: '9 • 5 • 2 = 90 cm³.' },
      { id: 'v2-4', t: 'num', q: 'Un estanque mide 3 m de largo, 2 m de ancho y 50 cm de alto. ¿Cuál es su volumen en m³?', r: 3, u: 'm³', e: '50 cm = 0,5 m → 3 • 2 • 0,5 = 3 m³.' },
      { id: 'v2-5', t: 'mc', q: '1 m³ equivale a:', o: ['100 cm³', '1 000 cm³', '100 000 cm³', '1 000 000 cm³'], c: 3, e: '100 cm • 100 cm • 100 cm = 1 000 000 cm³.' },
      { id: 'v2-6', t: 'num', q: '¿Cuántos litros caben en 1 m³?', r: 1000, u: 'L', e: '1 m³ = 1 000 L.' },
      { id: 'v2-7', t: 'num', q: 'Una pecera mide 40 cm × 25 cm × 30 cm. ¿Cuántos litros de agua caben?', caja: { l: 40, a: 25, h: 30, u: 'cm' }, r: 30, u: 'L', e: '40 • 25 • 30 = 30 000 cm³ = 30 L (1 L = 1 000 cm³).' },
      { id: 'v2-8', t: 'num', q: 'Un paralelepípedo tiene 120 cm³ de volumen, 6 cm de largo y 5 cm de ancho. ¿Cuánto mide su altura?', r: 4, u: 'cm', e: 'Altura = 120 : (6 • 5) = 120 : 30 = 4 cm.' },
      { id: 'v2-9', t: 'mc', q: 'Si se duplica la arista de un cubo, su volumen…', o: ['se duplica', 'se triplica', 'queda 4 veces mayor', 'queda 8 veces mayor'], c: 3, e: 'Arista 1 → 1 cm³; arista 2 → 2 • 2 • 2 = 8 cm³. Queda 8 veces mayor.' },
      { id: 'v2-10', t: 'num', q: '¿A cuántos cm³ equivalen 800 mL?', r: 800, u: 'cm³', e: '1 mL = 1 cm³ → 800 mL = 800 cm³.' },
      { id: 'v2-11', t: 'num', q: 'Un cuerpo se forma uniendo un cubo de 3 cm de arista con un paralelepípedo de 5 cm × 3 cm × 2 cm. ¿Cuál es su volumen total?', r: 57, u: 'cm³', e: 'Cubo: 3 • 3 • 3 = 27. Paralelepípedo: 5 • 3 • 2 = 30. Total: 27 + 30 = 57 cm³.' },
      { id: 'v2-12', t: 'vf', q: 'En un cubo de 1 m de arista caben 1 000 litros de agua.', c: true, e: 'Su volumen es 1 m³ = 1 000 L.' },
      { id: 'v2-13', t: 'mc', q: 'Para saber cuánta arena cabe en un cajón, ¿qué debes calcular?', o: ['El perímetro', 'El área', 'El volumen', 'La razón'], c: 2, e: '“Cuánto cabe” o “llenar” se calcula con el volumen.' },
      { id: 'v2-14', t: 'num', q: 'Expresa 3 000 L en m³.', r: 3, u: 'm³', e: '1 m³ = 1 000 L → 3 000 : 1 000 = 3 m³.' },
    ],
  },

  // ───────── Datos ─────────
  {
    id: 't1',
    unidad: 'datos',
    titulo: 'Tablas de datos',
    nivel: 'Básico',
    preguntas: [
      { id: 't1-1', t: 'num', tabla: TABLA_LESIONES, q: '¿Cuántas lesiones hubo en total ANTES de la campaña?', r: 34, u: 'lesiones', e: '13 + 4 + 2 + 10 + 5 = 34.' },
      { id: 't1-2', t: 'num', tabla: TABLA_LESIONES, q: '¿Cuántas lesiones hubo en total DESPUÉS de la campaña?', r: 25, u: 'lesiones', e: '6 + 4 + 3 + 11 + 1 = 25.' },
      { id: 't1-3', t: 'mc', tabla: TABLA_LESIONES, q: '¿En qué lugares aumentaron las lesiones después de la campaña?', o: ['Patio y pasillo', 'Salas y gimnasio', 'Escaleras', 'En ninguno'], c: 1, e: 'Salas: 2 → 3. Gimnasio: 10 → 11.' },
      { id: 't1-4', t: 'num', tabla: TABLA_LESIONES, q: '¿Cuántas lesiones menos hubo en el patio después de la campaña?', r: 7, u: 'lesiones', e: '13 − 6 = 7.' },
      { id: 't1-5', t: 'mc', tabla: TABLA_LESIONES, q: '¿En qué lugar la cantidad de lesiones se mantuvo igual?', o: ['Patio', 'Pasillo', 'Salas', 'Escaleras'], c: 1, e: 'Pasillo: 4 antes y 4 después.' },
      { id: 't1-6', t: 'num', tabla: TABLA_AJEDREZ, q: '¿Cuántos estudiantes participaron en total?', r: 20, u: 'estudiantes', e: '1 + 2 + 2 + 4 + 5 + 3 + 2 + 1 = 20.' },
      { id: 't1-7', t: 'num', tabla: TABLA_AJEDREZ, q: '¿Qué puntaje se repite más?', r: 4, u: 'puntos', e: 'El 4 lo obtuvieron 5 estudiantes, más que cualquier otro puntaje.' },
      { id: 't1-8', t: 'num', tabla: TABLA_AJEDREZ, q: '¿Cuántos estudiantes obtuvieron más de 4 puntos?', r: 6, u: 'estudiantes', e: '“Más de 4” = 5, 6 y 7 → 3 + 2 + 1 = 6.' },
      { id: 't1-9', t: 'num', tabla: TABLA_AJEDREZ, q: '¿Cuántos estudiantes obtuvieron menos de 3 puntos?', r: 5, u: 'estudiantes', e: '“Menos de 3” = 0, 1 y 2 → 1 + 2 + 2 = 5.' },
      { id: 't1-10', t: 'mc', q: '¿Qué es la frecuencia de un dato?', o: ['El valor más alto', 'La cantidad de veces que se repite', 'La suma de todos los datos', 'El título de la tabla'], c: 1, e: 'La frecuencia es cuántas veces aparece un dato.' },
    ],
  },
  {
    id: 't2',
    unidad: 'datos',
    titulo: 'Gráficos de barra doble',
    nivel: 'Intermedio',
    preguntas: [
      { id: 't2-1', t: 'num', grafico: QUIOSCO, q: '¿Cuántos diarios se vendieron en total en los dos meses?', r: 220, u: 'diarios', e: 'Octubre 120 + noviembre 100 = 220.' },
      { id: 't2-2', t: 'mc', grafico: QUIOSCO, q: '¿Qué producto disminuyó sus ventas de octubre a noviembre?', o: ['Diarios', 'Revistas', 'Libros', 'Artículos'], c: 0, e: 'Diarios: 120 → 100. Los demás aumentaron.' },
      { id: 't2-3', t: 'mc', grafico: QUIOSCO, q: '¿Qué producto tuvo la mayor diferencia entre ambos meses?', o: ['Diarios', 'Revistas', 'Libros', 'Artículos'], c: 1, e: 'Diferencias: diarios 20, revistas 30, libros 10, artículos 20. La mayor es revistas.' },
      { id: 't2-4', t: 'num', grafico: QUIOSCO, q: '¿En cuántas unidades aumentaron las ventas totales de noviembre respecto de octubre?', r: 40, u: 'unidades', e: 'Octubre: 120 + 60 + 30 + 80 = 290. Noviembre: 100 + 90 + 40 + 100 = 330. Diferencia: 40.' },
      { id: 't2-5', t: 'mc', q: '¿Para qué sirve la leyenda de un gráfico de barras dobles?', o: ['Indica el título', 'Indica qué grupo representa cada color de barra', 'Muestra la escala', 'Ordena las barras de mayor a menor'], c: 1, e: 'Sin leyenda no sabríamos qué barra corresponde a cada grupo.' },
      { id: 't2-6', t: 'mc', q: '¿Cuándo conviene usar un gráfico de barras dobles?', o: ['Para mostrar un solo grupo de datos', 'Para comparar dos grupos de datos en las mismas categorías', 'Para mostrar partes de un todo en porcentaje', 'Para anotar los resultados de un dado'], c: 1, e: 'Permite comparar visualmente dos conjuntos de datos.' },
      { id: 't2-7', t: 'num', grafico: TALLERES, q: '¿Cuántos estudiantes de 6° básico se inscribieron en total?', r: 50, u: 'estudiantes', e: '12 + 6 + 5 + 18 + 9 = 50.' },
      { id: 't2-8', t: 'mc', grafico: TALLERES, q: '¿Qué taller fue el más elegido considerando ambos niveles?', o: ['Karate', 'Atletismo', 'Dibujo', 'Serigrafía'], c: 1, e: 'Atletismo: 18 + 14 = 32, el mayor total.' },
      { id: 't2-9', t: 'mc', grafico: TALLERES, q: '¿En qué taller ambos niveles tienen la misma cantidad de inscritos?', o: ['Poesía', 'Karate', 'Dibujo', 'Atletismo'], c: 0, e: 'Poesía: 5 y 5.' },
      { id: 't2-10', t: 'num', grafico: TALLERES, q: '¿Cuántos estudiantes más de 7° que de 6° eligieron Dibujo?', r: 4, u: 'estudiantes', e: '13 − 9 = 4.' },
      { id: 't2-11', t: 'mc', grafico: LESIONES, q: '¿En qué lugar hubo la mayor disminución de lesiones?', o: ['Patio', 'Pasillo', 'Gimnasio', 'Escaleras'], c: 0, e: 'Patio: 13 − 6 = 7, la mayor diferencia a favor de la campaña.' },
    ],
  },
];

export const guiaPorId = (id) => GUIAS.find((g) => g.id === id);
export const guiasDe = (unidad) => GUIAS.filter((g) => g.unidad === unidad);
export const todasLasPreguntas = () => GUIAS.flatMap((g) => g.preguntas.map((p) => ({ ...p, unidad: g.unidad, guia: g.id })));
