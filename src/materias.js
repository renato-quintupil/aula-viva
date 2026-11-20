// Catálogo de materias que muestra el menú principal.
// Para habilitar una materia nueva: crear su carpeta en src/materias/<id>/,
// registrar su componente en App.jsx y cambiar `disponible` a true.

export const CURSO = '6º Básico · 2º semestre 2026';

export const MATERIAS = [
  {
    id: 'lenguaje',
    nombre: 'Lenguaje y Comunicación',
    corto: 'Lenguaje',
    icono: '📚',
    color: '#4f46e5',
    fecha: '2026-11-20',
    fechaTexto: 'viernes 20 de noviembre',
    temas: ['Noticia', 'Reportaje', 'Infografía', 'Biografía'],
    disponible: true,
  },
  {
    id: 'matematica',
    nombre: 'Matemática',
    corto: 'Matemática',
    icono: '🔢',
    color: '#0891b2',
    fecha: '2026-11-24',
    fechaTexto: 'martes 24 de noviembre',
    temas: ['Razones y porcentajes', 'Patrones y álgebra', 'Decimales', 'Área y volumen', 'Datos y probabilidades', '🎮 Juegos de tablas y cálculo'],
    disponible: true,
  },
  {
    id: 'historia',
    nombre: 'Historia, Geografía y Cs. Sociales',
    corto: 'Historia',
    icono: '🏛️',
    color: '#b45309',
    fecha: '2026-11-26',
    fechaTexto: 'jueves 26 de noviembre',
    temas: ['Cuestión social y movimiento obrero', 'Democratización y Estado benefactor', 'Golpe de Estado y dictadura', 'Regiones de Chile', 'Zonas y ambientes naturales', '🎮 Juegos de historia y geografía'],
    disponible: true,
  },
  {
    id: 'ciencias',
    nombre: 'Ciencias Naturales',
    corto: 'Ciencias',
    icono: '🔬',
    color: '#059669',
    fecha: '2026-11-30',
    fechaTexto: 'lunes 30 de noviembre',
    temas: ['La materia que nos rodea', 'La Tierra y los seres vivos'],
    disponible: false,
  },
];
