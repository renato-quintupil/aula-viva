// Síntesis basada en el Texto del Estudiante Ciencias Naturales 6º Básico
// (libro: Unidad 4 «La materia que nos rodea», pp. 156–191 · Unidad 2 «La Tierra y los seres vivos», pp. 48–105)
// y en el temario de la Prueba de Síntesis del 2º semestre 2026.

export const PRUEBA = {
  asignatura: 'Ciencias Naturales',
  curso: '6º Básico',
  fecha: '2026-11-30',
  fechaTexto: 'lunes 30 de noviembre',
};

export const ORDEN_UNIDADES = ['particulas', 'cambios', 'capas', 'suelo', 'fotosintesis', 'redes'];

// Como en el temario de la prueba.
export const BLOQUES = [
  { id: 'u3', nombre: 'Unidad 3 · La materia que nos rodea', unidades: ['particulas', 'cambios'] },
  { id: 'u4', nombre: 'Unidad 4 · La Tierra y los seres vivos', unidades: ['capas', 'suelo', 'fotosintesis', 'redes'] },
];

export const UNIDADES = {
  particulas: {
    id: 'particulas',
    bloque: 'u3',
    nombre: 'Partículas y estados de la materia',
    icono: '🧊',
    lema: 'Sólido, líquido y gas por dentro',
    libro: 'Libro, Unidad 4, Lección 1 «La materia y sus estados»: pp. 158–165.',
    contenidos: ['Características de las partículas en estado sólido, líquido y gaseoso'],
    widget: 'particulas',
    temas: [
      {
        id: 'materia',
        titulo: '¿Qué es la materia?',
        pag: 'pp. 158–159',
        idea: 'La materia es todo aquello que tiene masa y volumen (ocupa un lugar en el espacio). Todo lo que nos rodea es materia, incluso el aire.',
        claves: [
          'Masa: cantidad de materia que tiene un cuerpo. Volumen: espacio que ocupa.',
          'Los filósofos griegos Leucipo y Demócrito propusieron que la materia estaba formada por partículas diminutas e invisibles.',
          'Empédocles, en cambio, creía que todo estaba formado por cuatro elementos: fuego, aire, tierra y agua.',
        ],
      },
      {
        id: 'modelo',
        titulo: 'El modelo corpuscular de la materia',
        pag: 'p. 159',
        idea: 'El modelo corpuscular (o de partículas) explica cómo está formada la materia con cuatro postulados.',
        tabla: [
          ['Postulado 1', 'La materia está formada por pequeñísimas partículas.'],
          ['Postulado 2', 'Las partículas están en constante movimiento.'],
          ['Postulado 3', 'Las partículas están unidas por fuerzas de atracción.'],
          ['Postulado 4', 'Entre las partículas hay espacios vacíos (sin otro tipo de materia).'],
        ],
        claves: ['Este modelo permite explicar las diferencias entre sólidos, líquidos y gases.'],
      },
      {
        id: 'estados',
        titulo: 'Las partículas en cada estado',
        pag: 'pp. 160–163',
        idea: 'Lo que cambia de un estado a otro es la fuerza de atracción entre las partículas, la distancia entre ellas y cuánto se mueven.',
        tabla: [
          ['Sólido', 'Fuerza de atracción intensa. Partículas muy juntas y ordenadas, que solo vibran en su lugar. Forma y volumen propios. Ej.: hielo, piedra.'],
          ['Líquido', 'Fuerza de atracción más débil. Más espacio entre partículas, que se deslizan unas sobre otras. Volumen propio, pero toma la forma del recipiente. Ej.: agua, aceite.'],
          ['Gas', 'Fuerza de atracción casi nula. Partículas muy separadas que se mueven libremente y rápido. No tiene forma ni volumen propios: ocupa todo el espacio. Se puede comprimir. Ej.: aire, vapor.'],
        ],
        claves: [
          'Del sólido al gas: la fuerza de atracción disminuye, la distancia aumenta y el movimiento aumenta.',
          'Al calentar un gas, sus partículas se mueven más y se separan: el gas se expande (así se eleva un globo aerostático).',
          'Al enfriar un gas, sus partículas se mueven menos y se acercan: ocupa menos volumen.',
          'Los líquidos y gases fluyen (son fluidos); los sólidos no.',
        ],
        dato: 'Existe un cuarto estado, el plasma: partículas con carga eléctrica que se mueven con muchísima energía. Está en las estrellas, como el Sol.',
      },
    ],
    errores: [
      'Decir que en el sólido las partículas están quietas: siempre vibran.',
      'Creer que el líquido no tiene volumen propio: lo tiene; lo que no tiene es forma propia.',
      'Pensar que entre las partículas hay aire: hay espacio vacío.',
    ],
    flash: [
      { p: '¿Qué es la materia?', r: 'Todo lo que tiene masa y volumen.' },
      { p: '¿En qué estado las partículas solo vibran en su lugar?', r: 'En el estado sólido.' },
      { p: '¿En qué estado la fuerza de atracción es casi nula?', r: 'En el estado gaseoso.' },
      { p: '¿Qué estado toma la forma del recipiente pero mantiene su volumen?', r: 'El líquido.' },
      { p: '¿Qué hay entre las partículas?', r: 'Espacios vacíos.' },
      { p: '¿Qué le pasa a un gas al calentarlo?', r: 'Sus partículas se mueven más rápido y se separan: se expande.' },
    ],
  },

  cambios: {
    id: 'cambios',
    bloque: 'u3',
    nombre: 'Cambios de estado (y el agua)',
    icono: '💧',
    lema: 'Absorber o liberar calor',
    libro: 'Libro, Unidad 4, Lección 2 «Los cambios de estado de la materia»: pp. 168–189.',
    contenidos: ['Cambios de estado de la materia', 'Cambios de estado en el agua'],
    widget: 'curva',
    temas: [
      {
        id: 'que-son',
        titulo: '¿Qué es un cambio de estado?',
        pag: 'p. 170',
        idea: 'Un cambio de estado es un cambio físico: la materia cambia su aspecto, pero sigue siendo la misma sustancia (el hielo, el agua y el vapor son todos agua).',
        claves: [
          'Ocurren al absorber o liberar energía, generalmente en forma de calor.',
          'Cambios progresivos: se producen al absorber calor (fusión, vaporización, sublimación).',
          'Cambios regresivos: se producen al liberar calor (solidificación, condensación, sublimación inversa).',
          'Calor: energía que pasa de un cuerpo más caliente a uno más frío.',
        ],
      },
      {
        id: 'progresivos',
        titulo: 'Cambios progresivos (absorben calor)',
        pag: 'pp. 172–173',
        idea: 'Al absorber calor, las partículas se mueven más rápido (aumenta su energía cinética), se separan y la fuerza de atracción disminuye.',
        tabla: [
          ['Fusión', 'Sólido → líquido. Ej.: un helado o un chocolate que se derrite al sol.'],
          ['Vaporización', 'Líquido → gas. Puede ser por evaporación (solo las partículas de la superficie, a cualquier temperatura: la ropa que se seca) o por ebullición (todo el líquido, a una temperatura fija: el agua que hierve).'],
          ['Sublimación', 'Sólido → gas, sin pasar por líquido. Ej.: naftalina, yodo, hielo seco.'],
        ],
        claves: ['Punto de ebullición: temperatura a la que hierve un líquido; es distinta para cada sustancia.'],
      },
      {
        id: 'regresivos',
        titulo: 'Cambios regresivos (liberan calor)',
        pag: 'pp. 180–183',
        idea: 'Al liberar calor, las partículas se mueven más lento (disminuye su energía cinética), se acercan y la fuerza de atracción aumenta.',
        tabla: [
          ['Solidificación', 'Líquido → sólido. Ej.: el agua que se congela en el congelador.'],
          ['Condensación', 'Gas → líquido. Ej.: el espejo que se empaña después de una ducha caliente, el vaso frío que “suda”, la formación de nubes y lluvia.'],
          ['Sublimación inversa (deposición)', 'Gas → sólido, sin pasar por líquido. Ej.: la escarcha, cuando el vapor del aire se congela sobre superficies bajo 0 °C.'],
        ],
        claves: ['Recuerda: progresivo = gana calor; regresivo = pierde calor.'],
      },
      {
        id: 'agua',
        titulo: 'Cambios de estado en el agua: curvas de calentamiento y enfriamiento',
        pag: 'pp. 176–177 y 184–185',
        idea: 'El agua se funde (y se congela) a 0 °C y hierve (y se condensa) a 100 °C. Mientras cambia de estado, su temperatura se mantiene constante.',
        tabla: [
          ['A–B', 'El hielo absorbe calor y su temperatura sube hasta 0 °C.'],
          ['B–C', 'A 0 °C (punto de fusión) el hielo se funde. La temperatura NO cambia: hay sólido y líquido a la vez.'],
          ['C–D', 'El agua líquida sigue absorbiendo calor y sube de 0 °C a 100 °C.'],
          ['D–E', 'A 100 °C (punto de ebullición) el agua hierve. La temperatura NO cambia: hay líquido y vapor.'],
          ['E–F', 'Solo hay vapor, que sigue calentándose.'],
        ],
        claves: [
          'En la curva de enfriamiento ocurre lo contrario: el vapor se condensa a 100 °C y el agua se solidifica a 0 °C.',
          'Los tramos planos (horizontales) del gráfico son los cambios de estado.',
          'Bajo 0 °C el agua está sólida; entre 0 y 100 °C, líquida; sobre 100 °C, gaseosa (a nivel del mar).',
          'En el ciclo del agua: evaporación (océanos), condensación (nubes), precipitación (lluvia o nieve), solidificación (hielo y glaciares) y fusión (deshielo).',
          'El derretimiento de los hielos de Groenlandia y la Antártica por el calentamiento global es una fusión que afecta a los ecosistemas.',
        ],
      },
    ],
    errores: [
      'Confundir evaporación (solo la superficie, a cualquier temperatura) con ebullición (todo el líquido, a 100 °C en el agua).',
      'Creer que la temperatura sigue subiendo mientras el hielo se derrite: se mantiene en 0 °C.',
      'Confundir condensación (gas → líquido) con solidificación (líquido → sólido).',
      'Decir que un cambio de estado cambia la sustancia: el hielo sigue siendo agua.',
    ],
    flash: [
      { p: '¿Cómo se llama el paso de sólido a líquido?', r: 'Fusión.' },
      { p: '¿Cómo se llama el paso de gas a líquido?', r: 'Condensación.' },
      { p: '¿Qué cambio ocurre cuando se forma la escarcha?', r: 'Sublimación inversa (gas → sólido).' },
      { p: '¿A qué temperatura hierve el agua?', r: 'A 100 °C (al nivel del mar).' },
      { p: '¿A qué temperatura se congela o funde el agua?', r: 'A 0 °C.' },
      { p: '¿Qué tienen en común los cambios progresivos?', r: 'Ocurren al absorber calor.' },
      { p: '¿Por qué se empaña el espejo del baño?', r: 'El vapor de agua se condensa al tocar el espejo frío.' },
    ],
  },

  capas: {
    id: 'capas',
    bloque: 'u4',
    nombre: 'Capas de la Tierra',
    icono: '🌍',
    lema: 'Geosfera, hidrosfera y atmósfera',
    libro: 'Libro, Unidad 2, Lección 1 «Las capas de la Tierra»: pp. 50–67.',
    contenidos: ['Capas de la Tierra: geosfera (litósfera), hidrosfera y atmósfera'],
    widget: 'atmosfera',
    temas: [
      {
        id: 'capas-general',
        titulo: 'Las capas de la Tierra',
        pag: 'pp. 50–51',
        idea: 'Por dentro, la Tierra tiene corteza, manto y núcleo. En la superficie hay capas que interactúan entre sí y con los seres vivos.',
        tabla: [
          ['Geosfera / Litósfera', 'Capa sólida y rocosa: la corteza y la parte superior del manto. Está dividida en placas tectónicas.'],
          ['Hidrosfera', 'Toda el agua del planeta, en sus tres estados: océanos, ríos, lagos, aguas subterráneas, hielos y glaciares.'],
          ['Atmósfera', 'Capa de gases que rodea la Tierra.'],
          ['Biosfera', 'La parte del planeta donde hay vida: todos los seres vivos.'],
        ],
        claves: [
          'Un huevo duro sirve como modelo: cáscara = corteza, clara = manto, yema = núcleo.',
          'Para el pueblo mapuche la Tierra es la ñuke mapu (madre Tierra); para el pueblo aymara, la Pachamama.',
        ],
      },
      {
        id: 'atmosfera',
        titulo: 'La atmósfera',
        pag: 'pp. 54–57',
        idea: 'Es la capa gaseosa que rodea el planeta. Está formada principalmente por nitrógeno (78 %) y oxígeno (21 %).',
        tabla: [
          ['Tropósfera', 'Hasta unos 12 km. Tiene cerca del 80 % de los gases. Aquí vivimos y ocurren los fenómenos del clima (lluvia, viento, nubes).'],
          ['Estratósfera', 'De 12 a 50 km. Tiene la capa de ozono, que filtra la radiación ultravioleta del Sol.'],
          ['Mesósfera', 'De 50 a 80 km. Es la capa más fría.'],
          ['Termósfera', 'De 80 a 600 km. Permite el viaje de las ondas de radio.'],
          ['Exósfera', 'Desde 600 km. La capa más externa.'],
        ],
        claves: [
          'Importancia: contiene gases vitales (oxígeno y dióxido de carbono), nos protege de la radiación ultravioleta y mantiene el ciclo del agua.',
          'Contaminación: la causa principal es quemar combustibles fósiles (carbón, petróleo y gas) en vehículos, industrias y electricidad.',
          'Consecuencias: smog, lluvia ácida, debilitamiento de la capa de ozono (por los CFC) y aumento del efecto invernadero.',
          'El efecto invernadero es natural y mantiene la temperatura de la Tierra. Al aumentar los gases invernadero (como el CO₂) se produce el calentamiento global.',
        ],
      },
      {
        id: 'hidrosfera',
        titulo: 'La hidrosfera',
        pag: 'pp. 60–63',
        idea: 'Son todas las masas de agua de la Tierra. No está repartida de forma pareja.',
        claves: [
          'El 97 % del agua es salada (océanos) y solo el 3 % es dulce.',
          'La mayor parte del agua dulce está congelada en casquetes polares y glaciares (69 %); le sigue el agua subterránea (30 %).',
          'Importancia: es el hábitat de muchos seres vivos, influye en el clima y la usamos para beber, cultivar, en la industria y la pesca.',
          'Contaminación: aguas servidas de los hogares, desechos tóxicos y agua caliente de las industrias, y pesticidas y abonos de la agricultura.',
          'Los plásticos que llegan al mar forman “islas de basura” y dañan a los animales marinos.',
        ],
      },
      {
        id: 'litosfera',
        titulo: 'La geosfera (litósfera)',
        pag: 'pp. 64–67',
        idea: 'La litósfera (lito = piedra) es la capa más externa y rígida de la Tierra: la corteza y la parte superior del manto.',
        claves: [
          'Allí se desarrollan el paisaje, las plantas, gran parte de los animales y las actividades humanas.',
          'Su capa más delgada y superficial es el suelo.',
          'Nos entrega minerales, metales (cobre, aluminio) y combustibles fósiles, y sostiene la agricultura y la ganadería.',
          'Contaminación: exceso de pesticidas y fertilizantes, basura y vertederos, desechos industriales y metales pesados de la minería.',
        ],
      },
    ],
    errores: [
      'Pensar que la atmósfera es mayoritariamente oxígeno: el gas más abundante es el nitrógeno (78 %).',
      'Confundir efecto invernadero (natural y necesario) con calentamiento global (su aumento por la actividad humana).',
      'Creer que hay mucha agua dulce disponible: es solo el 3 % y la mayoría está congelada.',
      'La capa de ozono está en la estratósfera, no en la tropósfera.',
    ],
    flash: [
      { p: '¿Qué es la hidrosfera?', r: 'Toda el agua del planeta, en sus tres estados.' },
      { p: '¿Qué forma la litósfera?', r: 'La corteza terrestre y la parte superior del manto.' },
      { p: '¿Cuál es el gas más abundante de la atmósfera?', r: 'El nitrógeno (78 %).' },
      { p: '¿En qué capa de la atmósfera ocurren la lluvia y el viento?', r: 'En la tropósfera.' },
      { p: '¿Qué capa filtra la radiación ultravioleta?', r: 'La capa de ozono, en la estratósfera.' },
      { p: '¿Qué porcentaje del agua es dulce?', r: 'Solo el 3 %.' },
      { p: '¿Qué es la biosfera?', r: 'La parte del planeta donde hay vida.' },
    ],
  },

  suelo: {
    id: 'suelo',
    bloque: 'u4',
    nombre: 'Formación del suelo y erosión',
    icono: '🪨',
    lema: 'Un proceso de miles de años',
    libro: 'Libro, Unidad 2, Lección 1: pp. 68–73.',
    contenidos: ['Formación de suelo', 'Erosión'],
    widget: 'suelo',
    temas: [
      {
        id: 'que-es-suelo',
        titulo: '¿Qué es el suelo?',
        pag: 'p. 68',
        idea: 'El suelo es la capa más delgada y superficial de la litósfera, capaz de sostener plantas y otros organismos.',
        tabla: [
          ['Materia inorgánica', 'Fragmentos de roca y minerales.'],
          ['Materia orgánica', 'Seres vivos y sus restos en descomposición (humus).'],
          ['Aire', 'Gases como oxígeno y dióxido de carbono, en los espacios entre las partículas.'],
          ['Agua', 'Con sustancias disueltas, también en los espacios entre las partículas.'],
        ],
        claves: [
          'En el suelo viven bacterias, hongos y pequeños animales (lombrices, insectos).',
          'Un suelo con más agua, aire y materia orgánica es más fértil y mejor para cultivar.',
        ],
      },
      {
        id: 'formacion',
        titulo: 'Formación del suelo',
        pag: 'p. 69',
        idea: 'El suelo se forma muy lentamente, en cientos o miles de años.',
        tabla: [
          ['1', 'Las rocas se rompen en pedazos por acción de líquenes (hongos), la lluvia, el hielo y los cambios de temperatura.'],
          ['2', 'Crecen pequeñas plantas que, al morir, se descomponen y acumulan materia orgánica.'],
          ['3', 'Con el tiempo, el suelo adquiere estructura y se forman capas u horizontes.'],
          ['4', 'Se forma la capa superior, rica y fértil, donde crecen las plantas.'],
        ],
        claves: ['Como tarda tanto en formarse, el suelo es un recurso que debemos cuidar.'],
      },
      {
        id: 'erosion',
        titulo: 'La erosión',
        pag: 'pp. 70–73',
        idea: 'La erosión es el desgaste o pérdida de material del suelo por causas naturales (viento, lluvia, ríos) o por actividades humanas. Cambia el paisaje y hace que el suelo pierda fertilidad.',
        tabla: [
          ['Pluvial', 'La lluvia: las gotas golpean el suelo y arrastran partículas.'],
          ['Fluvial', 'Los ríos y corrientes desgastan el suelo y arrastran materiales hacia el mar. Ej.: el Gran Cañón (río Colorado).'],
          ['Eólica', 'El viento desgasta las rocas y transporta partículas. Ej.: el Árbol de Piedra en Bolivia.'],
          ['Antrópica', 'Causada por el ser humano: sobrepastoreo, deforestación, incendios forestales, construcción.'],
        ],
        claves: [
          'Las actividades humanas han acelerado la erosión entre 10 y 40 veces.',
          'Consecuencias: el suelo absorbe menos agua (más inundaciones), pierde porosidad y nutrientes, se pierde la capa fértil y cambia el paisaje.',
          'Cómo evitarla: plantar árboles (reforestar), cubrir el suelo con vegetación, no sobrepastorear y prevenir incendios.',
        ],
      },
    ],
    errores: [
      'Confundir erosión pluvial (lluvia) con fluvial (ríos).',
      'Creer que el suelo se forma rápido: tarda cientos o miles de años.',
      'Pensar que la erosión solo es natural: también la causa el ser humano (antrópica).',
    ],
    flash: [
      { p: '¿Qué es la erosión?', r: 'El desgaste o pérdida de material del suelo por agentes naturales o humanos.' },
      { p: '¿Qué agente produce la erosión eólica?', r: 'El viento.' },
      { p: '¿Qué agente produce la erosión fluvial?', r: 'Los ríos.' },
      { p: '¿Qué es la erosión antrópica?', r: 'La causada por actividades humanas (deforestación, incendios, sobrepastoreo).' },
      { p: '¿De qué está compuesto el suelo?', r: 'Minerales, materia orgánica, aire y agua.' },
      { p: '¿Quiénes ayudan a romper las rocas al inicio?', r: 'Los líquenes, la lluvia, el hielo y los cambios de temperatura.' },
    ],
  },

  fotosintesis: {
    id: 'fotosintesis',
    bloque: 'u4',
    nombre: 'Fotosíntesis',
    icono: '🌱',
    lema: 'Fabricar alimento con luz',
    libro: 'Libro, Unidad 2, Lección 2 «Los seres vivos y sus interacciones»: pp. 80–89.',
    contenidos: ['Fotosíntesis'],
    widget: 'fotosintesis',
    temas: [
      {
        id: 'nutricion',
        titulo: 'Autótrofos y heterótrofos',
        pag: 'pp. 80–81',
        idea: 'Todos los seres vivos necesitan materia y energía, que obtienen de los nutrientes.',
        tabla: [
          ['Autótrofos', 'Fabrican sus propios nutrientes. Ej.: plantas, algas, musgos, cianobacterias.'],
          ['Heterótrofos', 'Obtienen nutrientes al alimentarse de otros seres vivos. Ej.: animales, hongos, algunas bacterias.'],
        ],
        claves: ['Fotosíntesis = producir (síntesis) con la luz (foto).'],
      },
      {
        id: 'proceso',
        titulo: '¿Cómo ocurre la fotosíntesis?',
        pag: 'pp. 82–85',
        idea: 'Las plantas usan luz, agua y dióxido de carbono para fabricar glucosa (su alimento) y liberan oxígeno.',
        tabla: [
          ['Necesita (reactantes)', 'Luz solar + agua (H₂O) + dióxido de carbono (CO₂).'],
          ['Produce (productos)', 'Glucosa + oxígeno (O₂).'],
        ],
        claves: [
          'Ocurre en los cloroplastos de las células de las hojas y el tallo. Tienen clorofila, un pigmento verde que captura la luz.',
          'El agua y las sales minerales entran por las raíces y suben por el tallo.',
          'El CO₂ entra y el O₂ sale por los estomas, pequeñas aberturas en la cara inferior de las hojas.',
          'La glucosa se usa como energía y materia prima, y se guarda como almidón en raíces y hojas.',
          'La energía de la luz se transforma en energía química guardada en la glucosa.',
        ],
        dato: 'En 1624, Van Helmont plantó un sauce de 2 kg en 90 kg de tierra y solo lo regó. Cinco años después el sauce pesaba muchísimo más, pero la tierra solo había perdido 5 g: la planta no “come” tierra.',
      },
      {
        id: 'importancia',
        titulo: 'Importancia de la fotosíntesis',
        pag: 'pp. 88–89',
        idea: 'La fotosíntesis produce el oxígeno que respiramos y el alimento del que dependen todos los seres vivos.',
        claves: [
          'En 1772, Joseph Priestley descubrió que las plantas producen oxígeno: un ratón encerrado solo moría, pero con una planta sobrevivía.',
          'Fotosíntesis y respiración se complementan: la planta libera O₂ y usa CO₂; los animales (y también las plantas) respiran O₂ y liberan CO₂.',
          'Las plantas también respiran, de día y de noche.',
          'Los productores son la base de todas las cadenas alimentarias.',
          'Ayudan a disminuir el CO₂ del aire, un gas de efecto invernadero.',
        ],
      },
    ],
    errores: [
      'Creer que las plantas sacan su alimento del suelo: lo fabrican con luz, agua y CO₂.',
      'Decir que las plantas no respiran: sí respiran, todo el tiempo.',
      'Confundir reactantes (luz, agua, CO₂) con productos (glucosa y oxígeno).',
    ],
    flash: [
      { p: '¿Qué necesita una planta para hacer fotosíntesis?', r: 'Luz, agua y dióxido de carbono.' },
      { p: '¿Qué produce la fotosíntesis?', r: 'Glucosa y oxígeno.' },
      { p: '¿Qué es la clorofila?', r: 'El pigmento verde de los cloroplastos que captura la luz.' },
      { p: '¿Qué son los estomas?', r: 'Aberturas en las hojas por donde entra el CO₂ y sale el O₂.' },
      { p: '¿Qué descubrió Priestley?', r: 'Que las plantas producen oxígeno.' },
      { p: '¿Cómo guarda la planta la glucosa?', r: 'Como almidón.' },
    ],
  },

  redes: {
    id: 'redes',
    bloque: 'u4',
    nombre: 'Cadenas y redes tróficas',
    icono: '🦊',
    lema: '¿Quién se come a quién?',
    libro: 'Libro, Unidad 2, Lección 2: pp. 90–101.',
    contenidos: ['Redes tróficas'],
    widget: 'red',
    temas: [
      {
        id: 'roles',
        titulo: 'Productores, consumidores y descomponedores',
        pag: 'pp. 90–91',
        idea: 'Los seres vivos de un ecosistema se relacionan a través de la alimentación.',
        tabla: [
          ['Productores', 'Autótrofos que fabrican su alimento con fotosíntesis: plantas, algas, fitoplancton. Ej.: la festuca (un pasto).'],
          ['Consumidores primarios', 'Herbívoros: comen productores. Ej.: guanaco, conejo, ratón, pudú.'],
          ['Consumidores secundarios', 'Comen herbívoros. Ej.: culebra, zorro.'],
          ['Consumidores terciarios', 'Comen a otros carnívoros. Ej.: puma, búho, orca.'],
          ['Descomponedores', 'Hongos y bacterias que degradan restos de seres vivos y devuelven nutrientes al suelo para las plantas.'],
        ],
        claves: [
          'Según lo que comen, los consumidores son herbívoros (plantas), carnívoros (animales) u omnívoros (ambos).',
          'Nivel trófico: el lugar que ocupa un organismo en la cadena (productor = 1er nivel, consumidor primario = 2º nivel…).',
        ],
      },
      {
        id: 'cadenas',
        titulo: 'Cadena alimentaria y red trófica',
        pag: 'pp. 92–96',
        idea: 'Una cadena alimentaria muestra quién se come a quién en una línea. Una red (o trama) trófica une varias cadenas, porque los animales comen más de un tipo de alimento.',
        claves: [
          'Las flechas apuntan hacia quien come: festuca → guanaco → puma. Indican el flujo de materia y energía.',
          'Toda cadena comienza con un productor.',
          'En una red, un mismo animal puede ocupar más de un nivel trófico (el búho come ratones y también culebras).',
          'La energía que viene del Sol pasa de un nivel al siguiente, pero cada vez queda menos disponible.',
          'Ejemplo del sur de Chile (mar): algas → langostino → merluza → lobo marino → orca.',
        ],
      },
      {
        id: 'humanos',
        titulo: '¿Cómo afecta el ser humano a las redes tróficas?',
        pag: 'pp. 98–101',
        idea: 'Si desaparece o aumenta un organismo, se afecta toda la red: los que se alimentan de él y los que le sirven de alimento.',
        claves: [
          'Especies exóticas o introducidas: no tienen depredadores naturales y pueden volverse plaga. Ej.: castores en Tierra del Fuego (talan bosques nativos), trucha arcoíris en el lago Chungará.',
          'Contaminación: en 2004 desechos industriales en el río Cruces (Valdivia) mataron el luchecillo, alimento del cisne de cuello negro, y murieron cientos de cisnes.',
          'Otras amenazas: sobreexplotación (pesca excesiva), destrucción del hábitat e incendios.',
          'Si aumentan los herbívoros porque desaparece su depredador, pueden acabar con los productores.',
        ],
      },
    ],
    errores: [
      'Dibujar las flechas al revés: apuntan desde el alimento hacia quien lo come.',
      'Olvidar a los descomponedores: reciclan la materia de todos los niveles.',
      'Pensar que una cadena puede empezar con un animal: siempre empieza con un productor.',
    ],
    flash: [
      { p: '¿Con qué organismo empieza toda cadena alimentaria?', r: 'Con un productor (planta o alga).' },
      { p: '¿Qué es un consumidor primario?', r: 'Un herbívoro, que se alimenta de productores.' },
      { p: '¿Qué hacen los descomponedores?', r: 'Degradan restos de seres vivos y devuelven nutrientes al suelo.' },
      { p: '¿Qué diferencia hay entre cadena y red trófica?', r: 'La red une varias cadenas que se cruzan.' },
      { p: '¿Hacia dónde apuntan las flechas?', r: 'Hacia el organismo que come (sentido del flujo de energía).' },
      { p: '¿Por qué una especie introducida puede ser plaga?', r: 'Porque no tiene depredadores naturales.' },
    ],
  },
};

// Cadenas alimentarias para los juegos y el esquema (de productor a consumidor final).
export const CADENAS = [
  ['Festuca', 'Guanaco', 'Puma'],
  ['Pasto', 'Ratón', 'Culebra', 'Búho'],
  ['Algas', 'Langostino', 'Merluza', 'Lobo marino', 'Orca'],
  ['Fitoplancton', 'Krill', 'Pingüino', 'Foca leopardo'],
  ['Pasto', 'Conejo', 'Zorro'],
  ['Luchecillo', 'Cisne de cuello negro'],
  ['Hojas', 'Oruga', 'Pájaro', 'Halcón'],
  ['Algas', 'Calamar', 'Pingüino', 'Orca'],
];
