// Juegos de repaso rápido: cada juego es un set de preguntas cortas
// que no dependen de un texto largo.

const TIPOS4 = ['Noticia', 'Reportaje', 'Infografía', 'Biografía'];

const clasificar = (id, fragmento, correcta, e) => ({
  id, t: 'mc', h: 'estructura', q: fragmento, o: TIPOS4, c: TIPOS4.indexOf(correcta), e, fragmento: true,
});

export const JUEGOS = [
  {
    id: 'g1',
    titulo: '¿Qué texto soy?',
    icono: '🕵️',
    desc: 'Lee el fragmento y descubre si es una noticia, un reportaje, una infografía o una biografía.',
    preguntas: [
      clasificar('g1-1', 'Valparaíso, 3 de noviembre. Un incendio forestal afectó ayer cerca de 200 hectáreas en el sector alto de la comuna. Bomberos informó que no hubo personas heridas.', 'Noticia', 'Lugar y fecha, hecho reciente (“ayer”) y lead con lo esencial.'),
      clasificar('g1-2', 'Nació en Ulm, Alemania, en 1879. De niño le costaba hablar y algunos profesores pensaban que no llegaría lejos. Años después, en 1921, recibió el Premio Nobel de Física.', 'Biografía', 'Narra en orden cronológico la vida de una persona real, en tercera persona.'),
      clasificar('g1-3', '🌊 71 % de la Tierra es agua · 💧 Solo el 3 % es agua dulce · 🧊 La mayor parte está congelada en glaciares.', 'Infografía', 'Frases muy breves, íconos y cifras destacadas.'),
      clasificar('g1-4', 'Son las seis de la mañana en la caleta de Quintay. Don Héctor prepara sus redes, como lo hace desde hace cuarenta años. Pero hoy el mar ya no es el mismo… En este reportaje, pescadores, biólogos y autoridades explican por qué hay cada vez menos peces.', 'Reportaje', 'Entrada con una escena, varias voces (pescadores, biólogos, autoridades) y un tema investigado a fondo.'),
      clasificar('g1-5', 'Selección chilena sub-17 clasifica al Mundial tras vencer 2-1 a Paraguay. El equipo jugará su primer partido el 12 de diciembre.', 'Noticia', 'Titular y bajada sobre un hecho actual.'),
      clasificar('g1-6', 'Hechos clave · 2018: comienza su huelga escolar · 2019: habla en la ONU · Premios: 🏅 Mujer del año · ✈️ No viaja en avión', 'Infografía', 'Así se presenta la infografía de Greta Thunberg del libro: frases cortas, línea de tiempo e íconos.'),
      clasificar('g1-7', 'Tras graduarse de la Universidad de Chile, en 1955, comenzó a trabajar como ingeniera. Más tarde se convirtió en la primera mujer en dirigir una empresa minera del país. Falleció en 2010, a los 79 años.', 'Biografía', 'Marcadores temporales (“tras”, “más tarde”), datos de vida y muerte.'),
      clasificar('g1-8', 'Mito o realidad: ¿Los videojuegos dañan la vista? Para responder esta pregunta conversamos con tres oftalmólogas, revisamos estudios científicos y visitamos un torneo de e-sports en Santiago.', 'Reportaje', 'Investigación profunda con distintas fuentes.'),
      clasificar('g1-9', 'PASO 1 🧴 Lava el envase · PASO 2 🫳 Aplástalo · PASO 3 ♻️ Llévalo al punto limpio', 'Infografía', 'Explica un proceso con pasos breves e íconos.'),
      clasificar('g1-10', 'La Municipalidad de Puente Alto anunció este martes que la piscina municipal abrirá el 15 de diciembre. La entrada será gratuita para niños y niñas menores de 12 años.', 'Noticia', 'Informa un anuncio reciente con datos precisos.'),
      clasificar('g1-11', 'Hija de un carpintero y una costurera, creció en Coquimbo. A los 15 años ganó su primer campeonato de ajedrez. En 2019 se convirtió en Maestra Internacional.', 'Biografía', 'Familia, infancia y logros ordenados en el tiempo.'),
      clasificar('g1-12', 'El misterio de los moáis. ¿Cómo se trasladaron estas gigantescas estatuas? Arqueólogos, guías rapanui y descendientes de antiguos clanes nos entregan distintas explicaciones. Recorremos la isla para conocer sus teorías.', 'Reportaje', 'Profundiza un tema con diferentes perspectivas y testimonios.'),
    ],
  },
  {
    id: 'g2',
    titulo: '¿Explícita o implícita?',
    icono: '🔍',
    desc: 'Decide si la información está escrita en el texto (explícita) o hay que deducirla (implícita).',
    texto:
      'Martina guardó su cuaderno en la mochila con las manos temblorosas. Afuera, el cielo estaba gris. Miró por quinta vez el reloj de la sala: faltaban diez minutos para la presentación. Su amiga Josefa le apretó la mano y le dijo: “Te aprendiste todo, vas a estar bien”. Martina respiró hondo y sonrió un poco.',
    preguntas: [
      { id: 'g2-1', t: 'mc', h: 'localizar', q: '“Faltaban diez minutos para la presentación.”', o: ['Explícita', 'Implícita'], c: 0, e: 'Está escrito literalmente en el texto: se puede subrayar.' },
      { id: 'g2-2', t: 'mc', h: 'interpretar', q: '“Martina estaba nerviosa.”', o: ['Explícita', 'Implícita'], c: 1, e: 'No está escrito, pero se deduce de las pistas: “manos temblorosas”, “miró por quinta vez el reloj”.' },
      { id: 'g2-3', t: 'mc', h: 'localizar', q: '“El cielo estaba gris.”', o: ['Explícita', 'Implícita'], c: 0, e: 'Aparece tal cual en el texto.' },
      { id: 'g2-4', t: 'mc', h: 'interpretar', q: '“Josefa es una buena amiga que la apoya.”', o: ['Explícita', 'Implícita'], c: 1, e: 'Se infiere de sus acciones: le aprieta la mano y la anima.' },
      { id: 'g2-5', t: 'mc', h: 'interpretar', q: '“Martina estudió para su presentación.”', o: ['Explícita', 'Implícita'], c: 1, e: 'Se deduce de lo que dice Josefa: “Te aprendiste todo”.' },
      { id: 'g2-6', t: 'mc', h: 'interpretar', q: '“Al final, Martina se siente un poco más tranquila.”', o: ['Explícita', 'Implícita'], c: 1, e: 'Se deduce de “respiró hondo y sonrió un poco”.' },
      { id: 'g2-7', t: 'mc', h: 'localizar', q: '“Martina guardó su cuaderno en la mochila.”', o: ['Explícita', 'Implícita'], c: 0, e: 'Está escrito en la primera oración.' },
    ],
  },
  {
    id: 'g3',
    titulo: 'Detective de palabras',
    icono: '📖',
    desc: 'Descubre el significado de palabras y expresiones según el contexto (vocabulario y lenguaje figurado).',
    preguntas: [
      { id: 'g3-1', t: 'mc', h: 'interpretar', q: '“Desde entonces, le han llovido las propuestas artísticas” (texto sobre Mahani Teave). Significa que:', o: ['Recibió muchas propuestas.', 'Llovió en su concierto.', 'Rechazó todas las propuestas.', 'Las propuestas se mojaron.'], c: 0, e: 'Lenguaje figurado: “llover” = llegar en gran cantidad.' },
      { id: 'g3-2', t: 'mc', h: 'interpretar', q: '“Siento un cordón umbilical que siempre me hará volver” (Mahani Teave sobre Rapa Nui). Significa que:', o: ['Está enferma.', 'Tiene un vínculo muy profundo con la isla, como el de una madre con su hijo.', 'Quiere irse para siempre.', 'Trabaja en un hospital.'], c: 1, e: 'El cordón umbilical une a la madre con el bebé: expresa una unión profunda con su tierra.' },
      { id: 'g3-3', t: 'mc', h: 'interpretar', q: '“La corte multó a la joven activista… A pesar del fallo, volvieron al mismo sitio.” Aquí “fallo” significa:', o: ['Error.', 'Decisión de un tribunal.', 'Falla eléctrica.', 'Pregunta incorrecta.'], c: 1, e: 'Es una palabra homógrafa: en este contexto es la sentencia de un tribunal (Lección 11, “Palabras nuevas”).' },
      { id: 'g3-4', t: 'mc', h: 'interpretar', q: '“…los fondos logrados a través de algunos mecenas…” Aquí “fondos” significa:', o: ['La parte más profunda del mar.', 'Dinero para financiar un proyecto.', 'El final de un pasillo.', 'Un tipo de pintura.'], c: 1, e: 'Palabra homógrafa: en el texto de Mahani, “fondos” es dinero.' },
      { id: 'g3-5', t: 'mc', h: 'interpretar', q: '“Mecenas” son personas que:', o: ['Dan apoyo económico a artistas o proyectos.', 'Tocan el piano.', 'Construyen escuelas con basura.', 'Critican a los artistas.'], c: 0, e: 'Definición del vocabulario de la Lección 11.' },
      { id: 'g3-6', t: 'mc', h: 'interpretar', q: '“Teave no ha permitido que nada la aleje de sus raíces.” La palabra “raíces” se refiere a:', o: ['Las raíces de los árboles.', 'Su origen, su familia y su cultura.', 'Sus dientes.', 'Su casa.'], c: 1, e: 'Sentido figurado: las raíces son el origen de una persona.' },
      { id: 'g3-7', t: 'mc', h: 'interpretar', q: '“Las palabras homógrafas son las que…”', o: ['Se escriben igual, pero tienen distinto significado.', 'Significan lo mismo, pero se escriben distinto.', 'Significan lo contrario.', 'Imitan sonidos.'], c: 0, e: 'Ejemplos: fondo (del mar / dinero), fallo (error / sentencia).' },
      { id: 'g3-8', t: 'mc', h: 'interpretar', q: '“El abejorro chileno pierde terreno.” Significa que:', o: ['Vende sus terrenos.', 'Su población y su espacio están disminuyendo.', 'Se perdió en el campo.', 'Vuela más bajo.'], c: 1, e: 'Expresión figurada: “perder terreno” = retroceder, disminuir.' },
    ],
  },
  {
    id: 'g4',
    titulo: 'Arma la estructura',
    icono: '🧩',
    desc: 'Ordena las partes de cada tipo de texto y la pirámide invertida de la noticia.',
    preguntas: [
      { id: 'g4-1', t: 'ordenar', h: 'estructura', q: 'Ordena las partes de una NOTICIA (de arriba hacia abajo).', items: ['Epígrafe', 'Titular', 'Bajada', 'Lead', 'Cuerpo'], e: 'Epígrafe → titular → bajada → lead → cuerpo.' },
      { id: 'g4-2', t: 'ordenar', h: 'estructura', q: 'Ordena las partes de un REPORTAJE.', items: ['Título', 'Bajada', 'Entrada o introducción', 'Desarrollo con subtítulos', 'Cierre'], e: 'Título → bajada → entrada → desarrollo → cierre.' },
      { id: 'g4-3', t: 'ordenar', h: 'estructura', q: 'Ordena una BIOGRAFÍA.', items: ['Presentación de la persona y su nacimiento', 'Infancia y familia', 'Estudios y primeros trabajos', 'Obras y logros principales', 'Muerte o presente y legado'], e: 'La biografía sigue un orden cronológico.' },
      { id: 'g4-4', t: 'ordenar', h: 'estructura', q: 'PIRÁMIDE INVERTIDA: ordena la información de una noticia sobre un temporal, de la MÁS a la MENOS importante.', items: ['Un temporal dejó 5.000 casas sin luz en Puente Alto este lunes.', 'La empresa eléctrica espera reponer el servicio esta noche.', 'Los vecinos recomiendan tener linternas a mano.', 'El último temporal parecido ocurrió hace diez años.'], e: 'Primero el hecho central; al final, los detalles menos importantes.' },
      { id: 'g4-5', t: 'unir', h: 'estructura', q: 'Une cada parte con su función.', pares: [['Titular', 'Resume el hecho principal de forma llamativa'], ['Lead', 'Responde qué, quién, cuándo y dónde'], ['Subtítulos', 'Organizan el desarrollo del reportaje'], ['Fuente', 'Indica de dónde viene la información de la infografía'], ['Cierre de biografía', 'Destaca el legado de la persona']], e: 'Cada parte cumple una función distinta en su texto.' },
    ],
  },
  {
    id: 'g5',
    titulo: 'Propósitos y características',
    icono: '🎯',
    desc: 'Relaciona cada tipo de texto con su propósito, sus características y sus recursos.',
    preguntas: [
      { id: 'g5-1', t: 'unir', h: 'estructura', q: 'Une cada tipo de texto con su propósito.', pares: [['Noticia', 'Informar un hecho reciente'], ['Reportaje', 'Informar en profundidad sobre un tema'], ['Infografía', 'Explicar un tema de forma breve y visual'], ['Biografía', 'Dar a conocer la vida de una persona real']], e: 'Todos son textos informativos, pero con propósitos específicos distintos.' },
      { id: 'g5-2', t: 'mc', h: 'estructura', q: '¿Qué texto se escribe en tercera persona y en orden cronológico, narrando la vida de alguien?', o: ['Noticia', 'Reportaje', 'Infografía', 'Biografía'], c: 3, e: 'Biografía.' },
      { id: 'g5-3', t: 'mc', h: 'estructura', q: '¿Qué texto incluye entrevistas a especialistas, testimonios y subtítulos para profundizar un tema?', o: ['Noticia', 'Reportaje', 'Infografía', 'Biografía'], c: 1, e: 'Reportaje.' },
      { id: 'g5-4', t: 'mc', h: 'estructura', q: '¿Qué texto organiza la información según la pirámide invertida?', o: ['Noticia', 'Reportaje', 'Infografía', 'Biografía'], c: 0, e: 'Noticia.' },
      { id: 'g5-5', t: 'mc', h: 'estructura', q: '¿Qué texto es discontinuo y combina íconos, cifras y textos breves?', o: ['Noticia', 'Reportaje', 'Infografía', 'Biografía'], c: 2, e: 'Infografía.' },
      { id: 'g5-6', t: 'vf', h: 'estructura', q: 'La noticia debe incluir la opinión personal del periodista.', c: false, e: 'La noticia es objetiva; las opiniones solo aparecen como citas de otras personas.' },
      { id: 'g5-7', t: 'vf', h: 'estructura', q: 'Un reportaje puede tratar un tema que no ocurrió recientemente.', c: true, e: 'El reportaje profundiza en temas de interés, no necesariamente actuales.' },
      { id: 'g5-8', t: 'vf', h: 'estructura', q: 'Una autobiografía se escribe en primera persona.', c: true, e: 'La escribe la misma persona: “yo nací…”.' },
      { id: 'g5-9', t: 'vf', h: 'estructura', q: 'Las infografías siempre se deben leer de arriba hacia abajo, como un cuento.', c: false, e: 'Su lectura no es lineal: puedes recorrer los bloques en distinto orden.' },
      { id: 'g5-10', t: 'mc', h: 'estructura', q: 'Noticia, reportaje, infografía y biografía tienen en común que son:', o: ['Textos literarios.', 'Textos informativos (no literarios) que tratan sobre hechos o personas reales.', 'Textos poéticos.', 'Textos argumentativos.'], c: 1, e: 'La síntesis del libro los ubica como textos informativos que relatan hechos reales.' },
    ],
  },
];

export const juegoPorId = (id) => JUEGOS.find((j) => j.id === id);
