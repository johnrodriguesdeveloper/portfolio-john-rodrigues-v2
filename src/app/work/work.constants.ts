import type { Project } from "./types";

export const ALL_PROJECTS: Project[] = [
  {
    id: "portfolio-next",
    title: "Portfolio Pessoal",
    description:
      "Meu portfolio pessoal desenvolvido com Next.js, apresentando meus projetos e habilidades de forma moderna e responsiva.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    categories: ["react", "next", "css"],
    href: "#",
  },
  {
    id: "landing-html-css",
    title: "Landing Page",
    description:
      "Landing page responsiva criada com HTML e CSS puro, focada em performance e acessibilidade.",
    technologies: ["HTML", "CSS"],
    categories: ["html", "css"],
    href: "#",
  },
  {
    id: "api-node",
    title: "API de Tarefas",
    description:
      "API REST completa para gerenciamento de tarefas com autenticação JWT e banco de dados.",
    technologies: ["Node.js", "Express", "JWT"],
    categories: ["node"],
    href: "#",
  },
  {
    id: "dashboard-react",
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados com gráficos e métricas em tempo real.",
    technologies: ["React", "Vite", "Tailwind"],
    categories: ["react", "css"],
    href: "#",
  },
  {
    id: "blog-next",
    title: "Blog com Next.js",
    description:
      "Blog moderno com sistema de posts em MDX, otimizado para SEO e performance.",
    technologies: ["Next.js", "MDX", "Tailwind"],
    categories: ["next", "react", "css"],
    href: "#",
  },
  {
    id: "clon-youtube-html",
    title: "Clone do YouTube (estático)",
    description:
      "Interface estática do YouTube recriada com HTML e CSS, demonstrando habilidades de layout.",
    technologies: ["HTML", "CSS"],
    categories: ["html", "css"],
    href: "#",
  },
];

export const FILTERS: {
  label: string;
  value: "todos" | "html" | "css" | "node" | "react" | "next";
}[] = [
  { label: "Todos", value: "todos" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "Node", value: "node" },
  { label: "React", value: "react" },
  { label: "Next", value: "next" },
];
