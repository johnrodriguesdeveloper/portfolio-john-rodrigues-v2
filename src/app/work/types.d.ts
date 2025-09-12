export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: ("html" | "css" | "node" | "react" | "next")[];
  imageUrl?: string;
  href?: string;
};
