# aula-viva

Software de educación: material interactivo para estudiar las **Pruebas de Síntesis de 6º Básico** (2º semestre 2026).

La página de inicio es un menú de materias. Cada materia tiene su propia sección para aprender, practicar, jugar y hacer ensayos.

| Materia | Prueba | Estado |
|---|---|---|
| Lenguaje y Comunicación | vie 20/11 | ✅ Disponible |
| Matemática | mar 24/11 | 🚧 Próximamente |
| Historia, Geografía y Cs. Sociales | jue 26/11 | 🚧 Próximamente |
| Ciencias Naturales | lun 30/11 | 🚧 Próximamente |

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/index.html (un solo archivo, se abre con doble clic)
```

Cada push a `main` publica la app en GitHub Pages (`.github/workflows/deploy.yml`).

## Estructura

```
src/
├── main.jsx            punto de entrada
├── App.jsx             enrutador por hash: #/ → menú, #/<materia>/... → materia
├── Menu.jsx            menú de materias
├── materias.js         catálogo (nombre, fecha, temas, disponible)
├── styles/             estilos compartidos (base, layout, menú)
└── materias/
    └── lenguaje/       app de Lenguaje (componentes, datos, progreso, estilos)
```

## Agregar una materia

1. Crear `src/materias/<id>/` con un componente raíz que reciba `ruta` (la ruta sin el id de la materia) y use enlaces `#/<id>/...`.
2. Registrarlo en el objeto `MATERIAS` de `src/App.jsx`.
3. Marcarla como `disponible: true` en `src/materias.js`.
