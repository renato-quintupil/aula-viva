// Textos de práctica creados para preparar la prueba.
// Las noticias y reportajes son ficticios (personas entrevistadas inventadas),
// aunque los datos científicos y biográficos son reales.
//
// Formato de preguntas:
//  t: 'mc' (alternativas) | 'vf' (verdadero/falso) | 'unir' | 'ordenar' | 'abierta'
//  h: habilidad -> localizar | interpretar | relacionar | reflexionar | estructura

export const TEXTOS = [
  // ───────────────────────────── NOTICIAS ─────────────────────────────
  {
    id: 'n1',
    tipo: 'noticia',
    titulo: 'Estudiantes transforman un basural en huerto comunitario',
    nivel: 'Básico',
    contenido: {
      epigrafe: 'Medioambiente',
      titular: 'Estudiantes de Puente Alto transforman un sitio eriazo en huerto comunitario',
      bajada:
        'Alumnos de sexto básico trabajaron durante cuatro meses junto a vecinos y apoderados. Hoy cosechan lechugas, habas y cilantro que comparten con la comunidad.',
      datos: 'Puente Alto, sábado 14 de noviembre de 2026 · Diario La Cordillera',
      imagen: { emoji: '🥬🌻👧🧑‍🌾', pie: 'Los estudiantes muestran la primera cosecha de lechugas del huerto.' },
      lead:
        'Un grupo de 32 estudiantes de sexto básico de una escuela de Puente Alto inauguró ayer, viernes 13 de noviembre, un huerto comunitario en un terreno abandonado ubicado frente a su establecimiento. El proyecto, que comenzó en julio, buscaba recuperar un espacio que se había convertido en un basural.',
      cuerpo: [
        'La idea surgió en la clase de Ciencias Naturales, cuando la profesora pidió a los alumnos identificar un problema ambiental de su barrio. “Todos los días pasábamos por ese sitio lleno de basura y nos daba pena”, contó Tomás, uno de los estudiantes.',
        'Para limpiar el terreno, los niños organizaron tres jornadas de trabajo los sábados, en las que participaron cerca de 50 vecinos. En total, retiraron más de dos toneladas de desechos, entre ellos neumáticos, escombros y bolsas plásticas.',
        'Luego, con el apoyo de la municipalidad, que donó tierra de hoja y herramientas, construyeron doce camas de cultivo con madera reciclada. Allí plantaron lechugas, habas, cilantro, acelgas y flores que atraen a las abejas.',
        '“Lo más importante no son las verduras, sino que los niños aprendieron que pueden cambiar su entorno”, señaló la directora del establecimiento.',
        'Los estudiantes esperan que el huerto sea cuidado por la comunidad durante las vacaciones de verano. Para ello, crearon un calendario de riego en el que ya se inscribieron 20 familias.',
      ],
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Cuándo se inauguró el huerto?', o: ['En julio de 2026.', 'El viernes 13 de noviembre.', 'El sábado 14 de noviembre.', 'Un domingo de agosto.'], c: 1, e: 'El lead dice “inauguró ayer, viernes 13 de noviembre”. El 14 de noviembre es la fecha en que se publicó la noticia, no la del hecho.' },
      { t: 'mc', h: 'estructura', q: '¿Cuál es el propósito principal de este texto?', o: ['Convencer a los vecinos de que reciclen.', 'Contar la vida de un estudiante destacado.', 'Informar sobre un hecho reciente de interés para la comunidad.', 'Entretener con una historia inventada.'], c: 2, e: 'Es una noticia: informa un hecho real y reciente (la inauguración del huerto).' },
      { t: 'unir', h: 'estructura', q: 'Une cada parte de la noticia con su fragmento.', pares: [['Epígrafe', 'Medioambiente'], ['Titular', 'Estudiantes de Puente Alto transforman un sitio eriazo…'], ['Bajada', 'Alumnos de sexto básico trabajaron durante cuatro meses…'], ['Lead', 'Un grupo de 32 estudiantes… inauguró ayer…'], ['Cuerpo', 'Para limpiar el terreno, los niños organizaron…']], e: 'El epígrafe indica el tema; el titular resume; la bajada amplía; el lead entrega lo esencial y el cuerpo desarrolla los detalles.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué quiere decir la directora con “Lo más importante no son las verduras”?', o: ['Que las verduras del huerto no se pueden comer.', 'Que valora más el aprendizaje de los niños que la cosecha.', 'Que el huerto fue un fracaso.', 'Que prefiere plantar flores.'], c: 1, e: 'La segunda parte de la cita lo aclara: “los niños aprendieron que pueden cambiar su entorno”.' },
      { t: 'vf', h: 'localizar', q: 'La municipalidad donó tierra de hoja y herramientas.', c: true, e: 'En el cuerpo de la noticia: “con el apoyo de la municipalidad, que donó tierra de hoja y herramientas”.' },
      { t: 'vf', h: 'localizar', q: 'Los estudiantes retiraron menos de una tonelada de basura.', c: false, e: 'Retiraron “más de dos toneladas de desechos”.' },
      { t: 'mc', h: 'interpretar', q: 'Según el contexto, un “sitio eriazo” es:', o: ['Un terreno sin cultivar ni construir.', 'Un parque con juegos.', 'Una escuela abandonada.', 'Un tipo de huerto.'], c: 0, e: 'El lead lo describe como “un terreno abandonado” que “se había convertido en un basural”.' },
      { t: 'mc', h: 'relacionar', q: 'La expresión “frente a su establecimiento” responde a la pregunta:', o: ['¿Qué?', '¿Cuándo?', '¿Dónde?', '¿Por qué?'], c: 2, e: 'Indica el lugar del hecho: responde ¿dónde?' },
      { t: 'mc', h: 'interpretar', q: '¿Por qué crees que plantaron flores que atraen a las abejas?', o: ['Para vender miel.', 'Porque las abejas ayudan a polinizar los cultivos.', 'Para decorar la entrada de la escuela.', 'Porque la municipalidad lo exigió.'], c: 1, e: 'Es una inferencia: las abejas transportan polen y así ayudan a que las plantas den frutos.' },
      { t: 'mc', h: 'relacionar', q: '¿Para qué se incluyen las palabras de Tomás entre comillas?', o: ['Para mostrar la opinión del periodista.', 'Para dar la voz de un protagonista y aportar veracidad.', 'Para inventar un diálogo entretenido.', 'Para corregir un error del texto.'], c: 1, e: 'Las citas son palabras textuales de personas involucradas; dan credibilidad a la noticia.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede concluir del dato “ya se inscribieron 20 familias”?', o: ['Que nadie quiere cuidar el huerto.', 'Que la comunidad apoya y se compromete con el proyecto.', 'Que el huerto se cerrará en verano.', 'Que solo los estudiantes regarán.'], c: 1, e: 'Que muchas familias se inscriban muestra compromiso de la comunidad.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Qué problema de tu barrio o colegio se podría resolver con un proyecto parecido? Explica qué harías, usando información de la noticia como ejemplo.', pauta: 'Una buena respuesta: (1) nombra un problema concreto (ej.: basura en la plaza), (2) propone acciones parecidas a las de la noticia (jornadas de limpieza, pedir apoyo a la municipalidad, organizar a los vecinos) y (3) explica por qué serviría.' },
    ],
  },
  {
    id: 'n2',
    tipo: 'noticia',
    titulo: 'Niña de 11 años gana concurso regional de cuentos',
    nivel: 'Intermedio',
    contenido: {
      epigrafe: 'Cultura',
      titular: 'Niña de 11 años gana concurso regional de cuentos con un relato sobre su abuela',
      bajada:
        'Amanda Huenchullán, estudiante de sexto básico de Temuco, se impuso entre más de 600 participantes. Su cuento será publicado en una antología que llegará a las bibliotecas escolares de la región.',
      datos: 'Temuco, viernes 9 de octubre de 2026 · Diario El Sur Austral',
      imagen: { emoji: '🏆📖👧🧶', pie: 'Amanda recibe el premio en el Teatro Municipal de Temuco.' },
      lead:
        'La estudiante Amanda Huenchullán, de 11 años, obtuvo el primer lugar del Concurso Regional de Cuento Escolar de La Araucanía, cuya premiación se realizó ayer, jueves 8 de octubre, en el Teatro Municipal de Temuco. Su relato, titulado “El telar de la abuela Rosa”, fue elegido por un jurado de tres escritores entre más de 600 textos.',
      cuerpo: [
        'El cuento narra la historia de una niña que aprende a tejer en el telar de su abuela y, mientras lo hace, escucha historias sobre sus antepasados. “Quise escribir sobre mi chuchu, porque ella me enseñó que cada dibujo del tejido tiene un significado”, explicó Amanda, quien usó la palabra en mapudungun para referirse a su abuela materna.',
        'Según el jurado, el texto destacó “por su lenguaje sencillo y lleno de imágenes, y por la ternura con que retrata la relación entre generaciones”.',
        'El concurso, organizado por la Secretaría Regional de Educación, se realiza desde 2015 y está dirigido a estudiantes de quinto a octavo básico. Este año recibió una cifra récord de participantes: un 40 % más que en 2025.',
        'Además del primer lugar, Amanda recibió una colección de 50 libros para la biblioteca de su escuela. “Ahora todos mis compañeros van a poder leer más”, dijo emocionada.',
        'La antología con los diez cuentos ganadores se presentará en marzo de 2027.',
      ],
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Entre cuántos textos fue elegido el cuento de Amanda?', o: ['Diez.', 'Cincuenta.', 'Más de 600.', 'Tres.'], c: 2, e: 'Lead: “fue elegido por un jurado de tres escritores entre más de 600 textos”.' },
      { t: 'unir', h: 'relacionar', q: 'Une cada pregunta básica de la noticia con su respuesta.', pares: [['¿Qué?', 'Ganó el concurso regional de cuento'], ['¿Quién?', 'Amanda Huenchullán, de 11 años'], ['¿Cuándo?', 'El jueves 8 de octubre'], ['¿Dónde?', 'En el Teatro Municipal de Temuco'], ['¿Por qué?', 'Por su lenguaje lleno de imágenes y su ternura']], e: 'El lead y el cuerpo responden las preguntas básicas de toda noticia.' },
      { t: 'mc', h: 'interpretar', q: 'Según el texto, ¿qué significa la palabra “chuchu”?', o: ['Telar.', 'Abuela materna.', 'Cuento.', 'Antepasado lejano.'], c: 1, e: 'El texto lo aclara: “usó la palabra en mapudungun para referirse a su abuela materna”.' },
      { t: 'vf', h: 'localizar', q: 'El concurso se realiza por primera vez en 2026.', c: false, e: 'Se realiza “desde 2015”.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué significa “cifra récord de participantes”?', o: ['La menor cantidad de participantes.', 'La mayor cantidad de participantes registrada hasta ahora.', 'Una cantidad igual a la del año anterior.', 'Un número secreto.'], c: 1, e: 'Récord es la marca más alta; el texto agrega que hubo “un 40 % más que en 2025”.' },
      { t: 'mc', h: 'estructura', q: '¿Qué función cumple la bajada en esta noticia?', o: ['Opina sobre el cuento.', 'Amplía el titular con datos importantes: nombre, curso y cantidad de participantes.', 'Cierra la noticia con una reflexión.', 'Indica la fuente de la información.'], c: 1, e: 'La bajada complementa al titular con información relevante.' },
      { t: 'mc', h: 'relacionar', q: '¿Por qué Amanda dice “Ahora todos mis compañeros van a poder leer más”?', o: ['Porque ganó un viaje.', 'Porque su cuento se leerá en clases.', 'Porque recibió 50 libros para la biblioteca de su escuela.', 'Porque la escuela tendrá más horas de lectura.'], c: 2, e: 'La cita se relaciona con la oración anterior: recibió “una colección de 50 libros para la biblioteca”.' },
      { t: 'ordenar', h: 'estructura', q: 'Ordena las partes de la noticia de arriba hacia abajo.', items: ['Epígrafe: Cultura', 'Titular', 'Bajada', 'Lead', 'Cuerpo'], e: 'Epígrafe → titular → bajada → lead → cuerpo.' },
      { t: 'mc', h: 'estructura', q: '¿Qué párrafo podría eliminarse con menor pérdida de información importante, según la pirámide invertida?', o: ['El lead.', 'El último: “La antología… se presentará en marzo de 2027”.', 'El titular.', 'La bajada.'], c: 1, e: 'En la pirámide invertida, la información menos importante va al final.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede inferir sobre la relación de Amanda con su abuela?', o: ['Casi no se conocen.', 'Es cercana: la abuela le enseña tradiciones y Amanda la admira.', 'La abuela es escritora famosa.', 'Amanda no sabe tejer.'], c: 1, e: 'Amanda dice que su abuela “le enseñó” el significado del tejido y escribió sobre ella: hay cariño y cercanía.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Crees que es importante escribir sobre las tradiciones familiares, como hizo Amanda? Fundamenta con al menos un argumento.', pauta: 'Una buena respuesta da una opinión clara (sí/no), un argumento (ej.: ayuda a que las tradiciones no se pierdan, conecta generaciones) y un ejemplo del texto (los dibujos del tejido tienen significado).' },
    ],
  },

  // ───────────────────────────── REPORTAJES ─────────────────────────────
  {
    id: 'r1',
    tipo: 'reportaje',
    titulo: 'Abejas nativas: las pequeñas guardianas de Chile',
    nivel: 'Intermedio',
    contenido: {
      titulo: 'Abejas nativas: las pequeñas guardianas que Chile necesita conocer',
      bajada:
        'Aunque la mayoría de las personas solo conoce a la abeja de la miel, en Chile viven cientos de especies de abejas nativas. Investigamos quiénes son, por qué son importantes y qué amenazas enfrentan.',
      autor: 'Por el equipo de Revista Explora Joven',
      imagen: { emoji: '🐝🌼🌿', pie: 'Una abeja nativa visita una flor en un cerro de Peñalolén.' },
      entrada:
        'Es una mañana de primavera en un cerro de Peñalolén. Entre las flores amarillas de un arbusto, un pequeño insecto de color verde metálico va de flor en flor. No es una mosca ni una avispa: es una abeja nativa, una de las cientos de especies que habitan nuestro país y que casi nadie conoce.',
      secciones: [
        {
          subtitulo: 'Mucho más que miel',
          parrafos: [
            'Cuando pensamos en abejas, imaginamos panales y miel. Sin embargo, la abeja de la miel llegó a Chile desde Europa en el siglo XIX. Antes de su llegada, ya existían en nuestro territorio más de 400 especies de abejas nativas, muchas de las cuales solo viven en Chile.',
            'La mayoría de ellas son solitarias: no forman colmenas ni producen miel para almacenar. Cada hembra construye su propio nido, generalmente en el suelo o dentro de tallos y maderas.',
          ],
        },
        {
          subtitulo: 'Trabajadoras invisibles',
          parrafos: [
            'Las abejas nativas cumplen una función fundamental: la polinización. Al visitar las flores, transportan el polen de una planta a otra, lo que permite que se formen frutos y semillas.',
            '“Muchas plantas nativas evolucionaron junto a estas abejas. Si ellas desaparecen, esas plantas también podrían desaparecer”, explica Camila Rojas, bióloga especialista en insectos.',
          ],
        },
        {
          subtitulo: 'El abejorro que pierde terreno',
          parrafos: [
            'Un caso que preocupa a los científicos es el del abejorro chileno o moscardón, uno de los abejorros más grandes del mundo, de color anaranjado y pelaje abundante. En las últimas décadas su población ha disminuido drásticamente, en parte por la llegada de abejorros europeos que compiten con él por alimento y le transmiten enfermedades.',
          ],
        },
        {
          subtitulo: '¿Cómo podemos ayudar?',
          parrafos: [
            'Los especialistas recomiendan acciones simples: plantar flores nativas en jardines y balcones, evitar el uso de pesticidas y dejar pequeños espacios de tierra sin pavimentar, donde las abejas solitarias puedan hacer sus nidos.',
            '“Un macetero con flores nativas en un balcón ya es un restaurante para ellas”, comenta Rojas. Martín, de 12 años, lo tomó en serio: junto a su papá construyó un “hotel de abejas” con cañas de bambú. “Ya llegaron tres huéspedes”, cuenta orgulloso.',
          ],
        },
      ],
      cierre:
        'Pequeñas, silenciosas y casi invisibles, las abejas nativas sostienen buena parte de la vida que nos rodea. Conocerlas es el primer paso para protegerlas.',
    },
    preguntas: [
      { t: 'mc', h: 'estructura', q: '¿Cuál es el propósito de este texto?', o: ['Informar un hecho ocurrido ayer.', 'Informar en profundidad sobre las abejas nativas, sus funciones y amenazas.', 'Narrar la vida de Camila Rojas.', 'Vender miel de abejas nativas.'], c: 1, e: 'Es un reportaje: investiga un tema desde varios ángulos (quiénes son, importancia, amenazas, soluciones).' },
      { t: 'mc', h: 'estructura', q: '¿Qué función cumplen los subtítulos (“Mucho más que miel”, “Trabajadoras invisibles”…)?', o: ['Separar la información en temas para facilitar la lectura.', 'Indicar la fecha del reportaje.', 'Mostrar la opinión del autor.', 'Reemplazar a las imágenes.'], c: 0, e: 'Los subtítulos organizan el desarrollo del reportaje en bloques temáticos.' },
      { t: 'mc', h: 'estructura', q: '¿Cómo comienza el reportaje (entrada)?', o: ['Con una definición de diccionario.', 'Con una cifra estadística.', 'Describiendo una escena para captar la atención.', 'Con una opinión del autor.'], c: 2, e: '“Es una mañana de primavera en un cerro de Peñalolén…”: describe una escena, recurso típico de la entrada del reportaje.' },
      { t: 'mc', h: 'localizar', q: '¿De dónde llegó la abeja de la miel a Chile?', o: ['De Asia.', 'De Europa.', 'De África.', 'Siempre vivió en Chile.'], c: 1, e: '“La abeja de la miel llegó a Chile desde Europa en el siglo XIX”.' },
      { t: 'vf', h: 'localizar', q: 'La mayoría de las abejas nativas viven en colmenas.', c: false, e: '“La mayoría de ellas son solitarias: no forman colmenas”.' },
      { t: 'mc', h: 'interpretar', q: '“Un macetero con flores nativas en un balcón ya es un restaurante para ellas”. Esta expresión significa que:', o: ['Las abejas comen en restaurantes.', 'El macetero les ofrece alimento.', 'Hay que vender flores.', 'Las abejas viven en los balcones.'], c: 1, e: 'Es lenguaje figurado: compara las flores con un restaurante porque ahí las abejas obtienen alimento (néctar y polen).' },
      { t: 'mc', h: 'relacionar', q: '¿Para qué se incluye la opinión de Camila Rojas, bióloga?', o: ['Para entretener.', 'Para aportar la voz de una especialista y dar credibilidad.', 'Para contar su biografía.', 'Para contradecir el texto.'], c: 1, e: 'Las entrevistas a especialistas son una característica del reportaje.' },
      { t: 'mc', h: 'interpretar', q: 'Según el texto, ¿por qué ha disminuido el abejorro chileno?', o: ['Por el frío del sur.', 'Por la competencia y enfermedades de abejorros europeos, entre otras causas.', 'Porque produce poca miel.', 'Porque los niños construyen hoteles de abejas.'], c: 1, e: '“En parte por la llegada de abejorros europeos que compiten con él por alimento y le transmiten enfermedades”.' },
      { t: 'unir', h: 'relacionar', q: 'Une cada subtítulo con su idea principal.', pares: [['Mucho más que miel', 'En Chile hay más de 400 especies nativas, la mayoría solitarias'], ['Trabajadoras invisibles', 'Las abejas polinizan las plantas'], ['El abejorro que pierde terreno', 'El moscardón está disminuyendo'], ['¿Cómo podemos ayudar?', 'Acciones simples para proteger a las abejas']], e: 'Cada subtítulo anticipa la idea principal de su sección.' },
      { t: 'mc', h: 'estructura', q: '¿Qué diferencia a este reportaje de una noticia?', o: ['El reportaje es más breve.', 'El reportaje profundiza en un tema que no es necesariamente un hecho reciente.', 'El reportaje no usa citas.', 'El reportaje es un texto literario.'], c: 1, e: 'La noticia informa un hecho puntual reciente; el reportaje investiga y profundiza un tema.' },
      { t: 'vf', h: 'interpretar', q: 'El cierre del reportaje invita a proteger a las abejas nativas.', c: true, e: '“Conocerlas es el primer paso para protegerlas”.' },
      { t: 'abierta', h: 'reflexionar', q: 'Propón una acción concreta para ayudar a las abejas nativas en tu colegio. Fundamenta con información del reportaje.', pauta: 'Ejemplo: plantar flores nativas en un rincón del patio, porque el reportaje dice que las flores son “un restaurante” para ellas; o dejar tierra sin pavimentar para sus nidos.' },
    ],
  },
  {
    id: 'r2',
    tipo: 'reportaje',
    titulo: 'Cielos oscuros: el tesoro del norte de Chile',
    nivel: 'Avanzado',
    contenido: {
      titulo: 'Cielos oscuros: el tesoro que el norte de Chile quiere proteger',
      bajada:
        'El norte de Chile tiene algunos de los cielos más limpios del planeta para observar el universo. Pero la luz de las ciudades amenaza ese privilegio. Conversamos con astrónomos, guías y vecinos para entender el problema.',
      autor: 'Por Sofía Araya, periodista científica',
      imagen: { emoji: '🌌🔭🏜️', pie: 'La Vía Láctea sobre un observatorio turístico del valle del Elqui.' },
      entrada:
        'Son las once de la noche en el valle del Elqui. Un grupo de turistas guarda silencio frente a un telescopio. Arriba, la Vía Láctea cruza el cielo como un río de leche. “Mucha gente se emociona hasta las lágrimas, porque nunca había visto tantas estrellas”, cuenta Rodrigo, guía de un observatorio turístico.',
      secciones: [
        {
          subtitulo: '¿Por qué el norte?',
          parrafos: [
            'El norte de Chile reúne condiciones únicas: gran altura, muy poca humedad y cientos de noches despejadas al año. Por eso, allí se han instalado algunos de los observatorios más importantes del mundo, como ALMA, en el llano de Chajnantor, y el Observatorio Paranal, ambos en la Región de Antofagasta.',
          ],
        },
        {
          subtitulo: 'La amenaza de la luz',
          parrafos: [
            'La contaminación lumínica es el exceso de luz artificial que se dirige hacia el cielo. Proviene de luminarias mal diseñadas, letreros publicitarios y edificios iluminados. Ese resplandor “borra” las estrellas más débiles y dificulta el trabajo de los científicos.',
            'Una astrónoma consultada para este reportaje lo explica con una comparación: “Es como intentar ver la luz de una vela mientras alguien te apunta con una linterna a los ojos”.',
          ],
        },
        {
          subtitulo: 'No solo es un problema para la ciencia',
          parrafos: [
            'La luz artificial en exceso también afecta a los animales. En el norte, los polluelos de golondrina de mar, aves que anidan en el desierto, se desorientan con las luces de las ciudades y caen en calles y patios, donde no pueden sobrevivir sin ayuda.',
            '“Cada otoño encontramos pajaritos en el patio del colegio y los llevamos a un centro de rescate”, relata Javiera, estudiante de octavo básico de Antofagasta.',
          ],
        },
        {
          subtitulo: 'Una norma para cuidar las estrellas',
          parrafos: [
            'Chile cuenta con una norma lumínica que regula cómo deben ser las luminarias, para que la luz apunte hacia el suelo y no hacia el cielo. Los expertos señalan que cumplirla también permite ahorrar energía.',
          ],
        },
      ],
      cierre:
        'Mirar las estrellas es una experiencia que ha acompañado a la humanidad desde siempre. Proteger la oscuridad de la noche es, también, proteger nuestra conexión con el universo.',
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Qué condiciones hacen que el norte de Chile sea ideal para observar el cielo?', o: ['Mucha lluvia y bosques.', 'Gran altura, poca humedad y muchas noches despejadas.', 'Ciudades grandes e iluminadas.', 'Cercanía al Polo Sur.'], c: 1, e: 'Sección “¿Por qué el norte?”.' },
      { t: 'mc', h: 'interpretar', q: '“La Vía Láctea cruza el cielo como un río de leche”. ¿Qué recurso se usa?', o: ['Una comparación, para describir cómo se ve la Vía Láctea.', 'Una cifra estadística.', 'Una cita de un experto.', 'Una onomatopeya.'], c: 0, e: 'El nexo “como” relaciona la Vía Láctea con un río de leche: es una comparación que crea una imagen visual.' },
      { t: 'mc', h: 'localizar', q: '¿Qué es la contaminación lumínica, según el texto?', o: ['La basura que dejan los turistas.', 'El exceso de luz artificial dirigida hacia el cielo.', 'El humo de las fábricas.', 'La luz de las estrellas.'], c: 1, e: 'El texto la define en la sección “La amenaza de la luz”.' },
      { t: 'mc', h: 'relacionar', q: '¿Para qué se incluye la comparación de la astrónoma (“la vela y la linterna”)?', o: ['Para aclarar, con un ejemplo cotidiano, cómo la luz artificial impide ver las estrellas.', 'Para vender linternas.', 'Para contar una anécdota de su infancia.', 'Para cambiar de tema.'], c: 0, e: 'La comparación ayuda a entender un concepto científico con un ejemplo fácil.' },
      { t: 'mc', h: 'interpretar', q: '¿Por qué crees que algunos turistas “se emocionan hasta las lágrimas”?', o: ['Porque hace mucho frío.', 'Porque en las ciudades, por la contaminación lumínica, casi no se ven estrellas.', 'Porque el telescopio es muy caro.', 'Porque el guía les cuenta una historia triste.'], c: 1, e: 'Inferencia: “nunca había visto tantas estrellas”; en las ciudades la luz artificial las oculta.' },
      { t: 'vf', h: 'localizar', q: 'La contaminación lumínica solo afecta a los astrónomos.', c: false, e: 'El texto explica que también afecta a animales como las golondrinas de mar.' },
      { t: 'mc', h: 'relacionar', q: '¿Qué aporta el testimonio de Javiera?', o: ['Un dato científico sobre telescopios.', 'Un ejemplo real y cercano de cómo la luz afecta a las aves.', 'La opinión del periodista.', 'La definición de golondrina de mar.'], c: 1, e: 'Los testimonios de personas comunes muestran casos concretos del tema.' },
      { t: 'ordenar', h: 'estructura', q: 'Ordena la estructura de este reportaje.', items: ['Título', 'Bajada', 'Entrada (escena en el valle del Elqui)', 'Desarrollo con subtítulos', 'Cierre'], e: 'Título → bajada → entrada → desarrollo con subtítulos → cierre.' },
      { t: 'mc', h: 'interpretar', q: 'En la bajada, la palabra “privilegio” se refiere a:', o: ['Un premio en dinero.', 'La ventaja especial de tener cielos muy limpios.', 'Un permiso para construir.', 'Una ley.'], c: 1, e: 'El contexto: “cielos más limpios del planeta… la luz amenaza ese privilegio”.' },
      { t: 'mc', h: 'estructura', q: '¿Qué tipo de fuentes consulta este reportaje?', o: ['Solo libros antiguos.', 'Astrónomos, guías y vecinos (testimonios variados).', 'Ninguna, es pura opinión.', 'Solo una encuesta.'], c: 1, e: 'La bajada lo dice: “Conversamos con astrónomos, guías y vecinos”.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Estás de acuerdo con que proteger la oscuridad de la noche es importante? Da dos argumentos usando información del reportaje.', pauta: 'Argumentos posibles: permite la investigación científica (observatorios), protege a los animales (golondrinas de mar), ahorra energía, mantiene una experiencia cultural (mirar las estrellas).' },
    ],
  },

  // ───────────────────────────── INFOGRAFÍAS ─────────────────────────────
  {
    id: 'i1',
    tipo: 'infografia',
    titulo: 'Eclipses: cuando el cielo juega a las sombras',
    nivel: 'Básico',
    contenido: {
      titulo: 'ECLIPSES',
      subtitulo: 'Cuando el cielo juega a las sombras',
      bajada: 'Un eclipse ocurre cuando un astro se interpone entre otro y la luz del Sol, proyectando su sombra.',
      tema: 'eclipse',
      bloques: [
        { tipo: 'diagrama', titulo: 'Eclipse solar', orden: ['☀️', '🌑', '🌍'], etiquetas: ['Sol', 'Luna', 'Tierra'], texto: 'La Luna se ubica entre el Sol y la Tierra y tapa la luz del Sol. Ocurre de día y en fase de luna nueva.' },
        { tipo: 'diagrama', titulo: 'Eclipse lunar', orden: ['☀️', '🌍', '🌕'], etiquetas: ['Sol', 'Tierra', 'Luna'], texto: 'La Tierra se ubica entre el Sol y la Luna, y su sombra cubre a la Luna, que puede verse rojiza. Ocurre de noche y en luna llena.' },
        { tipo: 'lista', titulo: 'Tipos de eclipse solar', items: [['⚫', 'Total', 'La Luna tapa todo el Sol; el día se oscurece por unos minutos.'], ['🌗', 'Parcial', 'La Luna tapa solo una parte del Sol.'], ['💍', 'Anular', 'La Luna se ve más pequeña y deja un “anillo de fuego” alrededor.']] },
        { tipo: 'dato', icono: '🇨🇱', titulo: '¿Sabías que…?', texto: 'Chile vivió eclipses solares totales el 2 de julio de 2019 (Región de Coquimbo) y el 14 de diciembre de 2020 (Región de La Araucanía).' },
        { tipo: 'alerta', icono: '⚠️', titulo: '¡Cuidado!', texto: 'Nunca mires un eclipse solar directamente ni con lentes de sol comunes: puedes dañar tus ojos. Usa lentes certificados para eclipses.' },
      ],
      fuente: 'Fuente: elaboración propia con información de divulgación astronómica.',
    },
    preguntas: [
      { t: 'mc', h: 'estructura', q: '¿Cuál es el propósito de esta infografía?', o: ['Narrar una leyenda sobre el Sol.', 'Explicar de forma breve y visual qué son los eclipses.', 'Opinar sobre la astronomía.', 'Informar una noticia de ayer.'], c: 1, e: 'La infografía informa y explica un tema de manera visual y sintética.' },
      { t: 'mc', h: 'relacionar', q: '¿Qué función cumplen los diagramas ☀️🌑🌍?', o: ['Decorar la infografía.', 'Aclarar la posición de los astros en cada eclipse.', 'Presentar un tema distinto.', 'Indicar la fuente.'], c: 1, e: 'El recurso gráfico aclara la información escrita: muestra el orden Sol–Luna–Tierra.' },
      { t: 'mc', h: 'localizar', q: '¿En qué fase lunar ocurre un eclipse lunar?', o: ['Luna nueva.', 'Cuarto creciente.', 'Luna llena.', 'Cuarto menguante.'], c: 2, e: 'Bloque “Eclipse lunar”: “Ocurre de noche y en luna llena”.' },
      { t: 'vf', h: 'localizar', q: 'Un eclipse solar ocurre de noche.', c: false, e: 'El eclipse solar ocurre de día; el lunar, de noche.' },
      { t: 'mc', h: 'interpretar', q: '¿Por qué el eclipse anular se llama “anillo de fuego”?', o: ['Porque el Sol se apaga.', 'Porque queda un borde brillante del Sol alrededor de la Luna, como un anillo.', 'Porque la Tierra se calienta.', 'Porque la Luna se pone roja.'], c: 1, e: 'La Luna no alcanza a tapar todo el Sol y queda un anillo luminoso.' },
      { t: 'mc', h: 'estructura', q: '¿Por qué decimos que la infografía es un texto discontinuo?', o: ['Porque está incompleta.', 'Porque combina textos breves e imágenes y se puede leer en distinto orden.', 'Porque no tiene título.', 'Porque tiene muchos párrafos largos.'], c: 1, e: 'La lectura de una infografía no es lineal: el lector recorre los bloques en el orden que quiera.' },
      { t: 'unir', h: 'estructura', q: 'Une cada parte de la infografía con su ejemplo.', pares: [['Título', 'ECLIPSES'], ['Bajada', 'Un eclipse ocurre cuando un astro se interpone…'], ['Cuerpo visual', 'Diagramas, tipos de eclipse y datos'], ['Fuente', 'Elaboración propia con información de divulgación astronómica']], e: 'Título, bajada, cuerpo visual y fuente son las partes de la infografía.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué propósito tiene el recuadro “¡Cuidado!”?', o: ['Entretener.', 'Advertir sobre un peligro y dar una recomendación.', 'Presentar un dato histórico.', 'Contar un chiste.'], c: 1, e: 'El ícono ⚠️ y el color de alerta destacan una recomendación de seguridad.' },
      { t: 'mc', h: 'relacionar', q: 'El recuadro “¿Sabías que…?” sobre los eclipses en Chile:', o: ['Presenta ideas nuevas y cercanas al lector.', 'Repite el título.', 'Contradice los diagramas.', 'Es la fuente de la infografía.'], c: 0, e: 'Agrega información nueva y conecta el tema con la realidad del lector chileno.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Qué otro recurso gráfico agregarías a esta infografía para mejorarla? Explica qué aportaría.', pauta: 'Ej.: un mapa de Chile con los lugares donde se vieron los eclipses (presentaría ideas nuevas), o fotografías reales (introducirían un ejemplo).' },
    ],
  },
  {
    id: 'i2',
    tipo: 'infografia',
    titulo: 'Gabriela Mistral en datos',
    nivel: 'Intermedio',
    contenido: {
      titulo: 'GABRIELA MISTRAL',
      subtitulo: 'La maestra que llevó la poesía chilena al mundo',
      bajada: 'Poeta, profesora y diplomática. Primera persona de América Latina en recibir el Premio Nobel de Literatura.',
      tema: 'mistral',
      bloques: [
        { tipo: 'ficha', titulo: 'Ficha', items: [['📛', 'Nombre real', 'Lucila de María Godoy Alcayaga'], ['🎂', 'Nació', '7 de abril de 1889, Vicuña (valle del Elqui)'], ['🕊️', 'Murió', '10 de enero de 1957, Nueva York (EE. UU.)'], ['🍎', 'Oficios', 'Profesora, poeta y cónsul']] },
        { tipo: 'timeline', titulo: 'Momentos clave', items: [['1914', 'Gana los Juegos Florales de Santiago con “Sonetos de la muerte”.'], ['1922', 'Viaja a México a colaborar en la reforma educacional. Se publica “Desolación”.'], ['1924', 'Publica “Ternura”, con poemas y rondas para niños.'], ['1945', 'Recibe el Premio Nobel de Literatura.'], ['1951', 'Recibe el Premio Nacional de Literatura de Chile.']] },
        { tipo: 'cifra', numero: '1.ª', texto: 'persona latinoamericana en ganar el Nobel de Literatura' },
        { tipo: 'cifra', numero: '$5.000', texto: 'billete chileno donde aparece su rostro' },
        { tipo: 'dato', icono: '📚', titulo: 'Sus libros', texto: 'Desolación (1922) · Ternura (1924) · Tala (1938) · Lagar (1954)' },
      ],
      fuente: 'Fuente: elaboración propia a partir de información biográfica de Gabriela Mistral.',
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Cuál era el nombre real de Gabriela Mistral?', o: ['Violeta Parra Sandoval.', 'Lucila de María Godoy Alcayaga.', 'Emelina Molina.', 'Teresa Wilms Montt.'], c: 1, e: 'Aparece en la ficha: “Nombre real: Lucila de María Godoy Alcayaga”.' },
      { t: 'mc', h: 'relacionar', q: '¿Qué función cumple la línea de tiempo “Momentos clave”?', o: ['Sintetizar y ordenar cronológicamente los hechos más importantes de su vida.', 'Mostrar una opinión sobre su poesía.', 'Explicar cómo escribir un poema.', 'Indicar la fuente.'], c: 0, e: 'Una línea de tiempo sintetiza información en orden cronológico.' },
      { t: 'mc', h: 'localizar', q: '¿En qué año recibió el Premio Nobel de Literatura?', o: ['1914', '1922', '1945', '1951'], c: 2, e: 'Línea de tiempo: 1945.' },
      { t: 'vf', h: 'localizar', q: '“Ternura” se publicó antes que “Desolación”.', c: false, e: 'Desolación es de 1922 y Ternura de 1924.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede inferir del dato de que su rostro aparece en el billete de $5.000?', o: ['Que era millonaria.', 'Que Chile la reconoce como una figura muy importante de su historia y cultura.', 'Que trabajó en un banco.', 'Que diseñó billetes.'], c: 1, e: 'Los billetes homenajean a personas destacadas del país.' },
      { t: 'mc', h: 'estructura', q: '¿Qué característica de la infografía se observa en este texto?', o: ['Párrafos extensos y narración en primera persona.', 'Frases cortas, íconos, cifras destacadas y línea de tiempo.', 'Diálogos entre personajes.', 'Versos y rima.'], c: 1, e: 'La infografía presenta información en frases breves acompañadas de recursos visuales.' },
      { t: 'mc', h: 'interpretar', q: 'Según la infografía, ¿cuántos años tenía aproximadamente Gabriela Mistral cuando recibió el Nobel?', o: ['25 años.', '33 años.', '56 años.', '68 años.'], c: 2, e: 'Nació en 1889 y recibió el Nobel en 1945: 1945 − 1889 = 56 años. ¡Debes relacionar dos datos!' },
      { t: 'vf', h: 'localizar', q: 'Gabriela Mistral murió en Chile.', c: false, e: 'Murió en Nueva York, Estados Unidos.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Te parece adecuado presentar la vida de una persona en una infografía? ¿Qué ventajas y desventajas tiene frente a una biografía en párrafos?', pauta: 'Ventajas: se lee rápido, es llamativa, destaca los datos clave. Desventajas: entrega menos detalles, no explica el contexto ni las emociones, no cuenta su infancia en profundidad.' },
    ],
  },
  {
    id: 'i3',
    tipo: 'infografia',
    titulo: '¿Cuánto leemos en 6º básico? (gráfico)',
    nivel: 'Intermedio',
    contenido: {
      titulo: '¿CUÁNTO LEEMOS?',
      subtitulo: 'Encuesta de lectura del 6º básico A',
      bajada: 'Preguntamos a los 30 estudiantes del curso cuántos libros leyeron por gusto este año. Estos son los resultados.',
      tema: 'lectura',
      bloques: [
        { tipo: 'barras', titulo: 'Libros leídos por gusto en 2026', datos: [['0 libros', 4], ['1 a 2 libros', 10], ['3 a 5 libros', 11], ['Más de 5', 5]], unidad: 'estudiantes' },
        { tipo: 'cifra', numero: '26 de 30', texto: 'estudiantes leyó al menos un libro por gusto' },
        { tipo: 'lista', titulo: 'Lo que más les gusta leer', items: [['🐉', 'Fantasía', '12 votos'], ['🕵️', 'Misterio', '8 votos'], ['😂', 'Cómics y humor', '6 votos'], ['🌍', 'Textos informativos', '4 votos']] },
        { tipo: 'dato', icono: '💬', titulo: 'Voces del curso', texto: '“Leo antes de dormir porque me relaja”, dice Florencia. “Me gustan los libros de animales porque aprendo cosas reales”, cuenta Benjamín.' },
      ],
      fuente: 'Fuente: encuesta realizada por el 6º básico A, noviembre de 2026.',
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Cuántos estudiantes leyeron entre 3 y 5 libros?', o: ['4', '5', '10', '11'], c: 3, e: 'Gráfico de barras: “3 a 5 libros” = 11 estudiantes.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué grupo es el más numeroso?', o: ['0 libros.', '1 a 2 libros.', '3 a 5 libros.', 'Más de 5.'], c: 2, e: 'La barra más larga es “3 a 5 libros” (11).' },
      { t: 'mc', h: 'relacionar', q: '¿De dónde sale la cifra “26 de 30”?', o: ['Es un dato inventado.', 'De sumar a quienes leyeron al menos un libro: 10 + 11 + 5 = 26.', 'De los votos de fantasía.', 'De la cantidad de libros de la biblioteca.'], c: 1, e: 'Relaciona el gráfico con la cifra destacada: 30 − 4 = 26.' },
      { t: 'mc', h: 'localizar', q: '¿Qué tipo de lectura prefieren más estudiantes?', o: ['Misterio.', 'Fantasía.', 'Cómics.', 'Textos informativos.'], c: 1, e: 'Fantasía, con 12 votos.' },
      { t: 'vf', h: 'interpretar', q: 'La mayoría del curso no leyó ningún libro por gusto.', c: false, e: 'Solo 4 de 30 no leyeron ninguno.' },
      { t: 'mc', h: 'relacionar', q: '¿Qué aporta el recuadro “Voces del curso”?', o: ['Datos numéricos nuevos.', 'Testimonios que muestran las razones por las que algunos leen.', 'La fuente de la encuesta.', 'Una crítica a la encuesta.'], c: 1, e: 'Las citas agregan ejemplos y razones personales que el gráfico no muestra.' },
      { t: 'mc', h: 'estructura', q: '¿Quién es el emisor de esta infografía?', o: ['Un diario nacional.', 'El 6º básico A.', 'Una editorial.', 'El Ministerio de Educación.'], c: 1, e: 'La fuente lo indica: “encuesta realizada por el 6º básico A”.' },
      { t: 'abierta', h: 'reflexionar', q: 'Si fueras el profesor o la profesora del curso, ¿qué harías con estos resultados? Fundamenta con datos de la infografía.', pauta: 'Ej.: comprar más libros de fantasía y misterio porque son los favoritos; motivar a los 4 estudiantes que no leyeron; crear un momento de lectura antes de salir, como hace Florencia antes de dormir.' },
    ],
  },

  // ───────────────────────────── BIOGRAFÍAS ─────────────────────────────
  {
    id: 'b1',
    tipo: 'biografia',
    titulo: 'Gabriela Mistral: la voz de los niños de América',
    nivel: 'Intermedio',
    contenido: {
      titulo: 'Gabriela Mistral: la voz de los niños de América',
      retrato: '👩‍🏫',
      parrafos: [
        { parte: 'Introducción', texto: 'Gabriela Mistral fue una poeta, profesora y diplomática chilena, y la primera persona de América Latina en recibir el Premio Nobel de Literatura. Su verdadero nombre era Lucila de María Godoy Alcayaga y nació el 7 de abril de 1889 en Vicuña, en el valle del Elqui.' },
        { parte: 'Desarrollo: infancia', texto: 'Pasó su infancia en Montegrande, un pequeño pueblo del valle rodeado de cerros, donde su hermana Emelina, que era profesora, le enseñó a leer. Aquellos paisajes, sus árboles frutales y sus montañas aparecerían muchas veces en sus poemas.' },
        { parte: 'Desarrollo: juventud y trabajo', texto: 'Desde muy joven trabajó como profesora en escuelas rurales y, más tarde, en liceos de distintas ciudades de Chile, como Los Andes, Punta Arenas y Temuco. En 1914 ganó los Juegos Florales de Santiago con sus “Sonetos de la muerte” y se dio a conocer con el seudónimo de Gabriela Mistral.' },
        { parte: 'Desarrollo: obras', texto: 'En 1922 fue invitada a México para colaborar en la reforma educacional de ese país. Ese mismo año se publicó en Nueva York su primer libro, “Desolación”. Luego vinieron “Ternura” (1924), con poemas y rondas dedicados a los niños, “Tala” (1938) y “Lagar” (1954).' },
        { parte: 'Desarrollo: logros', texto: 'Durante muchos años vivió fuera de Chile y trabajó como cónsul en países como España, Portugal, Brasil y Estados Unidos. En 1945 recibió el Premio Nobel de Literatura y, en 1951, el Premio Nacional de Literatura de Chile.' },
        { parte: 'Cierre: muerte y legado', texto: 'Falleció el 10 de enero de 1957 en Nueva York. Sus restos descansan en Montegrande, como ella lo pidió. Hoy, su rostro aparece en el billete de cinco mil pesos y sus versos se leen en escuelas de todo el mundo.' },
      ],
    },
    preguntas: [
      { t: 'mc', h: 'estructura', q: '¿Cuál es el propósito de este texto?', o: ['Informar una noticia sobre un premio.', 'Dar a conocer la vida y los aportes de Gabriela Mistral.', 'Convencer de leer poesía.', 'Explicar qué es un soneto.'], c: 1, e: 'Es una biografía: narra la vida de una persona real y destaca sus logros.' },
      { t: 'mc', h: 'estructura', q: '¿En qué persona gramatical está escrito el texto?', o: ['Primera persona (yo).', 'Segunda persona (tú).', 'Tercera persona (ella).', 'Primera persona plural (nosotros).'], c: 2, e: '“Fue”, “nació”, “pasó su infancia”: tercera persona, propia de la biografía.' },
      { t: 'ordenar', h: 'estructura', q: 'Ordena cronológicamente estos hechos de su vida.', items: ['Nace en Vicuña (1889).', 'Su hermana le enseña a leer en Montegrande.', 'Gana los Juegos Florales (1914).', 'Viaja a México y se publica “Desolación” (1922).', 'Recibe el Premio Nobel (1945).', 'Fallece en Nueva York (1957).'], e: 'La biografía sigue un orden cronológico.' },
      { t: 'mc', h: 'localizar', q: '¿Quién le enseñó a leer?', o: ['Su madre.', 'Su hermana Emelina.', 'Un profesor de Vicuña.', 'Aprendió sola.'], c: 1, e: 'Párrafo 2: “su hermana Emelina, que era profesora, le enseñó a leer”.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué es un “seudónimo”, según el contexto?', o: ['Un premio literario.', 'Un nombre que usa un autor en lugar de su nombre real.', 'Un tipo de poema.', 'Un apellido materno.'], c: 1, e: 'Su nombre real era Lucila Godoy, pero firmó como Gabriela Mistral.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede concluir de que pidiera que sus restos descansaran en Montegrande?', o: ['Que no le gustaba Nueva York.', 'Que sentía un fuerte vínculo con el lugar de su infancia.', 'Que tenía familia en México.', 'Que quería volver a hacer clases.'], c: 1, e: 'Es una inferencia: el valle aparece en sus poemas y quiso volver a él.' },
      { t: 'vf', h: 'localizar', q: 'Gabriela Mistral solo trabajó en Santiago.', c: false, e: 'Trabajó en Los Andes, Punta Arenas, Temuco y en el extranjero.' },
      { t: 'unir', h: 'estructura', q: 'Une cada parte de la biografía con su contenido.', pares: [['Introducción', 'Quién fue y cuándo y dónde nació'], ['Desarrollo', 'Infancia, trabajo, obras y premios en orden'], ['Cierre', 'Su muerte y su legado']], e: 'Introducción → desarrollo cronológico → cierre.' },
      { t: 'mc', h: 'relacionar', q: '¿Qué palabras o expresiones ayudan a seguir el orden temporal del texto?', o: ['“Como ella lo pidió”, “rodeado de cerros”.', '“Desde muy joven”, “más tarde”, “en 1922”, “luego”.', '“Poeta”, “profesora”, “diplomática”.', '“Hoy”, “sus versos”, “escuelas”.'], c: 1, e: 'Son marcadores temporales, muy usados en las biografías.' },
      { t: 'mc', h: 'interpretar', q: '¿Por qué el título dice “la voz de los niños de América”?', o: ['Porque fue cantante infantil.', 'Porque fue profesora y escribió poemas y rondas para niños, y trabajó por la educación en América.', 'Porque solo vivió en América.', 'Porque tuvo muchos hijos.'], c: 1, e: 'Se relaciona con su labor docente, con “Ternura” y con la reforma educacional en México.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Qué aspecto de la vida de Gabriela Mistral te parece más admirable? Fundamenta con información del texto.', pauta: 'Elige un aspecto (ej.: trabajar como profesora rural, ganar el Nobel siendo de un pueblo pequeño) y justifícalo con datos del texto.' },
    ],
  },
  {
    id: 'b2',
    tipo: 'biografia',
    titulo: 'Violeta Parra: la artista que recorrió Chile',
    nivel: 'Avanzado',
    contenido: {
      titulo: 'Violeta Parra: la artista que recorrió Chile para rescatar su música',
      retrato: '👩‍🎤',
      parrafos: [
        { parte: 'Introducción', texto: 'Violeta del Carmen Parra Sandoval nació el 4 de octubre de 1917 en San Carlos, en la actual Región de Ñuble. Fue cantautora, recopiladora de folclor, pintora, ceramista y artista textil, y es considerada una de las figuras más importantes de la cultura chilena.' },
        { parte: 'Desarrollo: infancia', texto: 'Creció en una familia numerosa y de pocos recursos. Su padre era profesor de música y su madre, costurera, cantaba canciones campesinas. Desde pequeña aprendió a tocar la guitarra y, junto a sus hermanos, cantaba en circos y en trenes para ayudar a su familia.' },
        { parte: 'Desarrollo: recopilación', texto: 'En la década de 1950 comenzó una tarea que marcaría su vida: recorrer los campos de Chile para recopilar canciones, décimas y tradiciones que cantaban los campesinos y que corrían el riesgo de perderse. Grabó y difundió cientos de estas canciones.' },
        { parte: 'Desarrollo: artes visuales', texto: 'También desarrolló su arte visual: pintó, modeló cerámica y bordó coloridas arpilleras. En 1964 se convirtió en la primera artista latinoamericana en realizar una exposición individual en el Museo de Artes Decorativas, ubicado en el Palacio del Louvre, en París.' },
        { parte: 'Desarrollo: canciones', texto: 'Entre sus canciones más conocidas están “Volver a los diecisiete” y “Gracias a la vida”, compuestas en sus últimos años e interpretadas hasta hoy por artistas de todo el mundo.' },
        { parte: 'Cierre: muerte y legado', texto: 'Violeta Parra falleció en Santiago el 5 de febrero de 1967. Hoy, el día de su nacimiento, el 4 de octubre, se celebra en Chile el Día de la Música Chilena, y un museo con su nombre exhibe sus obras en Santiago.' },
      ],
    },
    preguntas: [
      { t: 'mc', h: 'localizar', q: '¿Dónde nació Violeta Parra?', o: ['En Santiago.', 'En Vicuña.', 'En San Carlos, Región de Ñuble.', 'En París.'], c: 2, e: 'Introducción: “nació… en San Carlos, en la actual Región de Ñuble”.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué significa “recopilar” canciones?', o: ['Inventarlas.', 'Reunirlas y registrarlas para que no se pierdan.', 'Borrarlas.', 'Venderlas.'], c: 1, e: 'El texto dice que las canciones “corrían el riesgo de perderse” y que ella las grabó y difundió.' },
      { t: 'mc', h: 'interpretar', q: '¿Por qué era importante la tarea de recorrer los campos?', o: ['Porque quería conocer paisajes.', 'Porque así rescató tradiciones campesinas que podían desaparecer.', 'Porque buscaba trabajo en trenes.', 'Porque debía pintar arpilleras.'], c: 1, e: 'Su labor permitió conservar parte del patrimonio musical de Chile.' },
      { t: 'vf', h: 'localizar', q: 'Violeta Parra fue la primera artista latinoamericana en exponer individualmente en el Museo de Artes Decorativas del Louvre.', c: true, e: 'Párrafo 4.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede concluir de que cantara en circos y trenes cuando era niña?', o: ['Que no le gustaba la escuela.', 'Que su familia necesitaba dinero y la música era parte de su vida desde pequeña.', 'Que era muy famosa de niña.', 'Que trabajaba en una empresa de trenes.'], c: 1, e: 'El texto dice “para ayudar a su familia” y que eran “de pocos recursos”.' },
      { t: 'mc', h: 'estructura', q: '¿Qué información entrega el párrafo de cierre?', o: ['Su nacimiento.', 'Sus estudios.', 'Su muerte y cómo se recuerda hoy su legado.', 'Su infancia.'], c: 2, e: 'El cierre de una biografía relata el final de la vida y el legado.' },
      { t: 'mc', h: 'estructura', q: '¿Qué tipo de datos son característicos de este texto?', o: ['Opiniones del autor.', 'Fechas, lugares, obras y logros verificables.', 'Hechos imaginarios.', 'Instrucciones.'], c: 1, e: 'La biografía entrega datos precisos y reales.' },
      { t: 'unir', h: 'localizar', q: 'Une cada fecha con su hecho.', pares: [['4 de octubre de 1917', 'Nace en San Carlos'], ['Década de 1950', 'Recorre los campos recopilando canciones'], ['1964', 'Expone en el Louvre'], ['5 de febrero de 1967', 'Fallece en Santiago']], e: 'Relaciona datos explícitos del texto.' },
      { t: 'mc', h: 'relacionar', q: '¿En qué se parecen las biografías de Violeta Parra y Gabriela Mistral?', o: ['Ambas nacieron en el valle del Elqui.', 'Ambas son mujeres chilenas destacadas cuya obra se reconoce dentro y fuera de Chile.', 'Ambas ganaron el Premio Nobel.', 'Ambas fueron cantantes.'], c: 1, e: 'Comparar textos: buscar similitudes. Solo Mistral ganó el Nobel; solo Parra fue cantautora.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Por qué crees que se eligió el día del nacimiento de Violeta Parra para celebrar el Día de la Música Chilena? Fundamenta.', pauta: 'Porque rescató y difundió la música campesina, compuso canciones conocidas en el mundo y es una figura central de la cultura chilena.' },
    ],
  },
  {
    id: 'b3',
    tipo: 'biografia',
    titulo: '¿Biografía o autobiografía? Elena Carrasco',
    nivel: 'Básico',
    contenido: {
      titulo: 'Fragmento autobiográfico: “Mis primeros libros”',
      retrato: '👵',
      autobiografia: true,
      parrafos: [
        { parte: 'Introducción', texto: 'Me llamo Elena Carrasco y nací el 3 de mayo de 1955 en Chillán. Fui la menor de cinco hermanos, en una casa donde no había libros, pero sí muchas historias contadas al calor de la estufa.' },
        { parte: 'Desarrollo', texto: 'Cuando tenía nueve años, mi profesora de cuarto básico me prestó “Ternura”, de Gabriela Mistral. Lo leí tantas veces que aprendí de memoria las rondas y se las cantaba a mis hermanos. Desde ese momento supe que quería ser profesora.' },
        { parte: 'Desarrollo', texto: 'En 1974 entré a estudiar Pedagogía y, cuatro años después, comencé a trabajar en una escuela rural cerca de Yungay. Allí formé una pequeña biblioteca con cajones de fruta y libros que donaban los vecinos.' },
        { parte: 'Cierre', texto: 'Hoy tengo 71 años y sigo leyendo cada noche. Cuando mis nietos me visitan, les presto mis libros, como alguna vez hicieron conmigo.' },
      ],
    },
    preguntas: [
      { t: 'mc', h: 'estructura', q: '¿Por qué este texto es una autobiografía y no una biografía?', o: ['Porque es muy corto.', 'Porque la misma persona cuenta su vida en primera persona (yo).', 'Porque menciona a Gabriela Mistral.', 'Porque tiene fechas.'], c: 1, e: '“Me llamo”, “nací”, “mis hermanos”: primera persona. En la biografía otra persona narra en tercera.' },
      { t: 'mc', h: 'estructura', q: 'Si este texto fuera una biografía, ¿cómo comenzaría?', o: ['“Me llamo Elena Carrasco…”', '“Elena Carrasco nació el 3 de mayo de 1955 en Chillán…”', '“Querida Elena…”', '“Había una vez una niña…”'], c: 1, e: 'La biografía se escribe en tercera persona.' },
      { t: 'mc', h: 'interpretar', q: '¿Qué se puede inferir del préstamo de “Ternura”?', o: ['Que Elena no sabía leer.', 'Que ese libro fue decisivo para que eligiera ser profesora.', 'Que la profesora era Gabriela Mistral.', 'Que no le gustó el libro.'], c: 1, e: '“Desde ese momento supe que quería ser profesora”.' },
      { t: 'mc', h: 'interpretar', q: 'Según el texto, ¿en qué año comenzó a trabajar en la escuela rural?', o: ['1955', '1964', '1974', '1978'], c: 3, e: 'Entró a estudiar en 1974 y “cuatro años después” comenzó a trabajar: 1978.' },
      { t: 'vf', h: 'interpretar', q: 'Elena quiere transmitir a sus nietos el gusto por la lectura.', c: true, e: 'Les presta sus libros “como alguna vez hicieron conmigo”.' },
      { t: 'abierta', h: 'reflexionar', q: 'Reescribe la primera oración del texto como si fuera una biografía (tercera persona).', pauta: '“Elena Carrasco nació el 3 de mayo de 1955 en Chillán. Fue la menor de cinco hermanos…”' },
    ],
  },

  // ───────────────────────────── COMPARACIÓN ─────────────────────────────
  {
    id: 'c1',
    tipo: 'comparacion',
    titulo: 'Comparar: infografía vs. biografía de Gabriela Mistral',
    nivel: 'Avanzado',
    refs: ['i2', 'b1'],
    preguntas: [
      { t: 'mc', h: 'relacionar', q: '¿Qué tienen en común ambos textos?', o: ['Ambos son textos literarios.', 'Ambos informan sobre la vida de Gabriela Mistral.', 'Ambos están escritos en primera persona.', 'Ambos son noticias.'], c: 1, e: 'Mismo tema y mismo propósito general: informar sobre una persona real.' },
      { t: 'mc', h: 'relacionar', q: '¿En qué se diferencian en la forma de presentar la información?', o: ['La infografía usa frases cortas, íconos y línea de tiempo; la biografía usa párrafos narrativos.', 'La biografía tiene más imágenes.', 'La infografía tiene más párrafos.', 'No hay diferencias.'], c: 0, e: 'Es la misma comparación que hace el libro con los textos de Greta Thunberg (p. 220).' },
      { t: 'mc', h: 'relacionar', q: '¿Qué información aparece en la biografía pero NO en la infografía?', o: ['Su fecha de nacimiento.', 'El año del Premio Nobel.', 'Que su hermana Emelina le enseñó a leer en Montegrande.', 'Su nombre real.'], c: 2, e: 'La biografía entrega más detalles sobre su infancia.' },
      { t: 'mc', h: 'reflexionar', q: 'Si necesitas repasar en 2 minutos los datos clave de su vida, ¿qué texto es más adecuado?', o: ['La biografía, porque es más extensa.', 'La infografía, porque sintetiza los datos más importantes de forma visual.', 'Ninguno.', 'Ambos son igual de rápidos.'], c: 1, e: 'La infografía permite una lectura rápida y selectiva.' },
      { t: 'mc', h: 'reflexionar', q: '¿Qué texto es más adecuado para conocer en profundidad su infancia y su relación con el valle del Elqui?', o: ['La infografía.', 'La biografía.', 'Ninguno lo menciona.', 'Ambos entregan la misma información.'], c: 1, e: 'La biografía narra con detalle su infancia en Montegrande y los paisajes que inspiraron sus poemas.' },
      { t: 'mc', h: 'relacionar', q: 'Completa con el conector adecuado: “La infografía presenta la información en frases breves; ______, la biografía la presenta en párrafos.”', o: ['asimismo', 'de igual manera', 'en cambio', 'al igual que'], c: 2, e: '“En cambio” expresa diferencia. “Asimismo”, “de igual manera” y “al igual que” expresan similitud.' },
      { t: 'abierta', h: 'reflexionar', q: '¿Cuál de los dos textos te pareció más interesante? Fundamenta usando al menos un criterio de comparación (cantidad de información, cuán llamativo es, facilidad de lectura).', pauta: 'Indica tu preferencia, menciona un criterio y da un ejemplo de cada texto (ej.: “La infografía es más llamativa por sus íconos, en cambio la biografía explica más sobre su infancia”).' },
    ],
  },
];

// Asigna un id estable a cada pregunta (ej.: 'n1-3').
TEXTOS.forEach((t) => t.preguntas.forEach((p, i) => { p.id = p.id || `${t.id}-${i + 1}`; }));

export const textoPorId = (id) => TEXTOS.find((t) => t.id === id);
