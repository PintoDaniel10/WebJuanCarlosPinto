export interface Artwork {
  id: string;
  title: string;
  image: string;
  year?: string;
  technique?: string;
  dimensions?: string;
}

export const artworks: Artwork[] = [
  { id: 'intringulis', title: 'Intringulis', image: '/images/obras/intringulis (web).jpg' },
  { id: 'suburbio-cba', title: 'Suburbio de Córdoba', image: '/images/obras/suburbio de cba (web).jpg' },
  { id: 'viejo-matero', title: 'Viejo Matero', image: '/images/obras/viejo matero (web).jpg' },
  { id: 'verano', title: 'Verano', image: '/images/obras/verano (web).jpg' },
  { id: 'jinete', title: 'Jinete', image: '/images/obras/jinete (web).jpg' },
  { id: 'la-aldeana', title: 'La Aldeana', image: '/images/obras/la aldeana (web).jpg' },
  { id: 'la-ecuyere', title: 'La Ecuyere', image: '/images/obras/la ecuyere (web).jpg' },
  { id: 'merienda', title: 'Merienda', image: '/images/obras/merienda (web).jpg' },
  { id: 'otra-vez-delsi', title: 'Otra vez Delsi', image: '/images/obras/otra vez Delsi (web).jpg' },
  { id: 'mujeres-agua', title: 'Mujeres en el Agua', image: '/images/obras/mujeres en el agua (web).jpg' },
  { id: 'danza', title: 'Danza', image: '/images/obras/danza (web).jpg' },
  { id: 'banistas', title: 'Bañistas', image: '/images/obras/banistas-web.jpg' },
  { id: 'bolilla7', title: 'Bolilla 7', image: '/images/obras/bolilla7 (web).jpg' },
  { id: 'caballero-corte', title: 'Caballero de la Corte', image: '/images/obras/caballero de la corte (web).jpg' },
  { id: 'descanso', title: 'Descanso', image: '/images/obras/descanso (web).jpg' },
  { id: 'dama-sofisticada', title: 'Dama Sofisticada', image: '/images/obras/dama sofisticada (web).jpg' },
  { id: 'delsi', title: 'Delsi', image: '/images/obras/delsi (web).jpg' },
  { id: 'mujer-sombrero', title: 'Mujer con Sombrero', image: '/images/obras/mujer con sombrero (web).jpg' },
  { id: 'la-flaca', title: 'La Flaca', image: '/images/obras/la flaca (web).jpg' },
  { id: 'una-mujer-sombrero', title: 'Una Mujer con Sombrero', image: '/images/obras/una mujer con sombrero (web).jpg' },
  { id: 'en-soledad', title: 'En Soledad', image: '/images/obras/en soledad (web).jpg' },
  { id: 'panuelo-cabeza', title: 'Pañuelo en la Cabeza', image: '/images/obras/panuelo-cabeza-web.jpg' },
  { id: 'el-apostol', title: 'El Apóstol', image: '/images/obras/el apostol (web).jpg' },
  { id: 'pensando', title: 'Pensando', image: '/images/obras/pensando (web).jpg' },
  { id: 'perfil', title: 'Perfil', image: '/images/obras/perfil (web).jpg' },
];