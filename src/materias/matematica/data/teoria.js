// Síntesis teórica basada en el Texto del Estudiante Matemática 6º Básico
// (Tomo 1: caps. 2, 4, 5, 8, 9 y 10 · Tomo 2: caps. 13, 14, 15 y 16)
// y en el temario de la Prueba de Síntesis del 2º semestre 2026.

export const PRUEBA = {
  asignatura: 'Matemática',
  curso: '6º Básico',
  fecha: '2026-11-24',
  fechaTexto: 'martes 24 de noviembre',
};

export const ORDEN_UNIDADES = ['razones', 'algebra', 'decimales', 'area', 'datos'];

export const UNIDADES = {
  razones: {
    id: 'razones',
    nombre: 'Razones y porcentajes',
    icono: '⚖️',
    lema: 'Comparar cantidades dividiendo',
    libro: 'Tomo 2 · Cap. 14 Razones (pp. 70–95) y Cap. 15 Porcentajes (pp. 108–119)',
    contenidos: ['Razones', 'Representación de porcentajes', 'Calcular porcentajes', 'Resolver problemas de razones y porcentajes'],
    widget: 'porcentaje',
    temas: [
      {
        id: 'razon',
        titulo: 'Razones',
        pag: 'Tomo 2, pp. 70–93',
        idea: 'Una razón compara dos cantidades usando la división. Nos dice cuántas veces cabe la cantidad referente en la cantidad comparada, es decir, cuánto hay de una cantidad por cada 1 de la otra.',
        formula: 'Razón = cantidad comparada : cantidad referente',
        claves: [
          'La cantidad referente es la base de la comparación: es la que se toma como 1.',
          'Se escribe a : b y se lee “a es a b”. También se puede escribir como fracción (a/b) o como número decimal.',
          'Si cambias la cantidad referente, la razón cambia: 16 : 20 = 0,8, pero 20 : 16 = 1,25.',
          'Una razón puede ser menor que 1, igual a 1 o mayor que 1.',
          'Medida unitaria: cantidad por cada 1 unidad. Ejemplos: niños por m², precio de 1 cuaderno, densidad de población (personas por km²).',
          'Razones equivalentes: se obtienen multiplicando o dividiendo ambos términos por el mismo número: 3 : 6 = 6 : 12 = 1 : 2.',
          'El valor de la razón A : B es el cociente de A dividido por B. Si dos razones tienen el mismo valor, son equivalentes.',
        ],
        ejemplos: [
          {
            enunciado: 'Un avión pequeño tiene 130 asientos y lleva 117 pasajeros. Un avión grande tiene 520 asientos y lleva 442 pasajeros. ¿Cuál tiene más aglomeración?',
            pasos: [
              'La cantidad referente es la cantidad de asientos (se toma como 1).',
              'Avión pequeño: 117 : 130 = 0,9 pasajeros por asiento.',
              'Avión grande: 442 : 520 = 0,85 pasajeros por asiento.',
              'Comparamos: 0,9 > 0,85.',
            ],
            respuesta: 'Hay más aglomeración en el avión pequeño.',
          },
          {
            enunciado: 'Oferta 1: 10 cuadernos por $12 000. Oferta 2: 8 cuadernos por $10 400. ¿En cuál es más caro cada cuaderno?',
            pasos: ['Buscamos el precio de 1 cuaderno (medida unitaria).', 'Oferta 1: 12 000 : 10 = $1 200.', 'Oferta 2: 10 400 : 8 = $1 300.'],
            respuesta: 'En la oferta 2 cada cuaderno es más caro.',
          },
          {
            enunciado: 'Loreto hizo 7 goles en 28 partidos. Expresa la razón de la forma más simple.',
            pasos: ['La razón es 7 : 28.', 'Dividimos ambos términos por 7: (7 : 7) : (28 : 7) = 1 : 4.', 'Como fracción: 1/4.'],
            respuesta: 'Loreto hizo 1 gol cada 4 partidos (1 : 4).',
          },
        ],
      },
      {
        id: 'repr-porcentaje',
        titulo: 'Representación de porcentajes',
        pag: 'Tomo 2, pp. 108–116',
        idea: 'Un porcentaje es una razón en que la cantidad referente es 100. El símbolo % significa “de cada 100”. El total siempre corresponde al 100 %.',
        formula: '45 % = 45 : 100 = 45/100 = 0,45',
        claves: [
          'Cuando el valor de una razón es 1, corresponde al 100 % (el total).',
          'Equivalencias que conviene memorizar: 50 % = 1/2 · 25 % = 1/4 · 75 % = 3/4 · 10 % = 1/10 · 20 % = 1/5 · 1 % = 1/100.',
          'En una barra dividida en partes iguales: si hay 10 partes, cada una es 10 %; si hay 4, cada una es 25 %; si hay 5, cada una es 20 %.',
          'Si se supera el total, el porcentaje es mayor que 100 % (un carro para 120 personas con 144 pasajeros está al 120 %).',
          'En una tabla, la suma de todos los porcentajes es 100 %.',
        ],
        ejemplos: [
          {
            enunciado: 'Expresa la razón 2 : 5 como porcentaje.',
            pasos: ['Calculamos el valor de la razón: 2 : 5 = 0,4.', 'Multiplicamos por 100: 0,4 • 100 = 40.'],
            respuesta: '2 : 5 = 40 %',
          },
          {
            enunciado: 'Una barra está dividida en 8 partes iguales y hay 2 pintadas. ¿Qué porcentaje está pintado?',
            pasos: ['2 de 8 partes = 2/8 = 1/4.', '1/4 equivale al 25 %.'],
            respuesta: 'Está pintado el 25 % de la barra.',
          },
        ],
      },
      {
        id: 'calc-porcentaje',
        titulo: 'Calcular porcentajes',
        pag: 'Tomo 2, pp. 108–118',
        idea: 'Hay dos preguntas típicas: “¿cuánto es el ___ % de una cantidad?” y “¿qué porcentaje es una cantidad de otra?”.',
        formula: 'Porcentaje = (cantidad comparada : cantidad referente) • 100',
        claves: [
          '¿Qué % es A de B? → (A : B) • 100. Ejemplo: 40 pasajeros en 50 asientos → (40 : 50) • 100 = 80 %.',
          '50 % de una cantidad = su mitad (dividir por 2).',
          '25 % = su cuarta parte (dividir por 4).',
          '10 % = su décima parte (dividir por 10). El 1 % se obtiene dividiendo por 100.',
          'Combina: 20 % = 2 veces el 10 % · 30 % = 3 veces el 10 % · 75 % = 3 veces el 25 % · 5 % = la mitad del 10 %.',
          'Otra forma: el 12 % de 14 000 = 14 000 : 100 • 12 = 1 680.',
        ],
        ejemplos: [
          {
            enunciado: 'Calcula el 25 % de 600.',
            pasos: ['25 % es la cuarta parte.', '600 : 4 = 150.'],
            respuesta: 'El 25 % de 600 es 150.',
          },
          {
            enunciado: 'Calcula el 30 % de 60.',
            pasos: ['10 % de 60 = 60 : 10 = 6.', '30 % = 3 veces el 10 % = 3 • 6 = 18.'],
            respuesta: 'El 30 % de 60 es 18.',
          },
          {
            enunciado: 'De 4 tiros al aro, Lisette encestó 1. ¿Cuál es su índice de efectividad en porcentaje?',
            pasos: ['Razón: 1 : 4 = 0,25.', '0,25 • 100 = 25.'],
            respuesta: 'Su efectividad es 25 %.',
          },
        ],
      },
      {
        id: 'prob-razones',
        titulo: 'Problemas de razones y porcentajes',
        pag: 'Tomo 2, pp. 95 y 119',
        idea: 'Lee con calma, identifica cuál es la cantidad referente (el total o la base) y decide si buscas una parte, un porcentaje o el total.',
        claves: [
          '1) Subraya los datos y la pregunta.',
          '2) Identifica la cantidad referente (lo que vale 1 o 100 %).',
          '3) Si conoces una razón a : b y una de las cantidades, busca “cuánto vale 1 parte” y multiplica.',
          '4) Responde con una oración completa y revisa que tenga sentido.',
        ],
        ejemplos: [
          {
            enunciado: 'La razón entre bolas blancas y rojas es 3 : 4. Si hay 21 bolas blancas, ¿cuántas rojas hay?',
            pasos: ['Las blancas son 3 partes: 21 : 3 = 7 bolas por parte.', 'Las rojas son 4 partes: 4 • 7 = 28.'],
            respuesta: 'Hay 28 bolas rojas.',
          },
          {
            enunciado: 'Un libro vale $14 000. En la librería A le descuentan $1 700 y en la B, un 12 %. ¿Dónde está más barato?',
            pasos: ['12 % de 14 000 = 14 000 : 100 • 12 = 1 680.', 'Librería A: 14 000 − 1 700 = $12 300.', 'Librería B: 14 000 − 1 680 = $12 320.'],
            respuesta: 'Está más barato en la librería A.',
          },
          {
            enunciado: 'A un concierto asistieron 180 personas, que son el 20 % de la capacidad. ¿Cuál es la capacidad?',
            pasos: ['20 % es la quinta parte del total (100 : 20 = 5).', 'El total es 5 veces 180: 5 • 180 = 900.'],
            respuesta: 'La capacidad es de 900 personas.',
          },
        ],
      },
    ],
    errores: [
      'Confundir la cantidad referente: “razón de A respecto de B” → B es la referente (va después de los dos puntos).',
      'Pensar que un porcentaje nunca puede ser mayor que 100 %.',
      'Calcular el 25 % dividiendo por 25 (¡se divide por 4!).',
      'Restar el porcentaje como si fuera dinero: un 12 % de descuento no es $12.',
    ],
    flash: [
      { p: '¿Qué es una razón?', r: 'Una comparación entre dos cantidades mediante una división: comparada : referente.' },
      { p: '¿Cuánto es el 50 % de algo?', r: 'La mitad.' },
      { p: '¿Cuánto es el 25 % de algo?', r: 'La cuarta parte (dividir por 4).' },
      { p: '¿Cuánto es el 10 % de 920?', r: '92 (dividir por 10).' },
      { p: '¿Cómo saber qué % es 14 de 140?', r: '(14 : 140) • 100 = 10 %.' },
      { p: '¿Cómo obtengo razones equivalentes?', r: 'Multiplicando o dividiendo ambos términos por el mismo número.' },
    ],
  },

  algebra: {
    id: 'algebra',
    nombre: 'Patrones y álgebra',
    icono: '🔣',
    lema: 'Letras que representan números',
    libro: 'Tomo 2 · Cap. 13 Expresiones algebraicas, patrones y ecuaciones (pp. 46–69)',
    contenidos: ['Lenguaje natural y algebraico', 'Valorizar expresiones algebraicas', 'Resolver ecuaciones de 1er grado (uno y dos pasos)', 'Resolver problemas'],
    widget: 'valorizar',
    temas: [
      {
        id: 'lenguaje-alg',
        titulo: 'Lenguaje natural y algebraico',
        pag: 'Tomo 2, pp. 46–52',
        idea: 'En matemática usamos letras (x, n, p…) para representar números que no conocemos o que pueden cambiar. Una expresión algebraica combina números, letras y operaciones, por ejemplo x • 200 o 5 • x + 4.',
        tabla: [
          ['El doble de un número', '2 • x'],
          ['El triple de un número', '3 • x'],
          ['Un número aumentado en 5', 'x + 5'],
          ['Un número disminuido en 7', 'x − 7'],
          ['La mitad de un número', 'x : 2'],
          ['El cuádruple de un número, más 3', '4 • x + 3'],
          ['El sucesor de un número', 'x + 1'],
          ['Perímetro de un triángulo equilátero de lado x', '3 • x'],
          ['Precio de x manzanas a $200 cada una', 'x • 200'],
        ],
        claves: [
          'La letra puede representar una cantidad (x manzanas) o un precio ($x cada zanahoria). Fíjate qué representa en cada problema.',
          'El punto (•) significa multiplicación: 5 • x es “5 veces x”.',
          'En los patrones, arma una tabla de valores y busca qué cálculo relaciona el número de la figura con la cantidad.',
          'La regla del patrón debe cumplirse para todas las filas de la tabla.',
        ],
        ejemplos: [
          {
            enunciado: 'Las zanahorias cuestan $x cada una y los pimentones $250. ¿Qué representa 4 • x + 4 • 250?',
            pasos: ['4 • x → 4 zanahorias.', '4 • 250 → 4 pimentones.'],
            respuesta: 'El precio de 4 zanahorias y 4 pimentones.',
          },
          {
            enunciado: 'Con palos de helado se forman cuadrados en fila: la figura 1 usa 4 palos, la figura 2 usa 7 y la figura 3 usa 10. ¿Qué expresión da los palos de la figura n?',
            pasos: [
              'Tabla: 1 → 4, 2 → 7, 3 → 10. Aumenta de 3 en 3.',
              'Idea de Ema: 1 palo inicial + 3 palos por cada cuadrado: 1 + 1 • 3, 1 + 2 • 3, 1 + 3 • 3…',
              'Para la figura n: 1 + 3 • n. Comprobamos con n = 2: 1 + 6 = 7 ✔.',
            ],
            respuesta: 'Palos de la figura n = 1 + 3 • n',
          },
        ],
      },
      {
        id: 'valorizar',
        titulo: 'Valorizar expresiones algebraicas',
        pag: 'Tomo 2, pp. 56 y 65',
        idea: 'Valorizar es reemplazar la letra por un número y calcular el resultado, respetando el orden de las operaciones.',
        formula: 'Orden: 1) paréntesis · 2) multiplicación y división · 3) adición y sustracción',
        claves: [
          'Escribe la expresión cambiando la letra por el número: si x = 7, 5 • x + 4 → 5 • 7 + 4.',
          'Primero multiplica o divide, después suma o resta: 5 • 7 + 4 = 35 + 4 = 39.',
          'Si la letra aparece varias veces, se reemplaza por el mismo número en todas partes.',
          'Una tabla de valores muestra la expresión valorizada para varios valores de x.',
        ],
        ejemplos: [
          {
            enunciado: 'Valoriza 5 • x + 4 para x = 7, 8 y 9.',
            pasos: ['x = 7: 5 • 7 + 4 = 35 + 4 = 39.', 'x = 8: 5 • 8 + 4 = 40 + 4 = 44.', 'x = 9: 5 • 9 + 4 = 45 + 4 = 49.'],
            respuesta: '39, 44 y 49.',
          },
          {
            enunciado: 'Natalia puso $5 000 en su alcancía y luego $2 000 cada mes. Su ahorro es 5 000 + 2 000 • x. ¿Cuánto tiene a los 8 meses?',
            pasos: ['Reemplazamos x = 8: 5 000 + 2 000 • 8.', 'Primero la multiplicación: 2 000 • 8 = 16 000.', 'Luego la suma: 5 000 + 16 000 = 21 000.'],
            respuesta: 'A los 8 meses tiene $21 000.',
          },
        ],
      },
      {
        id: 'ecuaciones',
        titulo: 'Ecuaciones de uno y dos pasos',
        pag: 'Tomo 2, pp. 53–63',
        idea: 'Una ecuación es una igualdad con un valor desconocido (la incógnita). Resolverla es encontrar el número que hace verdadera la igualdad. Es como una balanza en equilibrio: lo que haces a un lado, lo haces al otro.',
        formula: 'Operaciones inversas: + ↔ −   ·   • ↔ :',
        claves: [
          'Un paso: x + 7 = 35 → x = 35 − 7 → x = 28.',
          'Un paso: x − 5 = 28 → x = 28 + 5 → x = 33.',
          'Un paso: 6 • x = 96 → x = 96 : 6 → x = 16.',
          'Dos pasos: primero se “deshace” la suma o la resta, después la multiplicación (esto se llama despejar la x).',
          'Siempre comprueba: reemplaza la solución en la ecuación y verifica que la igualdad se cumpla.',
          'La solución puede ser un número decimal: 4 • x + 24 = 354 → x = 82,5.',
        ],
        ejemplos: [
          {
            enunciado: 'Resuelve 5 • x + 4 = 124.',
            pasos: ['Restamos 4 a ambos lados: 5 • x = 124 − 4 = 120.', 'Dividimos por 5: x = 120 : 5 = 24.', 'Comprobamos: 5 • 24 + 4 = 120 + 4 = 124 ✔.'],
            respuesta: 'x = 24',
          },
          {
            enunciado: 'Resuelve 5 • x − 8 = 92.',
            pasos: ['Sumamos 8 a ambos lados: 5 • x = 92 + 8 = 100.', 'Dividimos por 5: x = 100 : 5 = 20.', 'Comprobamos: 5 • 20 − 8 = 100 − 8 = 92 ✔.'],
            respuesta: 'x = 20',
          },
          {
            enunciado: '¿Dónde está el error? 4 • x − 12 = 28 → x − 12 = 7 → x = 19.',
            pasos: ['Se dividió por 4 antes de deshacer la resta: eso no es correcto.', 'Correcto: 4 • x = 28 + 12 = 40.', 'x = 40 : 4 = 10. Comprobación: 4 • 10 − 12 = 28 ✔.'],
            respuesta: 'La solución correcta es x = 10.',
          },
        ],
      },
      {
        id: 'prob-algebra',
        titulo: 'Resolver problemas con ecuaciones',
        pag: 'Tomo 2, pp. 58 y 64–69',
        idea: 'Plantear una ecuación es escribir con símbolos lo que dice el problema. Luego se resuelve y se responde la pregunta.',
        claves: [
          '1) Decide qué representa la x (lo que no conoces).',
          '2) Escribe la ecuación con los datos del problema.',
          '3) Resuelve despejando la x.',
          '4) Comprueba y responde con una oración.',
        ],
        ejemplos: [
          {
            enunciado: 'Natalia compró 6 macarrones iguales. Pagó con $10 000 y recibió $1 600 de vuelto. ¿Cuánto cuesta cada macarrón?',
            pasos: ['x = precio de un macarrón.', 'Lo que gastó más el vuelto es lo que pagó: 6 • x + 1 600 = 10 000.', '6 • x = 10 000 − 1 600 = 8 400.', 'x = 8 400 : 6 = 1 400.'],
            respuesta: 'Cada macarrón cuesta $1 400.',
          },
          {
            enunciado: 'Si al triple de un número le restamos 10, se obtiene 71. ¿Cuál es el número?',
            pasos: ['“El triple de un número” = 3 • x; “le restamos 10” = 3 • x − 10.', 'Ecuación: 3 • x − 10 = 71.', '3 • x = 81 → x = 81 : 3 = 27.'],
            respuesta: 'El número es 27.',
          },
        ],
      },
    ],
    errores: [
      'Sumar el número con la letra: 5 • x + 4 NO es 9 • x.',
      'En dos pasos, dividir antes de deshacer la suma o la resta.',
      'Olvidar comprobar la solución reemplazándola en la ecuación.',
      'Valorizar sin respetar el orden: 2 + 3 • 4 es 14, no 20.',
    ],
    flash: [
      { p: '¿Qué es una expresión algebraica?', r: 'Una combinación de números, letras y operaciones, como 3 • x + 2.' },
      { p: '“El doble de un número aumentado en 5”', r: '2 • x + 5' },
      { p: '¿Qué significa valorizar?', r: 'Reemplazar la letra por un número y calcular.' },
      { p: 'Resuelve x + 45 = 70', r: 'x = 70 − 45 = 25' },
      { p: 'Resuelve 3 • x + 2 = 20', r: '3 • x = 18 → x = 6' },
      { p: '¿Cómo compruebo una ecuación?', r: 'Reemplazo la solución y veo si la igualdad se cumple.' },
    ],
  },

  decimales: {
    id: 'decimales',
    nombre: 'Decimales',
    icono: '🔟',
    lema: '¿Dónde va la coma?',
    libro: 'Tomo 1 · Cap. 2 (pp. 24–29), Cap. 4 (pp. 52–72), Cap. 8 (pp. 151–170) y Cap. 9 (pp. 171–189)',
    contenidos: ['Multiplicaciones y divisiones (por nº natural, decimal y potencia de 10)', 'Resolver problemas de multiplicaciones y divisiones'],
    widget: 'coma',
    temas: [
      {
        id: 'mult-natural',
        titulo: 'Multiplicar un decimal por un natural',
        pag: 'Tomo 1, pp. 24–26 y 52–57',
        idea: 'Se multiplica como si fueran números naturales y luego se ubica la coma: el producto tiene la misma cantidad de cifras decimales que el número decimal.',
        claves: [
          '7,6 • 4 → 76 • 4 = 304 → 7,6 tiene 1 decimal → 30,4.',
          '2,35 • 3 → 235 • 3 = 705 → 2 decimales → 7,05.',
          'Idea del libro: 1,2 son 12 décimos, entonces 3 • 1,2 = 36 décimos = 3,6.',
          'Estima antes de calcular: 7,6 • 4 debe ser cerca de 8 • 4 = 32.',
        ],
        ejemplos: [
          {
            enunciado: 'Felipe dio 3 vueltas a un camino de 2,35 km. ¿Cuántos kilómetros recorrió?',
            pasos: ['Expresión: 2,35 • 3.', '235 • 3 = 705.', '2,35 tiene 2 cifras decimales → 7,05.'],
            respuesta: 'Recorrió 7,05 km.',
          },
        ],
      },
      {
        id: 'div-natural',
        titulo: 'Dividir un decimal por un natural',
        pag: 'Tomo 1, pp. 27–29 y 58–68',
        idea: 'Se divide como con números naturales. La coma del cociente se ubica en el mismo lugar que la del dividendo, justo al pasar de las unidades a los décimos.',
        claves: [
          '7,6 : 4 = 1,9 (76 décimos : 4 = 19 décimos).',
          'Si la parte entera es menor que el divisor, se escribe 0 en las unidades: 4,5 : 9 = 0,5.',
          'Puedes agregar ceros al dividendo para seguir dividiendo: 7,3 : 5 = 7,30 : 5 = 1,46.',
          'División con resto: la coma del resto va en la misma posición que en el dividendo. 13,5 : 2 = 6 y sobra 1,5.',
          'Comprobación: dividendo = cociente • divisor + resto → 13,5 = 6 • 2 + 1,5.',
          'Si el resultado tiene muchas cifras, se redondea: 2,5 : 6 = 0,41… ≈ 0,4.',
        ],
        ejemplos: [
          {
            enunciado: 'Se corta una cinta de 5,7 m en 3 partes iguales. ¿Cuánto mide cada parte?',
            pasos: ['Expresión: 5,7 : 3.', '5 : 3 = 1, resto 2 → se escribe 1 y la coma.', 'Bajamos el 7: 27 : 3 = 9.'],
            respuesta: 'Cada parte mide 1,9 m.',
          },
        ],
      },
      {
        id: 'mult-decimal',
        titulo: 'Multiplicar entre decimales',
        pag: 'Tomo 1, pp. 151–170',
        idea: 'Multiplica sin considerar las comas. El producto tiene tantas cifras decimales como la suma de las cifras decimales de los dos factores.',
        formula: '5,26 • 4,8 = 25,248   (2 + 1 = 3 cifras decimales)',
        claves: [
          '0,07 • 0,2 → 7 • 2 = 14 → 2 + 1 = 3 decimales → 0,014 (se completan ceros).',
          'Si un factor es menor que 1, el producto es menor que el otro factor: 25 • 0,8 = 20.',
          'Si un factor es mayor que 1, el producto es mayor que el otro factor.',
          'Propiedades útiles: conmutativa (a • b = b • a), asociativa y distributiva. Ej.: 4 • 7 • 2,5 = 7 • (4 • 2,5) = 7 • 10 = 70.',
        ],
        ejemplos: [
          {
            enunciado: 'Un metro de cinta cuesta $80. ¿Cuánto cuestan 2,4 m?',
            pasos: ['Expresión: 2,4 • 80.', '24 • 80 = 1 920.', '2,4 tiene 1 decimal → 192,0.'],
            respuesta: 'Cuestan $192.',
          },
        ],
      },
      {
        id: 'div-decimal',
        titulo: 'Dividir por un decimal',
        pag: 'Tomo 1, pp. 171–189',
        idea: 'Se multiplican el dividendo y el divisor por el mismo número (10, 100, …) hasta que el divisor sea natural. Luego se divide como ya sabes.',
        formula: '9,68 : 0,8 = 96,8 : 8 = 12,1',
        claves: [
          '2,7 : 0,3 → (• 10) → 27 : 3 = 9.',
          '0,45 : 0,5 → (• 10) → 4,5 : 5 = 0,9.',
          'Al dividir por un número menor que 1, el cociente es mayor que el dividendo: 9,6 : 0,4 = 24.',
          'Resto: la coma del resto queda donde estaba la coma original del dividendo. 2,5 : 0,8 = 3 y sobra 0,1.',
        ],
        ejemplos: [
          {
            enunciado: '0,8 m de un cable tiene una masa de 9,6 g. ¿Cuál es la masa de 1 m?',
            pasos: ['Buscamos cuánto hay en 1 m → dividimos: 9,6 : 0,8.', 'Multiplicamos ambos por 10: 96 : 8.', '96 : 8 = 12.'],
            respuesta: '1 m de cable tiene una masa de 12 g.',
          },
        ],
      },
      {
        id: 'potencias10',
        titulo: 'Multiplicar y dividir por 10, 100 y 1 000',
        pag: 'Tomo 1, pp. 54–57 · repaso de 5º básico',
        idea: 'Al multiplicar por 10, 100 o 1 000 la coma se corre a la derecha tantos lugares como ceros tenga. Al dividir, se corre a la izquierda. Si faltan cifras, se completan con ceros.',
        tabla: [
          ['3,45 • 10', '34,5', '1 lugar →'],
          ['3,45 • 100', '345', '2 lugares →'],
          ['2,7 • 1 000', '2 700', '3 lugares → (completa ceros)'],
          ['45,6 : 10', '4,56', '← 1 lugar'],
          ['3,2 : 100', '0,032', '← 2 lugares (completa ceros)'],
          ['8 : 1 000', '0,008', '← 3 lugares'],
        ],
        claves: [
          'Multiplicar → el número se agranda → coma a la derecha.',
          'Dividir → el número se achica → coma a la izquierda.',
          'Multiplicar por 0,1 es lo mismo que dividir por 10; por 0,01, lo mismo que dividir por 100.',
        ],
        ejemplos: [
          {
            enunciado: 'Calcula 0,08 • 1 000.',
            pasos: ['1 000 tiene 3 ceros → la coma avanza 3 lugares a la derecha.', '0,080 → 0080, = 80.'],
            respuesta: '0,08 • 1 000 = 80',
          },
        ],
      },
      {
        id: 'prob-decimales',
        titulo: 'Problemas: ¿multiplicar o dividir?',
        pag: 'Tomo 1, pp. 67–68 y 181–187',
        idea: 'Piensa en la cantidad que corresponde a 1 unidad. Un diagrama con dos rectas numéricas o una tabla ayuda mucho a decidir.',
        claves: [
          'Conozco el valor de 1 y quiero el de varias (o de una parte) → multiplico. Ej.: 2,4 L por m², ¿cuánto para 1,5 m²? → 2,4 • 1,5 = 3,6 L.',
          'Conozco el total y quiero el valor de 1 → divido. Ej.: 2 L para 0,4 m², ¿cuánto para 1 m²? → 2 : 0,4 = 5 L.',
          '¿Cuántas veces cabe? → divido. Ej.: 3 L en tazas de 0,4 L → 3 : 0,4 = 7 tazas y sobran 0,2 L.',
          'Estima el resultado para revisar que tenga sentido.',
        ],
        ejemplos: [
          {
            enunciado: 'Un jardín rectangular tiene 30 m² de área y 2,5 m de ancho. ¿Cuál es su largo?',
            pasos: ['Área = largo • ancho → largo = área : ancho.', '30 : 2,5 → (• 10) → 300 : 25 = 12.'],
            respuesta: 'El largo es 12 m.',
          },
        ],
      },
    ],
    errores: [
      'Alinear mal la coma en el producto: en 0,07 • 0,2 hay que completar con ceros → 0,014.',
      'Multiplicar solo el divisor por 10 y olvidar el dividendo.',
      'Escribir el resto sin coma: en 13,5 : 2 el resto es 1,5, no 15.',
      'Creer que multiplicar siempre agranda: 25 • 0,8 = 20 (es menor).',
    ],
    flash: [
      { p: '¿Cuántos decimales tiene 5,26 • 4,8?', r: '3 (2 + 1).' },
      { p: '3,45 • 100', r: '345' },
      { p: '3,2 : 100', r: '0,032' },
      { p: '¿Cómo divido 2,7 : 0,3?', r: 'Multiplico ambos por 10: 27 : 3 = 9.' },
      { p: '7,6 : 4', r: '1,9' },
      { p: 'Si divido por 0,5, ¿el resultado crece o decrece?', r: 'Crece: dividir por 0,5 es lo mismo que multiplicar por 2.' },
    ],
  },

  area: {
    id: 'area',
    nombre: 'Área y volumen',
    icono: '📦',
    lema: 'Cubrir y llenar cuerpos',
    libro: 'Tomo 1 · Cap. 5 Área de cubos y paralelepípedos (pp. 73–87) y Cap. 10 Volumen (pp. 190–209)',
    contenidos: ['Área de cuadrados y rectángulos', 'Área de cubos y paralelepípedos', 'Volumen de cubos y paralelepípedos', 'Resolver problemas de área y volumen'],
    widget: 'caja',
    temas: [
      {
        id: 'area-plana',
        titulo: 'Área de cuadrados y rectángulos',
        pag: 'Repaso de 5º básico · Tomo 1, p. 59',
        idea: 'El área es la medida de la superficie que cubre una figura. Se mide en unidades cuadradas: cm², m², km².',
        formula: 'Rectángulo: largo • ancho   ·   Cuadrado: lado • lado',
        claves: [
          '1 cm² es el área de un cuadrado de 1 cm de lado.',
          'Un rectángulo de 8 cm por 3 cm tiene 8 • 3 = 24 cm².',
          'Si conoces el área y un lado: el otro lado = área : lado conocido.',
          'No confundas área con perímetro: el perímetro es el contorno (se suma), el área es la superficie (se multiplica).',
        ],
        ejemplos: [
          {
            enunciado: 'Un rectángulo tiene 25,6 cm² de área y 8 cm de largo. ¿Cuánto mide su ancho?',
            pasos: ['Área = largo • ancho → ancho = área : largo.', '25,6 : 8 = 3,2.'],
            respuesta: 'El ancho mide 3,2 cm.',
          },
        ],
      },
      {
        id: 'area-cuerpos',
        titulo: 'Área de cubos y paralelepípedos',
        pag: 'Tomo 1, pp. 73–87',
        idea: 'El paralelepípedo (prisma rectangular) tiene 6 caras rectangulares: 3 pares de caras opuestas iguales. El cubo tiene 6 caras cuadradas iguales. Su área es la suma de las áreas de todas sus caras (el área de su red).',
        formula: 'Paralelepípedo: 2 • (largo • ancho + largo • altura + ancho • altura)   ·   Cubo: 6 • arista • arista',
        claves: [
          'Partes de un cuerpo: caras (partes planas), aristas (donde se juntan 2 caras) y vértices (donde se juntan 3 aristas).',
          'Red: el cuerpo “desarmado” sobre el plano. Un mismo cuerpo puede tener varias redes.',
          'Ideas del libro: sumar las 6 caras (Sofía), agrupar los 3 pares iguales (Gaspar) o sumar 3 caras distintas y multiplicar por 2 (Sami).',
          'Si el área de un cubo es 384 cm²: una cara = 384 : 6 = 64 cm² → arista = 8 cm (porque 8 • 8 = 64).',
        ],
        ejemplos: [
          {
            enunciado: 'Calcula el área de un paralelepípedo de 6 cm de largo, 5 cm de ancho y 2 cm de alto.',
            pasos: ['Caras distintas: 6 • 5 = 30 cm², 6 • 2 = 12 cm², 5 • 2 = 10 cm².', 'Suma: 30 + 12 + 10 = 52 cm².', 'Cada cara está 2 veces: 2 • 52 = 104 cm².'],
            respuesta: 'El área es 104 cm².',
          },
          {
            enunciado: 'Calcula el área de un cubo de 4 cm de arista.',
            pasos: ['Una cara: 4 • 4 = 16 cm².', '6 caras: 6 • 16 = 96 cm².'],
            respuesta: 'El área es 96 cm².',
          },
        ],
      },
      {
        id: 'volumen',
        titulo: 'Volumen de cubos y paralelepípedos',
        pag: 'Tomo 1, pp. 190–206',
        idea: 'El volumen es la medida del espacio que ocupa un cuerpo. Se mide contando cubos de 1 cm de arista (1 cm³): cubos por fila • filas • capas.',
        formula: 'Paralelepípedo: largo • ancho • altura   ·   Cubo: arista • arista • arista',
        claves: [
          'Unidades: cm³ (centímetro cúbico) y m³ (metro cúbico).',
          '1 m³ = 100 cm • 100 cm • 100 cm = 1 000 000 cm³.',
          'Capacidad: 1 L = 1 000 cm³ · 1 mL = 1 cm³ · 1 m³ = 1 000 L.',
          'Antes de calcular, todas las medidas deben estar en la misma unidad (3 m • 2 m • 50 cm → 50 cm = 0,5 m).',
          'Cuerpos compuestos: sepáralos en paralelepípedos, calcula cada volumen y súmalos (o calcula el grande y resta lo que falta).',
        ],
        ejemplos: [
          {
            enunciado: 'Calcula el volumen de un paralelepípedo de 3 cm de largo, 2 cm de ancho y 4 cm de alto.',
            pasos: ['Capa inferior: 3 • 2 = 6 cubos.', 'Hay 4 capas: 6 • 4 = 24 cubos.'],
            respuesta: 'El volumen es 24 cm³.',
          },
          {
            enunciado: 'Una pecera mide 40 cm × 25 cm × 30 cm. ¿Cuántos litros de agua caben?',
            pasos: ['Volumen: 40 • 25 • 30 = 30 000 cm³.', '1 L = 1 000 cm³ → 30 000 : 1 000 = 30.'],
            respuesta: 'Caben 30 litros.',
          },
        ],
      },
      {
        id: 'prob-area',
        titulo: 'Problemas de área y volumen',
        pag: 'Tomo 1, pp. 83–87 y 207–209',
        idea: 'Primero decide qué te preguntan: ¿cubrir o forrar? → área. ¿Llenar o cuánto cabe? → volumen.',
        claves: [
          'Forrar, pintar, envolver, cubrir con papel o cartón → área (cm², m²).',
          'Llenar, cuánta agua, arena o tierra cabe → volumen (cm³, m³, L).',
          'Si te dan el volumen y dos medidas: la tercera = volumen : (las otras dos multiplicadas). Ej.: 120 : (6 • 5) = 4.',
          'Revisa que la unidad de la respuesta sea la correcta: cuadrada para área, cúbica para volumen.',
        ],
        ejemplos: [
          {
            enunciado: '¿Cuánto papel se necesita como mínimo para forrar una caja de 8 cm de largo, 6 cm de ancho y 5 cm de alto?',
            pasos: ['Forrar → área.', 'Caras: 8 • 6 = 48, 8 • 5 = 40, 6 • 5 = 30.', '2 • (48 + 40 + 30) = 2 • 118 = 236.'],
            respuesta: 'Se necesitan 236 cm² de papel.',
          },
          {
            enunciado: 'Un paralelepípedo tiene 120 cm³ de volumen, 6 cm de largo y 5 cm de ancho. ¿Cuánto mide su altura?',
            pasos: ['Largo • ancho = 6 • 5 = 30.', 'Altura = 120 : 30 = 4.'],
            respuesta: 'La altura es 4 cm.',
          },
        ],
      },
    ],
    errores: [
      'Confundir área (cm²) con volumen (cm³).',
      'En el área del paralelepípedo, sumar solo 3 caras y olvidar multiplicar por 2.',
      'Mezclar unidades: multiplicar metros con centímetros sin convertir.',
      'Pensar que 1 m³ = 100 cm³ (¡son 1 000 000 cm³!).',
    ],
    flash: [
      { p: 'Área de un cubo de arista a', r: '6 • a • a' },
      { p: 'Volumen de un paralelepípedo', r: 'largo • ancho • altura' },
      { p: '¿Cuántos cm³ tiene 1 L?', r: '1 000 cm³' },
      { p: '¿Cuántos litros caben en 1 m³?', r: '1 000 L' },
      { p: 'Volumen de un cubo de 5 cm de arista', r: '5 • 5 • 5 = 125 cm³' },
      { p: '¿Forrar una caja es área o volumen?', r: 'Área.' },
    ],
  },

  datos: {
    id: 'datos',
    nombre: 'Datos y probabilidades',
    icono: '📊',
    lema: 'Leer y comparar información',
    libro: 'Tomo 2 · Cap. 16 Datos (pp. 120–132)',
    contenidos: ['Tablas de datos', 'Gráficos de barra doble'],
    widget: 'barras',
    temas: [
      {
        id: 'tablas',
        titulo: 'Tablas de datos',
        pag: 'Tomo 2, pp. 120–126',
        idea: 'Una tabla organiza los datos en filas y columnas. La frecuencia es la cantidad de veces que se repite un dato.',
        claves: [
          'Lee el título y los encabezados de cada columna antes de responder.',
          'Para el total, suma todas las frecuencias de la columna.',
          'Busca el valor mayor (máximo), el menor (mínimo) y el que más se repite.',
          'Para comparar dos grupos, resta sus valores: la diferencia indica cuánto más o cuánto menos.',
          'Un diagrama de puntos muestra cada dato como un punto sobre una recta y permite ver rápido cómo se distribuyen.',
        ],
        ejemplos: [
          {
            enunciado: 'Lesiones en el colegio de Juan antes y después de una campaña: Patio 13 → 6, Pasillo 4 → 4, Salas 2 → 3, Gimnasio 10 → 11, Escaleras 5 → 1. ¿Fue efectiva la campaña?',
            pasos: ['Total antes: 13 + 4 + 2 + 10 + 5 = 34.', 'Total después: 6 + 4 + 3 + 11 + 1 = 25.', 'Disminuyeron en 34 − 25 = 9 lesiones, sobre todo en el patio (7 menos) y las escaleras (4 menos).', 'Pero aumentaron en salas y gimnasio: ahí hay que reforzar.'],
            respuesta: 'Sí, en general fue efectiva: hubo 9 lesiones menos.',
          },
        ],
      },
      {
        id: 'barras-dobles',
        titulo: 'Gráficos de barra doble',
        pag: 'Tomo 2, pp. 126–132',
        idea: 'Un gráfico de barras dobles usa pares de barras para mostrar las frecuencias de dos grupos de datos en un mismo gráfico. Así podemos compararlos visualmente.',
        claves: [
          'Partes: título, eje de las categorías, eje de la frecuencia con su escala y la leyenda.',
          'La leyenda indica qué grupo representa cada color. ¡Sin leyenda no se puede interpretar!',
          'Para leer una barra, mira hasta dónde llega y lee el valor en la escala (fíjate de cuánto en cuánto avanza).',
          'Para comparar una categoría, resta las dos barras del par.',
          'Para el total de un grupo, suma todas las barras de un mismo color.',
          'Al construir uno: usa la misma escala para ambos grupos, colores distintos y no olvides la leyenda.',
        ],
        ejemplos: [
          {
            enunciado: 'Observa el gráfico de las lesiones. ¿En qué lugar hubo la mayor disminución?',
            pasos: ['Compara cada par de barras: Patio 13 − 6 = 7; Pasillo 4 − 4 = 0; Escaleras 5 − 1 = 4.', 'En Salas y Gimnasio la barra de “después” es más alta: aumentaron.'],
            respuesta: 'La mayor disminución fue en el patio (7 lesiones menos).',
          },
        ],
      },
    ],
    errores: [
      'Leer mal la escala del gráfico (no siempre avanza de 1 en 1).',
      'Confundir los colores de la leyenda.',
      'Responder con el total de una sola barra cuando se pregunta por ambos grupos.',
      'Olvidar sumar todas las categorías al calcular un total.',
    ],
    flash: [
      { p: '¿Qué es la frecuencia?', r: 'La cantidad de veces que se repite un dato.' },
      { p: '¿Para qué sirve un gráfico de barras dobles?', r: 'Para comparar dos grupos de datos en las mismas categorías.' },
      { p: '¿Qué indica la leyenda?', r: 'Qué grupo representa cada color de barra.' },
      { p: '¿Cómo calculo la diferencia en una categoría?', r: 'Restando el valor de las dos barras.' },
    ],
  },
};

// Datos del gráfico de ejemplo (Tomo 2, p. 126).
export const LESIONES = {
  titulo: 'Lesiones antes y después de la campaña',
  ejeY: 'Cantidad de lesiones',
  categorias: ['Patio', 'Pasillo', 'Salas', 'Gimnasio', 'Escaleras'],
  series: [
    { nombre: 'Antes de la campaña', valores: [13, 4, 2, 10, 5] },
    { nombre: 'Después de la campaña', valores: [6, 4, 3, 11, 1] },
  ],
};
