export interface Artwork {
  id: string;
  title: string;
  image: string;
  year?: string;
  technique?: string;
  dimensions?: string;
}

const BASE_PATH = '/WebJuanCarlosPinto';

export const artworks: Artwork[] = [
  { id: 'intringulis', title: 'Intringulis', image: BASE_PATH + '/images/obras/intringulis (web).jpg' },
  { id: 'suburbio-cba', title: 'Suburbio de Córdoba', image: BASE_PATH + '/images/obras/suburbio de cba (web).jpg' },
  { id: 'viejo-matero', title: 'Viejo Matero', image: BASE_PATH + '/images/obras/viejo matero (web).jpg' },
  { id: 'verano', title: 'Verano', image: BASE_PATH + '/images/obras/verano (web).jpg' },
  { id: 'jinete', title: 'Jinete', image: BASE_PATH + '/images/obras/jinete (web).jpg' },
  { id: 'la-aldeana', title: 'La Aldeana', image: BASE_PATH + '/images/obras/la aldeana (web).jpg' },
  { id: 'la-ecuyere', title: 'La Ecuyere', image: BASE_PATH + '/images/obras/la ecuyere (web).jpg' },
  { id: 'merienda', title: 'Merienda', image: BASE_PATH + '/images/obras/merienda (web).jpg' },
  { id: 'otra-vez-delsi', title: 'Otra vez Delsi', image: BASE_PATH + '/images/obras/otra vez Delsi (web).jpg' },
  { id: 'mujeres-agua', title: 'Mujeres en el Agua', image: BASE_PATH + '/images/obras/mujeres en el agua (web).jpg' },
  { id: 'danza', title: 'Danza', image: BASE_PATH + '/images/obras/danza (web).jpg' },
  { id: 'banistas', title: 'Bañistas', image: BASE_PATH + '/images/obras/banistas-web.jpg' },
  { id: 'bolilla7', title: 'Bolilla 7', image: BASE_PATH + '/images/obras/bolilla7 (web).jpg' },
  { id: 'caballero-corte', title: 'Caballero de la Corte', image: BASE_PATH + '/images/obras/caballero de la corte (web).jpg' },
  { id: 'descanso', title: 'Descanso', image: BASE_PATH + '/images/obras/descanso (web).jpg' },
  { id: 'dama-sofisticada', title: 'Dama Sofisticada', image: BASE_PATH + '/images/obras/dama sofisticada (web).jpg' },
  { id: 'delsi', title: 'Delsi', image: BASE_PATH + '/images/obras/delsi (web).jpg' },
  { id: 'mujer-sombrero', title: 'Mujer con Sombrero', image: BASE_PATH + '/images/obras/mujer con sombrero (web).jpg' },
  { id: 'la-flaca', title: 'La Flaca', image: BASE_PATH + '/images/obras/la flaca (web).jpg' },
  { id: 'una-mujer-sombrero', title: 'Una Mujer con Sombrero', image: BASE_PATH + '/images/obras/una mujer con sombrero (web).jpg' },
  { id: 'en-soledad', title: 'En Soledad', image: BASE_PATH + '/images/obras/en soledad (web).jpg' },
  { id: 'panuelo-cabeza', title: 'Pañuelo en la Cabeza', image: BASE_PATH + '/images/obras/panuelo-cabeza-web.jpg' },
  { id: 'el-apostol', title: 'El Apóstol', image: BASE_PATH + '/images/obras/el apostol (web).jpg' },
  { id: 'pensando', title: 'Pensando', image: BASE_PATH + '/images/obras/pensando (web).jpg' },
  { id: 'perfil', title: 'Perfil', image: BASE_PATH + '/images/obras/perfil (web).jpg' },
];