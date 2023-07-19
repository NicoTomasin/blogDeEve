export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "pink";
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "General",
    slug: "general",
    color: "pink",
  },
  {
    title: "Politica",
    slug: "politica",
    color: "orange",
  },
  {
    title: "Internacional",
    slug: "internacional",
    color: "green",
  },
  {
    title: "Tecnologia",
    slug: "tecnologia",
    color: "blue",
  },
  {
    title: "Turismo",
    slug: "turismo",
    color: "green",
  },
];
