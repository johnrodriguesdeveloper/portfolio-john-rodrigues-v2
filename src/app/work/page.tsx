"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FilterButton } from "@/components/FilterButton";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "./types";
import { capitalize } from "@/helpers/capitalize";
import { Loader2 } from "lucide-react";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Project[]>("/api/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar projetos:", err);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const allCategories = projects.flatMap((p) => p.categories);
    const unique = Array.from(new Set(allCategories));
    return ["todos", ...unique];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "todos") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  if (loading)
    return (
      <div className="flex items-center justify-center py-60 ">
        <Loader2 className="h-20 w-20 animate-spin text-primary" />
      </div>
    );

  return (
    <div className="space-y-8 container mx-auto py-8 px-2 sm:px-6 flex-1">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Projetos
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Filtre por tecnologia e explore alguns projetos.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-nowrap gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              filter={{ label: capitalize(cat), value: cat }}
              isActive={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered
            .slice()
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          /
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
