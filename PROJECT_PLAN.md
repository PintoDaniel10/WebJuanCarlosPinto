# Plan de Implementación: Web Juan Carlos Pinto

## Estado: ✅ COMPLETADO

## Tech Stack
- **Astro** - Framework principal
- **React** - Para componentes interactivos
- **Three.js** - Galería 3D tipo galería física
- **Tailwind CSS** - Estilos

---

## Estilo Visual: Retromoderno / Años 60

### Paleta de Colores
```
Primarios:
- Marrón/Terracota: #98624B (marrOn)
- Mostaza: #80804F (mostaza)
- Azul profundo: #5f86a2 (azul-profundo)

Años 60 (retro):
- Crema pared: #E8DCC8 (retro-crema)
- Madera piso: #8B7355 (retro-madera)
- Caoba marcos: #6B4423 (retro-caoba)
- Dorado accents: #B8860B (retro-dorado)
- Naranja cálido: #FFB347 (retro-naranja)
- Terrecota: #D4A574 (retro-terracota)
- Verde óxido: #5D6B4F (retro-verde)
```

### Tipografía
- Títulos: Playfair Display (serif)
- Lectura: Inter (sans)
- UI Retro: Courier New (monospace)

---

## Estructura de Páginas

| Página | Ruta | Contenido |
|--------|------|-----------|
| Home | `/` | Autorretrato + frase + navegación |
| Vida | `/vida` | Timeline interactivo (1906-1993) + fotos |
| Obras | `/obras` | Galería 3D (25 obras) + Grid clásico |
| Poesías | `/poesias` | Poemas (diseño editorial) |
| Contacto | `/contacto` | Formulario + info |

---

## Contenido Migrado

| Recurso | Origen | Destino | Estado |
|---------|--------|---------|--------|
| Autorretrato | `home_files/autoretrato.gif` | `public/images/generales/` | ✅ |
| Logo | `home_files/Your_Heading.gif` | `public/images/generales/` | ✅ |
| 25 obras | `imagenes/*.jpg` | `public/images/obras/` | ✅ |
| Fotos biografía | `imagenes/p_suvida_*.jpg` | `public/images/biografia/` | ✅ |
| Poemas | `poesias.htm` | `src/data/poems.ts` | ✅ |
| Biografía | `suvida.htm` | `src/data/biography.ts` | ✅ |
| Citas | `susobras.htm` | `src/data/biography.ts` | ✅ |

---

## Galería 3D - Características

### Implementación Técnica
- **Framework**: React Three Fiber + Drei
- **Obras**: 25 pinturas distribuidas en 3 paredes
- **Distribución**:
  - Pared frontal (z=-8): 9 obras (3x3)
  - Pared izquierda (x=-10): 8 obras (2x4)
  - Pared derecha (x=10): 8 obras (2x4)
- **Miniaturas**: useTexture para cargar imágenes reales
- **Interacción**: Hover muestra título, click abre modal

### Diseño Estilo Años 60
- **Paredes**: Color crema cálido (#E8DCC8)
- **Piso**: Madera oscura (#8B7355)
- **Marcos**: Caoba (#6B4423) con borde dorado (#B8860B)
- **Iluminación**: Cálida naranja (#FFB347) tipo bombilla vintage
- **Zócalos**: Molduras de madera en base de paredes
- **Molduras**: Decoración en techo
- **UI**: Estilo retro con Courier New

### Navegación
- Arrastrar = Girar vista
- Scroll = Zoom
- Click en obra = Ver imagen completa
- Click fuera = Cerrar modal

---

## Archivos del Proyecto

```
WebJuanCarlosPintos/
├── src/
│   ├── components/
│   │   ├── Navigation.astro      # Navbar responsiva
│   │   ├── Footer.astro          # Pie de página
│   │   ├── Gallery3D.tsx        # Galería 3D (Three.js)
│   │   └── ArtworkGrid.tsx      # Grid 2D alternativas
│   ├── layouts/
│   │   └── Layout.astro         # Layout base
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── vida.astro           # Biografía (timeline)
│   │   ├── obras.astro          # Galería 3D + Grid
│   │   ├── poesias.astro        # Poemas
│   │   └── contacto.astro       # Formulario
│   └── data/
│       ├── artworks.ts          # 25 obras
│       ├── biography.ts        # Biografía + citas
│       └── poems.ts            # Poemas
├── public/images/
│   ├── obras/                  # 25 pinturas
│   ├── biografia/              # 2 fotos históricas
│   └── generales/             # Autorretrato + logo
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Para Ejecutar

```bash
cd WebJuanCarlosPintos
npm run dev
```

Servidor: **http://localhost:4321**

---

## Notas Técnicas

### Dependencias
- astro@6.x
- @astrojs/react
- @astrojs/tailwind
- three@latest
- @react-three/fiber
- @react-three/drei
- tailwindcss@3

### Build
```bash
npm run build    # Genera ./dist
npm run preview  # Previsualizar build
```

---

## Historial de Cambios

### v1.0 - Initial Release
- Setup Astro + React + Tailwind
- 5 páginas implementadas
- Galería 3D básica (18 obras)
- Grid 2D alternativo

### v1.2 - Corrección Galería 3D ✅ COMPLETADO
- ✅ Carga de miniaturas: useTexture → Drei Image component
- ✅ 25 obras verificadas y distribuidas (9 frontal + 8 izq + 8 der)
- ✅ Mejores cuadros: marco caoba + imagen real + borde dorado
- ✅ Hover muestra título, click abre modal con obra completa
- ✅ Iluminación cálida vintage + spots individuales por obra
- ✅ Distribución: 25/25 obras en 3 paredes

### v1.3 - Mejoras UI ✅ COMPLETADO
- ✅ Botón scroll-to-top en todas las páginas
- ✅ Animación en modal del grid (fade-in + scale-in + fade-in-up)
- ✅ Componente ScrollToTop.astro reutilizable
- ✅ Estilos de animación en Layout.astro

### v1.4 - Migración Tailwind v3 → v4 ✅ COMPLETADO
- ✅ Desinstalado tailwindcss@3 y @astrojs/tailwind@5
- ✅ Instalado tailwindcss@latest + @tailwindcss/vite
- ✅ Nuevo archivo src/styles/global.css con @theme
- ✅ Configuración migrada a CSS-first (no más tailwind.config.mjs)
- ✅ Astro.config.mjs actualizado con plugin Vite

### v2.0 - Rediseño Profesional "Galería Blanca Minimalista" ✅ COMPLETADO
- ✅ Paleta de colores profesional unificada (#FAFAF8, #A67B5B, #2D2A26)
- ✅ Tipografía: Playfair Display + Outfit + Space Mono
- ✅ Navegación responsive con menú hamburger mobile
- ✅ Grid de obras responsivo (4/3/2 columnas)
- ✅ Hover effects mejorados en todas las obras
- ✅ Page layout actualizado en todas las páginas
- ✅ Animaciones y transiciones suaves
- ✅ Footer actualizado con nuevos estilos