export interface Poem {
  id: string;
  title: string;
  content: string;
}

export const poems: Poem[] = [
  {
    id: 'yo-te-miro',
    title: 'Yo te miro con aire natural',
    content: `Yo te miro con aire natural
como si nada.

Como si nada pudiera sorprenderme
como si todo fuera igual;

como si las albricias de la madrugada
no anunciaran tu nombre

Como si los pájaros de mediodía
no cantaran tu nombre alado
y los silencios de la noche
no besaran tu nombre enamorado.

Te miro simplemente
como si nada;
como si todo fuera igual,
como si todo fuera el modo
con que te miro,
así, con aire natural.`
  }
];