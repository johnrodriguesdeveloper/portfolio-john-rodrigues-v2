"use client";

import { useMemo, useState } from "react";
import { FilterButton } from "@/components/FilterButton";
import { ProjectCard } from "@/components/ProjectCard";
import { ALL_PROJECTS, FILTERS } from "./work.constants";

//TODO responsividade Work e Ajuste de tela com menos info

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
