export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const BASE_PATH = '/WebJuanCarlosPinto';

export const biography: TimelineEvent[] = [
  {
    year: '1906',
    title: 'Nacimiento',
    description: 'Nació el 18 de Septiembre en Santiago del Estero. Hijo de Carlos Pinto Gallo y Enriqueta Villar Palacio. Desde muy niño entabló una natural relación con las manifestaciones plástica realizando algunos perfiles en arcilla.',
    image: BASE_PATH + '/images/biografia/p_suvida_01.jpg'
  },
  {
    year: '1913-1916',
    title: 'Primeros dibujos',
    description: 'A la edad de siete años dibujó un hombre de espaldas frente a un árbol y un chorro saliendo hacia el costado; esto le valió el reto de su madre y las risas de su padre. Todo material que estuviera a su alcance sería hermosamente transformado, tal el caso de la cotidiana miga de pan.'
  },
  {
    year: '1916',
    title: 'Primer maestro',
    description: 'A los diez años uno de sus abuelos lo llevó a las clases de un pintor español allí en su provincia, pero esta relación duró muy poco, a los tres meses el profesor fallecía y Juan Carlos nunca más volvió a asistir a escuela de plástica alguna.'
  },
  {
    year: '1916-1924',
    title: 'Jujuy',
    description: 'Por razones familiares se radicó en Jujuy en casa de unos tíos y allí completó sus estudios primarios y secundarios.'
  },
  {
    year: '1924',
    title: 'Abogacía',
    description: 'A los 18 años comenzó la carrera de Abogacía en Buenos Aires para satisfacer las expectativas de sus mayores.'
  },
  {
    year: '1926',
    title: 'Dibujante',
    description: 'Se desempeñaba como dibujante en la Dirección de Arquitectura de la Nación.'
  },
  {
    year: '1930',
    title: 'Autodidacta',
    description: 'Tuvo la inquietud de ingresar a la Academia Provincial de Bellas Artes, por entonces dirigida por Francisco Vidal, quien lo empujó con la mejor voluntad a confiar en su capacidad creadora y en su esfuerzo personal. Finalmente iniciaría su camino sin la enseñanza académica; fue un artista autodidacta.'
  },
  {
    year: '1950',
    title: 'Fundación docente',
    description: 'Su fuerte convicción docente, y una inquebrantable necesidad por brindar lo conquistado lo ubicaron como socio fundador de la Escuela Superior de Artes de la Universidad Nacional de Córdoba.'
  },
  {
    year: '1951-1962',
    title: 'Docencia',
    description: 'Se desempeñó durante 12 años como titular de la cátedra de Dibujo y grabado, mientras ocupaba ya el cargo de docente en las asignaturas de dibujo en la Escuela Normal Superior Agustín Garzón Agulla.'
  },
  {
    year: '1993',
    title: 'Fallecimiento',
    description: 'Murió el 20 de Julio en la ciudad de Córdoba a los 87 años.'
  }
];

export const quotes = [
  "El dibujo es para mí como una aventura fascinante y ésta me suele sorprenderme",
  "Trato de expresarme con el máximo de economía de medios y lo más espontáneamente que puedo",
  "Pintar me fascina porque puedo enfatizar con el color las intenciones del dibujo"
];