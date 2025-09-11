"use client";

import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: ("html" | "css" | "node" | "react" | "next")[];
  imageUrl?: string;
  href?: string;
};

const ALL_PROJECTS: Project[] = [
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

const FILTERS: {
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

function CodeIconPlaceholder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-12 w-12 text-muted-foreground"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.88 3.549a9 9 0 11-9.76 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.75 9h16.5M3.75 15h16.5"
      />
    </svg>
  );
}

function FilterButton({
  filter,
  isActive,
  onClick,
}: {
  filter: (typeof FILTERS)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-4 rounded-sm text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-accent text-accent-foreground shadow-md"
          : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
      }`}
    >
      {filter.label}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href ?? "#"}
      className="group block overflow-hidden rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:border-accent/20"
    >
      <div className="space-y-2">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border ">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-12 w-12 object-cover rounded"
                loading="lazy"
              />
            ) : (
              <CodeIconPlaceholder />
            )}
          </div>
          <div className="min-w-0 flex-1 ">
            <h3 className="text-lg font-semibold leading-tight  transition-colors mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/10 text-foreground border border-accent/20 inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<
    "todos" | "html" | "css" | "node" | "react" | "next"
  >("todos");

  const filtered = useMemo(() => {
    if (activeFilter === "todos") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Trabalhos
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Filtre por tecnologia e explore alguns projetos.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-nowrap gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
          {FILTERS.map((filter) => (
            <FilterButton
              key={filter.value}
              filter={filter}
              isActive={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-muted-foreground py-16 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-lg font-medium">Nenhum projeto encontrado</p>
            <p className="text-sm">Tente selecionar uma categoria diferente</p>
          </div>
        )}
      </div>
    </div>
  );
}
