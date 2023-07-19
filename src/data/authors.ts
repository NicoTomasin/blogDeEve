export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Evelyn Quinteros Rios",
    slug: "eve",
    image: "./src/assets/authors/eve.webp",
    bio: "Técnica Universitaria en Periodismo | Estudiante avanzada de Lic. en Comunicación Social | Redactora Web | Marketing Digital | Community Manager",
  },
];
