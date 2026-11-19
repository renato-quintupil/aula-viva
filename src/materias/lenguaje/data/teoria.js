// Síntesis teórica basada en el Texto del Estudiante Lenguaje y Comunicación 6º Básico
// (Unidades 1 a 4) y en el temario de la Prueba de Síntesis del 2º semestre 2026.

export const PRUEBA = {
  asignatura: 'Lenguaje y Comunicación',
  curso: '6º Básico',
  fecha: '2026-11-20',
  fechaTexto: 'viernes 20 de noviembre',
  habilidades: [
    'Leer, comprender, relacionar, interpretar y reflexionar sobre la lectura de textos.',
    'Identificar propósito, características y estructura de cada tipo de texto.',
  ],
};

export const ORDEN_TIPOS = ['noticia', 'reportaje', 'infografia', 'biografia'];

export const TIPOS = {
  noticia: {
    id: 'noticia',
    nombre: 'Noticia',
    icono: '📰',
    color: 'var(--c-noticia)',
    lema: 'Lo que pasó, ¡recién!',
    proposito: 'Informar de manera objetiva sobre un hecho reciente (actual) que es de interés para la comunidad.',
    definicion:
      'La noticia es un texto informativo (no literario) que relata un hecho real y actual. Se publica en diarios, radios, televisión o sitios web, y responde a las preguntas básicas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?',
    caracteristicas: [
      'Relata hechos reales y recientes (ocurridos hace poco).',
      'Es objetiva: el periodista no da su opinión.',
      'Se escribe en tercera persona (él, ella, ellos).',
      'Usa un lenguaje claro, preciso y formal.',
      'Responde las 6 preguntas: qué, quién, cuándo, dónde, cómo y por qué.',
      'Incluye citas (lo que dicen las personas involucradas) entre comillas.',
      'Organiza la información en “pirámide invertida”: lo más importante va primero.',
      'Indica fecha, lugar y fuente (medio o agencia que la publica).',
    ],
    estructura: [
      { parte: 'Epígrafe o antetítulo', desc: 'Frase breve sobre el titular que indica la sección o el tema (ej.: “Cultura”). No siempre aparece.' },
      { parte: 'Titular', desc: 'Título breve y llamativo que resume el hecho principal. Es lo primero que se lee.' },
      { parte: 'Bajada', desc: 'Una o dos oraciones bajo el titular que amplían o complementan la información.' },
      { parte: 'Lead o entrada', desc: 'Primer párrafo. Contiene lo más importante y responde las preguntas básicas (qué, quién, cuándo, dónde).' },
      { parte: 'Cuerpo', desc: 'Párrafos que desarrollan los detalles, de mayor a menor importancia (pirámide invertida). Incluye citas y datos.' },
      { parte: 'Imagen y pie de foto', desc: 'Fotografía que muestra el hecho y una breve explicación debajo de ella.' },
    ],
    delLibro: [
      '“Mahani Teave, la pianista que cambió la fama mundial por Rapa Nui” (Agencia EFE, 3 de mayo de 2021). Fíjate cómo comienza: “Santiago de Chile, 3 may (EFE)”: lugar, fecha y fuente. Luego el lead cuenta quién es Mahani y qué hace hoy (Lección 11, p. 209).',
      'En la Lección 11 la noticia se compara con otros textos sobre la misma persona: identifica tipo de texto, propósito, emisor y receptor.',
    ],
    pistas: [
      'Tiene fecha y lugar al comienzo (ej.: “Temuco, 9 de octubre”).',
      'Habla de algo que pasó “ayer”, “este lunes”, “la semana pasada”.',
      'El primer párrafo ya te cuenta lo esencial.',
      'No hay opiniones del periodista; las opiniones aparecen solo como citas de otras personas.',
    ],
    errores: [
      'Confundir la fecha de publicación con la fecha en que ocurrió el hecho.',
      'Pensar que la bajada es el primer párrafo (la bajada va antes del lead, debajo del titular).',
      'Creer que las citas son la opinión del periodista: son palabras de las personas entrevistadas.',
    ],
    preguntasTipicas: [
      { p: '¿Cuál es el propósito de una noticia?', r: 'Informar sobre un hecho real y reciente de interés público.' },
      { p: '¿Qué parte de la noticia responde las preguntas básicas?', r: 'El lead o entrada (primer párrafo).' },
      { p: '¿Qué es la pirámide invertida?', r: 'Una forma de ordenar la información: de lo más importante a lo menos importante.' },
      { p: '¿Para qué sirven las citas entre comillas?', r: 'Para incluir las palabras exactas de las personas involucradas, lo que da veracidad al texto.' },
      { p: '¿Qué función cumple la bajada?', r: 'Amplía o complementa la información del titular.' },
    ],
  },

  reportaje: {
    id: 'reportaje',
    nombre: 'Reportaje',
    icono: '🔎',
    color: 'var(--c-reportaje)',
    lema: 'Investigar a fondo',
    proposito: 'Informar en profundidad sobre un tema de interés, investigándolo desde distintos ángulos.',
    definicion:
      'El reportaje es un texto informativo más extenso que la noticia. Investiga un tema (que no necesariamente es reciente) y lo explica en detalle usando datos, testimonios, entrevistas, descripciones e imágenes. Puede ser escrito o audiovisual (como el reportaje sobre el artista Hula de la Unidad 1).',
    caracteristicas: [
      'Trata un tema de interés en profundidad; no tiene que ser un hecho de ayer.',
      'Es más extenso que la noticia y requiere investigación previa.',
      'Incluye testimonios y entrevistas a especialistas o personas involucradas (citas).',
      'Usa datos, cifras, ejemplos y descripciones.',
      'Organiza el desarrollo con subtítulos (intertítulos).',
      'Suele comenzar con una entrada atractiva: una escena, una pregunta o una anécdota.',
      'Puede incluir fotografías, mapas, gráficos o infografías.',
      'El autor o la autora puede tener un estilo más personal que en la noticia.',
    ],
    estructura: [
      { parte: 'Título', desc: 'Llamativo; presenta el tema del reportaje.' },
      { parte: 'Bajada', desc: 'Resume de qué trata el reportaje y despierta el interés.' },
      { parte: 'Entrada o introducción', desc: 'Primer párrafo que capta la atención: describe una escena, cuenta una anécdota o plantea una pregunta.' },
      { parte: 'Desarrollo con subtítulos', desc: 'Presenta la información investigada en bloques, cada uno con su subtítulo. Incluye datos, testimonios y explicaciones.' },
      { parte: 'Cierre o conclusión', desc: 'Párrafo final que resume, reflexiona o deja una idea para pensar.' },
    ],
    delLibro: [
      '“‘La lucha recién ha comenzado’: la evolución de Greta Thunberg…” (BBC Mundo). Tiene subtítulos como “De la niñez al ‘activismo adulto’”, “Estar donde se hace el daño”, “Acciones legales” y entrevistas a un profesor de periodismo y a voceras de organizaciones (Lección 11, pp. 214-217).',
      'Reportaje audiovisual sobre Sean Yoro, “Hula”, artista que pinta en glaciares y barcos abandonados para denunciar problemas ambientales (Lección 2, p. 34).',
      'Síntesis de las Unidades 1 y 2: “Reportaje: informa sobre hechos”.',
    ],
    pistas: [
      'Es largo y tiene varios subtítulos.',
      'Aparecen muchas voces: expertos, testigos, protagonistas.',
      'Empieza como un relato (“Son las once de la noche en…”).',
      'Explica causas, consecuencias y soluciones de un tema.',
    ],
    errores: [
      'Confundirlo con la noticia: la noticia informa un hecho puntual y reciente; el reportaje profundiza en un tema.',
      'Pensar que el reportaje es una opinión: aunque tiene estilo personal, se basa en investigación y datos.',
    ],
    preguntasTipicas: [
      { p: '¿En qué se diferencia el reportaje de la noticia?', r: 'El reportaje profundiza en un tema con investigación, testimonios y datos; la noticia informa brevemente un hecho reciente.' },
      { p: '¿Para qué se usan los subtítulos en un reportaje?', r: 'Para organizar la información en temas y facilitar la lectura.' },
      { p: '¿Para qué se incluyen entrevistas a especialistas?', r: 'Para dar credibilidad y explicar el tema con la voz de quien sabe.' },
      { p: '¿Qué busca la entrada o introducción?', r: 'Captar la atención del lector, por ejemplo, describiendo una escena.' },
    ],
  },

  infografia: {
    id: 'infografia',
    nombre: 'Infografía',
    icono: '📊',
    color: 'var(--c-infografia)',
    lema: 'Informar con imágenes',
    proposito: 'Informar o explicar un tema de forma breve, visual y atractiva, combinando textos cortos con imágenes.',
    definicion:
      'La infografía es un texto informativo discontinuo: mezcla palabras e imágenes (íconos, dibujos, gráficos, mapas, líneas de tiempo, cifras) para que la información se entienda rápido. No se lee necesariamente de arriba hacia abajo: el lector puede recorrerla en distinto orden.',
    caracteristicas: [
      'Combina texto breve con recursos gráficos: íconos, ilustraciones, fotografías, gráficos, mapas y flechas.',
      'Es un texto discontinuo: la lectura no es lineal.',
      'Presenta datos clave, cifras y fechas destacadas.',
      'Usa colores, tamaños de letra y recuadros para jerarquizar la información.',
      'Sintetiza un tema: entrega mucha información en poco espacio.',
      'Indica la fuente de la información.',
    ],
    estructura: [
      { parte: 'Título', desc: 'Presenta el tema; suele ir en letras grandes.' },
      { parte: 'Bajada o subtítulo', desc: 'Breve texto que introduce o explica el tema.' },
      { parte: 'Cuerpo visual', desc: 'Bloques de información con íconos, imágenes, datos, líneas de tiempo o gráficos. Cada bloque trata un aspecto del tema.' },
      { parte: 'Fuente o créditos', desc: 'Indica de dónde se obtuvo la información y quién la elaboró.' },
    ],
    recursos: [
      { recurso: 'Presenta ideas nuevas', ej: 'El gráfico entrega datos que no están escritos en el texto.' },
      { recurso: 'Aclara información', ej: 'Un diagrama muestra cómo se ubican el Sol, la Luna y la Tierra.' },
      { recurso: 'Introduce un ejemplo', ej: 'Una fotografía muestra un caso concreto.' },
      { recurso: 'Sintetiza la información', ej: 'Una línea de tiempo resume la vida de una persona.' },
    ],
    delLibro: [
      '“Greta Thunberg, la niña del clima” (Lección 11, p. 213): presenta la información en frases cortas, imágenes e íconos: premios, “Hechos clave” en línea de tiempo, ascendencia y datos curiosos (“No viaja en avión”).',
      'Lección 8: se leyó una infografía con distintas visiones de los eclipses y se aprendió a relacionar los recursos gráficos con el texto en que están insertos (p. 157).',
      'Comparación del libro (p. 220): la infografía (Portal Ambiental) presenta la información en frases cortas, imágenes e íconos; el reportaje (BBC), en párrafos e imágenes. Ambos tienen el propósito de informar.',
    ],
    pistas: [
      'Hay más imágenes e íconos que párrafos largos.',
      'Aparecen cifras grandes, flechas, recuadros y colores.',
      'Puedes empezar a leer por cualquier recuadro.',
    ],
    errores: [
      'Mirar solo las imágenes sin leer los textos breves: ¡las preguntas suelen estar en los datos!',
      'Olvidar relacionar la imagen con el texto: pregúntate qué aporta cada recurso gráfico.',
    ],
    preguntasTipicas: [
      { p: '¿Cuál es el propósito de una infografía?', r: 'Informar o explicar un tema de forma breve y visual.' },
      { p: '¿Por qué se dice que es un texto discontinuo?', r: 'Porque combina texto e imágenes y no se lee necesariamente en orden lineal.' },
      { p: '¿Qué aporta una línea de tiempo en una infografía?', r: 'Sintetiza y ordena cronológicamente los hechos.' },
      { p: '¿Cómo relacionar un recurso gráfico con el texto?', r: 'Identificando qué hace la imagen: presenta ideas nuevas, aclara, ejemplifica o sintetiza.' },
    ],
  },

  biografia: {
    id: 'biografia',
    nombre: 'Biografía',
    icono: '👤',
    color: 'var(--c-biografia)',
    lema: 'La historia de una vida real',
    proposito: 'Dar a conocer la vida de una persona real, generalmente destacada, narrando sus principales hechos y aportes.',
    definicion:
      'La biografía es un texto que narra la vida de una persona real, escrita por otra persona. Se cuenta en tercera persona y en orden cronológico (desde el nacimiento hasta la muerte o el presente), con datos verificables como fechas, lugares y logros. Cuando la persona escribe su propia vida, se llama autobiografía y se escribe en primera persona (yo).',
    caracteristicas: [
      'Narra la vida de una persona real.',
      'Se escribe en tercera persona (“ella nació…”, “él estudió…”).',
      'Sigue un orden cronológico: de lo más antiguo a lo más reciente.',
      'Usa verbos en pasado (nació, estudió, viajó, recibió).',
      'Incluye datos precisos: fechas, lugares, nombres, obras y premios.',
      'Destaca los logros y el aporte de la persona a la sociedad.',
      'Usa marcadores temporales: “desde pequeña”, “en 1922”, “más tarde”, “finalmente”.',
    ],
    estructura: [
      { parte: 'Introducción', desc: 'Presenta a la persona: quién es, por qué es importante, cuándo y dónde nació.' },
      { parte: 'Desarrollo', desc: 'Cuenta en orden cronológico su infancia, familia, estudios, hechos importantes, obras y logros.' },
      { parte: 'Cierre', desc: 'Relata sus últimos años, su muerte (si falleció) o su presente, y destaca su legado o aporte.' },
    ],
    delLibro: [
      'Cápsulas de “Información biográfica acerca de los autores”, como la de María Ester Campillay: “Escritora, matriarca de la Comunidad Diaguita Campillay-Guacalagasta de Valparaíso” (Lección 9, p. 163).',
      'Reseña de “Martin Luther King. El hombre que defendió la igualdad de todas las personas”: “La presente biografía es una invitación a conocer más historias de personajes reales que pueden inspirar nuestras acciones” (p. 229).',
      'Los textos sobre Mahani Teave incluyen datos biográficos: “nació en Hawái y se mudó a Rapa Nui con tan solo un año” (Lección 11).',
    ],
    pistas: [
      'Aparecen muchas fechas y años en orden.',
      'Todo gira en torno a una sola persona real.',
      'Usa “nació”, “creció”, “estudió”, “falleció”.',
    ],
    errores: [
      'Confundir biografía (3ª persona, la escribe otro) con autobiografía (1ª persona, la escribe la misma persona).',
      'Pensar que es un cuento: la biografía narra hechos reales y verificables.',
    ],
    preguntasTipicas: [
      { p: '¿Cuál es el propósito de una biografía?', r: 'Dar a conocer la vida, los hechos y aportes de una persona real.' },
      { p: '¿En qué persona gramatical se escribe?', r: 'En tercera persona. La autobiografía, en primera.' },
      { p: '¿Cómo se ordenan los hechos?', r: 'En orden cronológico, desde el nacimiento hasta la muerte o el presente.' },
      { p: '¿Qué se presenta en la introducción?', r: 'Quién es la persona, por qué es importante y dónde y cuándo nació.' },
    ],
  },
};

export const COMPARACION = {
  criterios: ['Propósito', 'Tema', 'Extensión', 'Organización', 'Recursos', 'Persona gramatical'],
  filas: {
    noticia: [
      'Informar un hecho reciente',
      'Un acontecimiento actual',
      'Breve o media',
      'Pirámide invertida: titular, bajada, lead, cuerpo',
      'Citas, fotografía con pie de foto',
      'Tercera persona, objetiva',
    ],
    reportaje: [
      'Informar en profundidad sobre un tema',
      'Un tema de interés (no siempre reciente)',
      'Extensa',
      'Título, bajada, entrada, desarrollo con subtítulos, cierre',
      'Entrevistas, testimonios, datos, fotos',
      'Tercera persona; estilo más personal',
    ],
    infografia: [
      'Informar o explicar de forma visual',
      'Un tema, proceso o personaje sintetizado',
      'Breve, mucha información en poco espacio',
      'Título, bajada, bloques visuales, fuente (lectura no lineal)',
      'Íconos, gráficos, cifras, líneas de tiempo, flechas',
      'Frases cortas e impersonales',
    ],
    biografia: [
      'Dar a conocer la vida de una persona real',
      'La vida de una persona destacada',
      'Media o extensa',
      'Introducción, desarrollo cronológico, cierre',
      'Fechas, lugares, obras, logros',
      'Tercera persona (autobiografía: primera)',
    ],
  },
};

export const HABILIDADES = [
  {
    id: 'localizar',
    nombre: 'Localizar',
    icono: '📍',
    desc: 'Encontrar información explícita: la que está escrita en el texto y se puede subrayar.',
    pregunta: ['¿Cuándo ocurrió…?', '¿Dónde…?', '¿Cuántos…?', 'Según el texto, ¿qué…?'],
    tip: 'Vuelve al texto y busca las palabras clave de la pregunta. ¡No respondas de memoria!',
  },
  {
    id: 'interpretar',
    nombre: 'Interpretar',
    icono: '💡',
    desc: 'Comprender información implícita: la que no está escrita, pero se deduce a partir de pistas (marcas textuales). Incluye inferir, entender el significado de palabras por el contexto y el lenguaje figurado.',
    pregunta: ['¿Por qué crees que…?', '¿Qué significa la expresión…?', '¿Qué se puede concluir…?', '¿Qué sentía…?'],
    tip: 'Une las pistas del texto con lo que tú sabes. Tu respuesta debe poder justificarse con el texto.',
  },
  {
    id: 'relacionar',
    nombre: 'Relacionar',
    icono: '🔗',
    desc: 'Conectar partes del texto entre sí, el texto con imágenes o gráficos, dos textos entre ellos, o el texto con tus experiencias y conocimientos.',
    pregunta: ['¿Qué aporta la imagen al texto?', '¿Qué tienen en común ambos textos?', '¿Para qué se incluye la cita…?', '¿Qué función cumple…?'],
    tip: 'Pregúntate: ¿qué hace esta parte? ¿Aclara, ejemplifica, amplía o resume?',
  },
  {
    id: 'reflexionar',
    nombre: 'Reflexionar',
    icono: '🤔',
    desc: 'Opinar y evaluar el texto: su contenido, su forma y sus recursos, fundamentando con argumentos y evidencia del texto.',
    pregunta: ['¿Estás de acuerdo con…? Fundamenta.', '¿Qué te parece la actitud de…?', '¿Cuál texto es más adecuado para…?'],
    tip: 'Da tu opinión + un argumento + un ejemplo o cita del texto.',
  },
  {
    id: 'estructura',
    nombre: 'Estructura y propósito',
    icono: '🧩',
    desc: 'Reconocer el tipo de texto, su propósito comunicativo, sus características y sus partes.',
    pregunta: ['¿Qué tipo de texto es?', '¿Cuál es su propósito?', '¿Qué parte del texto es…?', '¿Qué característica se observa en…?'],
    tip: 'Mira la forma del texto: ¿tiene titular y lead? ¿subtítulos y entrevistas? ¿íconos? ¿fechas de una vida?',
  },
];

export const ESTRATEGIAS = [
  {
    id: 'explicita',
    titulo: 'Información explícita e implícita',
    fuente: 'Síntesis Unidad 1 (p. 56)',
    pasos: [
      'Información explícita: es la que se puede subrayar en el texto.',
      'Información implícita: es la que se deduce a partir de las marcas textuales (pistas).',
    ],
    ejemplo: 'Texto: “Tomás llegó empapado y dejó el paraguas roto en la entrada.” Explícito: Tomás dejó el paraguas en la entrada. Implícito: estaba lloviendo y había viento fuerte.',
  },
  {
    id: 'inferir',
    titulo: 'Elaborar inferencias',
    fuente: 'Síntesis Unidad 2 (p. 116)',
    pasos: [
      'Busca la información clave del texto.',
      'Relaciónala con tus propias experiencias y conocimientos.',
      'Haz conexiones y saca conclusiones.',
    ],
    ejemplo: 'Si en la noticia dicen que “se inscribieron 20 familias en el calendario de riego”, puedes inferir que la comunidad apoya el proyecto.',
  },
  {
    id: 'conclusiones',
    titulo: 'Llegar a conclusiones sustentadas en el texto',
    fuente: 'Lección 10 (p. 206)',
    pasos: [
      'Realiza una lectura comprensiva: entiende los momentos más importantes.',
      'Identifica características de las personas, sus acciones y lo que dicen.',
      'Relaciona lo que lees con lo que ya sabes sobre el tema.',
      'A partir de todo lo anterior, llega a una conclusión.',
    ],
    ejemplo: 'Si alguien “sonríe y da pequeños saltos” al recibir una noticia, puedo concluir que está contento y que la noticia es positiva.',
  },
  {
    id: 'resumir',
    titulo: 'Resumir un texto',
    fuente: 'Lección 11 (p. 208)',
    pasos: [
      'Identifica el tema central: ¿sobre qué se habla?',
      'Busca párrafo a párrafo los temas que se desarrollan. Subraya palabras clave.',
      'Identifica la información más importante: omite detalles, ejemplos y descripciones complementarias.',
      'Elabora el resumen.',
    ],
    ejemplo: 'Tema central de la noticia del huerto: estudiantes recuperan un basural y crean un huerto comunitario.',
  },
  {
    id: 'graficos',
    titulo: 'Relacionar recursos gráficos con el texto',
    fuente: 'Lección 8 (p. 157)',
    pasos: [
      'Identifica el género discursivo y la información central: ¿de qué trata?, ¿cuál es su propósito?',
      'Comprende la información del recurso gráfico: ¿es una imagen, un mapa, un esquema, un gráfico? ¿Qué información entrega?',
      'Relaciona el recurso con el texto: ¿presenta ideas nuevas?, ¿aclara información?, ¿introduce un ejemplo?, ¿sintetiza?',
    ],
    ejemplo: 'En una infografía sobre eclipses, el diagrama Sol–Luna–Tierra aclara la explicación escrita.',
  },
  {
    id: 'comparar',
    titulo: 'Comparar dos textos no literarios del mismo tema',
    fuente: 'Lección 11 (p. 220)',
    pasos: [
      'Lee cada texto con cuidado. Subraya las ideas principales.',
      'Identifica el tipo de texto, su propósito, su emisor y su receptor.',
      'Reconoce cómo se presenta la información (párrafos, frases cortas, imágenes, íconos, gráficos).',
      'Crea tus propios criterios de comparación (temas, datos, título…).',
      'Identifica similitudes y diferencias y saca conclusiones: ¿cuál es más completo?, ¿más llamativo?, ¿más adecuado para quien no conoce el tema?',
    ],
    ejemplo: 'Infografía de Greta (Portal Ambiental): frases cortas e íconos. Reportaje de Greta (BBC): párrafos e imágenes. Ambos informan sobre su activismo.',
  },
  {
    id: 'conectores',
    titulo: 'Conectores para comparar y contrastar',
    fuente: 'Lección 8 (p. 161)',
    pasos: [
      'Similitudes: asimismo, de igual manera, al igual que, de la misma manera, de manera similar.',
      'Diferencias: por un lado, a diferencia de, en cambio, por el contrario, mientras que, por su parte.',
    ],
    ejemplo: 'La infografía usa íconos; en cambio, la biografía usa párrafos. Al igual que la biografía, la infografía presenta fechas.',
  },
];
